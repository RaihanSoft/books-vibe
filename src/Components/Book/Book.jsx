const Book = ({ book }) => {
    const { bookName, image, category, rating, review, author, tags } = book
    return (
        <div className="card bg-base-100 border-2 ">
            <figure className=" py-10  h-80 bg-gray-200 ">
                <img
                    src={image}
                    className="rounded-xl h-full w-full object-contain" />
            </figure>
            <div className="card-body">

                <div className="flex gap-4 justify-center ">
                    {
                        tags.map((tag) => <button className="btn btn-sm bg-green-50 text-green-500 " >{tag}</button>)
                    }
                </div>




                <div>
                    <p className="card-title">{bookName}</p>
                    <p>by: {author}</p>
                </div>
                <div className="divider"></div>

                <div className="flex justify-between">
                    <h1>{category}</h1>
                    <h1>{rating}</h1>
                </div>
            </div>
        </div>
    )
}

export default Book
