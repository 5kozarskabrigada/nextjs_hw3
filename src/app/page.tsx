// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Car Shop</h1>
      <div className="space-x-4">
        <Link href="/cars" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          View Cars
        </Link>
        <Link href="/add" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
          Add New Car
        </Link>
      </div>
    </div>
  );
}