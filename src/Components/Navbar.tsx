import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { FaRegStickyNote } from "react-icons/fa";

export function Navbar(this: any) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect( () => {
    const loggedUser = localStorage.getItem('user');
    setLoggedIn(Boolean(loggedUser));
  }, []);


  
  return (
    <>
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Bookshelf</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Главная
            </a>
            <a
              href="/app"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              О приложении
            </a>
            <a
              href="/help"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Поддержка
            </a>
            
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {loggedIn === true && (
             <>
             <a href="/profile/notes" className="mt-1 mr-10">
            <FaRegStickyNote />
            </a>
              <a
                href="/profile"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Профиль
              </a></>
            )}
            {loggedIn === false && (
              <a
                href="/auth"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Войти <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
