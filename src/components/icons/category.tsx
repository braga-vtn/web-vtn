import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[currentColor] fill-[currentColor] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#6600FF] fill-[#6600FF] ': selected }
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[currentColor] fill-[currentColor] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#6600FF] fill-[#6600FF] ': selected }
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[currentColor] fill-[currentColor group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#6600FF] fill-[#6600FF] ': selected }
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#9F54FF] transition-all dark:fill-[currentColor] fill-[currentColor] group-hover:fill-[#BD8AFF] ',
          { 'dark:!fill-[#6600FF] fill-[#6600FF] ': selected }
        )}
      />
    </svg>
  )
}

export default Category
