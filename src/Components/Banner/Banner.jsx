const Banner = () => {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src="books.jpg"
      className="h-full w-full rounded-lg " />
    <div className="p-20">
      <h1 className=" text-3xl lg:text-4xl xl:text-5xl font-bold">Books to freshen up your bookshelf!</h1>
      <button className="btn btn-success text-white mt-10">Get Started</button>

    </div>
  </div>
</div>
  )
}

export default Banner
