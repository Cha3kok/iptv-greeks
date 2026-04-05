const devices = [
  { name: 'Samsung', emoji: '📺' },
  { name: 'LG', emoji: '🖥️' },
  { name: 'Android', emoji: '🤖' },
  { name: 'Apple TV', emoji: '🍎' },
  { name: 'Firestick', emoji: '🔥' },
  { name: 'MAG Box', emoji: '📡' },
  { name: 'iPhone', emoji: '📱' },
  { name: 'Windows', emoji: '💻' },
]

export default function DeviceLogos() {
  return (
    <section className="py-10 px-4 border-t border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
          Συμβατό με όλες τις συσκευές
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {devices.map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-2 bg-[#f0fdf4] border border-emerald-100 rounded-full px-5 py-2 text-sm font-medium text-[#1e293b]"
            >
              <span className="text-base">{d.emoji}</span>
              {d.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
