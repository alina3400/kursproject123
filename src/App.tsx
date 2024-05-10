import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Books } from "./Pages/Books";
import { BookPage } from "./Pages/BookPage";
import { Help } from "./Pages/Help";
import { CompanyPage } from "./Pages/CompanyPage";
import { Errors } from "./Pages/Errors";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Auth } from "./Pages/Auth";

export default function App() {
  
  return <>
  <Navbar/>
<BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>}/>                            //Главная страница 
   <Route path="/books" element={<Books/>}/>                      //Страница с книгами
   <Route path="/books/:proid" element={<BookPage />} />          //Книга отдельно
   <Route path="/help" element={<Help/>}/>                        //Поддержка
   <Route path="/app" element={<CompanyPage/>}/>                  //О приложении
   <Route path="/auth" element={<Auth/>}/>                        //Авторизация
   <Route path="*" element={<Errors/>}/>
 </Routes>
 </BrowserRouter>
 <Footer/>
  </>
}
