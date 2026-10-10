import { useNavigate } from "react-router-dom"

const Idk1 = () => {
    const navigate = useNavigate()

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (e.target.password.value === '123456') {
                    navigate('/')
                } else {
                    alert('FAHHHHHH wrong password!')
                }
            }}>
                <input type="text" className="border" name='username' required/><br /><br />
                <input type="email" className="border" name='email' required/><br /><br />
                <input type="password" className="border" name='password' required/><br />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Idk1