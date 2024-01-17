import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

export type MdProps = { file: string }

/**
 * Component to render markdown text from a local file.
 * @param file The filename without the path, expected to be located in `assets/md`.
 */
export const Md: React.FC<MdProps> = ({ file }) => {
  const [mdText, setMdText] = useState('')

  useEffect(() => {
    try {
      import(`./assets/md/${file}.md`).then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then(setMdText)
      })
    } catch (error) {
      console.error(error)
    }
  }, [file])
  return mdText && <Markdown className="md">{mdText}</Markdown>
}
