import React from 'react';
import { Link } from 'react-router-dom';
import Binus from '../../asset/bimj.jpg'


const Landingpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-black">
      <div className="text-center text-white max-w-md">
        <img 
          src={Binus} 
          alt="Logo Sekolah" 
          className="mx-auto w-55 h-50 mb-6 rounded-4 shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-50 font-style: italic;">Selamat Datang di<br /> Halaman Pendaftaran SMK Bina susantara</h1>
        <p className="mb-6 text-lg">Penerimaan Peserta Didik Baru</p>
         
        <Link to="/M">
          <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-5 shadow-lg hover:bg-gray-400 transition">
           Daftar
          </button>
        </Link>   

      </div>
         <div className="text-white text-center mt-10 text-lg min-h-screen justify-between">
         <h3>
            Penjelasaan tentang Sekolah SMK Bina Nusantara
         </h3>
         <p className='text-xl'>
            Smk Bina Nusantara adalah sekolah yang memiliki Slogan <br/> BINA NUSANTARA SOPAN SANTUN BUDI LUHUR
         </p>

         <h2>Daftar Jurusan di SMK Bina Nusantara</h2>

 <div class="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
  <div class="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">TKJ</h2>
    <p class="text-gray-700">Belajar komputer dan jaringan.</p>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">TSM</h2>
    <p class="text-gray-700">Belajar coding & software.</p>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">AKL</h2>
    <p class="text-gray-700">Belajar desain & multimedia.</p>
  </div>

  <div class="p-4 border rounded-lg shadow-md col-start-2">
    <h2 class="text-lg font-bold mb-2">TB</h2>
    <p class="text-gray-700">Belajar desain & multimedia.</p>
  </div>  
</div>
</div>
 </div>
  );
};

export default Landingpage;
