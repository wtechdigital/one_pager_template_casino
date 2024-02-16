import Image from "next/image"
import Logo from "@/app/images/logo.svg"

export default function Hero() {
    return (
      
      <hero> 
        <div className="bg-gray-900">
          
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12 lg:py-32 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          
          <div className="flex-shrink-0">
            <Image
              className="h-32 w-32 mx-auto lg:mx-0 rounded-full object-fill"
              src={Logo}
              alt="Олимп"
            />
          </div>
      
          <div className="text-white text-center lg:text-left">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              Олимп Казино
            </p>
            <p className="mt-2 text-xl leading-8">
              Бонус на первый депозит: Получи до <strong>150000 тенге</strong> + <strong>250</strong> вращений!
            </p>
            <p className="mt-2 text-xs max-w-2xl">
              Только новые игроки. Бонус выдается при пополнении на сумму от 100 тенге. Все что вам необходимо это перейти по ссылке, зарегистрироваться и пополнить счет.
            </p>
          </div>
      
          <div className="flex justify-center lg:block">
            <a
              href="#"
              className="inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition duration-150 ease-in-out"
            >
              Играть
            </a>
          </div>
      
        </div>
        
      </div>
      
      </hero>
    )
  }