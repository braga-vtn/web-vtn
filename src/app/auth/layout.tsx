import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import EditorCanvas from '../(main)/(pages)/workflows/editor/[editorId]/_components/editor-canvas'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="h-full flex w-full justify-center items-center bg-neutral-950">
      <div className="absolute top-0 left-0 p-6">
        <Image
          src="/vistune-dark.svg"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '2.5%',
            height: '2.5%',
          }}
          width={0}
          height={0}
        />
      </div>
      <div className="w-[700px] flex flex-col items-center p-6 bg-neutral-950 mb-14">
        {children}
      </div>
      <div className="hidden xl:flex flex-1 w-full h-screen overflow-hidden relative flex-col gap-3 bg-neutral-900">
        <EditorProvider>
          <ConnectionsProvider>
            <EditorCanvas demo={true} />
          </ConnectionsProvider>
        </EditorProvider>
      </div>
    </div>
  )
}

export default Layout