---
path: "/blog/how-to-hard-reset-state"
date: "2023-04-17"
title: "How to reset a inner state of a component"
logo: "🔃"
---

# The problem

I had a problem with a select component. The problem was that the select was dependent on another input, and options in this select must change sometimes. But if the value was selected it was not reset when new options received. 

The reason of the problem is the inner state of the select is not changed when options have changed 

It did not be a problem if the select was in my project, instead of this, the select was from the npm library "react-select"

Check the problem on Codesandbox: [here](https://codesandbox.io/s/react-select-do-not-reset-inner-state-ly82ts?file=/src/App.tsx:43-55)

The question of the problem is - how to reset inner state of a component.

# The solution

React compare components between renders by their key attribute. If we change the key attribute between renders React will think that this is a different component - React will unmount the previous component and mount a new instance of the component, with an initial inner state. 

It is not the best solution, because we have one or more additional renders. But if need to reset the inner state of the library component I don't know another solution, if you know, please let me know about it.

This code is an example of the solution:

```
import { useEffect, useState } from 'react';
import { Select } from 'third-party-library'

export const Form = (optionsForSelect) => {

  const {key, setKey} = useState(1);

  useEffect(() => {
    setKey((currentKey) => ++currentKey )
  }, [optionsForSelect])

  return (
    <form>
      <Select
        key={key}
        options={optionsForSelect}
      />
    </form>
  )
}

```

In this case, every `optionsForSelect` changes, the `key` attribute changes too, and React will unmount the previous `Select` component and render the new `Select` component with new `options`.