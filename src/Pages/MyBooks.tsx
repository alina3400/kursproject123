import { useEffect, useState } from "react";

export function MyBooks() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/fav")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-white">
      <div className="grid justify-items-center sm:py-24 lg:max-w-7xl">
        <h2 className="ml-10 text-2xl justify-self-start font-bold tracking-tight text-gray-900">
          Мои книги
        </h2>
      </div>
    </div>
  );
}
