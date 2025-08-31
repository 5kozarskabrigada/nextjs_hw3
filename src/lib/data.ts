export interface Car {
id: string;
make: string;
model: string;
year: number;
color: string;
price: number;
}


let cars: Car[] = [
    { id: '1', make: 'Toyota', model: 'Camry', year: 2020, color: 'Red', price: 25000 },
    { id: '2', make: 'Honda', model: 'Civic', year: 2022, color: 'Blue', price: 22000 },
];


export const getCars = (): Car[] => {
    return cars;
};

export const getCarById = (id: string): Car | undefined => {
    return cars.find(car => car.id === id);
};

export const addCar = (newCar: Omit<Car, 'id'>): Car => {
    const id = Date.now().toString(); 
    const car = { id, ...newCar };

    cars.push(car);
    return car;
};

export const updateCar = (id: string, updatedCar: Omit<Car, 'id'>): Car | undefined => {
    const index = cars.findIndex(car => car.id === id);

    if (index !== -1) 
    {
        cars[index] = { id, ...updatedCar };
        return cars[index];
    }
    
    return undefined;
};

export const deleteCar = (id: string): boolean => {
    const initialLength = cars.length;

    cars = cars.filter(car => car.id !== id);
    return cars.length < initialLength;
};