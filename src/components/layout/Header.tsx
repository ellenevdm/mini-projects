import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";
import BurgerMenu from "../ui/BurgerMenu";
import XIcon from "../ui/XIcon";

const navigation = [
  { name: "Counter", href: "/counter", current: true },
  { name: "Quiz", href: "/quiz", current: false },
  { name: "Todo", href: "/todo", current: false },
  { name: "Quote Generator", href: "/quote-generator", current: false },
  { name: "Tip Calculator", href: "/tip-calculator", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header: FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="absolute -inset-0.5 " />
              <span className="sr-only">Open main menu</span>
              <BurgerMenu
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href={"/"} className="text-white text-2xl font-bold">
                Mini Apps
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton key={item.name} as="div">
              <Link
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
