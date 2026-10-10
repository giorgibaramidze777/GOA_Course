import { useParams } from "react-router-dom"

const users = [
    { id: 101, username: "giorgi99", fullName: "გიორგი გიორგაძე", role: "Admin", active: true },
    { id: 102, username: "nino_k", fullName: "ნინო კაპანაძე", role: "User", active: false },
    { id: 103, username: "misha_dev", fullName: "მიხეილ ბერიძე", role: "Developer", active: true }
];

const Idk1 = () => {
    const { username } = useParams()
    const user = users.find((item) => {
        return item.username == username
    })
    console.log(user)
    return (
        <>
            <h1>{user.fullName} </h1>
            <h2>role: {user.role}</h2>
            <h2>active: {user.active ? "Yes" : "No"}</h2>
        </>
    )
}

export default Idk1