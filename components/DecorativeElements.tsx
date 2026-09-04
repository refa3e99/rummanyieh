export function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-24 w-full max-w-3xl mx-auto px-8">
      <div className="h-px flex-1 bg-navy"></div>
      <div className="mx-6 w-4 h-4 rotate-45 border-2 border-navy flex items-center justify-center">
        <div className="w-1 h-1 bg-navy rounded-full"></div>
      </div>
      <div className="h-px flex-1 bg-navy"></div>
    </div>
  );
}

export function OrnamentalBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex relative p-2 mx-auto">
      <div className="absolute inset-0 border border-cream/50 rounded-[2rem] pointer-events-none"></div>
      <div className="absolute inset-[3px] border border-cream/50 rounded-[1.8rem] pointer-events-none"></div>
      <div className="px-8 py-3 bg-cream text-navy font-display text-2xl md:text-3xl rounded-[1.6rem]">
        {text}
      </div>
    </div>
  );
}

export function PlaqueBorder({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative p-2 md:p-3 bg-cream rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg ${className}`}>
      {/* Outer border */}
      <div className="absolute inset-0 border-2 border-navy rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg pointer-events-none"></div>
      {/* Inner border */}
      <div className="absolute inset-1.5 border border-navy rounded-tr-[2.8rem] rounded-bl-[2.8rem] rounded-tl-md rounded-br-md pointer-events-none"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full rounded-tr-[2.8rem] rounded-bl-[2.8rem] rounded-tl-md rounded-br-md overflow-hidden">
        {children}
      </div>
    </div>
  );
}
