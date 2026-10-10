const Card = (props) => {
    return (
        <>
            <div className='w-[400px] h-[400px] flex items-center justify-center flex-col translate-y-[50px] shadow-xl/30'>
              <img src={props.img} className='w-[240px] h-[260px]' />
              <h1>{props.pc}</h1>
              <p>{props.pt}</p>
            </div>
        </>
    )
}

export default Card