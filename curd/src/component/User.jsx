import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7001")
      .then((result) => setuser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:7001/deleteuser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-400">
      <div className="rounded-xl shadow-xl shadow-slate-800 bg-white p-20 md:p-10">
        <Link to="/create">
          <button className="bg-green-600 p-3 w-28 rounded-lg text-white text-xl font-bold mb-5">
            Add
          </button>
        </Link>
        <table className="table-auto border-collapse border border-gray-400 ">
          <thead>
            <tr className="text-xl">
              <th className="border-collapse border border-gray-800 p-3">
                Name
              </th>
              <th className="border-collapse border border-gray-800">Email</th>
              <th className="border-collapse border border-gray-800">Age</th>
              <th className="border-collapse border border-gray-800">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr className="text-xl">
                <td className="border-collapse border border-gray-800 p-6 ">
                  {user.name}
                </td>
                <td className="border-collapse border border-gray-800 p-6">
                  {user.email}
                </td>
                <td className="border-collapse border border-gray-800 p-6">
                  {user.age}
                </td>
                <td className="p-5 text-white font-bold text-lg border-collapse border border-gray-800">
                  <Link to={`/update/${user._id}`}>
                    <button className="p-3 w-24 bg-green-600 rounded-xl">
                      Update
                    </button>
                  </Link>
                  <button
                    type="submit"
                    onClick={(e) => handleDelete(user._id)}
                    className="p-3 w-24 ml-6 bg-red-500 rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
