import Link from 'next/link'
import { Mail, Sparkles, Target, TrendingUp } from 'lucide-react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Email Marketing
              <span className="block text-primary-600">That Feels Personal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your email campaigns with AI-driven personalization. 
              Increase engagement, boost conversions, and build lasting relationships.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/dashboard"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Get Started Free
              </Link>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Powerful Features for Modern Marketing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Sparkles className="w-8 h-8 text-primary-600" />}
                title="AI Personalization"
                description="Generate personalized email content for each recipient using advanced AI"
              />
              <FeatureCard
                icon={<Target className="w-8 h-8 text-primary-600" />}
                title="Smart Segmentation"
                description="Automatically segment your audience based on behavior and preferences"
              />
              <FeatureCard
                icon={<TrendingUp className="w-8 h-8 text-primary-600" />}
                title="Analytics"
                description="Track performance with detailed insights and actionable metrics"
              />
              <FeatureCard
                icon={<Mail className="w-8 h-8 text-primary-600" />}
                title="Campaign Builder"
                description="Create beautiful emails with our intuitive drag-and-drop builder"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Transform Your Email Marketing?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of marketers who have already boosted their engagement by 3x
            </p>
            <Link 
              href="/dashboard"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}