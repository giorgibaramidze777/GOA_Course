import { useState } from 'react'

const Cardd = (props) => {

    const [count, setCount] = useState(0)

    function remove(title) {
        localStorage.setItem('Cart', JSON.stringify(JSON.parse(localStorage.getItem('Cart')).filter((item, index) => {
            return item.text !== title
        })))
        setCount(count+1)
        window.location.reload()
    }
    
    return (
        <>
            <div className="bg-[#d3b2aa] p-[10px]">
                <img src={props.img} className="w-[250px] h-[250px]" />
                <p className='text-[12px] font-bold text-[#C1B1AE]'>{props.cat}</p>
                <h5 className="font-bold">{props.text}</h5>
                <h5 className="text-[#D17662] font-bold">{props.price}</h5>
                <div className="flex items-center justify-center">
                    <button className="bg-[#c5a099] w-[150px] outline-[1px] rounded-md cursor-pointer" onClick={() => remove(props.text)}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default Cardd