export default function cta_blue({ title, description, button, link }) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl mt-5 lg:px-8">
          <div className="relative isolate overflow-hidden  justify-center bg-custom-dark-blue px-6 py-6 text-center shadow-2xl rounded-2xl sm:rounded-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl  font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl  text-lg leading-8 text-gray-300">
            {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                rel="nofollow noreferrer"
                href={link}
                className="rounded-md bg-custom-yellow px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
               {button}
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={912} cy={512} r={912} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#f7b637" />
                  <stop offset={1} stopColor="#f7b637" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  