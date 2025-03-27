'use client';

import { useRef, useState } from 'react';

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current += 1;
  };

  const handlePlayVideo = () => {
    videoRef.current?.play();
  };

  const handlePauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useRef Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">DOM Reference</h2>
          <div className="flex items-center gap-4">
            <input
              ref={inputRef}
              type="text"
              className="rounded border p-2"
              placeholder="Focus me!"
            />
            <button
              onClick={handleFocus}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Focus Input
            </button>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Mutable Value</h2>
          <p className="mb-2">State count: {count}</p>
          <p className="mb-4">Ref count: {countRef.current}</p>
          <button
            onClick={handleIncrement}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            Increment
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Notice how the ref value persists between renders but doesn't trigger re-renders
          </p>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Video Player</h2>
          <video
            ref={videoRef}
            className="mb-4 w-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
          />
          <div className="flex gap-4">
            <button
              onClick={handlePlayVideo}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Play
            </button>
            <button
              onClick={handlePauseVideo}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Pause
            </button>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useRef Hook returns a mutable ref object whose .current property is initialized to
            the passed argument. It's useful for:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Accessing DOM elements directly</li>
            <li>Storing mutable values that shouldn't trigger re-renders</li>
            <li>Storing previous values</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useRef"
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
