import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Library = ({ selected }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M7 20h10"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M10 20c5.5-2.5.8-6.4 3-10"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
    </svg>
  )
}

export default Library
