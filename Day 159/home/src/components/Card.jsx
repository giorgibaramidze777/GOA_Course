import { useState } from "react"

const Card = (props) => {

    return (
        <>
            <div>
                <img src={props.img} className='w-[250px] h-[250px]' />
                <div className="flex flex-row items-center rounded-full outline-solid outline-[#A09593] outline-[1px] w-[150px] p-[5px]">
                    <img src={props.cart} />
                    <button onClick={props.click}>Add to Cart</button>
                </div>
                <p className='text-[12px] text-[#C1B1AE]'>{props.cat}</p>
                <h5>{props.text}</h5>
                <h5 className="text-[#D17662]">${props.price}</h5>
            </div>
        </>
    )
}

export default Card