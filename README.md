# What is ResizeObserver ?

Simple definition : its document.onresize for elements
this `ResizeObserver` lets you know when an elements's size changes.
i mean `ResizeObserver` reports changes to the dimensions of an `Element's` content or border box.

## Three important things before we start

- `ResizeObserver.observe()` :Initiates the observing of a specified `Element`(start reacting to the sizes changes)
- `ResizeObserver.unobserve()`:opposite of above definition.Ends the observing of a specified Element.that means end of reacting to the sizes changes
- `ResizeObserver.disconnect()`:Unobserves all observed Element targets of a particular observer.
