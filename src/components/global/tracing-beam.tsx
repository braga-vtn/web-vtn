"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from '@/lib/utils'
import Image from "next/image";
import { twMerge } from "tailwind-merge";

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

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Um Pouco Sobre Nós 💜",
    description: (
      <>
        <p>
          <strong>A Vistune emergiu com uma visão:</strong> Aplicar a
          tecnologia mais <strong>avançada</strong> de <strong>inteligência artificial </strong>
          adaptada ao mercado <strong>brasileiro</strong>. <br /><br />

          <strong>Em 2022</strong>, <Highlight>Matheus Braga,</Highlight>
          <strong> pioneiro e desenvolvedor por trás da Vistune</strong>,
          deu início ao projeto que hoje define a <strong>essência da startup</strong>. Ao longo
          desse tempo, a equipe mergulhou em uma variedade de setores com o objetivo
          de identificar e solucionar <strong>desafios específicos,</strong> incluindo
          <strong> e-commerce</strong>, <strong>clínicas médicas</strong>, o
          <strong> universo jurídico</strong>, entre outros.<br /><br />

          Por isso, o <strong>maior objetivo da Vistune</strong> é a otimização do
          <Highlight>atendimento ao cliente.</Highlight> <br /><br />

          A <strong>equipe da Vistune</strong> permanece comprometida com a <strong>
            evolução contínua</strong> de suas ferramentas e na <strong>inovação dos seus modelos</strong>.
          Para dar um vislumbre do que está por vir, temos uma <strong>novidade animadora 👇</strong> <br /><br />

          <Highlight>Novo modelo chamado Marta,</Highlight> pretendemos disponibilizar até o final de 2024,
          especialmente desenhado para transformar o ,<strong>mercado de clínicas</strong>. Este é um passo promissor em
          direção ao <strong>futuro</strong> que estamos <strong>construindo juntos</strong> 💜<br /><br />
        </p>
      </>
    ),
    badge: (<><p><strong>Sobre</strong></p></>),
    image:
      "/dashboard.jpg",
  },
  {
    title: "Modelos, Ferramentas e Funções 💡",
    description: (
      <>
        <p id="devs">
          O mercado de <Highlight>inteligência artificial</Highlight> está, indiscutivelmente, entre os
          que <strong>mais crescem no mundo</strong> atualmente. Existe uma vasta gama de <strong>modelos
            disponíveis</strong>, cada um projetado para atender a <strong>diferentes necessidades</strong>
          e <strong>objetivos.</strong><br /><br />

          Na <strong>Vistune</strong>, nossa <strong>dedicação</strong> é total para garantir que nossos usuários
          tenham acesso à <Highlight>tecnologia mais avançada possível.</Highlight> Para alcançar esse
          objetivo, estamos constantemente em <strong>busca de inovações</strong>, adicionando <strong>novas
            funcionalidades </strong> e <strong>aperfeiçoando</strong> as existentes diariamente. ✅<br /><br />

          Um dos nossos <strong>grandes diferenciais</strong> é a nossa atenção ao <Highlight>feedback dos
            usuários.</Highlight> Acreditamos que ninguém melhor do que <strong>vocês</strong>,
          <strong> nossos usuários</strong>, para apontar quais ferramentas são realmente
          <strong> necessárias</strong> e <strong>eficazes</strong> na resolução de problemas específicos. 🎯<br /><br />

          É esse <strong>compromisso</strong> em ouvir e implementar suas sugestões que nos permite
          não apenas oferecer <strong>boas ferramentas</strong>, mas sim as <strong>mais adequadas</strong> e
          <strong>eficientes</strong> para atender às suas necessidades.<br /><br />
        </p>
      </>
    ),
    badge: (<><p><strong>Atualizações</strong></p></>),
    image:
    "/flow.jpg",
  },
  {
    title: "Reinvente, Crie e Nos Deixe Sem Palavras 🔗",
    description: (
      <>
        <p>
          Estamos empolgados em abrir <strong>nossas ferramentas</strong> para você,
          <Highlight>desenvolvedor.</Highlight> 🌮<br /><br />
          
          Em nossa <strong>documentação</strong>, você encontrará todas as
          instruções de que precisa para <strong>aproveitar ao máximo nossa API</strong> e
          começar a <Highlight>criar seus próprios modelos de inteligência artificial</Highlight> 🔥<br /><br />

          Por enquanto, o acesso é <strong>limitado</strong>. Para acessar, é essencial que
          você se cadastre no <strong>&quot;Vistune Tools&quot;</strong>. Você encontrará mais detalhes
          e orientações em nossa <strong>documentação</strong>.<br /><br />

          Saiba que nossa equipe <strong>está pronta</strong> para apoiar você e sua empresa
          no <strong>desenvolvimento de modelos</strong> e na <strong>integração com os principais
          aplicativos</strong>. Além disso, temos o prazer de anunciar que <strong>nossa API </strong>
          agora oferece uma <strong>integração completa com o WhatsApp.</strong><br /><br />
          
          <Highlight>É hora de colocar a mão na massa</Highlight> 💜
        </p>
      </>
    ),
    badge: (<><p><strong>API Rest</strong></p></>),
    image:
    "/playground.jpg",
  },
];


export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
