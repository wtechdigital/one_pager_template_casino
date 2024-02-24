import Image from 'next/image'
import welcomeBonus from '@/app/images/bonuses/welcome_bonus.png'
import cashBack from '@/app/images/bonuses/cashback.png'
import comboBoost from '@/app/images/bonuses/comboboost.png'
import sportBonus from '@/app/images/bonuses/sport_bonus.png'
export default function BonusList() {

    const Bonuses = [
        {
          bonusTitle: 'Welcome Бонус',
          bonusDescription: 'Умножаем депозит на два и 250 фриспинов в подарок!',
          imageUrl: welcomeBonus, // Make sure Aviator is a valid image path or imported image
          imageAlt: 'Умножаем депозит на два и 250 фриспинов в подарок!', // Add an alt description for the image
          link: 'https://go.greenworld.kz'
        },
        {
            bonusTitle: "Cashback",
            bonusDescription: 'Возвращай на свой счёт 1% от оборота!',
            imageUrl: cashBack, // Make sure Aviator is a valid image path or imported image
            imageAlt: "Возвращай на свой счёт 1% от оборота!", // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
        {
            bonusTitle: 'Комбобуст 100%',
            bonusDescription: 'Удвой свой выигрыш на экспресс-ставки!',
            imageUrl: comboBoost, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Удвой свой выигрыш на экспресс-ставки!', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        },
        {
            bonusTitle: 'Бонус на спорт',
            bonusDescription: 'Получите бонус до 100 USD для ставок на спорт!',
            imageUrl: sportBonus, // Make sure Aviator is a valid image path or imported image
            imageAlt: 'Получите бонус до 100 USD для ставок на спорт!', // Add an alt description for the image
            link: 'https://go.greenworld.kz'
        }
      ];

    return (
    
        
        <div className="flex overflow-x-auto space-x-4 mt-10 mb-10 md:grid-cols-4">

                    {Bonuses.map((bonus, index) => (
                    <div key={index} className="relative group cursor-pointer  overflow-hidden min-w-[75%] md:min-w-0">
                        <div className="relative">
                        <div className="relative">
                            <div className="relative w-full md:w-auto text-center max-w-sm py-6 px-3 rounded-lg bg-white border border-gray-300   dark:bg-gray-800 dark:border-gray-700">
                                <Image
                                    className="mt-[-30px] mb-5 transition duration-300 ease-in-out"
                                    src={bonus.imageUrl}
                                    alt={bonus.imageAlt}
                                    title={bonus.bonusTitle}
                                    width={400}
                                    height={300}
                                />
                            <div className="relative">
                                <h3 className="text-xl font-bold text-black transition-colors">{bonus.bonusTitle}</h3>
                            </div>
                            
                            <div className="relative mt-2 text-sm text-balck">
                            {bonus.bonusDescription}
                            </div>
                            
                            <div className="relative mt-4">
                            <a
                                    rel="nofollow noreferrer"
                                    href={bonus.link}
                                    className="inline-flex items-center justify-center px-20 py-3 md:px-12 border border-transparent text-base font-medium rounded-3xl text-black bg-custom-yellow hover:bg-custom-dark-yellow transition duration-150 ease-in-out"
                                    >
                                    Забрать
                                    </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}

     </div>
        
    )
  }