import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Workflows = ({ selected }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      className={clsx(
        'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
        { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
      )}
      stroke-linejoin="round"
    >
      <rect
        width="8"
        height="8"
        x="3"
        y="3"
        rx="2"
      />
      <path
        d="M7 11v4a2 2 0 0 0 2 2h4"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
      <rect
        width="8"
        height="8"
        x="13"
        y="13"
        rx="2"
      />
    </svg>
  )
}

export default Workflows
