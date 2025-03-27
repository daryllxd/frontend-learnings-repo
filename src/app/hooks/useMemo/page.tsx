'use client';

import { useMemo, useState } from 'react';

// Expensive calculation function
const calculateFibonacci = (n: number): number => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

// Expensive array operation
const generateLargeArray = (size: number) => {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
  }));
};

export default function UseMemoPage() {
  const [fibNumber, setFibNumber] = useState(20);
  const [arraySize, setArraySize] = useState(1000);
  const [count, setCount] = useState(0);

  // Memoized expensive calculation
  const fibonacciResult = useMemo(() => {
    console.log('Calculating Fibonacci...');
    return calculateFibonacci(fibNumber);
  }, [fibNumber]);

  // Memoized expensive array operation
  const largeArray = useMemo(() => {
    console.log('Generating large array...');
    return generateLargeArray(arraySize);
  }, [arraySize]);

  // Non-memoized calculation for comparison
  const nonMemoizedFibonacci = calculateFibonacci(fibNumber);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useMemo Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Fibonacci Calculator</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={fibNumber}
                onChange={(e) => setFibNumber(Number(e.target.value))}
                className="w-32 rounded border p-2"
              />
              <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Re-render ({count})
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded bg-gray-100 p-4">
                <h3 className="mb-2 font-semibold">Memoized Result</h3>
                <p>
                  Fibonacci({fibNumber}) = {fibonacciResult}
                </p>
              </div>
              <div className="rounded bg-gray-100 p-4">
                <h3 className="mb-2 font-semibold">Non-memoized Result</h3>
                <p>
                  Fibonacci({fibNumber}) = {nonMemoizedFibonacci}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Notice how the memoized value only recalculates when fibNumber changes, while the
              non-memoized value recalculates on every render
            </p>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Large Array Generation</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={arraySize}
                onChange={(e) => setArraySize(Number(e.target.value))}
                className="w-32 rounded border p-2"
              />
              <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Re-render ({count})
              </button>
            </div>
            <p>Array size: {largeArray.length}</p>
            <p className="text-sm text-gray-600">
              The array is only regenerated when arraySize changes, not on every render
            </p>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useMemo Hook lets you cache the result of a calculation between re-renders. It's
            useful for:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Optimizing expensive calculations</li>
            <li>Preventing unnecessary re-renders</li>
            <li>Maintaining referential equality</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useMemo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Read more in React docs →
          </a>
        </section>
      </div>
    </div>
  );
}
