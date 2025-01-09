interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
  }
  
  function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="mb-6 text-violet-400 transform group-hover:scale-110 transition-transform duration-500 text-3xl">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{description}</p>
        </div>
      </div>
    )
  }
  
export default FeatureCard