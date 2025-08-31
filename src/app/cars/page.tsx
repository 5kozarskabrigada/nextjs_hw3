import { getCars, deleteCar } from '@/lib/data';
import Link from 'next/link';
import { redirect } from 'next/navigation';


async function deleteCarAction(formData: FormData) {
    'use server'; 

    const id = formData.get('id') as string;

    deleteCar(id);
    redirect('/cars'); 
}

export default function CarsPage() {
    const cars = getCars();

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Car list</h1>

            {cars.length === 0 ? (
                <p className="text-center text-gray-600">You dont have any Cars 
                <Link href="/add" className="text-blue-500 hover:underline">Add</Link></p>
            ) : (

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car) => (

                        <li key={car.id} className="bg-white p-6">
                            <h2 className="text-xl font-semibold mb-2">{car.make} {car.model}</h2>
                            <p className="text-gray-700 mb-1">Year: {car.year}</p>
                            <p className="text-gray-700 mb-1">Color: {car.color}</p>
                            <p className="text-gray-900 mb-4">Price: ${car.price.toLocaleString()}</p>
                            <div className="flex justify-end space-x-2">
                                <Link
                                    href={`/edit/${car.id}`}
                                    className="bg-blue-600 text-white text-sm py-1 px-3 rounded" >
                                    Edit
                                </Link>

                                <form action={deleteCarAction}>
                                    <input type="hidden" name="id" value={car.id} />
                                    <button
                                        type="submit"
                                        className="bg-red-500 text-white text-sm py-1 px-3 rounded">
                                        Delete
                                    </button>
                                </form>

                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}