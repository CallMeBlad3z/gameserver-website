import discordLogo from "/public/discord.png";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex w-full bg-darkest">
        <nav className="flex mt-16 flex-wrap 2xl:w-3/5 lg:w-3/4 text-white items-center justify-between mx-auto p-8 bg-dark shadow-2xl rounded-3xl">
            <Link href="/" className="text-4xl font-sans bg-gradient-to-r from-red-custom via-purple-500 to-blue-custom bg-clip-text text-transparent">
                PeliTupa
            </Link>

            <div className="space-x-6 lg:text-2xl">
                <Link href="/servers">Palvelimet</Link>
                <Link href="/commands">Komennot</Link>
                <Link className="mr-100" href="/about">Tietoa meistä</Link>
            </div>
            
            <div>
                <div className="flex items-center justify-center bg-white rounded-full shadow-lg w-9 h-9">
                  <Link className="space-x-4 text-xl"
                    href="https://discord.gg/3rTUMdn"><FaDiscord className="fill-black w-6 h-6 fill-red-custom"/></Link>
                </div>
            </div>
        </nav>
    </div>
  );
}