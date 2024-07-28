import React from 'react';
import cars  from '../../assets/data.js';
import { NavLink } from 'react-router-dom';
const Card = () => {
  return (
    <div>
      <section className="px-8 py-24">
        <div className="container mx-auto text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">TATA CARS</h2>
          <p className="block antialiased font-sans text-lg leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Know about your cars</p>
        </div>
        <div className="mt-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cars.map((car, index) => (
              <div key={index} className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                  <h5 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 capitalize">{car.name}</h5>
                  <div className='h-10'> 
                  <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal !text-gray-500 ">{car.description}</p>
                  </div>
                  <h3 className="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 flex gap-1 mt-4">{car.price}</h3>
                </div>
                <div className="p-6 border-t border-blue-gray-50">
                  <img src={car.imageUrl} alt={car.name} className='max-h-[192px]' />
                  <NavLink className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] block w-full mt-6" to={`/chatbot/${car.id}`} >Know More</NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
