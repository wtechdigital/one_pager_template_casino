/*
  {
      "id": "3",
      "title": "Олимп Казино - Приветственный бонус 150 000 KZT и 250 FS в Olimp Казино",
      "paragraphs": [
        {"text": "Каждый новый участник, зарегистрировавшийся на официальном сайте Олимп казино, может получить щедрый приветственный бонус до 150 тысяч тенге, а также бесплатные вращения для игровых слотов. Поощрение от игровой платформы доступно каждому совершеннолетнему жителю Казахстана, который создал аккаунт в Olimp Casino и внес первый депозит."},
        {"text": "Размер бонуса напрямую зависит от суммы пополнения счета:"},
        {"text": "Бонус можно активировать в течение месяца с момента регистрации на игровой платформе. Все эти деньги можно вывести на банковскую карту после выполнения условий по вейджеру. При первом пополнении счета на сумму менее 3 тысяч тенге, бонус не будет активирован."}
      ],
      "list": [
        {"text": "3000 тенге – дарит 7000 KZT и 20 фриспинов;"},
        {"text": "7000 – принесет 40000 KZT на игровой баланс и 50 бесплатных вращений;"},
        {"text": "10000 – депозит даст 100000 KZT на игровой счет и 120 спинов;"},
        {"text": "100000 тенге – такое пополнение баланса позволяет получить максимальную награду в 150 тысяч KZT и 250 фриспинов."}
      ]
    }
*/
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import BonusList from '@/components/bonusList'

function H2Slots({ content }) {
    return (
        <>
       
      <div className="mt-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{content.title}</h2>
        <p className="mt-6">
            {content.paragraphs[0].text}
        </p>

        <BonusList />
        
        <p className="mt-6">
            {content.paragraphs[1].text}
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
            {content.paragraphs[2].text}
        </p>
      </div>
      </>
    );
  }
  
  export default H2Slots;