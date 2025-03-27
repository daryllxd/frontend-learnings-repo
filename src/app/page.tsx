import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to React Fundamentals</h1>
      <p className="mb-8 text-lg">
        This is a learning platform dedicated to understanding React hooks and fundamental concepts.
        Explore different hooks and their use cases through interactive examples.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">What are React Hooks?</h2>
          <p className="mb-4">
            Hooks are functions that allow you to "hook into" React state and lifecycle features
            from function components.
          </p>
          <a
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read more in React docs →
          </a>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Available Hooks</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>useState - For managing component state</li>
            <li>useEffect - For handling side effects</li>
            <li>useContext - For accessing React context</li>
            <li>useReducer - For complex state logic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
