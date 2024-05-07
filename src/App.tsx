import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Books } from "./Pages/Books";
import { ProductPage } from "./Pages/ProductPage";
import { Help } from "./Pages/Help";
import { CompanyPage } from "./Pages/CompanyPage";
import { Errors } from "./Pages/Errors";


export default function Example() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then( res => res.json())
    .then( data => setData(data))
    .catch( err => console.log(err));
  }, [])
  return <>
<BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>}/>                            //Главная страница 
   <Route path="/books" element={<Books/>}/>                      //Страница с книгами
   <Route path="/product/:proid" element={<ProductPage />} />     //Книга отдельно
   <Route path="/help" element={<Help/>}/>                        //Поддержка
   <Route path="/app" element={<CompanyPage/>}/>              //О приложении
   <Route path="*" element={<Errors/>}/>
 </Routes>
 </BrowserRouter>
  </>
}
