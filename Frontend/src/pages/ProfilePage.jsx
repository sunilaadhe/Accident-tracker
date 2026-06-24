import { useState } from "react";

function ProfilePage() {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const updateProfile = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/user/update/${user._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            avatar,
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          User Profile
        </h1>

        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src={avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>

          <input
            type="text"
            placeholder="Profile Image URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
          />

          <button
            onClick={updateProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;