import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function UpdatePage() {
  const BACKEND_URL= import.meta.env.VITE_API_URL

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [severity, setSeverity] = useState("Low");
  useEffect(() => {

  const fetchAccident = async () => {

    try {

      const res = await fetch(
        `${BACKEND_URL}/api/accident/${id}`
      );

      const data = await res.json();

      console.log(data);
      if(data.user){

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

}

      if (data.success) {

        setTitle(data.accident.title);
        setLocation(data.accident.location);
        setDescription(data.accident.description);
        setImage(data.accident.image);
        setSeverity(data.accident.severity);

      }

    } catch (error) {

      console.log(error);

    }

  };

  fetchAccident();

}, [id]);

const updateAccident = async (e) => {

  e.preventDefault();

  try {

    const res = await fetch(
      `https://accident-tracker-1.onrender.com/api/accident/update/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        credentials: "include",

        body: JSON.stringify({
          title,
          location,
          description,
          image,
          severity,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {

      toast.success(data.message);

      navigate("/dashboard");

    } else {

      toast.error(data.message);

    }

  } catch (error) {

    console.log(error);

    toast.error("Update Failed");

  }

};


  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Update Accident
        </h1>

        <form 
              onSubmit={updateAccident}
        className="space-y-6">

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Accident Title
            </label>

            <input
              type="text"
              placeholder="Enter accident title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Describe accident"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Image URL
            </label>

            <input
              type="text"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
          >
            Update Accident
          </button>

        </form>

      </div>

    </div>

  );
}

export default UpdatePage;