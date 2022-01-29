import cshort from "../../img/banner/shorts.jpg"

export default function Categories({
    categories
}) {
    return (

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            { categories.map((category) => (
                

                <div key={category.id} className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"

                    style={{ backgroundImage: `url(${cshort})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center ">
                            <a className="text-white hover:text-yellow-accent-700 text-2xl font-bold text-center" href="#">
                                <span className="absolute inset-0"></span>
                              {category.name}
                            </a>
                        </h3>
                    </div>
                </div>

            ))}
        </div>
    )
}
