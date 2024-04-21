import Image from 'next/image';
import jantteriImg from '/public/jantteri_miettii.jpg';

// This is a 404 page component. It is displayed when the user tries to access a page that does not exist. (WIP)
export default function Nowhere() {
    return (
        <div className="flex items-center justify-center h-screen bg-red">
            <div className="p-8 shadow-2xl rounded bg-red-lightest">
                <div className="flex flex-row items-center justify-center space-x-10">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold ">404 - Sivua ei löytynyt</h1>
                    </div>
                    <Image
                        src={jantteriImg}
                        alt="jantteri"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}