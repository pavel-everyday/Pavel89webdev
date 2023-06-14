---
path: "/blog/how-to-hard-reset-state"
date: "2023-04-17"
title: "How to reset a inner state of a component"
logo: "🔃"
---

# The problem

I had a problem with a select. The problem was that the select was dependent from another input, and options in this select must changes some times. But if the value was selected it was not reset when new options recived. Reason of the problem is the inner state of the select is not changed when options have changed 

It should not be a problem if this select was in my project, instead of this, the select was from npm library. I don't remember name of this npm library.

The problem is - how to reset inner state of a component.

# The solution

React compare components between renders by their key attribute. If we will change key attrirute between render React will think that this is a diferent component - React will unmount previous component and mount new instance of component, with initail inner state of course. 

It is not the best solution, because we have one or more additional renders. But if need reset inner state of library component I don't know another solution, if you know, please let me know about it.

This code is example of the solution:

```
import { useEffect, useState } from 'react';
import { Select } from 'third-party-library'

export const Form = (optiosForSelect) => {

  const {key, setKey} = useState(1);

  useEffect(() => {
    setKey((currentKey) => ++currentKey )
  }, [optiosForSelect])

  return (
    <form>
      <Select
        key={key}
        oprions={optiosForSelect}
      />
    </form>
  )
}

```

In this case every `optiosForSelect` changes the `key` changes too, and React unmount previous `Select` component and render the new `Select` component with new `options`.