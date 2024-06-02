import { useEffect, useState } from "react";

export function AddButton() {
  const [active, setActive] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    setLoggedIn(Boolean(loggedUser));
  }, []);

  const handleClick = () => {
    setActive(!active);
    
  };
  const var1 =
    "bg-lime-400 relative text-center h-10 w-full  font-light hover:bg-lime-600 rounded-full";
  const var2 =
    "bg-gray-300 relative text-center h-10 w-full font-light hover:bg-gray-500 rounded-full";
  return (
    <>
      <div className="mt-4 min-w-76">
        <button disabled={loggedIn===false} onClick={handleClick} className={active ? var2 : var1}>
          <div className="text-base font-bold">Добавить</div>
        </button>
      </div>
    </>
  );
}
