import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

if (typeof window !== "undefined") {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  if (user.login) {
    window.location.href = "/Home";
  }
}

export default function Login() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const time = new Date().getTime();

  const key = process.env.KEY;

  useEffect(() => {
    const input = document.getElementById("input");
    input?.addEventListener("focus", function () {
      this.removeAttribute("placeholder");
    });
    input?.addEventListener("blur", function () {
      this.setAttribute("placeholder", "Enter key");
    });
  }, []);

  const userLogin = {
    login: true,
    time: time,
    key: key,
  };

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      if (input === key) {
        sessionStorage.setItem("user", JSON.stringify(userLogin));
        setLoading(false);
        window.location.href = "/Home";
      } else {
        setLoading(false);
        setError(true);
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="container mx-auto flex flex-col items-center justify-center h-full gap-5">
            <Loading />
          </div>
        </div>
      )}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Oppss ! </strong>
          <p className="block sm:inline pr-10">
            the key you entered is incorrect, please try again
          </p>
          <p className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setError(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </p>
        </div>
      )}

      <form
        className="flex gap-5"
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
      >
        <div className="input-container">
          <input
            className="input"
            type="text"
            id="input"
            placeholder="Enter key"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label className="label" htmlFor="input">
            Enter Key
          </label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
