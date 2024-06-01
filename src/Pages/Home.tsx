import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../Components/AddButton";

export function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8081/books`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  

  const navigate = useNavigate();

  function handleClick(item: never): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="bg-white">
        <div className="grid justify-items-center sm:py-12 lg:max-w-7xl">
          <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
            Главная
          </h2>
          <div className="ml-10 mt-10 mr-10">
          <h2 className=" text-lg justify-self-start font-bold tracking-tight text-gray-900">
            Детективы
          </h2>
            <img
              src="src\assets\detective_pic.png"
              className="mt-2 mb-12 justify-self-center mx-auto rounded-lg max-h-36"
            ></img>
          </div>
          <div className="justify-items-center place-content-center space-x-10 mt-6 grid grid-cols-5">
            {data &&
              data
                .filter((a) => a.genre === "Детектив")
                .map((item) => (
                  <div className="group relative ">
                    <div key={item.id_books} item={item}>
                      <div
                        onClick={() => {
                          navigate(`/books/${item.id_books}`);
                        }}
                        className="outline w-fit outline-1 outline-slate-200 overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75"
                      >
                        <img src={item.image} className=" max-h-72" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="font-bold text-sm">{item.name}</div>
                      </div>
                      <div className="grid justify-items-end ">
                        <div className="mt-4 mr-2 font-light text-xs">
                          {item.author}
                        </div>
                        <div className="mt-2 mr-2 font-light text-xs text-gray-700">
                          {item.genre}
                        </div>
                      </div>
                      <div className="items-center self-end grid">
                        <div
                          key={item.id_books}
                          onClick={() => handleClick(item)}
                        >
                          <AddButton></AddButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          <div className="ml-10 mr-10">
          <h2 className=" mt-10 text-lg justify-self-start font-bold tracking-tight text-gray-900">
            Фентези
          </h2>
            <img
              src="src\assets\fantasy.png"
              className="mt-2 mb-12 justify-self-center mx-auto rounded-lg max-h-36"
            ></img>
          </div>
          <div className="justify-items-center space-x-10 mt-6 grid grid-cols-5">

            {data &&
              data
                .filter((a) => a.genre === "Фантастика")
                .map((item) => (
                  <div className="group relative ">
                    <div key={item.id_books} item={item}>
                      <div
                        onClick={() => {
                          navigate(`/books/${item.id_books}`);
                        }}
                        className="outline w-fit outline-1 outline-slate-200 overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75"
                      >
                        <img src={item.image} className=" max-h-72" />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="font-bold text-sm">{item.name}</div>
                      </div>
                      <div className="grid justify-items-end ">
                        <div className="mt-4 mr-2 font-light text-xs">
                          {item.author}
                        </div>
                        <div className="mt-2 mr-2 font-light text-xs text-gray-700">
                          {item.genre}
                        </div>
                      </div>
                      <div className="items-center self-end grid">
                        <div
                          key={item.id_books}
                          onClick={() => handleClick(item)}
                        >
                          <AddButton></AddButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
