import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-md border-b-2 border-navy">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="#home" className="hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/images/rummaniyehLogo.svg" 
            alt="رُمّانية" 
            width={160} 
            height={60} 
            className="w-auto h-12 md:h-16"
            priority
          />
        </Link>
        <div className="hidden md:flex gap-10 text-xl font-medium tracking-wide">
          <Link href="#home" className="hover:opacity-70 transition-opacity">الرئيسية</Link>
          <Link href="#menu" className="hover:opacity-70 transition-opacity">القائمة</Link>
          <Link href="#locations" className="hover:opacity-70 transition-opacity">موقعنا</Link>
        </div>
        {/* Mobile menu button could be added here, but keeping it minimal for now */}
      </div>
      {/* Decorative inner border line */}
      <div className="absolute bottom-1 left-0 right-0 h-px bg-navy"></div>
    </nav>
  );
}
