'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cardbg from '/public/pl-enclosure.jpg';
import tf2logo from '/public/tf2logo.png';

export default function ServerPage() {
  const [serversInfo, setServersInfo] = useState([]);

  useEffect(() => {
    async function fetchServersInfo() {
      const response = await fetch('/api/servers');
      const data = await response.json();
      console.log('Servers info:', data); // Log servers info for debugging
      setServersInfo(data);
    }

    fetchServersInfo();
  }, []);

  return (
    <div className="flex 2xl:w-1/2 lg:w-3/5 md:3/4 container justify-center bg-dark py-20">
      <div className="gap-4 basis-2/3">
        {serversInfo.length > 0 ? (
          serversInfo.map((serverInfo, index) => (
            <div className="flex flex-col p-2 bg-darker drop-shadow-xl" key={index}>
              <Image
                src={cardbg}
                alt="serverCard_bg"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="flex justify-between relative">
                <div className="server-info py-2 pl-4">
                  <h2 className="text-2xl pb-2">[FIN] Pelitupa | Payload</h2>
                  <p className="text-1xl">Kartta: {serverInfo.map}</p>
                  <p className="text-1xl">Pelaajat: {serverInfo.players}/24</p>
                </div>
                <div className="flex flex-col gap-6">
                  <Image src={tf2logo} alt="tf2logo" width={50} height={50} />
                  <p className={serverInfo.online ? 'text-very-green' : 'text-very-red'}>
                    {serverInfo.online ? 'Online' : 'Offline'}
                  </p>
                </div>
                
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