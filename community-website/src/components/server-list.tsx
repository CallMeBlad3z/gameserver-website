export default function ServerList() {
    return (
        <div className="bg-red">
            <div className="pt-28">
                <h1 className="text-4xl text-center text-white mb-10 mt-10">Palvelimet</h1>
                <div className="overflow-x-auto max-w-2xl mx-auto">
                    <table className="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden mb-10">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-600">
                                <th className="px-4 py-3">Palvelin</th>
                                <th className="px-4 py-3">IP</th>
                                <th className="px-4 py-3">Portti</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-3">Palvelin 1</td>
                                <td className="px-4 py-3">
                                    <a href="https://www.google.com" className="text-blue-500 hover:underline">
                                        google.com
                                    </a>
                                </td>
                                <td className="px-4 py-3">25565</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Palvelin 2</td>
                                <td className="px-4 py-3">
                                    <a href="https://www.google.com" className="text-blue-500 hover:underline">
                                        google.com
                                    </a>
                                </td>
                                <td className="px-4 py-3">25565</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}