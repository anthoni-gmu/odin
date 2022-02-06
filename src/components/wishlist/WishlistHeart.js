import { HeartIcon } from "@heroicons/react/solid";

const WishlistHeart = ({

    addToWishlist,
    product,
    wishlist
}) => {


    const renderWishlistHeart = () => {
        let selected = false;

        if (
            wishlist &&
            wishlist !== null &&
            wishlist !== undefined &&
            product &&
            product !== null &&
            product !== undefined
        ) {
            wishlist.map(item => {
                if (item.product.id.toString() === product.id.toString()) {
                    selected = true;
                }
            });
        }

        if (selected) {
            return (
                <button onClick={addToWishlist} className=" rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <HeartIcon className='w-6 h-6 text-red-800' />
                </button>
            )
        } else {
            return (
                <button onClick={addToWishlist} className=" rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <HeartIcon className='w-6 h-6 hover:text-red-700' />
                </button>
            )
        }
    }

    return (
        <>
            {renderWishlistHeart()}
        </>
    )
}

export default WishlistHeart
