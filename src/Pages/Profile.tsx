import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../Components/AddButton";

export function Profile() {
  const navigate = useNavigate();
  const handleLoginEvent = async () => {
    localStorage.clear();
    navigate("/");
    window.location.reload()
  };



  return (
    <div className="bg-white">
      <div className="grid justify-items-center sm:py-24 lg:max-w-7xl">
        <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
          Профиль
        </h2>
        <button
          className="ml-12 mt-12 justify-self-start bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full"
          onClick={() => {navigate(`/profile/fav`)}}
        >
          Мои книги
        </button>
        <button
          className="ml-12 mt-12 justify-self-start bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full"
          onClick={handleLoginEvent}
        >
          Выход
        </button>
      </div>
    </div>
  );
}
