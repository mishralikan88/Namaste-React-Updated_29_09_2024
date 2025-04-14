// creating h1 react element

const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello world from React")

const root = ReactDOM.createRoot(document.getElementById('root')) // creating a root

root.render(heading) // appending the h1 react element inside the root using render()

console.log(heading) // heading is a react element