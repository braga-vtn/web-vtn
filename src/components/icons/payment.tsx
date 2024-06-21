import clsx from 'clsx'
import React from 'react'

type Props = {
  selected: boolean
}

const Payment = ({ selected }: Props) => {
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
      className={clsx(
        'dark:group-hover:stroke-[#C8C7FF] transition-all dark:stroke-neutral-700 stroke-neutral-300 group-hover:stroke-[#7540A9]',
        { 'dark:!stroke-neutral-100 !stroke-neutral-800 !stroke-neutral-100 ': selected }
      )}
    >
      <rect
        width="20"
        height="14"
        x="2"
        y="5"
        rx="2"
      />
      <line
        x1="2"
        x2="22"
        y1="10"
        y2="10"
      />
      F</svg>
  )
}

export default Payment
