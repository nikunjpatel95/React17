import React from "react"
import ReactDOM from "react-dom/client"

// Functions are called custom componenet in React
//Pascal case is needed when naming the Compnonent in React
// We can call the funtion/component, by wrapping the name in an angle 
// bracket similar to an html element

// function TemporaryName(){
//     return (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(<TemporaryName/>, document.getElementById("root"))


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// import React from "react"
// import ReactDOM from "react-dom"

/*
function CustomPage(){
    return (
        <ol>
        <li>Learning React to know how Frontend works</li>
        <li>To keep with technologies</li>
        <li>To be a better Software Engineer</li>
        </ol>
    )
}

ReactDOM.render(<CustomPage />,document.getElementById("root")) //react17
//ReactDOM.createRoot(document.getElementById("root")).render(<CustomPage/>)  //React 18

*/

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */



/*
function CustomPage(){
    return (
        <>
        <header>
            <nav>
                <img src="./react-logo.png" wiodth="40px"/>
            </nav>
        </header>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
        <li>Learning React to know how Frontend works</li>
        <li>To keep with technologies</li>
        <li>To be a better Software Engineer</li>
        </ol>
        <footer>
            © 20xx Patel development. All rights reserved.
        </footer>
    </>
    )
}



ReactDOM.render(<CustomPage />, document.getElementById("root")) //react 17
//ReactDOM.createRoot(document.getElementById("root")).render(<CustomPage />) //React 18

*/


/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"

*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/




function Header(){
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px"/>
            </nav>
        </header>
    )
}

function Footer(){
    <footer>
            © 20xx Patel development. All rights reserved.
        </footer>
}

function MainContent(){
    <div>
    <h1>Reasons I'm excited to learn React</h1>
        <ol>
        <li>Learning React to know how Frontend works</li>
        <li>To keep with technologies</li>
        <li>To be a better Software Engineer</li>
        </ol>
        </div>
}

function CustomPage(){
    return (
        <>
        <Header />
        <MainContent />
        <Footer />
        </>
    )
}



ReactDOM.render(<CustomPage />, document.getElementById("root")) //react 17
//ReactDOM.createRoot(document.getElementById("root")).render(<CustomPage />) //React 18

