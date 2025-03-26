import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to React Fundamentals</h1>
      <p className="text-lg mb-8">
        This is a learning platform dedicated to understanding React hooks and fundamental concepts.
        Explore different hooks and their use cases through interactive examples.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">What are React Hooks?</h2>
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
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Available Hooks</h2>
          <ul className="list-disc list-inside space-y-2">
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
