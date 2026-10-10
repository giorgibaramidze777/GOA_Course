import { useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Idk1 from './component/Idk1'
import MainPage from './component/MainPage'
import AddProduct from './component/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 🎯 დავალება: მომხმარებლის ავტორიზაცია (Login Form)
      შექმენი React კომპონენტი სახელით LoginForm, რომელიც მუშაობს React Router-თან ერთად.

      📋 მოთხოვნები:
      ფორმის ველები (<input>):
        Email / Username (სავალდებულო - required)

        Password (სავალდებულო - required)

        ლოგიკა და ნავიგაცია (useNavigate):

        ფორმის გაგზავნისას (onSubmit) შეაჩერე გვერდის გადატვირთვა (e.preventDefault()).

        შეამოწმე შეყვანილი პაროლი:

  თუ პაროლი სწორია -> (მაგალითად, უდრის "123456"-ს): გადაიყვანე მომხმარებელი მთავარ გვერდზე ('/').
  
  თუ პაროლი არასწორია -> გამოიტანე გაფრთხილება (alert('არასწორი პაროლი!') ან შეცდომის ტექსტი ეკრანზე) და არ გადაიყვანო სხვა გვერდზე. */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/navigatehook" element={<Idk1 />} />
        <Route path="/products" element={<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
