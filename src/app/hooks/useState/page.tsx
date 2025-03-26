'use client'

import { useState } from 'react'

export default function UseStatePage() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useState Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Basic Counter</h2>
          <p className="mb-4">Count: {count}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Text Input</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Type something..."
          />
          <p>You typed: {text}</p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Toggle Visibility</h2>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          {isVisible && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              This content can be toggled!
            </div>
          )}
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useState Hook lets you add state to function components. It returns an array with two values:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The current state value</li>
            <li>A function to update the state value</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useState"
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