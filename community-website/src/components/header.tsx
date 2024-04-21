import Image from "next/image";
import discordLogo from "/public/discord.png";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full absolute">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 bg-red-lighter shadow-2xl rounded-b">
            <Link href="/" className="font-bond text-3xl">
                Pelitupa.fi
            </Link>

            <div className="space-x-4 text-xl">
                <Link href="/servers">Palvelimet</Link>
                <Link className="mr-100" href="/about">Tietoa meistä</Link>

                <Link className="space-x-4 text-xl"
                  //style={{ backgroundColor: '#40444b' }} inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-re
                  href="https://discord.gg/3rTUMdn">Discord</Link>
            </div>
        </nav>
    </div>
  );
}