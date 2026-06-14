// import React from "react";
import { useState } from "react";


function ProfilePage() {

   const user = JSON.parse(localStorage.getItem("user"));
   const [name, setName] = useState(user?.name || "");
   const [email, setEmail] = useState(user?.email || "");
   const [password, setPassword] = useState("");

   const updateProfile = async () => {

  try {

    const res = await fetch(
      `https://accident-tracker-1.onrender.com/api/user/update/${user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    console.log(data);
    if(data.user){
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

         <input
            type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full rounded"
         />

         <input
           type="email"
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