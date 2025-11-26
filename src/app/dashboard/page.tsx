import Sidebar from '@/components/dashboard/Sidebar'
import { Mail, Users, TrendingUp, DollarSign } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<Mail className="w-6 h-6" />}
              title="Total Campaigns"
              value="24"
              change="+12%"
              positive
            />
            <StatCard
              icon={<Users className="w-6 h-6" />}
              title="Total Subscribers"
              value="12,458"
              change="+8%"
              positive
            />
            <StatCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Open Rate"
              value="42.3%"
              change="+5.2%"
              positive
            />
            <StatCard
              icon={<DollarSign className="w-6 h-6" />}
              title="Revenue"
              value="$23,450"
              change="+18%"
              positive
            />
          </div>

          {/* Recent Campaigns */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Campaigns</h2>
            <div className="space-y-4">
              <CampaignRow
                name="Summer Sale 2025"
                status="Active"
                sent="5,234"
                openRate="38.5%"
              />
              <CampaignRow
                name="Welcome Series - Part 1"
                status="Scheduled"
                sent="-"
                openRate="-"
              />
              <CampaignRow
                name="Product Launch Announcement"
                status="Completed"
                sent="8,921"
                openRate="45.2%"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition">
                  Create New Campaign
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                  Import Subscribers
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                  View Analytics
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="p-3 bg-blue-50 rounded">📈 Your open rates are 15% above industry average</p>
                <p className="p-3 bg-green-50 rounded">✨ Best time to send: Tuesday at 10 AM</p>
                <p className="p-3 bg-yellow-50 rounded">💡 Consider A/B testing subject lines for better results</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, title, value, change, positive }: {
  icon: React.ReactNode
  title: string
  value: string
  change: string
  positive: boolean
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-gray-500">{icon}</div>
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  )
}

function CampaignRow({ name, status, sent, openRate }: {
  name: string
  status: string
  sent: string
  openRate: string
}) {
  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    Scheduled: 'bg-blue-100 text-blue-800',
    Completed: 'bg-gray-100 text-gray-800',
  }

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex-1">
        <p className="font-medium text-gray-900">{name}</p>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <span className={`px-3 py-1 rounded-full ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </span>
        <span className="text-gray-600 w-20 text-center">{sent}</span>
        <span className="text-gray-900 font-semibold w-20 text-center">{openRate}</span>
      </div>
    </div>
  )
}