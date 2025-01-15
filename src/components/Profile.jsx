import React from 'react'
import prof1 from '../assets/prof1.svg'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className='min-h-screen bg-white mx-8 overflow-hidden'>
      <img src={prof1} alt="Profile" className='w-44 mt-10'/>
      <div>
        <h1 className='font-bold mt-2'>HendBarber, Menata Gaya Anda</h1>
        <p className='text-justify text-sm'>Sejak didirikan pada tahun 2023, HendBarber telah menjadi tempat kepercayaan untuk potongan rambut berkualitas dan layanan prima. Dalam waktu singkat, kami telah menangani lebih dari 100 pelanggan yang puas dengan gaya rambut modern dan pelayanan ramah dari tim profesional kami.</p>
        <p className='text-justify text-sm mt-4'>Dengan fokus pada detail dan kenyamanan, HendBarber hadir untuk memastikan Anda tampil percaya diri setiap hari. Kami bangga menjadi bagian dari transformasi gaya Anda!"</p>
      </div>
      {/*Navbar*/}
      <div className='flex items-center justify-center mt-6'>
        <Navbar />
      </div>
    </div>
  )
}

export default Profile
