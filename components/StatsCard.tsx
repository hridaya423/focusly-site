interface StatCardProps {
    number: string
    text: string
    subtext?: string
  }
  
  function StatCard({ number, text, subtext }: StatCardProps) {
    return (
      <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 group">
        <div className="text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-4 transform group-hover:scale-105 transition-transform duration-500">
          {number}
        </div>
        <div className="text-xl text-gray-300 font-medium group-hover:text-violet-300 transition-colors duration-500">{text}</div>
        {subtext && (
          <div className="text-sm text-gray-500 mt-3 group-hover:text-gray-400 transition-colors duration-500">{subtext}</div>
        )}
      </div>
    )
  }
  
  
  export default StatCard