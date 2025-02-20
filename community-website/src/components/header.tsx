import discordLogo from "/public/discord.png";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex w-full absolute">
        <nav className="container max-w-7xl text-white flex flex-wrap items-center justify-between mx-auto p-8 bg-red shadow-2xl rounded-b">
            <Link href="/" className="text-3xl">
                Pelitupa.fi
            </Link>

            <div className="space-x-6 lg:text-xl">
                <Link href="/servers">Palvelimet</Link>
                <Link href="/commands">Komennot</Link>
                <Link className="mr-100" href="/about">Tietoa meistä</Link>
            </div>
            
            <div>
                <div className="flex items-center justify-center bg-white rounded-full shadow-lg w-8 h-8">
                  <Link className="space-x-4 text-xl"
                    //style={{ backgroundColor: '#40444b' }} inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-re
                    href="https://discord.gg/3rTUMdn"><FaDiscord className="fill-black w-6 h-6 fill-red"/></Link>
                </div>
            </div>
        </nav>
    </div>
  );
}