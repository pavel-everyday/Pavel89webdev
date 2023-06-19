---
path: "/blog/use-memo"
date: "2023-06-19"
title: "Flexible closure"
logo: "👌"
---


Now, I want to change your mind set about the useMemo hook. Lets look on it like the "flexible closure".

I'll show you an example to describe this.

One time ago I had a problem, in our project we use [Antd](link) UI kit. n the UI kit there is a Table component, in the Table component we can set a custom sorter function, to sort lines of the Table, sounds good. This custom sorter calls inside of Table component to sort array of Table's lines,  just like that: ```arrayOfTableLines.sort(customSorter)```. To be clear, it's mean that your custom sorter call a lot of times. This sound like normal behavior, there is the problem? You may ask me.

In my case I have sorter logic on the backend, because we have backend's pagination and don't have all the data on the client in a moment. This means that my customSorter is sent request to the backend with new sorting information, and I don't need to call it more than only one time!

The problem is - I want to use Table component from IU kit, but I should change inner sorting logic. How I can do this?

I that case the useMemo hook help very well