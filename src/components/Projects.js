import ProjectCard from "./ProjectCard.js"

import hr from "../assets/curve-hr.svg"
import travlr from "../assets/TravlrPage.png"
import personalpage from "../assets/personalpage.png"


// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">My Personal Projects, including Dashboard Visualizations, Back-end Programs, Front-end UIs and other proofs of concept.</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <ProjectCard name="Travlr Website" img={travlr} issued="Fullstack development using the MEAN stack." date="2023" />
                <ProjectCard name="Personal Website" img={personalpage} issued="The very page you are reading this on was created using React to provide a responsive, single-page application that is programmatically for scalability and brevity." date="2023" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
