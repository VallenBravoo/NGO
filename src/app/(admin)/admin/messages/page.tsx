import { db } from "@/lib/db"

export default async function MessagesPage() {
  const messages = await db.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Messages & Help Requests</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{msg.firstName} {msg.lastName}</div>
                  <div className="text-sm text-gray-500">{msg.email}</div>
                  <div className="text-sm text-gray-500">{msg.phone || '-'}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
                  {msg.message.startsWith('[HELP REQUEST]') ? (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded bg-orange-100 text-orange-800 text-xs font-bold mr-2">
                      HELP REQUEST
                    </span>
                  ) : null}
                  {msg.message.replace('[HELP REQUEST] ', '')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    msg.status === 'RESOLVED' ? 'bg-green-100 text-green-800' :
                    msg.status === 'UNREAD' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.status}
                  </span>
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
