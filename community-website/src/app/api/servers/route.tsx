import { NextRequest, NextResponse } from 'next/server';
import { GameDig } from 'gamedig';
import { readCache, writeCache } from '@/utils/serverNameCache';
import Payload from '/public/pl_enclosure.png';
import VsH from '/public/vsh_distillery.png';
import Slender from '/public/slender_ward.png';
import MvM from '/public/mvm_ma_ep5.png';

// Define the server information interface
interface ServerInfo {
  type: string;
  ip: string;
  port: number;
  name: string;
  map: string;
  maxplayers: number;
  players: number;
  bots: number;
  online: boolean;
  backgroundImage: string;
  ping: number;
}

// Define the servers to query
const SERVERS = [
  { type: 'teamfortress2', ip: process.env.SERVER_1_IP, port: Number(process.env.SERVER_1_PORT), backgroundImage: Payload },
  { type: 'teamfortress2', ip: process.env.SERVER_2_IP, port: Number(process.env.SERVER_2_PORT), backgroundImage: VsH },
  { type: 'teamfortress2', ip: process.env.SERVER_3_IP, port: Number(process.env.SERVER_3_PORT), backgroundImage: MvM },
  { type: 'teamfortress2', ip: process.env.SERVER_4_IP, port: Number(process.env.SERVER_4_PORT), backgroundImage: Slender },
  //{ type: 'teamfortress2', ip: process.env.SERVER_5_IP, port: Number(process.env.SERVER_5_PORT), backgroundImage: Bhop },
];

// Read the initial cache from the file
const serverNameCache = readCache();

export async function GET(req: NextRequest) {
  try {
    const serverPromises = SERVERS.map(server =>
      GameDig.query({
        type: server.type,
        host: server.ip,
        port: server.port,
        maxRetries: 1,
        socketTimeout: 500,
      }).then(state => {
        // Log the server state to the console for debugging
        console.log('Server state:', state);

        // Update the cache with the server name if the server is online
        serverNameCache[`${server.ip}:${server.port}`] = state.name || serverNameCache[`${server.ip}:${server.port}`];

        // Write the updated cache to the file
        writeCache(serverNameCache);

        return {
          ip: server.ip,
          port: server.port,
          ping: state.ping,
          name: serverNameCache[`${server.ip}:${server.port}`],
          map: state.map,
          maxplayers: state.maxplayers,
          players: state.players.length,
          bots: state.bots.length,
          online: true,
          backgroundImage: server.backgroundImage,
        };
      }).catch(error => ({
        ip: server.ip,
        port: server.port,
        ping: null,
        name: serverNameCache[`${server.ip}:${server.port}`] || server.ip + ':' + server.port,
        map: 'N/A',
        players: 0,
        maxplayers: 0,
        bots: 0,
        online: false,
        backgroundImage: server.backgroundImage,
      }))
    );

    const serverInfos = await Promise.all(serverPromises);

    return NextResponse.json(serverInfos, { status: 200 });
  } catch (error) {
    console.error('Error fetching server info:', error);
    return NextResponse.json({ error: 'Failed to fetch server info' }, { status: 500 });
  }
}