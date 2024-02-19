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

const mainContant = require(`@/app/content/main.json`);

export const metadata: Metadata = {
  // Basic SEO tags
  title: "Олимп Казино - Сайт Olimp Казино в Казахстане",
  description: "Откройте для себя захватывающий мир азартных игр в Олимп Казино. Большой выбор игр, высокие выплаты и бонусы ждут вас. Присоединяйтесь сегодня!",
  robots: "noindex, nofollow", // Use "noindex, nofollow" to prevent search engines from indexing and following this page
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
    },
  },
  
    icons: {
      shortcut: '/shortcut-icon.png',
      apple: '/apple-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    },

  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbage',

  // Keywords for SEO (less relevant nowadays, but can be included)
  keywords: "keyword1, keyword2, keyword3",

  // Open Graph (OG) tags for social media
  openGraph: {
    url: "/",
    title: "Your Page Title for Social Media",
    description: "Your page description for social media, ideally between 50-160 characters.",
    images: "/path/to/your/twitter-image.jpg",
    type: "website", // Could be 'article', 'product', etc. depending on the content type
    siteName: "YourSiteName",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image", // Or "summary" depending on the card type you want
    site: "@yourtwitterhandle",
    creator: "@authorstwitterhandle",
    title: "Your Page Title for Twitter",
    description: "Your page description for Twitter, ideally between 50-160 characters.",
    images: "/path/to/your/twitter-image.jpg",
  },
};

export default function Home() {
  
  return (
    <>
    <Hero />
    <main>
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
      <H1Block content={mainContant.content['0']} />
      <div className=" text-center mt-6 justify-center lg:block">
            <a
              rel="nofollow noreferrer"
              href={mainContant.header.registration.link}
              className="inline-flex items-center justify-center px-20 py-3 md:px-12 border border-transparent text-base font-medium rounded-3xl text-black bg-custom-yellow hover:bg-custom-dark-yellow transition duration-150 ease-in-out"
            >
              {mainContant.header.registration.text}
            </a>
          </div>
      <H2Slots content={mainContant.content['1']} />
      <H2Bonus content={mainContant.content['2']} />
      <H2Info content={mainContant.content['3']} />
      <H2SimpleContentBlock content={mainContant.content['4']} />
      </div>
    </div>
    </main>
    </>
  );
}
