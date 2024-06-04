import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  

  const handleClick = async (item) => {
    navigate('/profile/notes/:noteid')
  };

  const handledel = async (item) => {
    axios
      .delete(`http://localhost:8081/notes/`+item.id_notes, item)
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
          Заметки
        </h2>
        <div className="ml-10 justify-self-start space-x-10 mt-6 grid grid-cols-4">
          <div onClick={() => navigate("/profile/notes/new")}>
            <button className="ml-6 mt-12 justify-self-start bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full">
              Добавить
            </button>
          </div>
          {note.map(
            (item) =>
              item.mail == JSON.parse(localStorage.user).mail && (
                <>
                  <div className="grid place-content-start justify-stretch group relative border border-black rounded-lg ">
                    <div key={item.id_notes} item={item}>
                      <div
                        key={item.id_notes}
                        className=" mt-3 mr-3 grid ml-32 justify-items-end"
                      >
                        {/* <button>
                          <HiOutlinePencilSquare
                            onClick={() => handleClick(item)}
                          />
                        </button> */}
                        <button className="size-5">
                          <TiDeleteOutline
                            onClick={() => handledel(item)}
                            className="size-5"
                          ></TiDeleteOutline>
                        </button>
                      </div>

                      <div className="ml-6 mr-4 mt-4 flex justify-between">
                        <div className="font-bold text-sm">{item.name}</div>
                      </div>
                      <div className="ml-10 grid justify-items-end ">
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
