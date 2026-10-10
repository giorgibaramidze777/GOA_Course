import { useState } from "react"

const Cart = (props) => {
    return (
        <>
            <div>
                <h1 className="text-[red] text-[64px] absolute top-[0]">Your Cart</h1>
                <div className="flex items-center justify-center flex-col">
                    <img src={props.img} />
                    <h4 className="text-[#e6ceca]">Your added items will appear here</h4>
                </div>
                <div className="bg-[#AD8A83] p-[10px]">
                    <img src={props.imgg} className="w-[250px] h-[250px]" />
                    <p className='text-[12px] font-bold text-[#C1B1AE]'>Waffle</p>
                    <h5 className="font-bold">Waffle with Berries</h5>
                    <h5 className="text-[#D17662] font-bold">$6.50</h5>
                    <div className="flex items-center justify-center">
                        <button className="bg-[#c5a099] w-[150px] outline-[1px] rounded-md cursor-pointer">Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart