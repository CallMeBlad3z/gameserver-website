import ServerList from '@/components/server-list';

export default async function ServerPage() {
  let serversInfo = [];
  try {
    const response = await fetch('http://localhost:3000/api/servers');
    serversInfo = await response.json();
  } catch (error) {
    console.error('Error fetching server info:', error);
  }

  return (
    <div className="bg-darker text-white pt-40">
      <h1 className="text-4xl text-center text-white mb-28">Palvelimet</h1>
      <div className="flex justify-center">
        <ServerList serversInfo={serversInfo} />
      </div>
    </div>
  );
}