import { useContext } from 'react'

function About() {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : 'black',
        }}>
        <h1>About page</h1>
      </div>
    </>
  )
}

export default About
