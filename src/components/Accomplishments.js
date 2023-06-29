import AccCard from "./AccCard.js"
import Aplus from "../assets/Aplus.png"
import nsls from "../assets/nsls.png"
import hr from "../assets/curve-hr.svg"
import pl from "../assets/pl.png"

export default function Accomplishments(){
    return (
        <div id="honors" className="mt-4 text-white flex flex-col items-center">
            <h1 className="text-2xl font-bold items-center">Accomplishments</h1>
            <p className="font-light text-gray-400">A few things I'm proud to present!</p>
            <div className="flex flex-col md:flex-row mt-4 gap-5 justify-center">
                <AccCard img={Aplus} name="CompTIA A+ Certified" issued="CompTIA Official Global" desc="Industry-recommended certification. To verify my certification, enter my credential code: 250H2SMQ3JF41DW8 on the verification website, which can be reached by clicking the image of my certificate above." href={"https://www.certmetrics.com/comptia/public/verification.aspx/"} />
                <AccCard img={nsls} name="The National Society of Leadership & Success" issued="NSLS, INC" desc="Through the National Society of Leadership and Success, I have been able to accomplished significant personal and professional growth. Through engaging workshops, inspiring guest speakers, and networking opportunities, I have honed my leadership skills, expanded my knowledge base, and built a strong network of like-minded individuals. This transformative institution has empowered me to step into leadership roles, develop my potential, and make a meaningful impact in my community." />
                <AccCard img={pl} name="President's List" issued="SNHU" desc="In recognition for outstanding academic performance, I earned a place on the President's List  for maintaining a high GPA and demonstrating a commitment to excellence in studies I was granted this distinction twice while at SNHU." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
