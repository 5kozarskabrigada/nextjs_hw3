'use client'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addCar } from '@/lib/data'; 


export default function AddCarPage() {
    const router = useRouter();
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCar = {
            make,
            model,
            year: parseInt(year),
            color,
            price: parseFloat(price),
        };

        addCar(newCar); 
        router.push('/cars'); 
    };


    return (
        <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Add New Car</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">Brand</label>
                    <input
                        type="text"
                        id="make"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model</label>
                    <input
                        type="text"
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                         className="mt-1 block w-full border border-gray-300 rounded-md p-2"                        
                         required
                    />
                </div>

                <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                         className="mt-1 block w-full border border-gray-300 rounded-md p-2" 
                        min="1900"
                        max={new Date().getFullYear().toString()}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                         className="mt-1 block w-full border border-gray-300 rounded-md p-2"                        
                         required
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"                        
                        min="0"
                        step="any"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md "
                >
                    Add Car
                </button>
            </form>
        </div>
    );
}