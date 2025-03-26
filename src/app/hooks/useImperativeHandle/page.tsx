'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'

// Custom input component that exposes methods via useImperativeHandle
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    },
    getValue: () => {
      return inputRef.current?.value
    }
  }))

  return (
    <input
      ref={inputRef}
      type="text"
      className="p-2 border rounded"
      placeholder="Custom input..."
    />
  )
})

CustomInput.displayName = 'CustomInput'

export default function UseImperativeHandlePage() {
  const inputRef = useRef<{ focus: () => void; clear: () => void; getValue: () => string | undefined }>(null)

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">useImperativeHandle Hook</h1>
      
      <div className="space-y-8">
        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Custom Input Component</h2>
          <div className="space-y-4">
            <CustomInput ref={inputRef} />
            <div className="flex gap-4">
              <button
                onClick={() => inputRef.current?.focus()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Focus Input
              </button>
              <button
                onClick={() => inputRef.current?.clear()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Clear Input
              </button>
              <button
                onClick={() => alert(`Current value: ${inputRef.current?.getValue()}`)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Get Value
              </button>
            </div>
          </div>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            The useImperativeHandle Hook lets you customize the instance value that is exposed to parent components
            when using ref. It's useful for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Exposing specific methods to parent components</li>
            <li>Hiding internal implementation details</li>
            <li>Creating custom component APIs</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useImperativeHandle"
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