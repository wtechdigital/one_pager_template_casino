export default function Table(){
    const people = [
      { name: '🎁 Бонус', title: '150 000KZT', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: '▶️ Приложение от Олимп', title: 'Ставки на спорт + онлайн казино зеркало', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: '🎮Азартные игры', title: 'Более 2500', email: 'lindsay.walton@example.com', role: 'Member' },
      // More people...
    ]
      return (
        <div className="px-0 sm:px-6 lg:px-0">
          <div className="sm:flex sm:items-center">
        
           
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Информация
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Описание
                      </th>
        
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-s font-medium text-gray-900 sm:pl-0">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-s text-gray-500">{person.title}</td>
                    
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      )
    }