import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const IntegrationIcon = ({ selected }: Props) => {
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
        d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path d="M21 21v-2h-4"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M3 5h4V3"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <path
        d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
    </svg>
  )
}

export default IntegrationIcon
