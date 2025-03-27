'use client';

import { useState } from 'react';

export default function UseStatePage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useState Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Basic Counter</h2>
          <p className="mb-4">Count: {count}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setCount(count + 1)}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Text Input</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mb-2 w-full rounded border p-2"
            placeholder="Type something..."
          />
          <p>You typed: {text}</p>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Toggle Visibility</h2>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          {isVisible && (
            <div className="mt-4 rounded bg-gray-100 p-4">This content can be toggled!</div>
          )}
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useState Hook lets you add state to function components. It returns an array with
            two values:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>The current state value</li>
            <li>A function to update the state value</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useState"
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
