'use client'

import * as React from 'react'
import { Languages, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem>
          Inglês
        </DropdownMenuItem>
        <DropdownMenuItem>
          Espanhol
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}