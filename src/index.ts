import "./styles/main.scss"

// Create heading node
const heading = document.createElement('h1')
const headingText: string = "Hi Webpack!"
heading.textContent = headingText

// Append heading node to the DOM
const app = document.querySelector('#root')!
app.append(heading)