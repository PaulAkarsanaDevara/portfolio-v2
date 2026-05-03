export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-bounce" />
    </div>
  )
}
