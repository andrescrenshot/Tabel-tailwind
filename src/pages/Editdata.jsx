import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu/${id}`);
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setFormData(data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        alert("Gagal mengambil data!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/menu/${id}`, formData);
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      navigate("/w");
    } catch (err) {
      console.error("Gagal mengupdate data:", err);
      alert("Gagal mengupdate data!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading data</p>;

  return (
<div class="flex items-center justify-center min-h-screen">
  <div class="p-6 max-w-lg w-full bg-white shadow-lg rounded-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">Edit Data</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="makanan">Makanan</label>
            <input
              id="makanan"
              name="makanan"
              type="text"
              value={formData.makanan || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paket">paket</label>
            <input
              id="paket"
              name="paket"
              type="text"
              value={formData.paket || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="harga">harga</label>
            <input
              id="harga"
              name="harga"
              type="text"
              value={formData.harga || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Edit
            </button>
            <button
              type="submit"
              className="m-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-600 transition"
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditData;
