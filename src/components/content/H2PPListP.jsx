
import { CheckCircleIcon } from '@heroicons/react/20/solid'
function H2PPListP({ content }) {
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
  
  export default H2PPListP;