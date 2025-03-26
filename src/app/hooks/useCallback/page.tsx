'use client'

import { useCallback, useState, memo } from 'react'

// Memoized child component
const ExpensiveButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering button: ${label}`)
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {label}
    </button>
  )
})

ExpensiveButton.displayName = 'ExpensiveButton'

export default function UseCallbackPage() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // Callback without useCallback (recreated on every render)
  const handleIncrement1 = () => {
    setCount1(c => c + 1)
  }

  // Callback with useCallback (memoized)
  const handleIncrement2 = useCallback(() => {
    setCount2(c => c + 1)
  }, []) // Empty dependency array since it doesn't depend on any props or state

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useCallback Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Button Click Counter</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">Without useCallback</h3>
              <p className="mb-2">Count: {count1}</p>
              <ExpensiveButton
                onClick={handleIncrement1}
                label="Increment (No useCallback)"
              />
              <p className="text-sm text-gray-600 mt-2">
                This button's handler is recreated on every render
              </p>
            </div>

            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">With useCallback</h3>
              <p className="mb-2">Count: {count2}</p>
              <ExpensiveButton
                onClick={handleIncrement2}
                label="Increment (With useCallback)"
              />
              <p className="text-sm text-gray-600 mt-2">
                This button's handler is memoized and only recreated when dependencies change
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Performance Example</h2>
          <div className="space-y-4">
            <p>
              Click the buttons above and check the console. You'll notice that the button
              without useCallback re-renders on every parent render, while the button with
              useCallback only re-renders when its props actually change.
            </p>
            <button
              onClick={() => setCount1(c => c + 1)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Trigger Parent Re-render
            </button>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useCallback Hook lets you cache a function definition between re-renders.
            It's useful for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Optimizing child components that rely on function props</li>
            <li>Preventing unnecessary re-renders of memoized components</li>
            <li>Maintaining referential equality of function props</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useCallback"
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