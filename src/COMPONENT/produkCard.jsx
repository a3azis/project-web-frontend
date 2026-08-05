import card1Img from '../assets/card1.jpg'
import card2Img from '../assets/card2.jpg'
import card3Img from '../assets/card3.jpg'
import card4Img from '../assets/card4.jpg'
import card5Img from '../assets/card5.jpg'
import card6Img from '../assets/card6.jpg'
import card7Img from '../assets/card7.jpg'
import card8Img from '../assets/card8.jpg'

export default function ProdukCard() {
    const produk = [
        { id: 1, name: "sink motel", price: 150000, image: card1Img },
        { id: 2, name: "Chillaxin", price: 150000, image: card2Img },
        { id: 3, name: "Polos", price: 150000, image: card3Img },
        { id: 4, name: "Tailor", price: 150000, image: card4Img },
        { id: 5, name: "Portland", price: 150000, image: card5Img },
        { id: 6, name: "Novolty Value", price: 150000, image: card6Img },
        { id: 7, name: "Ristinclasic", price: 150000, image: card7Img },
        { id: 8, name: "Reriable", price: 150000, image: card8Img },

    ]
    return (
        <div className="p-2 sm:p-4 md:p-8  max-7xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4 md:gap-5  items-start">
                {produk.map((item) => (
                    <div key={item.id}
                        className="group bg-white p-3 rounded-xl text-black transition  duration-300 ease-in-out hover:scale-105 shadow-xl text-center flex flex-col justify-between">
                        <img src={item.image}
                            alt={item.name}
                            className='w-full aspect-square object-cover rounded-lg border border-ambre-300 shadow-sm' />
                        <div className="mt-2 flwx-glow flex flex-col justify-end">
                            <h3 className="text-sm sm:text-base font-mono line-clamp-1">{item.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-mono mt-0.5"> Rp.{item.price.toLocaleString('id-ID')}</p>
                        </div>
                        <button className='mt-3  w-full bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm md:text-base py-1.5 sm:py-2 md:py-2.5 rounded-xl cursor-pointer transition-colors font-medium'>Add card</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
