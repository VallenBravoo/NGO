import { ReactNode } from 'react';
import Link from 'next/link';
import { LogOut, LayoutDashboard, Users, HeartHandshake, MessageSquare } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Donations', href: '/admin/donations', icon: HeartHandshake },
    { name: 'Volunteers', href: '/admin/volunteers', icon: Users },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex-shrink-0 flex flex-col hidden md:flex">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-accent">HopeBridge</h1>
          <p className="text-sm text-gray-400 mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-white/10 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-primary text-white p-4 w-full absolute top-0 z-10">
        <h1 className="text-xl font-bold text-accent">HopeBridge Admin</h1>
        <Link href="/api/auth/signout" className="text-red-400">
          <LogOut className="w-5 h-5" />
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-0 mt-16 md:mt-0 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
