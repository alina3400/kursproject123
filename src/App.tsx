import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Books } from "./Pages/Books";
import { BookPage } from "./Pages/BookPage";
import { Help } from "./Pages/Help";
import { CompanyPage } from "./Pages/CompanyPage";
import { Errors } from "./Pages/Errors";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Auth } from "./Pages/Auth";
import { Regist } from "./Pages/Regist";
import { Profile } from "./Pages/Profile";
import { Notes } from "./Pages/Notes";
import { MyBooks } from "./Pages/MyBooks";
import { NotePage } from "./Pages/NotePage";
import { CreateNote } from "./Pages/CreateNote";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> //Главная страница
          <Route path="/books/:proid" element={<BookPage />} /> //Книга отдельно
          <Route path="/books" element={<Books />} />
          <Route path="/help" element={<Help />} /> //Поддержка
          <Route path="/app" element={<CompanyPage />} /> //О приложении
          <Route path="/auth" element={<Auth />} /> //Авторизация
          <Route path="/reg" element={<Regist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/notes" element={<Notes />} />
          <Route path="/profile/notes/new" element={<CreateNote />} />
          <Route path="/profile/notes/:noteid" element={<NotePage />} />
          <Route path="/profile/fav" element={<MyBooks />} />
          <Route path="*" element={<Errors />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
