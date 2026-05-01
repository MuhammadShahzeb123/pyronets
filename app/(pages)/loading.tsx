export default function Loading() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 animate-pulse">
          <div className="space-y-4">
            <div className="h-12 bg-white/5 rounded-lg w-3/4" />
            <div className="h-8 bg-white/5 rounded-lg w-1/2" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-white/5 rounded-xl" />
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-6 bg-white/5 rounded-lg w-full" />
            <div className="h-6 bg-white/5 rounded-lg w-5/6" />
            <div className="h-6 bg-white/5 rounded-lg w-4/6" />
          </div>
        </div>
      </div>
    </div>
  );
}