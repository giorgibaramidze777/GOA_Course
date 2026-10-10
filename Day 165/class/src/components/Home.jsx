import { useContext } from 'react'

function Home() {
  const [darkMode] = useContext(DarkModeContext)

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : 'black',
        }}>
        <h1>Home page</h1>
      </div>
    </>

  )
}

export default Home