"use client"
import Image from "next/image"
import LogoHeader from "@/app/images/logo_header.svg"
import Link from 'next/link';


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const mainContant = require(`@/app/content/main.json`);


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-5 p-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href={mainContant.header.logo.link} className="-m-1.5 p-1.5">
            <span className="sr-only">{mainContant.header.brand.name}</span>
            <Image
                        className="h-10 w-40 mx-auto lg:mx-0 object-fill"
                        src={LogoHeader}
                        alt={mainContant.header.brand.name}
                />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {mainContant.header.navigation.map((item) => (
            <Link key={item.name} href={item.link} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a href={mainContant.header.login.link} 
            rel="nofollow noreferrer" 
            className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
            {mainContant.header.login.text}
          </a>
          <a
            href={mainContant.header.registration.link} 
            rel="nofollow noreferrer"
            className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            {mainContant.header.registration.text} 
          </a>
        </div>
        <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              style={{ margin: 'auto' }}
            >
              <span className="sr-only">{mainContant.header.mobile.open}</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-12" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-12 w-full overflow-y-auto bg-white px-6 py-2 sm:max-w-sm sm:ring-2 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href={mainContant.header.logo.link} className="">
              <span className="sr-only">{mainContant.header.brand.name}</span>
              <Image
                        className="h-10 w-40 mx-auto lg:mx-0 object-fill"
                        src={LogoHeader}
                        alt={mainContant.header.brand.name}
                />
            </a>
            <a
              href={mainContant.header.registration.link}
              rel="nofollow noreferrer" 
              className="ml-auto rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              {mainContant.header.registration.text}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{mainContant.header.mobile.close}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainContant.header.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link} 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={mainContant.header.login.link} 
                  rel="nofollow noreferrer" 
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {mainContant.header.login.text} 
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}


