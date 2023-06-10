import React, {useState} from 'react'

import profile from '../assets/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import faTableau from "../assets/tableauIcon.png";
import hr from '../assets/curve-hr.svg';


export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4 flex flex-col items-center mt-9'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoaded(false)} style={{width: 250}} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">William West</h1>
                    <p className="text-xl font-bold text-gray-300">Data Scientist</p>
                    <p className="text-md font-light text-gray-400 ">I am a self-motivated individual passionate about Information Technology. I have a keen interest in Computer Networking, Data Science, and Web Development. Currently, I am seeking opportunities to gain valuable experience and further enhance my skills in these fields.</p>
                </div>
                <a href='https://medium.com/@williamneilwest' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/williamneilwest' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://public.tableau.com/app/profile/william.west2219' rel="noreferrer" target="_blank">
                            <img src={faTableau} alt="Tableau Icon" className="icon" />
                        </a>
                    </li>
                    <li>
                        <a  id="skills" href='https://www.linkedin.com/in/william-west-7820a0179/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
