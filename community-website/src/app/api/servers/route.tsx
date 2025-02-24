import { NextRequest, NextResponse } from 'next/server';
import { GameDig } from 'gamedig';

const SERVERS = [
  { type: 'teamfortress2', ip: process.env.SERVER_1_IP, port: process.env.SERVER_1_PORT },
  // Need to add rest of the servers later
];

export async function GET(req: NextRequest) {
  try {
    const serverPromises = SERVERS.map(server =>
      GameDig.query({
        type: server.type,
        host: server.ip,
        port: server.port,
      }).then(state => {
        // Log the bot information to the console for debugging
        //console.log('Bot info:', state.bots);

        return {
          ip: server.ip,
          port: server.port,
          name: state.name,
          map: state.map,
          players: state.players.map(player => player.name).length,
          bots: state.bots.filter(bot => bot.name).length,
          online: true,
        };
      }).catch(error => ({
        ip: server.ip,
        port: server.port,
        name: `Server at ${server.ip}:${server.port}`,
        map: 'N/A',
        players: [],
        botCount: 0,
        online: false,
      }))
    );

    const serverInfos = await Promise.all(serverPromises);

    return NextResponse.json(serverInfos, { status: 200 });
  } catch (error) {
    console.error('Error fetching server info:', error);
    return NextResponse.json({ error: 'Failed to fetch server info' }, { status: 500 });
  }
}