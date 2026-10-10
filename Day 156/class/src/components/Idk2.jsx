import { useParams } from "react-router-dom"

const books = [
    { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", year: 1200, rating: 5.0 },
    { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი", year: 1975, rating: 4.9 },
    { id: 3, title: "სამანიშვილის დედინაცვალი", author: "დავით კლდიაშვილი", year: 1897, rating: 4.7 }
];

const Idk2 = () => {
    const { book_id } = useParams()
    const book = books.find((item) => {
        return item.id == Number(book_id)
    })
    console.log(book)
    return (
        <>
            <h1>{book.title}</h1>
            <h2>Author: {book.author}</h2>
            <h2>Year: {book.year}</h2>
            <h2>Rating: {book.rating}</h2>
        </>
    )

}

export default Idk2