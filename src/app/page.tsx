import { SpotlightPreview } from '@/components/global/Spotlight'
import CardPlan from '@/components/global/card-plan'
import { CardStackDemo } from '@/components/global/card-stack'
import { HeroParallax, TitlePlatform } from '@/components/global/connect-parallax'
import { FloatingNavDemo } from '@/components/global/floating-navbar'
import { GridBackgroundDemo } from '@/components/global/grid-background'
import { HeroHighlightDemo } from '@/components/global/hero-highlight'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { LampDemo } from '@/components/global/lamp'
import { LayoutGridDemo } from '@/components/global/layout-grid'
import Navbar from '@/components/global/navbar'
import { SparklesPreview } from '@/components/global/sparkles'
import { TracingBeamDemo } from '@/components/global/tracing-beam'
import { TypewriterEffect, TypewriterEffectDemo } from '@/components/global/typewriter-effect'
import { clients, products } from '@/lib/constant'

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <GridBackgroundDemo>
          <Navbar />
          <FloatingNavDemo />
          <SparklesPreview />
          <TypewriterEffectDemo />
          <div id="models" className="flex justify-center items-center md:mt-[6rem] mt-[-100px] mb-[12rem]">
            <TitlePlatform />
            <LayoutGridDemo />
          </div>
          <div id="integrations" className='mb-[22rem]'></div>
          <HeroHighlightDemo />
          <div className="flex justify-center items-center md:mt-[6rem] mt-[-100px] mb-[12rem]">
            <InfiniteMovingCards
              items={clients}
              direction="right"
              speed="slow"
            />
          </div>
          <div id="plan" className='mt-[26rem]'>
            <LampDemo />
            <CardPlan />
          </div>
          <CardStackDemo />
          <div id="about" className='mt-[15rem]'>
            <TracingBeamDemo />
          </div>
        </GridBackgroundDemo>
        <div>
          <SpotlightPreview />
        </div>
      </section>
    </main>
  )
}