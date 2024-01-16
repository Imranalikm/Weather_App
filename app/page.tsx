"use client";
import Input from "./components/Input";

const Home = () => {
  return (
    <div className="bg-cover bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col justify-between items-center p-12 md:flex-row">
          <Input />
          <h1>Weather App</h1>
        </div>
      </div>
    </div>
  )
}

export default Home