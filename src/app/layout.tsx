import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
import { FAQPage, WithContext } from "schema-dts";

const inter = Inter({ subsets: ["latin"] });

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should my password be unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you use the same password for both your email account and your bank account login, an attacker only needs to steal one password to get access to both accounts, doubling your exposure. If you've used that same password for 14 different accounts, you're making the attacker's job very, very easy. You can protect yourself by using a our <a href=\"https://shipped.club/free-tools/secret-password-generator\">Secret Password Generator</a> to create unique passwords.",
      },
    }
  ],
  headline: "Strong Random Secrets and Password Generator",
  description:
    "Free online tool to generate random strings and passwords in various formats.",
  author: {
    "@type": "Person",
    name: "Luca Restagno",
    url: "https://lucarestagno.com",
  },
  image: "",
  datePublished: "2023-12-10",
  dateModified: "2023-12-28",
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
