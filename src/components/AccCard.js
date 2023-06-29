
export default function AccCard(props){
    return (

        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            <a href={props.href}>
                <img src={props.img} className="w-90 max-h-90 mx-auto" alt={props.name}></img>
            </a>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">{props.issued}</p>
                <p className="font-light text-gray-400">{props.desc}</p>
            </div>
        </div>


    )
}
