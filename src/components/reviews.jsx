
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: "Я в восторге от игры в Олимп казино",
    rating: 5,
    content: `<p>Мой опыт игры в Олимп казино довольно положительный. Я нашел здесь много увлекательных игр, среди которых стоит выделить Авиатор и покер с дилером. Нравится, что площадка предлагает различные бонусы, акции для постоянных игроков и многое другое. Однако, стоит быть осторожным с управлением своим бюджетом, чтобы не увлечься слишком сильно.</p>`,
    author: 'Айгерим Т',
    date: '20 Фев, 2024',
    datetime: '2024-02-20',
  },
  {
    id: 2,
    title: "Сплошное удовольствие от игры",
    rating: 3,
    content: "<p>Играю в Olimp casino уже несколько месяцев и пока мои впечатления смешанные. Игровой ассортимент достаточно разнообразный, однако, иногда бывают задержки с выплатами выигрышей, что немного разочаровывает. Желательно, чтобы казино улучшило этот аспект обслуживания.</p>",
    author: "Данияр К.",
    date: "28 Фев, 2024",
    datetime: "2024-02-28"
  },
  {
    id: 3,
    title: "Олимп - это прямо вау!",
    rating: 5,
    content: "<p>Имею опыт игр в казино, но именно Олимп - это то место, где я наконец обрел игровой комфорт. Впечатляющий выбор игр, отличная графика, и профессиональная поддержка делают мое время здесь приятным и увлекательным.</p>",
    author: "Бекзат М.",
    date: "1 Марта, 2024",
    datetime: "2024-03-01"
  },
  {
    id: 4,
    title: "Олимп рулит",
    rating: 4,
    content: "<p>Несколько месяцев играю в Олимп пока всем доволен. Единственно, о чем жалею, так это о первом депозите в 3 тыс тенге, поскольку можно было внести больше и получить огромный бонус на счет. Доволен самой игрой и условиями в казино. Уже проверил, все функционирует честно, без какого-либо обмана.</p>",
    author: "Айдос С.",
    date: "5 Марта, 2024",
    datetime: "2024-03-05"
  },
  {
    id: 5,
    title: "Казино Олимп - это чистая магия!",
    rating: 5,
    content: "<p>Я играю в Олимп казино уже довольно долго, и могу сказать, что это лучшая площадка в Казахстане. Мощный подбор провайдеров обеспечивает колоссальный выбор топовых игр с отличной отдачей. Однозначно рекомендую казино!</p>",
    author: "Айсултан Б.",
    date: "9 Марта, 2024",
    datetime: "2024-03-09"
  }
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  return (
    <div className="bg-white mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Отзывы о Казино Олимп</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {reviews.map((review) => (
            <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
