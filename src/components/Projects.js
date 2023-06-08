import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import adinusa from "../assets/certs/adinusa.png"


// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">My Personal Projects, including Dashboard Visualizations, Back-end Programs, Front-end UIs and other proofs of concept.</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Bootcamp Btech Academy Cloud Engineer" img={adinusa} issued="Adinusa" date="Jul 2022" />


            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
