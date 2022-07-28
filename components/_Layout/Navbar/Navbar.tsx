import classNames from "classnames";
import Container from "../Container";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { routes } from "../../../routes";
import { useRouter } from "next/router";
import PopupDonation from "../../PopupDonation";

type NavbarProps = {
  //
};

const navigation = [
  { name: "Badgetor", href: routes.home },
  { name: "Collections", href: routes.collections },
];

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-dark-600 backdrop-filter backdrop-blur bg-opacity-70 items-center sticky top-0 shadow-sm z-20"
    >
      {({ open }) => (
        <>
          <Container>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/assets/img/logo.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/assets/img/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            router.pathname == item.href
                              ? "bg-dark-500 "
                              : "hover:bg-dark-500 duration-200 ease-in-out transition",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={
                            router.pathname == item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <PopupDonation
                  btnElement={(onClick) => (
                    <button
                      onClick={onClick}
                      className="outline-none w-full bg-primary-500 rounded px-4 py-2 text-sm font-medium text-white hover:bg-primary-400 transition-all duration-200 ease-in-out"
                    >
                      Donation
                    </button>
                  )}
                />
              </div>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="div">
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        router.pathname == item.href
                          ? "bg-dark-500"
                          : "hover:bg-dark-500",
                        "block px-3 py-2 rounded-md text-base font-medium duration-200 ease-in-out transition"
                      )}
                      aria-current={
                        router.pathname == item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
              <div className="block sm:hidden px-3 py-2 hover:bg-dark-500 rounded">
                <PopupDonation
                  btnElement={(onClick) => (
                    <button
                      onClick={onClick}
                      className="outline-none w-full bg-primary-500 rounded px-4 py-2 text-sm font-medium text-white hover:bg-primary-400 transition-all duration-200 ease-in-out"
                    >
                      Donation
                    </button>
                  )}
                />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  //
};

export default Navbar;
