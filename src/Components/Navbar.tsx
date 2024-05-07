import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/16/solid";


export function Navbar(){
    function setMobileMenuOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

    return<>
<header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Категории
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                <a href="/books/1part">
                1 part
                </a>
                </div>
                <div className="p-4">
                <a href="/books/2part">
                2 part
                </a>
                </div>
                <div className="p-4">
                <a href="/books/3part">
                3 part
                </a>
                </div>
                <div className="p-4">
                <a href="/books/4part">
                4 part
                </a>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Главная
          </a>
          <a href="/app" className="text-sm font-semibold leading-6 text-gray-900">
            О приложении
          </a>
          <a href="/help" className="text-sm font-semibold leading-6 text-gray-900">
            Поддержка
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/auth" className="text-sm font-semibold leading-6 text-gray-900">
            Войти <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      </header>
    </>
}




