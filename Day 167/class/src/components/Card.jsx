const Card = (props) => {
    return (
        <>
           <div className="flex flex-col">
            <img src={props.img} alt="img" className="w-[70px]"/>
            <p className="font-bold">{props.text}</p>
            <p className="font-bold">{props.price}</p>
           </div>
        </>
    )
}

export default Card