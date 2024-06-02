import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddButton } from "../Components/AddButton";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export function Notes() {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8081/fav")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const [note, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/notes")
      .then((res) => res.json())
      .then((note) => setNotes(note))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleClick = async () => {};

  const handledel = async (item) => {
    axios
      .delete(`http://localhost:8081/notes`)
      .then((res) => setResponse(res))
      .catch((err) => setResponse(err));
  };

  return (
    <div className="bg-white">
      <div className="grid justify-items-center sm:py-24 lg:max-w-7xl">
        <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
          Заметки
        </h2>
        <div className="ml-10 justify-self-start space-x-10 mt-6 grid grid-cols-5">
          <div onClick={() => navigate("/profile/notes/new")}>
            <button className="ml-12 mt-12 justify-self-start bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full">
              Добавить
            </button>
          </div>
          {note.map(
            (item) =>
              item.mail == JSON.parse(localStorage.user).mail && (
                <>
                  <div className="grid place-content-start justify-stretch group relative border border-black rounded-lg ">
                    <div key={item.id_notes} item={item}>
                      <div className=" mt-5 mr-5 grid ml-32 grid-cols-2 justify-items-end">
                        <HiOutlinePencilSquare
                          onClick={() => handleClick(item)}
                        />
                        <TiDeleteOutline
                          className="size-5 border-gray-600"
                          onClick={() => handledel(item)}
                        />
                      </div>

                      <div className="ml-4 mr-4 mt-4 flex justify-between">
                        <div className="font-bold text-sm">{item.name}</div>
                      </div>
                      <div className="grid justify-items-end ">
                        <div className="mt-4 mr-4 font-light text-xs">
                          {item.note}
                        </div>
                        <div className="mt-2 mb-4 mr-4 font-light text-xs text-gray-700">
                          {item.date}
                        </div>
                      </div>
                      <div className="items-center self-end grid"></div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
}
