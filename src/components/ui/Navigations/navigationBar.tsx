
import { UserIcon } from "lucide-react";
import BurgerIcon from "../../Icons/BurgerIcon";
import { Button } from "../button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetItem,
  SheetDescription,
} from "../sheet";
import Image from "next/image";
import { useState } from "react";
import Shop from "./NavigationItems/shop";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./navigation";
import { NavigationsType, NavigationContentType } from "./type";
import SellTrade from "./NavigationItems/sellTrade";
import Service from "./NavigationItems/service";
import Finance from "./NavigationItems/finance";
import Learn from "./NavigationItems/learn";



const NavigationBar = () => {
  const navigationData: NavigationsType = [
    {
      title: "Shop",
      content: <Shop />,
    },
    {
      title: "Sell/Trade",
      content: <SellTrade />
    },
    {
      title: "Service",
      content: <Service />,
    },
    {
      title: "Finance",
      content: <Finance />,
    },
    {
      title: "Learn",
      content: <Learn />,
    },
    {
      title: "Help",
      content: <Learn />,
      mobileOnly: true,
    },
  ];

  const [selectedItem, setSelectedItem] =
    useState<NavigationContentType | null>(null);

  const handleSheetItemClick = (index: number) => {
    setSelectedItem(navigationData[index]);
  };

  const handleBackButton = () => {
    setSelectedItem(null);
  }

  return (
    <>
      <div className="md:hidden flex p-[15px] justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open div menu</span>
              <BurgerIcon />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full px-0 py-[60px] transition-all overflow-y-scroll" selectedItem={selectedItem} onBack={handleBackButton}>
            {!selectedItem && (
              <div className="divide-y first:border-t-2 z-10 divide-gray-100 border-y-[1px] border-border-color">
                {navigationData.map((nav, index) => (
                  <SheetItem
                    key={index}
                    label={nav.title}
                    onClick={() => handleSheetItemClick(index)}
                  />
                ))}
              </div>
            )}
            {selectedItem?.content}
          </SheetContent>
        </Sheet>
        <Image src="/images/logo.png" alt="logo" width="200" height="42" />
        <UserIcon />
      </div>
      <div className="hidden md:flex mx-auto justify-between items-center max-w-screen-2xl lg:px-40 lg:py-[30px] md:px-10 md:py-[15px]">
        <Image src="/images/logo.png" alt="logo" width="200" height="42" />
        <NavigationMenu className="hidden md:inline">
          <NavigationMenuList>
            {navigationData.map((navigation, index) => (
              <NavigationMenuItem key={index + "-nav"}>
                <NavigationMenuTrigger>
                  {navigation.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {navigation.content}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="gradient" className="text-dark px-5 py-2.5 font-bold">
          SIGNUP
        </Button>
      </div>
    </>
  );
};

export default NavigationBar;
