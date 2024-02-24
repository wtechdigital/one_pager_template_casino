import Image from "next/image";
import Hero from "@/components/hero"
import Slots from "@/components/slotList"
import Table from "@/components/table"
import type { Metadata } from "next";
import H1Block from '@/components/content/H1Block'
import H2Slots from '@/components/content/H2Slots'
import H2Bonus from '@/components/content/H2Bonus'
import H2Info from '@/components/content/H2Info'
import H2SimpleContentBlock from '@/components/content/H2SimpleContentBlock'
import H3PNumListP from '@/components/content/H3PNumListP'
import H3SimpleContentBlock from '@/components/content/H3SimpleContentBlock'
import H2PListPP from '@/components/content/H2PListPP'
import H2PPListP from '@/components/content/H2PPListP'
import Faq from '@/components/faq'
import Reviews from '@/components/reviews'
import Cta_blue from '@/components/cta_blue'
import Cta_white from '@/components/cta_white'

const mainContant = require(`@/app/content/main.json`);

export const metadata: Metadata = {
  // Basic SEO tags
  title: "Олимп Казино - Сайт Olimp Казино в Казахстане",
  description: "Откройте для себя захватывающий мир азартных игр в Олимп Казино. Большой выбор игр, высокие выплаты и бонусы ждут вас. Присоединяйтесь сегодня!",
  robots: "index, follow", // Use "noindex, nofollow" to prevent search engines from indexing and following this page
  alternates: {
    canonical: `https://greenworld.kz`,
  },

  authors: [{ name: 'Olymp' }, { name: 'Casino', url: 'https://greenworld.kz' }],
  creator: 'Olymp Casino',
  publisher: 'Olymp Casino',

  // Open Graph (OG) tags for social media
  openGraph: {
    url: "https://greenworld.kz",
    title: "Играйте в Олимп Казино и получите бонус 150 000 KZT и 250 FS!",
    description: "Увлекательные игровые автоматы Олимп Казино ждут вас! Ощутите азарт и выиграйте крупные суммы денег вместе с нами!",
    images: "/logo.svg",
    type: "website",
    siteName: "Олимп Казино",
    locale: "ru_KZ", // Note: 'locale' isn't directly part of the second structure, but could be included if your framework supports it
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image", 
    site: "@olympkz",
    creator: "@olympkz", // The 'creator' field wasn't provided in the JSON, assuming it's the same as the 'site'
    title: "Играйте в Олимп Казино и получите бонус 150 000 KZT и 250 FS!",
    description: "Почувствуйте азарт и выиграйте крупные деньги с увлекательными игровыми автоматами Олимп Казино!",
    images: "/logo.svg",
  },
};

export default function Home() {
  
  return (
    <>
    <Hero />
    <main>
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
      <H1Block content={mainContant.content[0]} />
      <div className=" text-center mt-6 justify-center lg:block">
            <a
              rel="nofollow noreferrer"
              href={mainContant.header.registration.link}
              className="inline-flex items-center justify-center px-20 py-3 md:px-12 border border-transparent text-base font-medium rounded-3xl text-black bg-custom-yellow hover:bg-custom-dark-yellow transition duration-150 ease-in-out"
            >
              {mainContant.header.registration.text}
            </a>
          </div>
      <H2Slots content={mainContant.content[1]} />
      <H2Bonus content={mainContant.content[2]} />
      <H2Info content={mainContant.content[3]} />
      <H2SimpleContentBlock content={mainContant.content[4]} />
      <H3PNumListP content={mainContant.content[5]}  />
      <H2SimpleContentBlock content={mainContant.content[6]} />
      <Cta_white title={mainContant.ctaBonus.title} description={mainContant.ctaBonus.description} button={mainContant.ctaBonus.button} link={mainContant.ctaBonus.link} />
      <H3PNumListP content={mainContant.content[7]}  />
      <H3SimpleContentBlock content={mainContant.content[8]} />
      <H3PNumListP content={mainContant.content[9]}  />
      <H2PListPP content={mainContant.content[10]}  />
      <H3PNumListP content={mainContant.content[11]}  />
      <Cta_white title={mainContant.ctaDep.title} description={mainContant.ctaDep.description} button={mainContant.ctaDep.button} link={mainContant.ctaDep.link} />
      <H2SimpleContentBlock content={mainContant.content[12]} />
      <H3SimpleContentBlock content={mainContant.content[13]} />
      <H3SimpleContentBlock content={mainContant.content[14]} />
      <H3SimpleContentBlock content={mainContant.content[15]} />
      <H3SimpleContentBlock content={mainContant.content[16]} />
      <H3SimpleContentBlock content={mainContant.content[17]} />
      <H2SimpleContentBlock content={mainContant.content[18]} />
      <H2SimpleContentBlock content={mainContant.content[19]} />
      <H2PPListP content={mainContant.content[20]} />
      <Cta_white title={mainContant.ctaMobile.title} description={mainContant.ctaMobile.description} button={mainContant.ctaMobile.button} link={mainContant.ctaMobile.link} />
      <H2SimpleContentBlock content={mainContant.content[21]} />
      <Faq />
      <Reviews />
      </div>
    </div>
    </main>
    </>
  );
}
