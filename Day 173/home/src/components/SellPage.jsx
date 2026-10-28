import cart from '../assets/cart.png'
import menu from '../assets/menu.png'
import search from '../assets/search.png'

const SellPage = (props) => {
    return (
        <>
            <div>
                <div>
                    <div className='flex flex-row items-center justify-center'>
                        <h1 className='text-[32px] font-bold pl-[1%]'>SHOP.CO</h1>
                        <div className='inline pl-[10px] sm:hidden p-[0px]'>
                            <img src={menu} />
                        </div>
                        <div className='hidden sm:inline'>
                            <div className='p-[15px] flex flex-row'>
                                <p className='text-[#515151] p-[7px]'>Shop</p>
                                <p className='text-[#515151] p-[7px]'>On Sale</p>
                                <p className='text-[#515151] p-[7px]'>New Arivals</p>
                                <p className='text-[#515151] p-[7px]'>Brands</p>
                            </div>
                        </div>

                        <div className='flex flex-row p-[15px]'>
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Search for products...' className='outline-none' />
                        </div>
                        <img src={cart} alt="cart" />
                    </div>
                    <div className='flex flex-row'>
                        <div className='pl-[10%]'>
                            <img src={props.shirt} alt="product" className='w-[30%]' />
                            <img src={props.shirt} alt="product" className='w-[30%]' />
                            <img src={props.shirt} alt="product" className='w-[30%]' />
                        </div>

                        <div className='relative left-[-15%] top-[-10%]'>
                            <img src={props.shirt} alt="product" />
                        </div>
                        
                        <div className="">
                            <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SellPage