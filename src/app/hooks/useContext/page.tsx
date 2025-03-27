'use client';

import { createContext, useContext, useState } from 'react';

// Define the theme context type
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the theme context
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}

// Child component that uses the theme context
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

// Another child component that uses the theme context
function ThemeDisplay() {
  const { theme } = useTheme();

  return (
    <div className="rounded-lg border p-4 dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-lg font-semibold dark:text-white">Current Theme</h3>
      <p className="dark:text-gray-300">The current theme is: {theme}</p>
    </div>
  );
}

export default function UseContextPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useContext Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Theme Switcher Example</h2>
          <div className="space-y-4">
            <ThemeProvider>
              <div className="space-y-4">
                <ThemeButton />
                <ThemeDisplay />
              </div>
            </ThemeProvider>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Context Without Provider</h2>
          <div className="space-y-4">
            <p className="text-red-600">
              This will throw an error because it's not wrapped in a ThemeProvider:
            </p>
            <ThemeDisplay />
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useContext Hook lets you read and subscribe to context from your component. It's
            useful for:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Sharing state between components without prop drilling</li>
            <li>Accessing global application state</li>
            <li>Implementing theme systems and other global features</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useContext"
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
