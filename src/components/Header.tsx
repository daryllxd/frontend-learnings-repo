import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            React Fundamentals
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">React Hooks</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useState">useState</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useEffect">useEffect</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useContext">useContext</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useReducer">useReducer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useRef">useRef</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useImperativeHandle">useImperativeHandle</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useMemo">useMemo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hooks/useCallback">useCallback</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
