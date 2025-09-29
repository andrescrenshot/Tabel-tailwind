import { useState } from "react";

function Profile() {
  const [showSejarah, setShowSejarah] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
        <img
          className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md"
          src="https://i.pinimg.com/736x/4f/03/53/4f03531f35038fc2213813aa1cb12244.jpg"
          alt="Profile"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Moreno hitam</h2>
        <p className="text-gray-500 text-sm">Devpartemen Ngawis</p>
        <p className="mt-3 text-gray-600 text-sm">
          Pembuat robot ambatron dan pabrik muani
        </p>

        <div className="flex justify-center mt-4 gap-3">
          <button
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Hitamkan
          </button>
          <button
            onClick={() => setShowSejarah(!showSejarah)}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Sejarah
          </button>
        </div>

        {/* Bagian Sejarah muncul di bawah profil */}
        {showSejarah && (
          <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Sejarah Moreno
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              moreno adalah seoarang ngebrok ambatron
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
