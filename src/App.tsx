import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Books } from "./Pages/Books";
import { ProductPage } from "./Pages/BookPage";
import { Help } from "./Pages/Help";
import { CompanyPage } from "./Pages/CompanyPage";
import { Errors } from "./Pages/Errors";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Auth } from "./Pages/Auth";


export default function Example() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://openlibrary.org/works/OL45804W/editions.json')
    .then( res => res.json())
    .then( data => setData(data))
    .catch( err => console.log(err));
  }, [])
  return <>
  <Navbar/>
<BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>}/>                            //Главная страница 
   <Route path="/books" element={<Books/>}/>                      //Страница с книгами
   <Route path="/books/:proid" element={<ProductPage />} />       //Книга отдельно
   <Route path="/help" element={<Help/>}/>                        //Поддержка
   <Route path="/app" element={<CompanyPage/>}/>                  //О приложении
   <Route path="/auth" element={<Auth/>}/>                        //Авторизация
   <Route path="*" element={<Errors/>}/>
 </Routes>
 </BrowserRouter>
 <Footer/>
  </>
}
