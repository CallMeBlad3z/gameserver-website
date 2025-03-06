import Image from 'next/image';
import Link from 'next/link';
import tf2logo from '/public/tf2logo.png';
import Ping from './ping';
import { GeistMono } from 'geist/font/mono';

export default function ServerList({ serversInfo = [] }) {
  return (
    <div className="flex flex-col items-center 2xl:w-3/5 lg:w-3/4 sm:basis-1/1 bg-darker py-24 font-sans rounded-xl">
      <div className="mb-10">
        <h1 className="text-4xl text-center text-red-custom mb-12">Palvelimet</h1>
        <p className="text-2xl text-center mb-10 px-12">
          Hostaamme tällä hetkellä 5 eri pelimuodon palvelinta ja mahdollisesti laajennamme tulevaisuudessa, mikäli kysyntä lisääntyy. TF2 koodikannan siirryttyä 32 bittisestä 64 bittiseen takaa nyt palvelimillemme huomattavasti paremman suorituskyvyn, sekä pienemmän riskin kaatumisille.
        </p>
      </div>
      <div className="flex flex-wrap justify-center py-5 mx-4 rounded-xl bg-dark gap-4">
        {serversInfo.length > 0 ? (
          serversInfo.map((serverInfo, index) => (
            <div
              className="relative flex flex-col rounded p-2 bg-darker drop-shadow-xl overflow-hidden group sm:basis-2/3 xl:basis-[48%]"
              key={index}
            >
              <Image
                src={serverInfo.backgroundImage}
                alt="serverCard_bg"
                layout="fill"
                objectFit="cover"
                className="brightness-50 rounded-lg transition-all duration-300 group-hover:brightness-50"
              />
              <div className="flex flex-col justify-between relative">
                <div className="server-info flex-grow py-2 pl-4">
                  <div className="flex flex-row justify-between gap-1">
                    <h2 className="text-2xl">{serverInfo.name}</h2>
                    <Image className="self-end" src={tf2logo} alt="tf2logo" width={50} height={50} />
                  </div>
                <div className="map-info">
                  <div className="map-info flex flex-row gap-1">
                    <p className="text-1xl">Kartta:</p>
                    <p className={GeistMono.className}>{serverInfo.map}</p>
                  </div>
                  <div className="general-info flex flex-row justify-between">
                    <p className="text-1xl">Pelaajat: {serverInfo.players}/{serverInfo.maxplayers}</p>
                    <div className="flex items-end items-center gap-2">
                      <Ping ip={serverInfo.ip} port={serverInfo.port} />
                      <p className={serverInfo.online ? 'text-green-500' : 'text-red-500'}>
                        {serverInfo.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Link className="bg-red-custom p-1 px-6 rounded-md" href={`steam://connect/${serverInfo.ip}:${serverInfo.port}`}>
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