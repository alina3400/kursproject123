import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function CreateNote() {
  const [data, setData] = useState([]);
  const [id_notes, setId] = useState(0)
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const current = new Date();
  useEffect(() => {
    fetch("http://localhost:8081/notes")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const handleLoginEvent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setId( id_notes +1)
    const url = "http://localhost:8081/notes";
    const newnote = {
      id_notes: id_notes,
      name: name,
      note: note,
      date: `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`,
      mail: JSON.parse(localStorage.user).mail,
    };
    try {
      axios
        .post(url, newnote)
        .then((res) => console.log("added!"))
        .catch((err) => console.log(err));
    } catch (error) {
        console.log(error)
    }
    console.log(newnote)
    console.log(Date())
    console.log(`${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`)
    navigate('/profile/notes');
    window.location.reload()
  };

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className=" justify-items-center sm:py-24 lg:max-w-7xl">
          <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
            Новая запись
          </h2>
          <form onSubmit={handleLoginEvent}>
            <div className="ml-10 space-y-12 grid justify-items-start mt-36 mr-20">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Title"
                className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Text"
                className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <div className="justify-self-end" onClick={handleLoginEvent}>
                <button className="mt-10 bg-gray-300 relative py-1 text-center h-10 w-24 max-w-48 font-light hover:bg-gray-500 rounded-full">
                  Добавить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
