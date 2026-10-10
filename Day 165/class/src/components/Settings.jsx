import { useState } from 'react'

function Settings() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <h1>{language === 'en' ? 'Settings' : 'პარამეტრები'}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('ka')}>ქართული</button>
    </>
  )
}

export default Settings