import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../Components/AddButton";

export function Notes() {

  const navigate = useNavigate();
  const handleLoginEvent = async () =>  {
   
  }

  return (
    <div className="bg-white">
      <div className="grid justify-items-center sm:py-24 lg:max-w-7xl">
        <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
          Заметки
        </h2>
        
      </div>
    </div>
  );
}
