"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils'

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-violet-100 text-violet-700 dark:bg-violet-700/[0.2] dark:text-violet-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Ricardo Martins",
    designation: "CEO, WebShop",
    content: (
      <p>
        Estamos impressionados com a eficácia da <Highlight>inteligência artificial,</Highlight> é uma
        verdadeira virada de jogo para a minha empresa!
      </p>
    ),
  },
  {
    id: 1,
    name: "Luana Rodrigues",
    designation: "Founder, Luana Cosméticos",
    content: (
      <p>
        A ferramenta da <Highlight>Vistune é incrivel,</Highlight>sério!
        Nunca imaginei que chegariamos <Highlight>nesse nível</Highlight> de tecnologia na empresa.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Evans",
    designation: "Desenvolvedor Web",
    content: (
      <p>
        &quot;Simplesmente a <Highlight>melhor ferramenta</Highlight> para criar modelos de IA. O
        <Highlight>poder criativo da Vistune</Highlight> é loucura!!&quot; ~ tradução
      </p>
    ),
  },
];


let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};