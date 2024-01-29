import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({children}) => {
  return (
    <button className="p-2 bg-yellow-700 rounded-md text-black shadow-md shadow-slate-500">{children}</button>
  )
}

export default Button