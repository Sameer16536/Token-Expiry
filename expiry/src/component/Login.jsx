import React, { useEffect,useState } from 'react';
import axios from 'axios'


const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const sendDetails =()=>{
      axios.post('http:localhost:3000/login',{email,password})
      .then(response => console.log(response.data))
    }
    
    setemail('')
    setPassword('')
    
    sendDetails
  },[email,password])
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl mb-4">Login to Your Account</h2>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input onChange={(e)=>{setemail(e.target.value)}}
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
          onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
