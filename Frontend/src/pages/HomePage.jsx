 import { Link } from "react-router-dom";
 
 export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10 bg-white">

        <div>

          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Smart Road{" "}
            <span className="text-red-600">
              Accident
            </span>
            <br />
            Tracking System
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Accident Tracker helps users report road accidents quickly,
            monitor accident locations, and improve emergency response.
          </p>
        <Link to="/report">
         <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
                Report Accident
         </button>
       </Link>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
            alt="Accident Tracker"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />

        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 px-10">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">

            <div className="text-5xl mb-4">
              🚨
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Accident Reporting
            </h3>

            <p className="text-gray-600">
              Users can instantly report accidents with detailed
              information and exact location.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">

            <div className="text-5xl mb-4">
              📍
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Live Location Tracking
            </h3>

            <p className="text-gray-600">
              Track accident locations in real time for faster emergency
              response and safety monitoring.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">

            <div className="text-5xl mb-4">
              🔐
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Secure Authentication
            </h3>

            <p className="text-gray-600">
              Secure login system using JWT authentication and protected APIs.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics Section */}
      <section className="bg-red-600 text-white py-16 px-10">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h1 className="text-5xl font-bold">
              100+
            </h1>

            <p className="mt-3 text-lg">
              Accidents Reported
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              50+
            </h1>

            <p className="mt-3 text-lg">
              Active Users
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              24/7
            </h1>

            <p className="mt-3 text-lg">
              Emergency Support
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              99%
            </h1>

            <p className="mt-3 text-lg">
              System Reliability
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-10 bg-white">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
<img
  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  alt="Road Safety"
  className="
    w-full
    h-[400px]
    object-cover
    rounded-3xl
    shadow-2xl
    border-4
    border-white
    hover:scale-105
    transition-all
    duration-500
  "
/>

          </div>

          <div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose Accident Tracker?
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Our platform is designed to improve road safety and help
              emergency teams respond quickly. Users can securely report
              incidents and monitor accident activity in real time.
            </p>

            <ul className="mt-8 space-y-4 text-lg">

              <li>✅ Fast Accident Reporting</li>

              <li>✅ Real-Time Data</li>

              <li>✅ User-Friendly Interface</li>

              <li>✅ Secure Authentication</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">

        <h2 className="text-2xl font-bold text-red-500">
          Accident Tracker
        </h2>

        <p className="mt-3 text-gray-400">
          Developed by Sunil Aadhe using MERN Stack
        </p>

        <p className="mt-2 text-gray-500 text-sm">
          © 2026 Accident Tracker. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}