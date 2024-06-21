import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Chat = ({ selected }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-message-circle">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" className={clsx(
        'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
        { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
      )} />
    </svg>
  )
}

export default Chat
