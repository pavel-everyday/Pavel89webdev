---
path: "/blog/use-memo"
date: "2023-07-08"
title: "Flexible closure in React"
logo: "😎"
---

Now, I want to change your mindset about the useMemo hook. Let's look at it like the "flexible closure".

I'll show you an example to describe this.

One time ago I had a problem, in our project, we use [Antd](link) UI kit. In the UI kit, there is a Table component, in the Table component we can set a custom sorter function, to sort lines of the Table, sounds good. This custom sorter receives a `customSorter` function and calls inside of the Table component to sort the array of Table's lines, just like that: `arrayOfTableLines.sort(customSorter)`. It works the same way as the sort method in the `Array` in JS. To be clear, it means that your custom sorter calls a lot of times. This sound like normal behavior, there is a problem? You may ask me.

In my case, I have sorter logic on the backend, because we have the backend's pagination and don't have all the data on the client at the moment. This means that my `customSorter` must send a request to the backend with new sorting information, and I don't need to call it more than one time!

The problem is - I want to use the Table component from the IU kit, but I should change the inner sorting logic. How I can do this?

I this case the `useMemo` hook helps very well.

---

## The usual case

This is the usual use case.
In this case, customSorter calls multiple times with all array members:

```
import { useState } from 'react';
import { Table } from 'antd'

export const ComponentWithTable = (optionsForSelect) => {

  const [tableData, setTableData] = useState()

  const customSorter = (a, b) => {
      // the usual logic to sort values by someParam 
      return a.someParam - b.someParam 
  }

  return (
      <Table>
        ...tableData
        sorter={customSorter}
      </Table>
  )
}

```

---

## The preventing multiple calling case

How to prevent multiple calling of customSorter?
We can use the flag inside of the ```useMemo``` hook to know is the ```customSorter``` has been called yet or not.

```
import { useState, useMemo } from 'react';
import { Table } from 'antd'

export const ComponentWithTable = (optionsForSelect) => {

  const [tableData, setTableData] = useState()

  const customSorter = useMemo(() => {

    let isSorterCalled = false;

    function sorter () {
      // if sorted is not called - call the function

      if(!isSorterCalled) {
        // mark that sorter is called

        isSorterCalled = true

        // make a request
        // get new sorted data from the request
        // and set to the store in the "then" block:
          .then((newSortedData) => {
            setTableData(newSortedData)
          })

      }

      if(isSorterCalled) {
        // do nothing
      }

      // we need to return a number, because it is still a sorter function af an array
      return 0
      
    }

    return sorter
    
  },
  [tableData] // very important set the "tableData" to dependency array, to reset logic
  )

  return (
      <Table>
        ...tableData
        sorter={customSorter}
      </Table>
  )
}

```

Now in the ```customSorter``` variable we have the ```sorter``` function and tha flag - ```isSorterCalled``` that means that all calls of ```sorter``` have an access to the same ```isSorterCalled``` variable.

But than ```tableData``` will changed, the ```useMemo``` hook rememoized ```sorter``` function with initail value of the flag ```isSorterCalled``` that's mean reset the logic, and we can use sorting in the ```Table``` again.

I like to think about this as flexible closure, because we use the different values in the different renders of the component, and we can to control "reseting" the values. Off course under the hood it is usual closure and variables memoization, and no magic. 

I hope it was usefull.
