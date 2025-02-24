import Image from 'next/image';
import Link from 'next/link';
import cardbg from '/public/pl-enclosure.jpg';
import tf2logo from '/public/tf2logo.png';

export default function ServerList({ serversInfo = [] }) {
  return (
    <div className="flex 2xl:w-1/2 lg:w-3/5 md:3/4 container justify-center bg-dark py-20">
      <div className="gap-4 basis-2/3">
        {serversInfo.length > 0 ? (
          serversInfo.map((serverInfo, index) => (
            <div
              className="relative flex flex-col rounded p-2 bg-darker drop-shadow-xl overflow-hidden group mb-10"
              key={index}
            >
              <Image
                src={cardbg}
                alt="serverCard_bg"
                layout="fill"
                objectFit="cover"
                className="brightness-75 rounded-lg transition-all duration-300 group-hover:brightness-50"
              />
              <div className="flex justify-between relative">
                <div className="server-info py-2 pl-4">
                  <h2 className="text-2xl pb-2">{serverInfo.name}</h2>
                  <p className="text-1xl">Kartta: {serverInfo.map}</p>
                  <p className="text-1xl">Pelaajat: {serverInfo.players}/{serverInfo.maxplayers}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <Image src={tf2logo} alt="tf2logo" width={50} height={50} />
                  <p className={serverInfo.online ? 'text-very-green' : 'text-very-red'}>
                    {serverInfo.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
              <Link className="bg-red p-1 px-6 rounded-md" href={`steam://connect/${serverInfo.ip}:${serverInfo.port}`}>
                Liity
              </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl">Ladataan...</p>
        )}
      </div>
    </div>
  );
}