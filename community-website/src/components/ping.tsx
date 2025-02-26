'use client';

import { useState, useEffect } from 'react';

interface PingProps {
  ip: string;
  port: number;
}

export default function Ping({ ip, port }: PingProps) {
  const [ping, setPing] = useState<number | null>(null);

  useEffect(() => {
    const fetchPing = async () => {
      try {
        const response = await fetch(`/api/servers?ip=${ip}&port=${port}`);
        const data = await response.json();
        const server = data.find((server: any) => server.ip === ip && server.port === port);
        setPing(server ? server.ping : null);
      } catch (error) {
        console.error('Error fetching ping:', error);
      }
    };

    fetchPing();
  }, [ip, port]);

  const getPingColor = (ping: number | null) => {
    if (ping === null) return 'text-gray-500';
    if (ping < 59) return 'text-green-500';
    if (ping < 100) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <p className="text-1xl mr-8 text-left">
      Ping: <span className={getPingColor(ping)}>{ping !== null ? ping : '...'}</span>
    </p>
  );
}