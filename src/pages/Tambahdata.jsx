import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Tambahdata() {
  const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });

  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/menu", formData);

      console.log("Respon server:", response.data);
     Swal.fire({
  title: "Berhasil!",
  icon: "success",
  draggable: true
});

      setFormData({
        makanan: "",
        paket: "",
        harga: "",
      });

      Navigate("/U"); // setelah daftar, arahkan ke login
    } catch (error) {
      console.error("Error saat menambahkan data:", error);
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Pesan Makanan</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Nama"
            >
              Makanan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="makanan"
              type="text"
              name="makanan"
              value={formData.makanan}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="paket"
            >
              Paket
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="paket"
              type="text"
              name="paket"
              value={formData.paket}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 shadow"
              htmlFor="harga"
            >
              Total harga
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="harga"
              type="text"
              name="harga"
              value={formData.harga}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Menambahkan..." : "Paket"}
            </button>
            <Link
              to="/U"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tambahdata;
