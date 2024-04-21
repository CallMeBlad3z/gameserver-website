import Link from 'next/link';

export default function Footer() {
    return (
        <div 
          className="w-full bottom-0 text-white z-10 flex flex-row items-center justify-center bg-red-darkest" 
        >
            <div className="p-8">
                <Link href="/" className="space-x-4 text-xl">
                    Home
                </Link>
            </div>

            <div className="p-8">
                <div className="space-x-4 text-xl">
                    <Link href="/servers">Palvelimet</Link>
                </div>
            </div>

            <div className="p-8">
                <div className="space-x-4 text-xl">
                    <Link href="/about">Tietoa meistä</Link>
                </div>
            </div>
        </div>
    );
}