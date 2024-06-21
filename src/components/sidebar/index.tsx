'use client'
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { menuConfig, menuOptions } from '@/lib/constant';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname();

  return (
    <nav className="h-screen flex items-start flex-col gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col w-full">
        <Link href={"/"}>
          <Image
            src="/vistune-dark.svg"
            width={30}
            height={30}
            alt="logo"
            className="shadow-sm sticky top-0 bg-transparent z-6"
          />
        </Link>
      </div>
      <div className="overflow-auto w-full flex items-center flex-col gap-6">
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        {
                          'dark:bg-transparent bg-transparent':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <Button variant="gooeyLeftDark2" size="icon">
                        <menuItem.Component
                          selected={pathName.includes(menuItem.href)}
                        />
                      </Button>
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="black:bg-black/10 bg-white/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
        <Separator />
        <TooltipProvider>
          {menuConfig.map((menuConfig) => (
            <ul key={menuConfig.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuConfig.href}
                      className={clsx(
                        {
                          'dark:bg-transparent bg-transparent':
                            pathName === menuConfig.href,
                        }
                      )}
                    >
                      <Button variant="gooeyLeftDark2" size="icon">
                        <menuConfig.Component
                          selected={pathName.includes(menuConfig.href)}
                        />
                      </Button>
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuConfig.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  )
}

export default MenuOptions;