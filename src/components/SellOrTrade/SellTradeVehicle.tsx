'use client'
import React from 'react'
import { GradientCard } from '../ui/card';
import { Section, SectionHeader } from "@/components/ui/section";


function SellTradeVehicle() {
  return (
    <>
  <Section>
      <div className="w-full md:max-w-[690px] flex flex-col items-center">
        <SectionHeader>
          Discover your purchasing alternatives now.
        </SectionHeader>
      </div>
      <div className="flex md:max-w-[690px] w-full justify-center">
        <GradientCard variant="hide-on-mobile" className="w-full">
          <div className="flex flex-col gap-[30px] md:h-full w-full items-center justify-center bg-white rounded-md md:p-[32px]">
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 ">
             <h1>New TAb</h1>
            </div>
            <h1>gfjhgj</h1>
          </div>
        </GradientCard>
      </div>
    </Section>
    </>
  )
}

export default SellTradeVehicle