import { db } from "@/lib/db"
import { HeartHandshake, Users, MessageSquare } from "lucide-react"

export default async function AdminDashboard() {
  const [totalDonations, completedDonations, pendingVolunteers, unreadMessages] = await Promise.all([
    db.donation.count(),
    db.donation.aggregate({
      _sum: { amount: true },
      where: { status: 'COMPLETED' }
    }),
    db.volunteerApplication.count({ where: { status: 'PENDING' } }),
    db.contactMessage.count({ where: { status: 'UNREAD' } })
  ])

  const stats = [
    {
      name: 'Total Donations Raised',
      value: `$${(completedDonations._sum.amount || 0).toLocaleString()}`,
      icon: HeartHandshake,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Pending Volunteers',
      value: pendingVolunteers.toString(),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Unread Messages & Help Requests',
      value: unreadMessages.toString(),
      icon: MessageSquare,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <p className="text-gray-600">
          Welcome to the HopeBridge Foundation admin panel. Use the sidebar to navigate to specific sections to view donations, review volunteer applications, or respond to messages and help requests.
        </p>
      </div>
    </div>
  )
}
