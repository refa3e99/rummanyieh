import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-md border-b-2 border-navy">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="#home" className="font-display text-4xl md:text-5xl text-navy hover:opacity-80 transition-opacity">
          رُمّانية
        </Link>
        <div className="hidden md:flex gap-10 text-xl font-medium tracking-wide">
          <Link href="#home" className="hover:opacity-70 transition-opacity">الرئيسية</Link>
          <Link href="#menu" className="hover:opacity-70 transition-opacity">القائمة</Link>
          <Link href="#locations" className="hover:opacity-70 transition-opacity">فروعنا</Link>
        </div>
        {/* Mobile menu button could be added here, but keeping it minimal for now */}
      </div>
      {/* Decorative inner border line */}
      <div className="absolute bottom-1 left-0 right-0 h-px bg-navy"></div>
    </nav>
  );
}
