import { useState } from "react";
import toast from "react-hot-toast";

export default function ReportPage() {
  const BACKEND_URL= import.meta.env.VITE_API_URL

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [severity, setSeverity] = useState("Low");

  const submitReport = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(
        `${BACKEND_URL}/api/accident/create`,
        {
          method: "POST",
          credentials: "include",

          headers: {
            "Content-Type": "application/json",
          },


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

console.log(data);

      if (data.success) {

        toast.success(data.message);

        setTitle("");
        setLocation("");
        setDescription("");
        setImage("");
        setSeverity("Low");

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
          Report Accident
        </h1>

        <form
          onSubmit={submitReport}
          className="space-y-6"
        >

          {/* Title */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Accident Title
            </label>

            <input
              type="text"
              placeholder="Enter accident title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* Location */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* Description */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Description
            </label>

            <textarea
              placeholder="Describe the accident"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

          </div>

          {/* Image URL
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Image 
            </label> */}

            <input
              type="text"
              placeholder="Paste image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
            />

          </div>

          {/* Severity */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
            >

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>

            </select>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Submit Report
          </button>

        </form>

      </div>

    </div>
  );
}