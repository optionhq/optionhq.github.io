import React, { useEffect, useState } from 'react'
import { Md } from './Md'

import { content } from './content.js'

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{ opacity: isVisible ? 1 : 0 }}
      className="h-full ease-in-out transition-opacity duration-1000"
    >
      <main className="px-6 w-screen max-w-[579px] mx-auto pt-20 flex flex-col h-full gap-8">
        <div className="text-center">
          <h1 className="underline decoration-rose-600">{content.title}</h1>
          <div className="font-medium text-lg text-stone-700">{content.subtitle}</div>
        </div>
        <section>
          <Md file={content.bodyMd} />
        </section>
        <div className="self-center flex flex-col items-center">
          <a
            href={content.gameURL}
            className="no-underline text-neutral-700 hover:text-neutral-800 self-center max-w-max border border-neutral-300 px-4 py-1.5 bg-stone-100 hover:bg-white font-medium "
          >
            {content.gameCTA}
          </a>
          <a
            href={`mailto:${content.mailto}`}
            className="self-center max-w-max mt-4 underline text-xs "
          >
            {content.mailCTA}
          </a>
        </div>
        <div className="grow" />
        <div className="my-4 text-xs text-center max-w-sm mx-auto text-neutral-500">
          {content.disc}
        </div>
        <footer>
          <div className="text-center text-xs text-neutral-500 mb-4">
            © {new Date().getFullYear()} Negation Game
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
