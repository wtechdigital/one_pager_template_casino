'use client'
import { Disclosure } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const faqs = [
    {
        "question": "Законна ли работа Olimp casino на территории Казахстана?",
        "answer": "Компания казино Олимп работает с использованием международной лицензии Кюрасао, при этом платформа учитывает законодательную базу Казахстана."
      },
      {
        "question": "Как обеспечивается безопасность и честность игр?",
        "answer": "Olimp – одна из наиболее безопасных и авторитетных игровых площадок, которая имеет многолетний опыт и пользуется доверием. Casino полностью гарантирует защиту средств и персональных данных клиентов."
      },
      {
        "question": "Как стать новым клиентом Casino Olimp и получить бездепозитный бонус?",
        "answer": "Чтобы стать полноценным участником клуба Олимп и получить первые бонусы, достаточно пройти процедуру регистрации в казино, что откроет доступ к личному аккаунту."
      },
      {
        "question": "Как обратиться в службу поддержки Олимп казино",
        "answer": "Чтобы связаться с поддержкой можно использовать онлайн чат на официальном сайте или направить запрос на электронную почту казино."
      },
      {
        "question": "Служба поддержки клиентов Казино Олимп",
        "answer": "Каждый зарегистрированный пользователь имеет возможность воспользоваться помощью технической поддержки от специалистов компании Олимп. Для связи можно использовать три варианта коммуникации: телефон (запрос обратного звонка); E-mail; онлайн чат."
      }
  // More questions...
]
export default function Faq() {
    return (
      <div className="bg-white mt-10">
        <div className="mx-auto max-w-8xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">FAQ - вопросы и ответы</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusCircleIcon className="h-6 w-6 text-custom-blue" aria-hidden="true" />
                          ) : (
                            <PlusCircleIcon className="h-6 w-6 text-custom-blue" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    )
  }