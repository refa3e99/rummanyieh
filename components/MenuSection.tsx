'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { MenuCategory, MenuItem } from '@/lib/menuData';

function MenuItemImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 80px, 96px',
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const fallbackUrl = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80';
  const isFailed = failedSrc === src;
  const currentSrc = isFailed ? fallbackUrl : (src || fallbackUrl);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => {
        setFailedSrc(src);
      }}
      referrerPolicy="no-referrer"
    />
  );
}

const toArabicNumerals = (num: number) => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toFixed(2).split('').map(char => {
    if (char >= '0' && char <= '9') {
      return arabicNumbers[parseInt(char)];
    }
    return char;
  }).join('');
};

export default function MenuSection({ categories }: { categories: MenuCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setSelectedVariantId(item.variants[0]?.id || null);
  };

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <>
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-6">
          <h2 className="font-display text-5xl md:text-7xl text-navy">قائمة الطعام</h2>
          <div className="h-px w-24 bg-navy mx-auto"></div>
        </div>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-display text-xl transition-colors border-2 border-navy ${
              activeCategory === 'all' 
                ? 'bg-navy text-cream' 
                : 'bg-transparent text-navy hover:bg-navy/10'
            }`}
          >
            الكل
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-display text-xl transition-colors border-2 border-navy ${
                activeCategory === category.id 
                  ? 'bg-navy text-cream' 
                  : 'bg-transparent text-navy hover:bg-navy/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {filteredCategories.map((category, idx) => (
            <div key={idx} className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center space-x-4 space-x-reverse mb-8">
                <h3 className="font-display text-4xl text-navy">{category.name}</h3>
                <div className="flex-1 h-[2px] border-t-2 border-dashed border-navy/30"></div>
              </div>
              
              <div className="space-y-8">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group cursor-pointer flex gap-4 md:gap-6 items-start"
                    onClick={() => handleSelectItem(item)}
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm overflow-hidden border border-navy/20 group-hover:border-navy/50 transition-colors">
                      <MenuItemImage 
                        src={item.variants[0]?.image || ''} 
                        alt={item.name} 
                        sizes="(max-width: 768px) 80px, 96px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-bold text-xl md:text-2xl text-navy group-hover:text-navy/80 transition-colors">{item.name}</h4>
                        <div className="hidden sm:block flex-1 m-4 h-px border-b border-dotted border-navy/40 relative top-[-6px]"></div>
                        {item.variants.length === 1 && (
                          <div className="flex flex-col items-end gap-1">
                            <span className="font-display text-2xl text-navy whitespace-nowrap mr-2">
                              {toArabicNumerals(item.variants[0].price)} د.أ
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {item.variants.length > 1 ? (
                        <div className="flex justify-between items-start gap-4 mt-2">
                          <p className="text-navy/70 text-lg leading-relaxed flex-1 ml-4">{item.description}</p>
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            {item.variants.map(variant => (
                              <div key={variant.id} className="flex items-center gap-2">
                                <span className="text-sm font-bold text-navy/60">{variant.name}</span>
                                <span className="font-display text-xl text-navy whitespace-nowrap">
                                  {toArabicNumerals(variant.price)} د.أ
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-navy/70 text-lg leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          ></div>
          
          <div className="relative z-10 w-full max-w-lg bg-cream rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg overflow-hidden border-2 border-navy animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 start-4 z-20 w-10 h-10 bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-navy/30 text-navy hover:bg-navy hover:text-cream transition-colors shadow-sm"
              aria-label="إغلاق"
            >
              ✕
            </button>
            
            <div className="relative w-full h-64 sm:h-80">
              <MenuItemImage 
                src={selectedItem.variants.find(v => v.id === selectedVariantId)?.image || selectedItem.variants[0]?.image || ''} 
                alt={selectedItem.name} 
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent"></div>
            </div>
            
            <div className="p-8 sm:p-10 text-center space-y-6">
              <h3 className="font-display text-4xl text-navy">{selectedItem.name}</h3>
              <div className="h-px w-16 bg-navy mx-auto"></div>
              <p className="text-navy/80 text-lg md:text-xl leading-relaxed">
                {selectedItem.description}
              </p>
              
              <div className="pt-4 flex flex-col items-center justify-center gap-4">
                {selectedItem.variants.map((variant) => {
                  const isMultiple = selectedItem.variants.length > 1;
                  const isSelected = selectedVariantId === variant.id;

                  if (isMultiple) {
                    return (
                      <button 
                        key={variant.id} 
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`flex items-center justify-between flex-row-reverse w-full max-w-xs border transition-colors p-4 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm ${
                          isSelected 
                            ? 'bg-navy border-navy text-cream' 
                            : 'bg-navy/5 border-navy/10 text-navy hover:bg-navy/10'
                        }`}
                      >
                         <span className={`font-bold text-xl ${isSelected ? 'text-cream' : 'text-navy'}`}>
                           {variant.name}
                         </span>
                         <span className={`font-display text-2xl ${isSelected ? 'text-cream' : 'text-navy'}`}>
                           {toArabicNumerals(variant.price)} د.أ
                         </span>
                      </button>
                    );
                  }

                  return (
                    <div key={variant.id} className="flex items-center justify-center w-full max-w-xs border border-navy/10 bg-navy/5 p-4 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm">
                       <span className="font-display text-2xl text-navy">{toArabicNumerals(variant.price)} د.أ</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
