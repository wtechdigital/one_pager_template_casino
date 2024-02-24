import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
import { Helmet } from 'react-helmet';
import { FAQPage, WithContext, WebPage, ImageObject, BreadcrumbList, Organization  } from "schema-dts";

const jsonLd: WithContext<FAQPage> = 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Законна ли работа Olimp casino на территории Казахстана?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Компания казино Олимп работает с использованием международной лицензии Кюрасао, при этом платформа учитывает законодательную базу Казахстана."
      }
    },
    {
      "@type": "Question",
      "name": "Как обеспечивается безопасность и честность игр?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Olimp – одна из наиболее безопасных и авторитетных игровых площадок, которая имеет многолетний опыт и пользуется доверием. Casino полностью гарантирует защиту средств и персональных данных клиентов."
      }
    },
    {
      "@type": "Question",
      "name": "Как стать новым клиентом Casino Olimp и получить бездепозитный бонус?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Чтобы стать полноценным участником клуба Олимп и получить первые бонусы, достаточно пройти процедуру регистрации в казино, что откроет доступ к личному аккаунту."
      }
    },
    {
      "@type": "Question",
      "name": "Как обратиться в службу поддержки Олимп казино",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Чтобы связаться с поддержкой можно использовать онлайн чат на официальном сайте или направить запрос на электронную почту казино."
      }
    }
  ],
  headline: "Олимп Казино",
  description:
    "Ощутите азарт и выиграйте крупные суммы денег вместе с Олимп Казино!",
  author: {
    "@type": "Corporation",
    name: "Olymp Casino",
    url: "https://greenworld.kz",
  },
  datePublished: "2024-02-22",
  dateModified: "2024-02-22",
};

const generateWebPageData: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Олимп Казино",
  description: "Ощутите азарт и выиграйте крупные суммы денег вместе с Олимп Казино!",
  url: "https://greenworld.kz",
  image: {
    "@type": "ImageObject",
    url: "/image.webp",
    width: "300",
    height: "300"
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://greenworld.kz"
      }
    ]
  },
  mainEntityOfPage: {
    "@type": "WebSite",
    "@id": "https://greenworld.kz"
  },
  publisher: {
    "@type": "Organization",
    name: "Олимп Казино",
    logo: {
      "@type": "ImageObject",
      url: "/logo.svg",
      width: "600",
      height: "60"
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
    <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    <script
        id="web-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebPageData),
        }}
      />
    </head>
    <html lang="en">
      <body className="bg-white">
      <Header />
        {children}
      <Footer />
      </body>
    </html>
    </>
  );
}
