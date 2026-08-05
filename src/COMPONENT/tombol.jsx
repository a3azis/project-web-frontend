import { useState } from "react"
import LogoOldage from '../assets/logo.oldage-removebg-preview.png'

export default function Tombol() {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [register, setRegister] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    if (username && password) {
      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        let hasil = confirm('akun berhasil login')

        if (response.ok) {
          localStorage.setItem('token', data.token);
          if (hasil == true) {
            console.log('User confirmed the action.');
          }
          setIsOpen(false);
        } else {
          setErrorMessage(data.message || 'Username atau password salah!');
        }
      } catch (error) {
        setErrorMessage('Gagal terhubung ke server. Coba lagi nanti');
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage('Username dan password wajib diisi!');
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    if (username && password) {
      try {
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);
          alert('Registrasi Berhasil!');
          setIsOpen(false);
        } else {
          setErrorMessage(data.message || 'Registrasi gagal!');
        }
      } catch (error) {
        setErrorMessage('Gagal terhubung ke server. Coba lagi nanti');
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage('Username dan password wajib diisi!');
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 font-sans">
      <button onClick={() => setIsOpen(true)}
        className="w-48 bg-transparent hover:bg-blue-600 text-gray-700 font-semibold py-2 rounded-xl transition duration-500 ease-in-out hover:scale-110 border-2 border-gray-700">
        Registrasi
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 font-mono">
          <div className="bg-black rounded-lg shadow-xl w-full max-w-full h-full max-h-full overflow-hidden flex p-5 ">
            <button onClick={() => setIsOpen(false)} className="absolute w-10 text-black bg-gray-400 hover:bg-gray-600 rounded-full">X</button>
            <div className="w-1/2 bg-transparent flex items-center justify-center rounded-xl ">
              <img src={LogoOldage} alt="Logo" className="h-20 w-auto" />
            </div>
            <div className="w-1/2 bg-white text-black grid m-0 gap-3 p-5 border-2 border-black  rounded-xl">
              <h1>Masukan akun yang sudah ada</h1>
              {errorMessage && (
                <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
              )}
              <div className="relative w-full mb-1">
                <input type="text"
                  id="Username"
                  placeholder=" "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="peer w-full px-4 py-3 border-2 border-gray-400 hover:border-gray-900 rounded-xl bg-transparent text-gray-900  transition-all duration-200 focus:outline-none focus:border-blue-600  placeholder-transparent "></input>
                <label htmlFor="Username"
                  className="absolute left-4 top-4 -translate-y-1/2 text-gray-500 bg-white px-1 text-base transition-all duration-200 pointer-events-none
                  peer-focus:-top-2.5 
                  peer-focus:text-sm
                peer-focus:text-blue-600
                  peer-[:not(:placeholder-shown)]:-top-2.5
                  peer-[:not(:placeholder-shown)]:text-xs">
                  Email atau nomor telepon
                </label>
              </div>
              <div className="relative w-full mb-1">
                <input type="password"
                  id="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full  px-4 py-3 border-2 border-gray-400 hover:border-gray-900 rounded-xl bg-transparent text-gray-900 focus:outline-none focus:border-blue-600 transition-all placeholder-transparent"></input>
                <label htmlFor="password"
                  className="absolute left-4 top-4 -translate-y-1/2 text-gray-500 bg-white px-1 text-base transition-all duration-200 pointer-events-none 
                peer-focus:-top-2.5 
                peer-focus:text-sm 
              peer-focus:text-blue-600 
                peer-[:not(:placeholder-shown)]:-top-2.5
                peer-[:not(:placeholder-shown)]:text-xs ">
                  Kata sandi</label>
              </div>
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="bg-blue-900 hover:bg-blue-950 h-10 rounded-xl text-white cursor-pointer">
                {isLoading ? 'memuat...' : 'masuk'}
              </button>
              <p className="cursor-pointer ">Lupa kata sandi?</p>
              <button
                onClick={handleRegister}
                disabled={isLoading}
                className="bg-blue-900 hover:bg-blue-950 h-10 rounded-xl text-white cursor-pointer ">Buat akun baru</button>
              <div className="w-1/1 bg-transparent flex items-center justify-center rounded-xl ">
                <img src={LogoOldage} alt="Logo" className="h-20 w-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
