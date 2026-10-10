import { useContext } from 'react';

function Contact() {
  const [darkMode] = useContext(DarkModeContext)

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? 'black' : 'white',
          color: darkMode ? 'white' : 'black',
        }}>
        <h1>Contact page</h1>
      </div>
    </>
  )
}

export default Contact
