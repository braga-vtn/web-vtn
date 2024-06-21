import clsx from 'clsx'
import React from 'react'

const Logs = ({ selected }: { selected: boolean }) => {
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
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
        className={clsx(
          'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
          { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
        )}
      />
    </svg>
  )
}

export default Logs
