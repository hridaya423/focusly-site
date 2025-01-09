'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChartBarIcon, Hash, Sheet } from 'lucide-react'
import FeatureCard from '@/components/FeatureCard'
import StatCard from '@/components/StatsCard'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-950 via-indigo-900 to-purple-900 opacity-30" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>

      <nav className={`fixed w-full transition-all duration-500 z-50 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-violet-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12">
            <img src="/logo.png"/>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Focusly
            </span>
          </div>
          <Link 
            href="https://chrome.google.com/webstore"
            className="relative group px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors overflow-hidden"
          >
            <span className="relative z-10 font-medium text-lg">Add to Chrome</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </nav>

      <main>
        <section className="pt-48 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/30 to-indigo-600/30 rounded-full blur-3xl" />
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                Track Your Time,
                <div className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                  Boost Your Focus
                </div>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Master your time browsing and make it productive!
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link
                  href="https://chrome.google.com/webstore"
                  className="group relative px-12 py-6 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors w-full sm:w-auto overflow-hidden"
                >
                  <span className="relative z-10 text-xl font-medium">Install Now</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="#features"
                  className="group px-12 py-6 rounded-xl border border-violet-500/30 hover:border-violet-500/50 transition-colors w-full sm:w-auto bg-black/20 backdrop-blur"
                >
                  <span className="text-xl font-medium group-hover:text-violet-400 transition-colors">
                    Learn More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ChartBarIcon />}
                title="Smart Analytics"
                description="Journey through your digital realm with enchanted insights"
              />
              <FeatureCard
                icon={<Hash/>}
                title="Auto Categories"
                description="Let AI wisdom sort your digital adventures"
              />
              <FeatureCard
                icon={<Sheet />}
                title="Data to CSV"
                description="Export your browsing data to a spreadsheet!"
              />
            </div>
          </div>
        </section>

        <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-indigo-950/20 to-violet-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <StatCard 
              number="7+" 
              text="Hours of development"
              subtext="crafting the perfect experience" 
            />
            <StatCard 
              number="15+" 
              text="Features implemented"
              subtext="with more coming soon" 
            />
            <StatCard 
              number="5+" 
              text="Test iterations"
              subtext="to ensure quality" 
            />
          </div>
        </div>
      </section>
      </main>

      <footer className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
              <img src="/logo.png"/>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Focusly
              </span>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-gray-400 hover:text-violet-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
