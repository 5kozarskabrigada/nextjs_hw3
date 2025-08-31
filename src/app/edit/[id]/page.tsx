'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCarById, updateCar } from '@/lib/data';
import { notFound } from 'next/navigation';

interface EditCarProps {
    params: {
        id: string;
    };
}

export default function EditCarPage({ params }: EditCarProps) {

    const router = useRouter();
    const { id } = params;
    const [car, setCar] = useState(getCarById(id));
    const [make, setMake] = useState(car?.make || '');
    const [model, setModel] = useState(car?.model || '');
    const [year, setYear] = useState(car?.year.toString() || '');
    const [color, setColor] = useState(car?.color || '');
    const [price, setPrice] = useState(car?.price.toString() || '');


    useEffect(() => {

        if (!car) {
            notFound();
        }
    }, [car]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!car) return; 

        const updatedCarData = {
            make,
            model,
            year: parseInt(year),
            color,
            price: parseFloat(price),
        };

        updateCar(id, updatedCarData); 
        router.push('/cars'); 
    };


    if (!car) {
        return <p className="text-center mt-8 text-red-500">Couldnt find the car</p>;
    }

    return (
        <div className="mt-8 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Edit Car</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">Brand</label>
                    <input
                        type="text"
                        id="make"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
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
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
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
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
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
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
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
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                        min="0"
                        step="any"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4"
                >
                    Save
                </button>
            </form>
        </div>
    );
}