
const ShippingCost = ({
    shipping,
    shipping_id,
    onChange
}) => {



    if (shipping && shipping !== null && shipping !== undefined) {
        return (
            <div>
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Servicio de Entrega</label>

                {
                    shipping.map((shipping_option, index) => (
                        <div className="mt-2" key={index}>
                            <div className="flex items-center justify-between w-full bg-white rounded-md border-2  p-4 focus:outline-none">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-indigo-600"
                                        onChange={e => onChange(e)}
                                        value={shipping_option.id}
                                        name='shipping_id'
                                        required
                                    />

                                    <span className="ml-2 text-sm text-gray-700">{shipping_option.name} ({shipping_option.time_to_delivery})</span>
                                </label>

                                <span className="text-gray-600 text-sm">${shipping_option.price}</span>

                            </div>
                        </div>
                    ))
                }


            </div>
        );
    } else {
        return (
            <></>
        )
    }

}



export default ShippingCost