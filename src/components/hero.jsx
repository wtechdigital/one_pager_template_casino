import Image from "next/image"
import Logo from "@/app/images/logo.svg"
import { StarIcon } from '@heroicons/react/24/solid'

export default function Hero() {
    return (
      
      <hero> 
        <div className="bg-custom-dark-blue">
          
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12 lg:py-32 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
      
        <div class="relative">
  <div>
    <Image
      className="h-32 w-32 mx-auto lg:mx-0 rounded-full object-fill"
      src={Logo}
      alt="Олимп"
    />
  </div>
          <div class="absolute top-3 right-5  font-semibold translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-black px-2 py-1 flex items-center">
            9.8 <StarIcon className="text-custom-yellow w-5 h-5 ml-1" aria-hidden="true" />
          </div>
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
              className="inline-flex items-center justify-center px-20 py-3 md:px-12 border border-transparent text-base font-medium rounded-3xl text-black bg-custom-yellow hover:bg-custom-dark-yellow transition duration-150 ease-in-out"
            >
              Играть
            </a>
          </div>
      
        </div>
        
      </div>
      
      </hero>
    )
  }