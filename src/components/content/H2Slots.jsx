/*
  {
      "id": "2",
      "title": "Лучшие игровые автоматы Казино Олимп",
      "paragraphs": [
        {"text": "Площадка Olimp предлагает своим игрокам более 2000 разнообразных слотов. Все они позволяют увлекательно провести время, проникнуться азартом и заработать реальные деньги. Более 50 ведущих поставщиков игрового софта предоставляют самые популярные видеослоты. Среди лучших разработчиков нужно выделить: Novomatic, Pragmatic, Igrosoft, Play'n, Betgames, Evolution Gaming и многие другие."},
        {"text": "Если проанализировать статистику, можно выделить перечень лучших игровых автоматов, которые пользуются максимальной популярностью в казино:"},
        {"text": "Кроме того, по-прежнему востребованными остаются десятки фруктовых, приключенческих, историчных и других барабанов. Чтобы протестировать все слоты на площадке, потребуется не один день, но это поможет найти оптимальный игровой автомат. Кроме этого присутствует лайв казино с настоящими дилерами, огромное количество настольных игр, турниров и многое другое."},
        {"text": "Популярность слотов в Olimp Casino обусловлена рядом факторов, которые ценят участники платформы:"},
        {"text": "Олимп имеет ярко выраженную клиентоориентированность, что четко прослеживается в услугах, возможностях и дальнейшем сопровождении."}
      ],
      "list": [
        {"text": "высокие показатели отдачи, которые превышают показатель RTP в 95%;"},
        {"text": "широкое тематическое разнообразие автоматов;"},
        {"text": "щедрые бонусы и много дополнительных акций;"},
        {"text": "большой срок работы на рынке гарантирует безопасность и честность."}
      ]
    }
   ],
*/
import Slots from "@/components/slotList"
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

function H2Slots({ content }) {
    return (
        <>
      <div className="mt-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{content.title}</h2>
        <p className="mt-6">
            {content.paragraphs[0].text}
        </p>
        <p className="mt-6">
            {content.paragraphs[1].text}
        </p>
        <Slots />
        <p className="mt-6">
            {content.paragraphs[2].text}
        </p>
        <p className="mt-6">
            {content.paragraphs[3].text}
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {content.list.map((list, index) => (
            
                <li  key={index} className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-custom-blue" aria-hidden="true" />
                  <span> 
                  {list.text}
                  </span>
                </li>
              
            ))}
        </ul>
         <p className="mt-6">
            {content.paragraphs[4].text}
        </p>
      </div>
      </>
    );
  }
  
  export default H2Slots;