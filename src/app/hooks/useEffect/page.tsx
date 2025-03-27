'use client';

import { useState, useEffect } from 'react';

export default function UseEffectPage() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [data, setData] = useState<string | null>(null);

  // Effect with no dependencies (runs on every render)
  useEffect(() => {
    document.title = `Count is ${count}`;
  });

  // Effect with empty dependency array (runs once on mount)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect with dependencies (runs when dependencies change)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  // Effect with async data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github');
        const json = await response.json();
        setData(json.login);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useEffect Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Document Title Update</h2>
          <p className="mb-4">Count: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Increment
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Check the browser tab title - it updates with the count!
          </p>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Window Size Tracker</h2>
          <p>Current window width: {windowWidth}px</p>
          <p className="text-sm text-gray-600">
            Try resizing your browser window to see the effect
          </p>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Online Status</h2>
          <p className={`font-semibold ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            You are currently {isOnline ? 'online' : 'offline'}
          </p>
          <p className="text-sm text-gray-600">
            Try toggling your internet connection to see the effect
          </p>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Data Fetching</h2>
          {data ? <p>Fetched data: {data}</p> : <p>Loading...</p>}
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useEffect Hook lets you perform side effects in function components. It takes two
            arguments:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>A function containing the effect code</li>
            <li>An optional dependency array that determines when the effect runs</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useEffect"
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
