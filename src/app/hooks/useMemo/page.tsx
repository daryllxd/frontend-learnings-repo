'use client'

import { useMemo, useState } from 'react'

// Expensive calculation function
const calculateFibonacci = (n: number): number => {
  if (n <= 1) return n
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
}

// Expensive array operation
const generateLargeArray = (size: number) => {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    value: Math.random() * 100
  }))
}

export default function UseMemoPage() {
  const [fibNumber, setFibNumber] = useState(20)
  const [arraySize, setArraySize] = useState(1000)
  const [count, setCount] = useState(0)

  // Memoized expensive calculation
  const fibonacciResult = useMemo(() => {
    console.log('Calculating Fibonacci...')
    return calculateFibonacci(fibNumber)
  }, [fibNumber])

  // Memoized expensive array operation
  const largeArray = useMemo(() => {
    console.log('Generating large array...')
    return generateLargeArray(arraySize)
  }, [arraySize])

  // Non-memoized calculation for comparison
  const nonMemoizedFibonacci = calculateFibonacci(fibNumber)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useMemo Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Fibonacci Calculator</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <input
                type="number"
                value={fibNumber}
                onChange={(e) => setFibNumber(Number(e.target.value))}
                className="p-2 border rounded w-32"
              />
              <button
                onClick={() => setCount(c => c + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Re-render ({count})
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="font-semibold mb-2">Memoized Result</h3>
                <p>Fibonacci({fibNumber}) = {fibonacciResult}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="font-semibold mb-2">Non-memoized Result</h3>
                <p>Fibonacci({fibNumber}) = {nonMemoizedFibonacci}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Notice how the memoized value only recalculates when fibNumber changes,
              while the non-memoized value recalculates on every render
            </p>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Large Array Generation</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <input
                type="number"
                value={arraySize}
                onChange={(e) => setArraySize(Number(e.target.value))}
                className="p-2 border rounded w-32"
              />
              <button
                onClick={() => setCount(c => c + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useMemo Hook lets you cache the result of a calculation between re-renders.
            It's useful for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Optimizing expensive calculations</li>
            <li>Preventing unnecessary re-renders</li>
            <li>Maintaining referential equality</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useMemo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Read more in React docs →
          </a>
        </section>
      </div>
    </div>
  )
} 