import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function MyBooks() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8081/fav")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);


  const navigate = useNavigate();


  const handledel = async (item) => {
    console.log(item.id_books);
    axios
      .delete(`http://localhost:8081/fav/` + item.id_books, item)
      .then((response) => {
        console.log("deleted", response.data);
      })
      .catch((err) => setResponse(err));
      window.location.reload()
  };

  return (
    <div className="bg-white">
      <div className="grid justify-items-center sm:py-24 lg:max-w-7xl">
        <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
          Мои книги
        </h2>
        <div className="justify-items-center place-content-center space-x-10 mt-6 grid grid-cols-5">
          {data.map(
            (item) =>
              item.mail == JSON.parse(localStorage.user).mail && (
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

                    <button
                      className="border bg-gray-100 mt-3 text-center h-10 w-full border-black rounded-full"
                      onClick={() => handledel(item)}
                    >
                      {" "}
                      Удалить
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
