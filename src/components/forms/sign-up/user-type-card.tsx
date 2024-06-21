'use client'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Building, Building2, Bus, User } from 'lucide-react'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  value: string
  title: string
  text: string
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          'w-full cursor-pointer',
          userType == value && ' relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-neutral-600 dark:from-neutral-500 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] border-current'
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                'flex justify-center p-3',
                userType == value && 'border'
              )}
            >
              {value == 'owner' ?
                <Building
                  size={30}
                  className={cn(
                    userType == value ? 'text-neutral-100' : 'text-neutral-400'
                  )}
                />
                :
                <User
                  size={30}
                  className={cn(
                    userType == value ? 'text-neutral-100' : 'text-neutral-400'
                  )}
                />
              }
            </Card>
            <div className="">
              <CardDescription className="text-iridium">
                {title}
              </CardDescription>
              <CardDescription className="text-neutral-400">
                {text}
              </CardDescription>
            </div>
          </div>
          <div>
              <Input
                {...register('type', {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className="hidden"
                type="radio"
              />
          </div>
        </CardContent>
      </Card>
    </Label>
  )
}

export default UserTypeCard