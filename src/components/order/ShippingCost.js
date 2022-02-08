
const ShippingCost = ({
    shipping
}) => {



    if (shipping && shipping !== null && shipping !== undefined) {
        return (
            <div className='mb-5'>
                <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                    Informacion
                </h2>

                {
                    shipping.map((shipping_option, index) => (
                        <div key={index}>
                            <input
                                value={shipping_option.id}
                                name='shipping_id'
                                type='radio'
                                required
                            />
                            <label className='ml-4'>
                                {shipping_option.name} - ${shipping_option.price} ({shipping_option.time_to_delivery})
                            </label>
                        </div>
                    ))
                }
            </div>
        );
    }

}



export default ShippingCost