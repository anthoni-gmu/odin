
import { TrashIcon } from "@heroicons/react/outline"

const WishlistProduct = ({
    product
}) => {
    return (
        <div className="space-y-4">
            <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-coolGray-500" src={product.photo_url} />
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p className="text-sm dark:text-coolGray-400">{product.get_category}</p>
                <div className="flex mt-2 space-x-2">
               
                    <TrashIcon className="h-6 w-6" />
                    
                </div>
            </div>
        </div>
    )
}

export default WishlistProduct