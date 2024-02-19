import Image from "next/image"
import Logo from "@/app/images/logo.svg"
import { StarIcon } from '@heroicons/react/24/solid'
const mainContant = require(`@/app/content/main.json`);

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
            alt={mainContant.hero.logo.alt}
            title={mainContant.hero.logo.title}
          />
        </div>
          <div class="absolute top-3 right-5  font-semibold translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-black px-2 py-1 flex items-center">
            9.8 <StarIcon className="text-custom-yellow w-5 h-5 ml-1" aria-hidden="true" />
          </div>
        </div>
                      
      
          <div className="text-white text-center lg:text-left">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
            {mainContant.hero.title}
            </p>
            <p className="mt-2 text-xl leading-8">
              {mainContant.hero.subtitle}
            </p>
            <p className="mt-2 text-xs max-w-2xl">
            {mainContant.hero.description}
            </p>
          </div>
      
          <div className="flex justify-center lg:block">
            <a
              rel="nofollow noreferrer"
              href={mainContant.hero.button.link}
              className="inline-flex items-center justify-center px-20 py-3 md:px-12 border border-transparent text-base font-medium rounded-3xl text-black bg-custom-yellow hover:bg-custom-dark-yellow transition duration-150 ease-in-out"
            >
              {mainContant.hero.button.text}
            </a>
          </div>
      
        </div>
        
      </div>
      
      </hero>
    )
  }