'use client'

import { createContext, useContext, useState } from 'react'

// Define the theme context type
type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Create a custom hook to use the theme context
function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Theme provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// Child component that uses the theme context
function ThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

// Another child component that uses the theme context
function ThemeDisplay() {
  const { theme } = useTheme()

  return (
    <div className="p-4 border rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold dark:text-white">Current Theme</h3>
      <p className="dark:text-gray-300">The current theme is: {theme}</p>
    </div>
  )
}

export default function UseContextPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useContext Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Theme Switcher Example</h2>
          <div className="space-y-4">
            <ThemeProvider>
              <div className="space-y-4">
                <ThemeButton />
                <ThemeDisplay />
              </div>
            </ThemeProvider>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Context Without Provider</h2>
          <div className="space-y-4">
            <p className="text-red-600">
              This will throw an error because it's not wrapped in a ThemeProvider:
            </p>
            <ThemeDisplay />
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useContext Hook lets you read and subscribe to context from your component.
            It's useful for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sharing state between components without prop drilling</li>
            <li>Accessing global application state</li>
            <li>Implementing theme systems and other global features</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useContext"
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