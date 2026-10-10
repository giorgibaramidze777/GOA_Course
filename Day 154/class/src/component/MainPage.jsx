import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h1>Welcome to the Main Page</h1>
                <p>You have successfully logged in</p>
            </div>
        </>
    )
}

export default MainPage