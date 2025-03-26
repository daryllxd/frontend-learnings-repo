'use client'

import { useRef, useState } from 'react'

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const handleIncrement = () => {
    setCount(count + 1)
    countRef.current += 1
  }

  const handlePlayVideo = () => {
    videoRef.current?.play()
  }

  const handlePauseVideo = () => {
    videoRef.current?.pause()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useRef Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">DOM Reference</h2>
          <div className="flex gap-4 items-center">
            <input
              ref={inputRef}
              type="text"
              className="p-2 border rounded"
              placeholder="Focus me!"
            />
            <button
              onClick={handleFocus}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Focus Input
            </button>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Mutable Value</h2>
          <p className="mb-2">State count: {count}</p>
          <p className="mb-4">Ref count: {countRef.current}</p>
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Notice how the ref value persists between renders but doesn't trigger re-renders
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Video Player</h2>
          <video
            ref={videoRef}
            className="w-full mb-4"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
          />
          <div className="flex gap-4">
            <button
              onClick={handlePlayVideo}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Play
            </button>
            <button
              onClick={handlePauseVideo}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Pause
            </button>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useRef Hook returns a mutable ref object whose .current property is initialized to the passed argument.
            It's useful for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Accessing DOM elements directly</li>
            <li>Storing mutable values that shouldn't trigger re-renders</li>
            <li>Storing previous values</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useRef"
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