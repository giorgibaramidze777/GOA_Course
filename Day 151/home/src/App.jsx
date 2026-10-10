import { useState } from 'react'
import cart from './assets/shoppingCart.png'
import good from './assets/good.png'
import great from './assets/great.png'
import mega from './assets/mega.png'
import ultra from './assets/ultra.png'

function App() {
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const [shop, setShop] = useState([])
  const [show, setShow] = useState(false)
  const [translate, setTranslate] = useState('translateX(250px)')
  const lst = [{ title: 'Great', price: '1999', id: 0, img: './src/assets/great.png' }, { title: 'Good', price: '999', id: 1, img: './src/assets/good.png' }, { title: 'Mega', price: '2999', id: 2, img: './src/assets/mega.png' }, { title: 'Ultra', price: '9999', id: 3, img: './src/assets/ultra.png' }]

  function addToCard(item){
    setShop(prev => [...prev, item])
  }
  return (
    <>
      <div className='flex flex-row justify-center'>
        <h1 className='text-[30px]'>PC Shop</h1>
        <div className='translate-x-[200px] flex flex-row gap-[40px]'>
          <p>About us</p>
          <p>Contact us</p>
          <img src={cart} onClick={() => {
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
      <div className='flex flex-row gap-[100px]'>
        {
          lst.map((item, index) => {
            return (
              <div key={index} className='flex flex-col justify-center items-center'>
                <img src={item.img} alt="great PC" className='w-[250px] h-[250px]' />
                <h1 className='text-center'>{item.title}</h1>
                <button className='bg-[#913D3D] w-[150px] h-[40px] rounded-[7px]'>Add To Cart</button>
              </div>
            )
          })
        }
        <div id='sCart' className='w-[250px] h-screen bg-[white] shadow-xl/30 fixed right-[0] z-10 overflow-scroll duration-[0.5s]' style={{ transform: translate }}>
          <h1>Shopping Cart</h1>
          <p>Amount: <span>0</span></p>
          <p>Total: $<span>0</span></p>
          <hr />
          <div id='shop'>

          </div>
        </div>

      </div>

    </>
  )
}

export default App