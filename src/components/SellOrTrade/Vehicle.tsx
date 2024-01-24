import React from 'react'
import { Tab, Tabs } from '../Common/Tabs/Tabs'
import Button from '../Common/Button/Button'

const Vehicle = () => {
  return (
    <>
      <div className="flex md:max-w-[890px] w-full justify-center">
        <div className="w-full font- [400]">
          <h1 className="text-left  text-[#001B44] lg:text-[56px]  mb-[20px]">
            Vehicle
          </h1>
          <p className="text-left text-[#4B5768] lg:text-[20px] ">
            Unable to find a vehicle without specific details
          </p>
          <Tabs>
            <Tab component="content of tab 1">Tab 1</Tab>
            <Tab component="content of tab 2" active>
              Tab 2
            </Tab>
            <Tab component="content of tab 3">Tab 3</Tab>
            <Tab component="content of tab 4">Tab 4</Tab>
          </Tabs>
          <a
            href=""
            className="block text-left underline  text-[#001B44] lg:text-[14px]  mb-[20px] font-[700]"
          >
            Where is my VIN?
          </a>
          <input
            type="text"
            placeholder="VIN (Vehicle Identification Number)"
            className=" block w-[350px] md:w-[456px] h-[72px] rounded-[12px] border-solid border-2 border-[#8E97A6] indent-4"
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <Button
          variant="gray"
          label="Continue"
          className="min-w-full w-full mb-[18px] md:mb-6"
        />
        <Button
          variant="primary"
          label="Continue"
          className="min-w-full w-full mb-[18px] md:mb-6"
        />
      </div>
  </>
  )
}

export default Vehicle