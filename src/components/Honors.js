import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Accomplishments</h1>
            <p className="font-light text-gray-400">Here are some of my Accomplishments</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="The National Society of Leadership & Success" issued="NSLS, INC" desc="Through the National Society of Leadership and Success, I have been able to accomplished significant personal and professional growth. Through engaging workshops, inspiring guest speakers, and networking opportunities, I have honed my leadership skills, expanded my knowledge base, and built a strong network of like-minded individuals. This transformative institution has empowered me to step into leadership roles, develop my potential, and make a meaningful impact in my community." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
