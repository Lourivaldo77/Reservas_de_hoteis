export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-gray-200 rounded-lg h-48 animate-pulse" />
      ))}
    </div>
  )
}
