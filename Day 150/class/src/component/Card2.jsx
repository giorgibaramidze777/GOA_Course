const Card = (props) => {
    return (
        <>
             <div className='flex flex-col items-center'>
               <div className='flex flex-row'>
               <img src={props.img} className='w-[150px] h-[160px]'/>
               <div className='flex flex-col self-center'>
                 <p>{props.pc}</p>
                 <p>Price: ${props.price}</p>
               </div>
             </div>
               <button className='bg-[#913D3D] p-[10px] rounded-[5px] h-[50px] w-[200px]'>Delete</button>
             </div>
             <hr />
        </>
    )
}

export default Card