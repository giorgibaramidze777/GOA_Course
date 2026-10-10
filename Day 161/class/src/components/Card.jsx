import { useState } from "react"

const Card = (props) => {

    return (
        <>
            <div>
                    <img src={props.img} className='w-[250px] h-[250px] rounded-[7px]'/>
                    <div className="flex flex-row items-center rounded-full outline-solid outline-[#A09593] outline-[1px] w-[150px] p-[5px] relative top-[-10px] cursor-pointer right-[-50px] bg-white">
                        <img src={props.cart} className="relative right-[-15px]"/>
                        <button onClick={props.click} className="cursor-pointer"><span className="relative right-[-17px]">Add to Cart</span></button>
                    </div>
                    <p className='text-[12px] text-[#C1B1AE] relative top-[3px]'>{props.cat}</p>
                    <h5 className="relative top-[3px]">{props.text}</h5>
                    <h5 className="text-[#D17662] relative top-[3px]">${props.price}</h5>

            </div>
        </>
    )
}

export default Card