// creating h1 react element

const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello world from React")

// creating a root

const root = ReactDOM.createRoot(document.getElementById('root'))

// appending the h1 react element inside the root using render()

root.render(heading)

console.log(heading) // heading is a react element