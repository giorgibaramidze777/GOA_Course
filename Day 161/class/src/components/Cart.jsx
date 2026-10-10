import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Card from './Cardd'

const Cart = (props) => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('Cart')) || [])
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (data.length > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [data])


    console.log(data)
    return (
        <>
            <div>
                <h1 className="text-[red] text-[64px] absolute top-[0]">Your Cart</h1>
                <div className="flex items-center justify-center flex-col h-[100vh]">
                    <div className="flex flex-wrap">
                        {
                            !show ? <div className="flex items-center justify-center flex-col">
                                <img src={props.img} />
                                <h4 className="text-[#e6ceca]">Your added items will appear here</h4>
                            </div> :
                                data.map((item, index) => {
                                    return <div className="overscroll-auto p-[5px]"><Card key={index} img={item.img} cat={item.cat} text={item.text} price={item.price} /></div>
                                })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart