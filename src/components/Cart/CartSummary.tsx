const CartSummary: React.FC = () => {
    return (
        <>
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Toplam</p>
                    <p className="text-gray-700">129.99TL</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Kargo Ücreti</p>
                    <p className="text-gray-700">4.99TL</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="text-lg font-bold">Toplam Ücret</p>
                    <div className="">
                        <p className="mb-1 text-lg font-bold">134.98 TL</p>
                        <p className="text-sm text-gray-700">Vergiler Dahil Fiyat</p>
                    </div>
                </div>
                <button className="mt-12 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Satın Al</button>
            </div>
        </>
    )
}

export default CartSummary;