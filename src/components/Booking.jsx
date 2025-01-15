import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const Booking = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    const phoneNumber = "6285156712776"; // Ganti dengan nomor WhatsApp tujuan
    const encodedMessage = encodeURIComponent(
      `Halo, nama saya: ${name}\n` +
      `Tanggal: ${date}\n` +
      `Waktu: ${time}\n` +
      `Pesan:\n${message}`
    );
    const url = `whatsapp://send?text=${encodedMessage}&phone=${phoneNumber}`
    window.open(url, "_blank"); // Redirect ke WhatsApp di tab baru
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6">
        <h1 className="text-xl text-center font-bold mb-4">Booking HendBarber</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="px-4 w-[325px] h-[43px] rounded-xl bg-gray-200 border border-black mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Tanggal
          </label>
          <input
            type="date"
            id="date"
            className="px-4 w-[325px] h-[43px] rounded-xl bg-gray-200 border border-black mt-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Jam
          </label>
          <input
            type="time"
            id="time"
            className="px-4 w-[325px] h-[43px] rounded-xl bg-gray-200 border border-black mt-2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Pesan
          </label>
          <textarea
            id="message"
            className="px-4 w-[325px] h-[100px] rounded-xl bg-gray-200 border border-black mt-2"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 w-[325px] h-[48px] bg-[#543A14] rounded-full text-white font-bold text-xl"
        >
          Kirim
        </button>

        <div className='mx-8 flex items-center justify-center'>
        <Navbar />
      </div>
      </form>
    </div>
  );
};

export default Booking;
