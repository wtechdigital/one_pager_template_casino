
function H3PNumListP({ content }) {
    return (
        <>
      <div className="mt-6">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{content.title}</h3>
        <p className="mt-6">
            {content.paragraphs[0].text}
        </p>
        <ul role="list" className="mt-8 max-w-4xl space-y-8 text-gray-600">
            {content.list.map((list, index) => (
                <li key={index} className="flex gap-x-3 items-start">
                <div className="relative mt-1">
                    <div className="h-4 w-4 bg-custom-blue rounded-full flex-none" aria-hidden="true" />
                    <span className="absolute inset-0 flex text-white justify-center items-center text-xs font-semibold">{index + 1}</span>
                </div>
                <span> 
                    {list.text}
                </span>
                </li>
            ))}
            </ul>
         <p className="mt-6">
            {content.paragraphs[1].text}
        </p>
      </div>
      </>
    );
  }
  
  export default H3PNumListP;