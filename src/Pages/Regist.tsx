import { useState } from "react";
import axios from 'axios';


export function Regist() {
  const [loginError, setLoginError] = useState('');
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id_users, setId] = useState();
  const [success, setSuccess] = useState(false);

  const handleLoginEvent = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = "http://localhost:8081/users";
    const data = {
      name: name,
      mail: mail,
      password: password,
    };
    try {
      axios
        .post(url, data)
        .then((res) => console.log("Registered!"))
        .catch((err) => console.log(err));
        setSuccess(true);
        localStorage.setItem("user", JSON.stringify(data));
      console.log("user", JSON.stringify(data))
      console.log(localStorage)
    } catch (error) {}
  };
  return (
    <>
       {success ? (
        <div className="place-items-center mt-48 mr-48 mb-24 ml-48 grid grid-cols-1 gap-10">
          <div className="w-96">
            <div className="font-bold text-2xl text-center">Успешно!</div>
          </div>
          <a href="/">
            <button className="h-16 bg-lime-400 hover:bg-lime-600 w-52 font-bold text-16 text-center rounded-md">
              Вернуться на главную
            </button>
          </a>
        </div>
      ) : (
        <form method="post" onSubmit={handleLoginEvent}>
          <div className="place-items-center mt-48 mr-48 mb-24 ml-48 grid grid-cols-1 gap-10">
            <div className="w-96">
              <div className="font-bold text-2xl text-center">Регистрация</div>
            </div>
            <div className="w-96">
              {loginError && (
                <div className="text-red-700 font-bold">{loginError}</div>
              )}
              <div className="w-96">
                <div className="relative mt-2 h-10 w-full min-w-[200px] ">
                  <> Имя </>
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
              </div>
              <div className="w-96">
                <div className="relative mt-12 h-10 w-full min-w-[200px] ">
                  <> Почта </>
                  <input
                    type="mail"
                    value={mail}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
              </div>
            </div>
            <div className="w-96">
              <div className="relative mt-2 h-10 w-full min-w-[200px] ">
                <> Пароль </>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="peer mt-2 h-full w-full rounded-full !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-500/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-full mt-5 h-10 w-10 min-w-[200px] border border-black"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      )}
    </>
  );
}
export default Regist;
