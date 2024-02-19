/*
    {
      "id": "4",
      "title": "Информация о казино Олимп",
      "paragraphs": [
        {"text": "Компания Casino Olimp работает на территории Казахстана с 2010 года, что делает ее одной из наиболее авторитетных и уважаемых в стране. Площадка собрала огромное количество пользователей, которые много лет остаются довольны качеством услуг и ассортиментом игры. Чтобы получить первое впечатление об игорном клубе, новичку следует ознакомиться с основной информацией казино."},
        {"text": "Игровая платформа открыта на территории Казахстана, но все же бывают ситуации, когда официальный сайт не доступен. В такие моменты продолжить игру можно, используя мобильное приложение или актуальное зеркало платформы. Оба варианта позволяют открыть доступ к своему аккаунту и продолжить делать победоносные ставки на любимых автоматах."},
        {"text": "Olimp casino ярко выделяется на фоне прямых конкурентов по игорному бизнесу за счет ряда особенностей:"},
        {"text": "При всем этом официальный сайт казино имеет привлекательный дизайн и вполне понятное управление, что позволяет быстро разобраться в функционале даже новичку."}
      ],
      "list": [
        {"text": "Быстрая и простая регистрация, которая отнимет не более двух минут;"},
        {"text": "Огромный каталог игр в различных тематиках;"},
        {"text": "Наличие международной лицензии Кюрасао;"},
        {"text": "Eсть возможность игры со всех девайсов, включая портативные;"},
        {"text": "Mощный приветственный бонус, программа лояльности, а также акции."}
      ]
    }
*/
import Slots from "@/components/slotList"
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Table from "@/components/table"

function H2Info({ content }) {
    return (
        <>
      <div className="mt-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{content.title}</h2>
        <p className="mt-6">
            {content.paragraphs[0].text}
        </p>
        <Table />
        <p className="mt-6">
            {content.paragraphs[1].text}
        </p>
        <p className="mt-6">
            {content.paragraphs[2].text}
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
            {content.paragraphs[3].text}
        </p>
      </div>
      </>
    );
  }
  
  export default H2Info;