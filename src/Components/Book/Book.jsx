import { Link } from "react-router-dom"

const Book = ({ book }) => {
    const { bookName, image, category,bookId, rating, review, author, tags } = book
    return (

        <Link to={`/books/${bookId}`} >
            
            <div className="card bg-base-100 border-2 ">
                <figure className=" py-10  h-80 bg-gray-200 ">
                    <img
                        src={image}
                        className="rounded-xl h-full w-full object-contain" />
                </figure>
                <div className="card-body">

                    <div className="flex gap-4 justify-center ">
                        {
                            tags.map((tag,index) => <button key={index} className="btn btn-sm bg-green-50 text-green-500 " >{tag}</button>)
                        }
                    </div>




                    <div>
                        <p className="card-title">{bookName}</p>
                        <p>by: {author}</p>
                    </div>
                    <div className="border-b-2 border-dashed "></div>

                    <div className="flex justify-between">
                        <h1>{category}</h1>
                        <h1>{rating} <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div> </h1>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Book
