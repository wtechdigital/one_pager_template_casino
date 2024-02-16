import Image from "next/image";
import Hero from "@/components/hero"
import Slots from "@/components/slotList"
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Table from "@/components/table"

const mainContant = require(`@/app/content/main.json`);

export default function Home() {
  return (
    <>
    <Hero />
    
    <main>
    <div className="bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{mainContant.articles['0'].title}</h1>
        <p className="mt-6">
              {mainContant.articles['0'].content}
            </p>
            <Slots />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{mainContant.articles['1'].title}</h2>
              <p className="mt-6">
              {mainContant.articles['1'].content}
              </p>
           <Table />
           <p className="mt-6">
              {mainContant.articles['1'].subContent['0'].text}
            </p>
            <p className="mt-6">
              {mainContant.articles['1'].subContent['1'].text}
            </p>
        <h2 className="text-2xl font-bold mt-10 tracking-tight text-gray-900">{mainContant.articles['2'].title}</h2>
        <p className="mt-6">
              {mainContant.articles['2'].content}
            </p>
      </div>
    </div>
    </main>
    </>
  );
}
