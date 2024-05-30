import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export function Books(){
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('http://localhost:8081/books')
      .then( res => res.json())
      .then( data => setData(data))
      .catch( err => console.log(err));
  }, [])


    
  const navigate = useNavigate();
  
    return(
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-10 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Книги</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((d) => (
            <div key={d.id_books} className="group relative">
              <div onClick={() => { navigate(`/books/${d.id_books}`)}} className="drop-shadow-sm outline outline-1 outline-slate-200 overflow-hidden rounded-md bg-gray-200 lg:h-80 group-hover:opacity-75">
                <img src={d.image}
                  className="h-full w-full object-cover object-center"/>
                 </div>
              <div  className="mt-5 flex justify-between">
                  <h3 className="mt-4 text-sm text-black">{d.name}</h3>
              </div>
              <div className="flex justify-between"> 
              <h3 className="pt-6 text-sm text-gray-700">{d.author}</h3></div>
              <p className="pt-2 pl-36 text-sm text-gray-700">{d.year}</p>
            </div>
          ))}
              </div>
            </div>
       </div>
       </>
    )
  }

