'use client';

import { useCallback, useState, memo } from 'react';

// Memoized child component
const ExpensiveButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering button: ${label}`);
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      {label}
    </button>
  );
});

ExpensiveButton.displayName = 'ExpensiveButton';

export default function UseCallbackPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Callback without useCallback (recreated on every render)
  const handleIncrement1 = () => {
    setCount1((c) => c + 1);
  };

  // Callback with useCallback (memoized)
  const handleIncrement2 = useCallback(() => {
    setCount2((c) => c + 1);
  }, []); // Empty dependency array since it doesn't depend on any props or state

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useCallback Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Button Click Counter</h2>
          <div className="space-y-4">
            <div className="rounded bg-gray-100 p-4">
              <h3 className="mb-2 font-semibold">Without useCallback</h3>
              <p className="mb-2">Count: {count1}</p>
              <ExpensiveButton onClick={handleIncrement1} label="Increment (No useCallback)" />
              <p className="mt-2 text-sm text-gray-600">
                This button's handler is recreated on every render
              </p>
            </div>

            <div className="rounded bg-gray-100 p-4">
              <h3 className="mb-2 font-semibold">With useCallback</h3>
              <p className="mb-2">Count: {count2}</p>
              <ExpensiveButton onClick={handleIncrement2} label="Increment (With useCallback)" />
              <p className="mt-2 text-sm text-gray-600">
                This button's handler is memoized and only recreated when dependencies change
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Performance Example</h2>
          <div className="space-y-4">
            <p>
              Click the buttons above and check the console. You'll notice that the button without
              useCallback re-renders on every parent render, while the button with useCallback only
              re-renders when its props actually change.
            </p>
            <button
              onClick={() => setCount1((c) => c + 1)}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Trigger Parent Re-render
            </button>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useCallback Hook lets you cache a function definition between re-renders. It's
            useful for:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Optimizing child components that rely on function props</li>
            <li>Preventing unnecessary re-renders of memoized components</li>
            <li>Maintaining referential equality of function props</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useCallback"
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
