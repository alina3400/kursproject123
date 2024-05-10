import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";


/*<div className="ml-96 place-content-center mr-96 mb-5 flex space-x-4 static">
      <a href='/books' key={"fantasy"} onClick={this.handleClick.bind(this, name)} className="bg-blue-500 relative py-1 text-center h-10 w-20 max-w-48 font-light hover:bg-blue-700 rounded-full">
          <div className="text-xs leading-8 text-white">
          фэнтези 
          </div>
        </a>
        <div id='detective' className="bg-blue-500 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-blue-700 rounded-full">
          <div className="text-xs leading-8 text-white">
            детективы 
          </div>
        </div>
        <div id='thriller' className="bg-blue-500 relative py-1 text-center h-10 w-20 max-w-48 font-light hover:bg-blue-700 rounded-full">
          <div className="text-xs leading-8 text-white">
            триллеры
          </div>
        </div>
        </div>*/

export function Navbar(this: any){

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
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
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




