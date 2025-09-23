import React from 'react';
import { Link } from 'react-router-dom';
import Binus from '../../asset/bimj.jpg';

const Landingpage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-black text-white">
      <div className="text-center max-w-md mx-auto py-10 px-4">
        <img 
          src={Binus} 
          alt="Logo Sekolah" 
          className="mx-auto w-56 h-auto mb-6 rounded-lg shadow-lg "
        />

        <h1 className="text-4xl font-bold mb-6 italic">
          Selamat Datang di<br /> Halaman Pendaftaran SMK Bina Nusantara
        </h1>

        <p className="mb-6 text-lg">Penerimaan Peserta Didik Baru</p>

        <Link to="/M">
          <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-md shadow-lg hover:bg-gray-400 transition">
            Daftar
          </button>
        </Link>   
      </div>

      <div className="text-center px-4 mt-10 max-w-4xl mx-auto">
        <h3 className="uppercase text-xl font-bold mb-4"> 
          Penjelasan tentang Sekolah SMK Bina Nusantara
        </h3>
        <p className="text-lg mb-10">
          SMK Bina Nusantara adalah sekolah yang memiliki slogan:<br />
          <span className="font-semibold">BINA NUSANTARA SOPAN SANTUN BUDI LUHUR</span>
        </p>

        <h2 className="text-2xl font-bold mb-6">Daftar Jurusan di SMK Bina Nusantara</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div className="p-4 border rounded-lg shadow-md bg-white/10">
            <h2 className="text-lg font-bold mb-2">TKJ</h2>
            <p>Belajar komputer dan jaringan.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white/10">
            <h2 className="text-lg font-bold mb-2">TSM</h2>
            <p>Belajar coding & software.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white/10">
            <h2 className="text-lg font-bold mb-2">AKL</h2>
            <p>Belajar desain & multimedia.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white/10 col-span-1 sm:col-start-2">
            <h2 className="text-lg font-bold mb-2">TB</h2>
            <p>Belajar desain & multimedia.</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
