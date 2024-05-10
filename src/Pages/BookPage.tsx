import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*https://books.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDWripod65dD9VfcuVjhlFgjcPFAL_uh20*/

export function BookPage(){
    const {proid} = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
    .then( res => res.json())
    .then( data => setData(data.items))
  });
    const newProd = data.find((data) => data.id == proid)
    return<>
    <div>
    {newProd &&  (
      <>
      <div className="columns-2 mt-36">
        <div className="ml-80 w-6/12 outline outline-1 outline-slate-200 overflow-hidden rounded-md hover:bg-gray-200 pl-6 pr-6 pt-6 pb-6">
        <img src={newProd.volumeInfo.image} className="contrast-125 h-full w-full object-cover object-center"/>
        </div>
      <div className="w-5/6 hover:bg-gray-100 outline outline-1 outline-slate-200 overflow-hidden rounded-md">
        <h2 className="uppercase text-4xl pl-6 pt-6 pr-6"> {newProd.volumeInfo.title}</h2>
        <h1 className="text-4xl pl-6 pt-6">{newProd.volumeInfo.authors} $</h1>
        <h1 className="pl-6 pt-6 pr-6 p-6"> {newProd.volumeInfo.categories}</h1>
      </div>
      </div>
        </>
      )}
      </div>
    </>
}