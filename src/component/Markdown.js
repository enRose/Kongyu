import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

export const Markdown = (props) => {
  const {file} = props
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [file])

  return (
    <>
      <ReactMarkdown children={markdown} />
    </>
  )
}