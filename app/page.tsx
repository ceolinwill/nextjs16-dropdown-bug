// biome-ignore-all lint/complexity/noUselessFragments: true
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HomePage() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1>home navbar</h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-black rounded-lg text-white px-4 py-2">
            Open Dropdown
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}
