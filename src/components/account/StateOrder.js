
import {
    XIcon,
    BellIcon,
    CogIcon,
    TruckIcon,
    HomeIcon

} from '@heroicons/react/solid'

const StateOrder = ({
    status
}) => {
    const selectStatus = "flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10"
    const selectStatusRed = "flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10"
    const notSelectStatus = "flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"

    return (


        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className={status === "cancelled" ? selectStatusRed : notSelectStatus}>
                    <XIcon className='w-5 h-5' />
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">CANCELADO</h2>
                    <p className="leading-relaxed">Tu orden ha sido registrado y esta en cola para ser atendido.</p>
                </div>
            </div>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className={status === "not_processed" ? selectStatus : notSelectStatus}>
                    <BellIcon className='w-5 h-5' />

                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PENDIENTE</h2>
                    <p className="leading-relaxed">Tu orden ha sido registrado y esta en cola para ser atendido.</p>
                </div>
            </div>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className={status === "processed" ? selectStatus : notSelectStatus}>
                    <CogIcon className='w-5 h-5' />

                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">PROCESO</h2>
                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                </div>
            </div>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className={status === "shipped" ? selectStatus : notSelectStatus}>
                    <TruckIcon className='w-5 h-5' />
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">ENVIADO</h2>
                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                </div>
            </div>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className={status === "delivered" ? selectStatus : notSelectStatus}>
                    <HomeIcon className='w-5 h-5' />

                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">ENTREGADO</h2>
                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
            </div>

        </div>
    )
}
export default StateOrder