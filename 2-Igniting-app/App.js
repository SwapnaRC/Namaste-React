import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "div",
    {
        id:"title",
    },
    "Heading for parcel"
)
const heading2 = React.createElement(
    "div",
    {
        hello: "title"
    },
    "Heading 2"
)
const container = React.createElement(
    "h1",
    {
        id:"container",
        hello: "world"
    },
   [heading, heading2]
)
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)