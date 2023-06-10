import ProjectCard from "./ProjectCard.js"

import hr from "../assets/curve-hr.svg"
import travlr from "../assets/projects/TravlrPage.png"
import personalpage from "../assets/projects/react-node.png"
import security from "../assets/projects/security.png"



// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white flex flex-col items-center">
            <h1 className="text-2xl font-bold ">Projects</h1>
            <p className="font-light text-gray-400">My Personal Projects, including Dashboard Visualizations, Back-end Programs, Front-end UIs and other proofs of concept.</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5">
            Change the number of columns below to place cards as desired*/}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-5">
                <ProjectCard name="Travlr Website" img={travlr} issued="Fullstack development using the MEAN stack." date="2023" url="https://github.com/williamneilwest/cs465-fullstack"/>
                <ProjectCard name="Personal Website" img={personalpage} issued="The very page you are reading this on was created using React to provide a responsive, single-page application that is programmatically created for scalability and brevity." date="2023" url="https://github.com/williamneilwest/willwest-reactapp"/>
                <ProjectCard name="Software Security" img={security} issued="In this project, I utilized various security implementation methods to secure my code and systems against unexpected failures and attacks." date="2023" url="https://github.com/williamneilwest/cs405-Security"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
