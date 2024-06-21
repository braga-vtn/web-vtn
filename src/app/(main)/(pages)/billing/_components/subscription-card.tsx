'use client'
import React from 'react'
type Props = {
  onPayment(id: string): void
  products: any[]
  tier: string
}
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      {products &&
        products.map((product: any) => (
          <Card
            className="p-3"
            key={product.id}
          >
            <CardHeader>
              <CardTitle>
                <p>
                  {product.nickname == 'Free'
                    ? 'Starter'
                    : product.nickname == 'Pro'
                      ? 'Company'
                      : product.nickname == 'Unlimited' && 'Enterprise'}
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription>
                {product.nickname == 'Unlimited'
                  ? 'Enjoy a monthly torrent of credits flooding your account, empowering you to tackle even the most ambitious automation tasks effortlessly.'
                  : product.nickname == 'Pro'
                    ? 'Experience a monthly surge of credits to supercharge your automation efforts. Ideal for small to medium-sized projects seeking consistent support.'
                    : product.nickname == 'Free' &&
                    "Get a monthly wave of credits to automate your tasks with ease. Perfect for starters looking to dip their toes into Fuzzie's automation capabilities."}
              </CardDescription>
              <div className="flex justify-between">
                <p>
                  {product.nickname == 'Free'
                    ? '100'
                    : product.nickname == 'Pro'
                      ? '500'
                      : product.nickname == 'Unlimited' && '3.000'}{' '}
                  Interações
                </p>
                <p className="font-bold">
                  {product.nickname == 'Free'
                    ? 'Gratuito'
                    : product.nickname == 'Pro'
                      ? 'R$ 497.00/mês'
                      : product.nickname == 'Unlimited' && 'R$ 1.897/mês'}
                  
                </p>
              </div>
              {product.nickname == tier ? (
                <Button
                  disabled
                  variant="outline"
                >
                  Plano Ativo
                </Button>
              ) : (
                <Button
                  onClick={() => onPayment(product.id)}
                  variant="outline"
                >
                  Selecionar
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
    </section>
  )
}
