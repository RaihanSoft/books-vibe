import { useLoaderData, useParams } from "react-router-dom"


const BookDetails = () => {
    const { bookId } = useParams()
    const data = useLoaderData()
    const book = data.find(bk => bk.bookId === Number(bookId))
    const { image,rating, bookName, author, category, review, tags,totalPages,publisher,yearOfPublishing } = book

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
            <div className="h-[900px]">
                <img className="h-full" src={image} alt="" />
            </div>

            <div className="">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <p className="border-b-2 border-dashed" ></p>
                    <p>{category}</p>
                    <p className="border-b-2 border-dashed" ></p>
                    <p>review :{review}</p>
                    <div>
                        {
                            tags.map((tag) => <span>Tags: <button className="btn btn-xs bg-green-50 text-green-700 "> {tag}</button></span>)
                        }
                    </div>
                    <p className="border-b-2 border-dashed" ></p>
                </div>

                <div className="space-y-2">
                    <p>Number of Pages: {totalPages} </p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>


                <div className="mt-4">
                    <button className="btn border-black">Read</button>
                    <button className="btn text-white bg-cyan-400 ml-4 border-black">Wish List</button>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
