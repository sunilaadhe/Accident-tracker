import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const BACKEND_URL= import.meta.env.VITE_API_URL

  const [accidents, setAccidents] = useState([]);
  const navigate = useNavigate();
  // Fetch Accidents
  const fetchAccidents = async () => {

    try {

      const res = await fetch(
        `${BACKEND_URL}/api/accident/all`,
      );

      const data = await res.json();
      console.log(data);

      if (data.success) {

        setAccidents(data.accidents);

      }

    } catch (error) {

      console.log(error);

      toast.error("Failed to fetch accidents");

    }

  };

  // Delete Accident
  const deleteAccident = async (id) => {

    try {

      const res = await fetch(
        `${BACKEND_URL}/api/accident/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type" : "application/json"
          }
        }
      );

      const data = await res.json();

      if (data.success) {

        toast.success(data.message);

        fetchAccidents();

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");

    }

  };

  // useEffect
  useEffect(() => {
      fetchAccidents();


  }, []);
          console.log("Accidents State:", accidents);


  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        Accident Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {
          accidents.map((accident) => (

            <div
              key={accident._id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >

           <img
               src={accident.image}
               alt="Accident"
               className="w-full h-52 object-cover"
               onError={(e) => {
               e.target.src =
                    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop";
            }}
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800">
                  {accident.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  📍 {accident.location}
                </p>

                <p className="mt-3 text-gray-600">
                  {accident.description}
                </p>

                <div className="mt-4">

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {accident.severity}
                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Reported By: {accident.createdBy?.name}
                </p>

                <div className="mt-6 flex gap-4">

                  <button
                      onClick={() => navigate(`/update/${accident._id}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                     >
                      Update
                  </button>

                  <button
                    onClick={() => deleteAccident(accident._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}