import Header from "../components/Header";
import Image from "next/image"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import checkoutProduct from "./checkoutProduct";

function checkout() {

    const items = useSelector(selectItems)

    return (
        <div className="bg-gray-100">
            <Header />
            <main className="min-h-screen lg:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">{items.length === 0 ? 'Your Amazon Basket' : 'Shopping Basket'}</h1>
                        {items.map((item, i) => (<checkoutProduct 
                         key={item.id}
                         id={item.id}
                         quantity={item.quantity}
                         title={item.title}
                         image={item.image}
                         rating={item.rating}
                         description={item.description}
                         hasPrime={item.hasPrime}
                         price={item.price} />))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default checkout
