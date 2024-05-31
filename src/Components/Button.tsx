import { useState } from "react";

export function Button(){
    const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const var1 = "bg-lime-400 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-lime-600 rounded-full";
  const var2 = "bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full";
    return<>
    <div className="mt-4">
      <button
        onClick={handleClick}
        className={active ? var2 : var1}>
          Войти
      </button>
    </div>
    </>
}