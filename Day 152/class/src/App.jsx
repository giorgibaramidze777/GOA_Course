import { useState } from 'react'
import cart from './assets/shoppingCart.png'
import good from './assets/good.png'
import great from './assets/great.png'
import mega from './assets/mega.png'
import ultra from './assets/ultra.png'

function App() {
  const [price, setPrice] = useState(0)
  const [shop, setShop] = useState([])
  const [show, setShow] = useState(false)
  const [translate, setTranslate] = useState('translateX(250px)')
  const lst = [{ title: 'Good', price: 999, id: 1, img: './src/assets/good.png' }, { title: 'Great', price: 1999, id: 0, img: './src/assets/great.png' }, { title: 'Mega', price: 2999, id: 2, img: './src/assets/mega.png' }, { title: 'Ultra', price: 9999, id: 3, img: './src/assets/ultra.png' }]

  function addToCard(item) {
    setShop(prev => [...prev, item])
    setPrice(prev => prev + item.price)
  }

  function remove(index, price) {
    shop.splice(index, 1)
    setShop(shop)
    setPrice(prev => prev - price)
  }
  
  return (
    <>
      <div className='flex flex-row justify-space-evenly max-[766px]:'>
        <h1 className='text-[30px]'>PC Shop</h1>
        <div className='translate-x-[200px] flex flex-row gap-[40px]'>
          <img src={cart} className='w-[40px] h-[40px]' onClick={() => {
            if (!show) {
              setTranslate('translateX(0px)')
              setShow(!show)
            } else {
              setTranslate('translateX(250px)')
              setShow(!show)
            }
          }} />
        </div>

      </div>
      <hr />
      <div className='flex flex-row flex-wrap gap-[100px] '>
        {
          lst.map((item, index) => {
            return (
              <div key={index} className='flex flex-col justify-center items-center shadow-xl/30'>
                <img src={item.img} alt="great PC" className='w-[250px] h-[250px]' />
                <h1 className='text-center'>{item.title}</h1>
                <h1 className='text-center'>${item.price}</h1>
                <button className='bg-[#913D3D] w-[150px] h-[40px] rounded-[7px]' onClick={() => addToCard(item)}>Add To Cart</button>
              </div>
            )
          })
        }
        <div id='sCart' className='h-screen bg-[white] shadow-xl/30 fixed right-[0] z-10 overflow-scroll duration-[0.5s]' style={{ transform: translate }}>
          <h1>Shopping Cart</h1>
          <p>Amount: <span>{shop.length}</span></p>
          <p>Total: $<span>{price}</span></p>
          <hr />
          <div id='shop'>
            {
              shop.map(
                (item, index) =>
                  <div>
                    <div className='flex flex-row items-center justify-center'>
                      <img src={item.img} className='w-[150px] h-[180px]' />
                      <div className='flex flex-col'>
                        <p>Name: {item.title}</p>
                        <p>Price: ${item.price}</p>
                      </div>

                    </div>
                    <button className='bg-[#913D3D] w-[150px] h-[40px] rounded-[7px] text-black translate-x-[50px]' onClick={() => remove(index, item.price)}>Delete</button>
                    <hr />
                  </div>
              )
            }
          </div>
        </div>

      </div>

    </>
  )
}

export default App