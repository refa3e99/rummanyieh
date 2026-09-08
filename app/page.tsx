import Navbar from '@/components/Navbar';
import { SectionDivider, OrnamentalBadge, PlaqueBorder } from '@/components/DecorativeElements';
import Image from 'next/image';
import { getMenuCategories } from '@/lib/menuData';
import MenuSection from '@/components/MenuSection';

const locations = [
  {
    name: 'ضاحية الرشيد',
    address: 'شارع عاكف الفايز، ضاحية الرشيد، عمّان.',
    hours: '١١:٠٠ ص - ٣:٠٠ ص',
    phone: '+962793003400',
    mapUrl: '/images/storePic.jpeg'
  }
];

export default function Home() {
  const categories = getMenuCategories();

  return (
    <>
      <Navbar />
      
      <main className="pt-24 min-h-screen bg-cream selection:bg-navy selection:text-cream">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-navy">
            <Image 
              src="/images/menu/shawerma/shwrmaMxFamEco.jpeg" 
              alt="صورة الغلاف" 
              fill 
              sizes="100vw"
              className="object-cover opacity-30 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center mt-20">
            <div className="mb-10 text-cream">
              <OrnamentalBadge text="منذ ٢٠٢٦" />
            </div>
            
            <h1 className="font-display text-7xl md:text-9xl text-cream mb-8 leading-tight tracking-tight drop-shadow-lg">
              رُمّانية
            </h1>
            
            <p className="font-body text-xl md:text-3xl text-cream/90 max-w-2xl mx-auto mb-16 leading-relaxed">
              نقدم لكم ألذ أنواع الشاورما
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 md:mb-24">
              <a href="#menu" className="bg-cream text-navy hover:bg-white px-12 py-4 font-display text-2xl w-full sm:w-auto min-w-[200px] transition-colors duration-300">
                قائمة الطعام
              </a>
              
              <a href="#locations" className="bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-navy px-12 py-4 font-display text-2xl w-full sm:w-auto min-w-[200px] transition-colors duration-300">
                موقعنا
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* MENU SECTION */}
        <MenuSection categories={categories} />

        <SectionDivider />

        {/* LOCATIONS SECTION */}
        <section id="locations" className="py-20 px-6 max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-display text-5xl md:text-7xl text-navy">موقعنا</h2>
            <div className="h-px w-24 bg-navy mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {locations.map((loc, idx) => (
              <PlaqueBorder key={idx} className="flex flex-col h-full max-w-md mx-auto">
                <div className="p-8 md:p-12 flex flex-col h-full z-10 bg-cream rounded-tr-[2.8rem] rounded-bl-[2.8rem] rounded-tl-md rounded-br-md">
                  <div className="flex-1 space-y-6">
                    <div className="relative w-full h-48 md:h-56 mb-8 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm overflow-hidden border-2 border-navy/20">
                      <Image 
                        src={loc.mapUrl} 
                        alt={`خريطة ${loc.name}`} 
                        fill 
                        sizes="(max-width: 640px) 100vw, 448px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <h3 className="font-display text-4xl text-navy mb-6">{loc.name}</h3>
                    
                    <div className="space-y-4 text-lg">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-navy shrink-0"></div>
                        <p className="font-medium">{loc.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-navy shrink-0"></div>
                        <p dir="ltr" className="text-right">{loc.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-navy/20 flex flex-col gap-4">
                    <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="inline-flex items-center justify-center w-full py-4 bg-navy text-cream font-display text-2xl hover:bg-navy/90 transition-colors group">
                      <span>اتصل بنا</span>
                    </a>
                    <a href="https://maps.app.goo.gl/zCASxB4mX8U2wdG27?g_st=ic" className="inline-flex items-center justify-center w-full py-4 border-2 border-navy text-navy font-display text-2xl hover:bg-navy hover:text-cream transition-colors group">
                      <span>الاتجاهات</span>
                      <span className="mr-3 transition-transform group-hover:-translate-x-2">←</span>
                    </a>
                  </div>
                </div>
              </PlaqueBorder>
            ))}
          </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer className="bg-navy text-cream py-16 border-t-4 border-double border-cream/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center space-y-8">
          <Image 
            src="/images/rummaniyehLogo.svg" 
            alt="رُمّانية" 
            width={240} 
            height={90} 
            className="w-auto h-20 md:h-24 brightness-0 invert opacity-90"
          />
          <div className="w-32 h-px bg-cream/30"></div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-cream/70 text-lg">رُمّانية • جميع الحقوق محفوظة © ٢٠٢٦</p>
            <p className="text-cream/50 text-sm font-sans tracking-wide">
              Designed & developed by{' '}
              <a href="https://web-design-studio-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-cream transition-colors">
                Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}