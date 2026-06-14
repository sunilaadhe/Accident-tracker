export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-red-600 text-white py-24 px-6 overflow-hidden">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              About <br />
              Accident Tracker
            </h1>

            <p className="mt-6 text-lg text-red-100 leading-8">
              Accident Tracker is a smart road safety platform designed to help
              users report accidents quickly, improve emergency response, and
              create safer roads using modern technology.
            </p>

            <button className="mt-8 bg-white text-red-600 font-semibold px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
              Explore Features
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt="Accident Tracker"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop"
              alt="Road Safety"
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Accident Tracker?
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Road accidents are increasing every year, and many people do not
              receive emergency help on time. Accident Tracker helps users
              instantly report accident locations and details, allowing faster
              emergency response and better road safety awareness.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-red-600">100+</h1>
                <p className="mt-2 text-gray-600">Accidents Reported</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-red-600">24/7</h1>
                <p className="mt-2 text-gray-600">Emergency Support</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Our mission is to reduce accident response time, increase road
            safety awareness, and create a platform where people can help each
            other during emergencies. We aim to use technology to save lives
            and improve transportation safety.
          </p>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl">🚨</div>

              <h3 className="text-2xl font-bold mt-5 mb-4">
                Accident Reporting
              </h3>

              <p className="text-gray-600 leading-7">
                Users can instantly report road accidents with descriptions,
                images, and location details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl">📍</div>

              <h3 className="text-2xl font-bold mt-5 mb-4">
                Live Location Tracking
              </h3>

              <p className="text-gray-600 leading-7">
                Monitor accident locations in real time for faster emergency
                services and alerts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl">🔐</div>

              <h3 className="text-2xl font-bold mt-5 mb-4">
                Secure Authentication
              </h3>

              <p className="text-gray-600 leading-7">
                JWT authentication keeps user accounts secure and protects data.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="bg-red-600 py-20 px-6 text-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14">
            Technologies Used
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 shadow-lg hover:scale-105 transition duration-300">
              <h1 className="text-2xl font-bold">React</h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 shadow-lg hover:scale-105 transition duration-300">
              <h1 className="text-2xl font-bold">Node.js</h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 shadow-lg hover:scale-105 transition duration-300">
              <h1 className="text-2xl font-bold">Express</h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 shadow-lg hover:scale-105 transition duration-300">
              <h1 className="text-2xl font-bold">MongoDB</h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-8 shadow-lg hover:scale-105 transition duration-300">
              <h1 className="text-2xl font-bold">JWT</h1>
            </div>

          </div>

        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Developer"
            className="w-36 h-36 mx-auto rounded-full shadow-2xl border-4 border-red-500"
          />

          <h2 className="text-4xl font-bold mt-8">
            Developed By Sunil Aadhe
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Full Stack Developer passionate about creating real-world solutions
            using MERN Stack technologies. Accident Tracker is designed to help
            improve road safety and emergency response systems.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">

        <h1 className="text-3xl font-bold text-red-500">
          Accident Tracker
        </h1>

        <p className="mt-4 text-gray-400">
          Smart Technology For Safer Roads
        </p>

        <p className="mt-2 text-gray-500 text-sm">
          © 2026 Accident Tracker. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}
