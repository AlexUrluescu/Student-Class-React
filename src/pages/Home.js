
import "../assets/Home.css"

// import { useState } from "react"

const btn = document.getElementById("btn")

const Home = () => {

    // const [btn, setBtn] = useState(false)

    const handleClick = (e) => {
        const container = document.getElementById("container");

        console.log("You just cliked the button");
        console.log(e.target.textContent);

        if(e.target.textContent === "Red"){
            e.target.textContent = "Green";
            // container.style.backgroundColor = "red";
            container.classList.add("clicked")
            
        }

        else if(e.target.textContent === "Green"){
            e.target.textContent = "Red";
            // container.style.backgroundColor = "green";
            container.classList.remove("clicked")

        }

        // container.classList.toggle("clicked")
    }

    return(
        <div>
            <h2>Home</h2>
            <div id="container" className="container-test">Container Test</div>

            <button id="btn" onClick={handleClick}>Red</button>
        </div>
    )
}

export default Home;