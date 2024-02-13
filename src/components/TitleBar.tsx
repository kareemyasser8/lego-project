import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const TitleBar = ({ children }: Props) => {
  return (
    <header className="title-container">
      <h1>{children}</h1>
    </header>
  )
}

export default TitleBar
