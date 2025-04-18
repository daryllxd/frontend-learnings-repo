'use client';

import { useReducer } from 'react';

// Define types
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
};

// Sample products
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + action.payload.price,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }

    case 'REMOVE_ITEM': {
      const item = state.items.find((item) => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) return state;

      const quantityDiff = action.payload.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
        total: state.total + item.price * quantityDiff,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

export default function UseReducerPage() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">useReducer Hook</h1>

      <div className="space-y-8">
        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Shopping Cart Example</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="rounded-lg border p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <button
                    onClick={() => addItem(product)}
                    className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Cart Items</h3>
              {state.items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 rounded border p-1"
                        />
                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-semibold">Total: ${state.total}</p>
                    <button
                      onClick={clearCart}
                      className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Documentation</h2>
          <p className="mb-4">
            The useReducer Hook lets you add a reducer to your component. It's useful for:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Managing complex state logic</li>
            <li>Handling multiple related state updates</li>
            <li>Implementing state machines and reducers</li>
          </ul>
          <a
            href="https://react.dev/reference/react/useReducer"
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
