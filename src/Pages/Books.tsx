import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../Components/AddButton";

export function Books() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8081/books")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleClick = (item) => {
    setActive(!active);
  };

  return (
    <>
      <div className="bg-white">
        <div className=" px-10 py-18 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Книги
          </h2>
          <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {data.map((item) => (
              <div className="group relative ">
                <div key={item.id_books} item={item}>
                  <div
                    onClick={() => {
                      navigate(`/${item.id_books}`);
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
                    {/* <button
                      key={item.id_books}
                      className="size-5 h-8 w-12 rounded-full border border-gray-400"
                      onClick={() => handleClickdelete(item)}
                    >
                      -
                    </button> */}
                    <div key={item.id_books} onClick={() => handleClick(item)}>
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
