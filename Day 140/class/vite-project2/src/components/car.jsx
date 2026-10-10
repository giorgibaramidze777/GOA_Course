const Card = (props) => {
    return (
        <>
            <div>   
                <img src={props.img}/>
                <h1 className="mb-7 text-4xl font-bold tracking-wide text-white uppercase">{props.text}</h1>
                <p className="mb-14 text-[15px] leading-relaxed font-light max-w-[220px]">{props.ptext}</p>
                <button className="w-fit rounded-full bg-[#f2f2f2] px-8 py-3 text-[15px] font-medium text-[#e28625] border-2 border-transparent hover:bg-transparent hover:text-[#f2f2f2] hover:border-[#f2f2f2] transition-colors duration-200">
                Learn More
                </button>
            </div>
        </>
    )
}

export default Card