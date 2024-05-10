import { Button } from "../Components/Button";

export function Auth(){
    return <>
<div className="place-items-center mt-48 mr-48 mb-48 ml-48 grid grid-cols-1 gap-10">
    <div className="w-96">
    <div className='font-bold text-2xl text-center mb-5'>Войти</div>
  <div className="relative mt-2  h-10 w-full min-w-[200px]">
   <> Имя </>
    <input type="email" placeholder="Name"
      className="peer mt-2 h-full w-full rounded-full !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
  </div>
</div>
<div className="w-96">
  <div className="relative mt-2  h-10 w-full min-w-[200px] ">
  <> Почта </>
    <input type="email" placeholder="Email Address"
      className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
  </div>
</div>
<div className="w-96">
  <div className="relative mt-2 h-10 w-full min-w-[200px] ">
  <> Пароль </>
    <input type="email" placeholder="Password"
      className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
  </div>
</div>
<Button/>
</div>
</>
}