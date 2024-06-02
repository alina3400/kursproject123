import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function NotePage(){
    const {noteid} = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('http://localhost:8081/notes')
    .then( res => res.json())
    .then( data => setData(data))
  });
    const newProd = data.find((data) => data.id_notes  == noteid)
    return<>
    <div>
    {newProd &&  (
      <>
      <div className="grid justify-items-center grid-cols-2 mt-36 mr-20">
        <div className="w-72 outline outline-1 overflow-hidden rounded-md">
        </div>
      <div className="w-fit outline outline-1 outline-slate-200 overflow-hidden rounded-md">
        <h2 className="uppercase font-bold text-4xl pl-6 pt-6 pr-6"> {newProd.note}</h2>
        <h1 className="text-base font-bold pl-6 pt-6">{newProd.date}</h1>
      </div>
      </div>
        </>
      )}
      </div>
    </>
}