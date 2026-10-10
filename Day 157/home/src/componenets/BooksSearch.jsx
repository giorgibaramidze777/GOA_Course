import { useLocation } from "react-router-dom"
import books from './books'

const BooksSearch = () => {
    const location = useLocation()

    const searchValue = location.search.split('=')[1]?.replaceAll('+', ' ')

    const filteredValues = books.filter(item => {
        return item.name.toLowerCase()?.includes(searchValue?.toLowerCase()) || item.category.toLowerCase().includes(searchValue?.toLowerCase())
    })

    console.log(filteredValues)
    return (
        <>
            <form>
                <input type="search" name="q"/>
                <button type="submit">submit</button>
            </form>

            {
                filteredValues?.map((item, index) => {
                    return <div className="w-[100px] h-[200px] flex justify-between items-center flex-col border p-[10px] shadow-md" key={index}>
                        <h1>{item.name}</h1>
                        <h2>price: ${item.price}</h2>
                        <h2>category: {item.category}</h2>
                    </div>
                })
            }
        </>
    )
}

export default BooksSearch