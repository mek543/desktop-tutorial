'use client';
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div className='border-gray-600 p-4 m-4 text-center'>
            <p className="text-xl font-bold">Count: {count}</p>
            <div className="flex gap-2 justify-center mt-4">
                <button className='bg-green-500 text-white rounded px-3 py-1' onClick={increment}>
                    Increase +
                </button>
                <button className='bg-red-500 text-white rounded px-3 py-1' onClick={decrement}>
                    Decrease -
                </button>
                <button className='bg-gray-500 text-white rounded px-3 py-1' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}