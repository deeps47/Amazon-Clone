function checkoutProduct({id, quantity, title, price, rating, description, image, hasPrime}) {
    return (
        <div className="flex flex-col xl:grid grid-cols-5 my-auto">
            <Image src={image} height={200} width={200} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default checkoutProduct
