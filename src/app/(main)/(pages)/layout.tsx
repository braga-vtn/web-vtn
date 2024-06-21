import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] h-[calc(100vh-64px)] rounded-tl-3xl border-muted-foreground/20 overflow-scroll">
      {children}
    </div>
  )
}

export default Layout
