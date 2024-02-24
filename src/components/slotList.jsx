import Image from 'next/image'
import Aviator from '@/app/images/aviator.webp'
import Slot2 from '@/app/images/1.webp'
import { PlayIcon } from '@heroicons/react/24/solid'
import coinStrike from '@/app/images/slots/coin_strike.webp'
import royalFruits from '@/app/images/slots/royal_fruits.png'
import gateOfOlympus from '@/app/images/slots/gate_of_olympus.png'
import coinVulkano from '@/app/images/slots/coin_volcano.png'
import luckyStreak from '@/app/images/slots/lucky_streak.png'
import sweetBonanza from '@/app/images/slots/sweet_bonanza.png'
import furitCocktail from '@/app/images/slots/fruit_coktail.png'
export default function Slots() {

    const Slots = [
        {
          slotTitle: 'Coin Strike: Hold and Win',
          imageUrl: coinStrike, // Make sure Aviator is a valid image path or imported image
          imageAlt: 'Играть в Coin Strike: Hold and Win слот', // Add an alt description for the image
          link: 'https://go.greenworld.kz'
        },
        {
            slotTitle: "Royal Fruits 5: Hold 'n' Link",
            imageUrl: royalFruits, // Make sure Aviator is a valid image path or imported image
            imageAlt: "Играть в Royal Fruits 5: Hold 'n' Link слот", // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
            {
            slotTitle: 'Gate Of Olympus',
            imageUrl: gateOfOlympus, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Играть в Gate Of Olympus слот ', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
        {
            slotTitle: 'Coin Volcano',
            imageUrl: coinVulkano, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Играть в Coin Volcano слот', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
          {
            slotTitle: 'Lucky Streak',
            imageUrl: luckyStreak, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Играть в Lucky Streak слот', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
          {
            slotTitle: 'Sweet Bonanza',
            imageUrl: sweetBonanza, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Играть в Sweet Bonanza слот', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
          {
            slotTitle: 'Furit Cocktail',
            imageUrl: furitCocktail, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Играть в Furit Cocktail слот', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
          {
            slotTitle: 'Coin Strike: Hold and Win',
            imageUrl: coinStrike, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Описание игрового автомата Aviator', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
      ];

    return (
    <div className="bg-white mb-10 lg:px-10">
        
        <div className="max-w-4xl text-base leading- text-gray-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {Slots.map((slot, index) => (
                        <div key={index} className="relative group cursor-pointer overflow-hidden">
                        <Image
                                    className="rounded-xl transition duration-300 ease-in-out"
                                    src={slot.imageUrl}
                                    alt={slot.imageAlt}
                                    title={slot.slotTitle}
                                    width={400} // Specify your width here
                                    height={300} // And your height here
                        />
                        <div className="rounded-xl absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 transition duration-300 ease-in-out group-hover:bg-opacity-50"></div>
                        <div className="absolute top-5 left-5 right-5 bottom-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <div className="text-center">
                            <h3 className="text-white font-normal text-lg md:py-3 py-0 transition-opacity duration-300">{slot.slotTitle}</h3>
                            <a
                             href={slot.link}
                             rel="nofollow noreferrer" 
                             aria-label="Играть"
                                className="inline-flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 p-3 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                                >
                                <PlayIcon className="h-6 w-6 " aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        </div>
                    ))}
                 </div>
        
        </div>
  </div>
    )
  }