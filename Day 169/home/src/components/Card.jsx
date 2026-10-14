const Card = (props) => {
    return (
        <>
           <div className="flex flex-col items-center">
            <img src={props.img} alt="img" className="w-[200px]"/>
            <p className="font-bold">{props.text}</p>
            <p className="font-bold">{props.price}</p>
           </div>
        </>
    )
}

export default Card