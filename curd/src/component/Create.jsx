import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [Form, setForm] = useState({
    email: "",
    name: "",
    age: "",
  });

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };
  console.log(Form);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7001/create", Form)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-400">
      <div className="rounded-xl shadow-xl shadow-slate-800 bg-white p-20 md:p-10">
        <h1 className="text-3xl font-bold mb-5">Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-lg md:text-xl"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-9 w-64 form-control border border-black rounded p-2 md:w-96 "
              placeholder="Name"
              name="name"
              value={Form.name}
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-lg md:text-xl"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="h-9 w-64 form-control border border-black rounded p-2 md:w-96"
              placeholder="Email"
              name="email"
              value={Form.email}
              onChange={handlechange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block mb-2 font-semibold text-lg md:text-xl"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="h-9 w-64 form-control rounded border border-black p-2 md:w-96"
              placeholder="Age"
              name="age"
              value={Form.age}
              onChange={handlechange}
            />
          </div>
          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-lg rounded mt-4 w-full p-1 text-white md:p-2 text-xl"
          >
            sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
