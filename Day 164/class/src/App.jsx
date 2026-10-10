import { useState } from 'react'
import light from './assets/light.png'
import search from './assets/search.png'
import pfp from './assets/pfp.png'
import location from './assets/location.png'
import link from './assets/link.png'
import twitter from './assets/twitter.png'
import domain from './assets/domain.png'
 
function App() {
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isDark, setIsDark] = useState(true)
 
  const fetchUser = async () => {
    if (!username.trim()) return
 
    setLoading(true)
    setError(null)
 
    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
 
      if (!res.ok) {
        throw new Error(res.status === 404 ? 'No results' : 'Something went wrong')
      }
 
      const data = await res.json()
      setUserData(data)
    } catch (err) {
      setError(err.message)
      setUserData(null)
    } finally {
      setLoading(false)
    }
  }
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchUser()
  }
 
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  }
 
  const toggleTheme = () => setIsDark((prev) => !prev)
 
  let pageBg = isDark ? 'bg-[#141C2F]' : 'bg-[#FAFAFA]'
  let pageText = isDark ? 'text-white' : 'text-[#2B3442]'
  let cardBg = isDark ? 'bg-[#1F2A48]' : 'bg-white'
  let statsBg = isDark ? 'bg-[#141C2F]' : 'bg-[#F6F8FF]'
  let searchBarBg = isDark ? 'bg-[#1F2A48]' : 'bg-white'
  let searchBarShadow = isDark ? '' : 'shadow-md'
  let inputBg = isDark ? 'bg-transparent text-white placeholder-[#8A909A]' : 'bg-transparent text-[#2B3442] placeholder-[#8A909A]'
  let bioColor = isDark ? 'text-[#9BA0AC]' : 'text-[#697C9A]'
  let statLabelColor = isDark ? 'text-[#8A909A]' : 'text-[#697C9A]'
  let statValueColor = isDark ? 'text-[#F5F5F5]' : 'text-[#2B3442]'
  let infoTextColor = isDark ? 'text-white' : 'text-[#2B3442]'
  let iconFilter = isDark ? '' : 'invert(0.4)'
 
  return (
    <div className={`min-h-screen w-full ${pageBg} ${pageText} pb-12 transition-colors duration-300`}>
      <div className='max-w-3xl mx-auto px-4 sm:px-6'>
        <div className='flex flex-row justify-between items-center pt-8'>
          <h1 className='text-2xl sm:text-3xl font-semibold'>devFinder</h1>
          <div className='flex flex-row gap-2 cursor-pointer items-center select-none' onClick={toggleTheme}>
            <p className='text-sm tracking-widest'>{isDark ? 'LIGHT' : 'DARK'}</p>
            <img src={light} className='w-5' style={{ filter: iconFilter }} alt="Toggle theme" />
          </div>
        </div>
 
        <div className={`${searchBarBg} ${searchBarShadow} rounded-lg w-full mt-6 flex flex-row items-center gap-3 px-4 py-3 transition-colors duration-300`}>
          <div className='flex flex-row gap-3 items-center flex-1 min-w-0'>
            <img src={search} className='w-5 shrink-0' style={{ filter: iconFilter }} alt="" />
            <input type="text" placeholder='Search GitHub username...' className={`border-none outline-none w-full min-w-0 ${inputBg}`} value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyDown}/>
          </div>
          <button className='bg-[#0079FE] hover:bg-[#0063cc] w-20 sm:w-24 h-11 shrink-0 rounded-lg cursor-pointer text-white transition-colors' onClick={fetchUser} >
            {loading ? '...' : 'Search'}
          </button>
        </div>
 
        {error && <p className='mt-3 text-red-400'>{error}</p>}
 
        <div className={`${cardBg} w-full mt-5 rounded-lg p-6 sm:p-8 transition-colors duration-300`}>
          <div className='flex flex-col sm:flex-row sm:items-start gap-6'>
            <img src={userData?.avatar_url || pfp} className='w-20 h-20 sm:w-28 sm:h-28 rounded-full shrink-0' alt="Avatar" />
 
            <div className='flex-1 min-w-0'>
              <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
                <div className='min-w-0'>
                  <h2 className={`${infoTextColor} text-lg sm:text-xl font-bold truncate`}>
                    {userData?.name || userData?.login || 'The Octocat'}
                  </h2>
                  <p className='text-[#0E52A3]'>@{userData?.login || 'octocat'}</p>
                </div>
                <p className={`${bioColor} text-sm shrink-0`}>
                  {userData ? `Joined ${formatDate(userData.created_at)}` : 'Joined 25 Jan 2011'}
                </p>
              </div>
 
              <p className={`${bioColor} mt-3 tracking-wide`}>
                {userData?.bio || 'This profile has no bio'}
              </p>
 
              <div className={`${statsBg} grid grid-cols-3 gap-2 mt-5 p-4 rounded-lg text-center sm:text-left transition-colors duration-300`}>
                <div>
                  <p className={`${statLabelColor} text-xs sm:text-sm`}>Repos</p>
                  <h4 className={`${statValueColor} text-lg sm:text-2xl font-bold`}>{userData?.public_repos ?? 8}</h4>
                </div>
                <div>
                  <p className={`${statLabelColor} text-xs sm:text-sm`}>Followers</p>
                  <h4 className={`${statValueColor} text-lg sm:text-2xl font-bold`}>{userData?.followers ?? 3938}</h4>
                </div>
                <div>
                  <p className={`${statLabelColor} text-xs sm:text-sm`}>Following</p>
                  <h4 className={`${statValueColor} text-lg sm:text-2xl font-bold`}>{userData?.following ?? 9}</h4>
                </div>
              </div>
 
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5'>
                <div className='flex flex-row gap-2 items-center min-w-0'>
                  <img src={location} className='w-4 shrink-0' style={{ filter: iconFilter }} alt="" />
                  <p className={`${infoTextColor} truncate`}>{userData?.location || 'San Francisco'}</p>
                </div>
                <div className='flex flex-row gap-2 items-center min-w-0'>
                  <img src={link} className='w-4 shrink-0' style={{ filter: iconFilter }} alt="" />
                  <p className={`${infoTextColor} truncate`}>{userData?.blog || 'https://github.blog'}</p>
                </div>
                <div className='flex flex-row gap-2 items-center min-w-0'>
                  <img src={twitter} className='w-4 shrink-0' style={{ filter: iconFilter }} alt="" />
                  <p className={`${statLabelColor} truncate`}>{userData?.twitter_username || 'Not Available'}</p>
                </div>
                <div className='flex flex-row gap-2 items-center min-w-0'>
                  <img src={domain} className='w-4 shrink-0' style={{ filter: iconFilter }} alt="" />
                  <p className={`${infoTextColor} truncate`}>{userData?.company || '@github'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default App