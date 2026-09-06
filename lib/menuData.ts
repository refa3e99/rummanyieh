import fs from 'fs';
import path from 'path';

export type MenuItemVariant = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  variants: MenuItemVariant[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};


export function getMenuCategories(): MenuCategory[] {
  const publicMenuPath = path.join(process.cwd(), 'public', 'images', 'menu');

  const baseCategories: MenuCategory[] = [
    {
      id: 'shawerma_chicken',
      name: 'شاورما دجاج',
      items: [
        {
          id: 'chicken_small_sandwich',
          name: 'ساندويش صغير',
          description: 'شاورما دجاج بسندويش صغير',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.8,
              image: '/images/menu/shawerma/shwrmaChknSndwchSml.jpeg',
            },
          ],
        },
        {
          id: 'chicken_large_sandwich',
          name: 'ساندويش كبير',
          description: 'شاورما دجاج بسندويش كبير',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1.25,
              image: '/images/menu/shawerma/shwrmaChknSndwchBg.jpeg',
            },
          ],
        },
        {
          id: 'chicken_french_sandwich',
          name: 'ساندويش فرنسي',
          description: 'شاورما دجاج بسندويش فرنسي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1.75,
              image: '/images/menu/shawerma/shwrmaChknSndwchFr.jpeg',
            },
          ],
        },
        {
          id: 'chicken_regular_meal',
          name: 'وجبة عادي',
          description: 'وجبة شاورما دجاج عادية',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2.5,
              image: '/images/menu/shawerma/shwrmaChknSngl.jpeg',
            },
          ],
        },
        {
          id: 'chicken_super_meal',
          name: 'وجبة سوبر',
          description: 'وجبة شاورما دجاج سوبر',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3,
              image: '/images/menu/shawerma/shwrmaChknSuper.jpeg',
            },
          ],
        },
        {
          id: 'chicken_double_meal',
          name: 'وجبة دبل',
          description: 'وجبة شاورما دجاج دبل',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3.5,
              image: '/images/menu/shawerma/shwrmaChknDbl.jpeg',
            },
          ],
        },
        {
          id: 'chicken_triple_meal',
          name: 'وجبة تربيل',
          description: 'وجبة شاورما دجاج تربيل',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 4.75,
              image: '/images/menu/shawerma/shwrmaChknTrpl.jpeg',
            },
          ],
        },
        {
          id: 'chicken_french_meal',
          name: 'وجبة فرنسي',
          description: 'وجبة شاورما دجاج بالخبز الفرنسي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3,
              image: '/images/menu/shawerma/shwrmaChknSndwchFr.jpeg',
            },
          ],
        },
        {
          id: 'chicken_250g_meal',
          name: 'وجبة دجاج 250 غرام',
          description: 'وجبة شاورما دجاج بوزن 250 غرام',
          variants: [
            {
              id: 'regular',
              name: '250 غرام',
              price: 3.5,
              image: '/images/menu/shawerma/shwrmaChknUnwrap.jpeg',
            },
          ],
        },
        {
          id: 'chicken_italian_meal',
          name: 'وجبة إيطالي',
          description: 'وجبة شاورما دجاج إيطالي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3.5,
              image: '/images/menu/shawerma/shwrmaItali.jpeg',
            },
          ],
        },
        {
          id: 'chicken_aleppo_meal',
          name: 'وجبة حلبي',
          description: 'وجبة شاورما دجاج حلبي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3.5,
              image: '/images/menu/shawerma/shwrmaHalabi.jpeg',
            },
          ],
        },
        {
          id: 'chicken_family_economy',
          name: 'وجبة عائلية اقتصادية (دجاج)',
          description: '8 ساندويش سوبر + بطاطا عائلي + 4 طحينية + 5 مخلل + 4 مثومة + 4 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 12,
              image: '/images/menu/shawerma/shwrmaMxFamEco.jpeg',
            },
          ],
        },
        {
          id: 'chicken_family_value',
          name: 'وجبة عائلية توفير (دجاج)',
          description: '5 ساندويش سوبر + بطاطا عائلي + 3 مثومة + 3 مثومة حار + 3 مخلل + 3 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 16.5,
              image: '/images/menu/shawerma/shwrmaMxFam.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'shawerma_meat',
      name: 'شاورما لحمة',
      items: [
        {
          id: 'meat_small_sandwich',
          name: 'ساندويش صغير',
          description: 'شاورما لحمة بسندويش صغير',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1,
              image: '/images/menu/shawerma/shwrmaMtSndwchSml.jpeg',
            },
          ],
        },
        {
          id: 'meat_large_sandwich',
          name: 'ساندويش كبير',
          description: 'شاورما لحمة بسندويش كبير',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1.6,
              image: '/images/menu/shawerma/shwrmaMtSndwchBg.jpeg',
            },
          ],
        },
        {
          id: 'meat_french_sandwich',
          name: 'ساندويش فرنسي',
          description: 'شاورما لحمة بسندويش فرنسي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2.25,
              image: '/images/menu/shawerma/shwrmaMtSndwchFr.jpeg',
            },
          ],
        },
        {
          id: 'meat_regular_meal',
          name: 'وجبة عادي',
          description: 'وجبة شاورما لحمة عادية',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3,
              image: '/images/menu/shawerma/shwrmaMtSngl.jpeg',
            },
          ],
        },
        {
          id: 'meat_super_meal',
          name: 'وجبة سوبر',
          description: 'وجبة شاورما لحمة سوبر',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3.9,
              image: '/images/menu/shawerma/shwrmaMtSuper.jpeg',
            },
          ],
        },
        {
          id: 'meat_double_meal',
          name: 'وجبة دبل',
          description: 'وجبة شاورما لحمة دبل',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 4.8,
              image: '/images/menu/shawerma/shwrmaMtDbl.jpeg',
            },
          ],
        },
        {
          id: 'meat_triple_meal',
          name: 'وجبة تربيل',
          description: 'وجبة شاورما لحمة تربيل',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 5.7,
              image: '/images/menu/shawerma/shwrmaMtTrpl.jpeg',
            },
          ],
        },
        {
          id: 'meat_french_meal',
          name: 'وجبة فرنسي',
          description: 'وجبة شاورما لحمة بالخبز الفرنسي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 3.5,
              image: '/images/menu/shawerma/shwrmaMtSndwchFr.jpeg',
            },
          ],
        },
        {
          id: 'meat_250g_meal',
          name: 'وجبة لحمة 250 غرام',
          description: 'وجبة شاورما لحمة بوزن 250 غرام',
          variants: [
            {
              id: 'regular',
              name: '250 غرام',
              price: 4.25,
              image: '/images/menu/shawerma/shwrmaMtUnwrap.jpeg',
            },
          ],
        },
        {
          id: 'meat_family_economy',
          name: 'وجبة عائلية اقتصادية (لحمة)',
          description: '8 ساندويش سوبر + بطاطا عائلي + 8 طحينية + 5 مخلل + 5 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 16.5,
              image: '/images/menu/shawerma/shwrmaMxFamEco.jpeg',
            },
          ],
        },
        {
          id: 'meat_family_value',
          name: 'وجبة عائلية توفير (لحمة)',
          description: '5 ساندويش سوبر + بطاطا عائلي + 5 طحينية + 3 مخلل + 3 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 16.5,
              image: '/images/menu/shawerma/shwrmaMxFam.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'mixed_meals',
      name: 'شاورما المكس',
      items: [
        {
          id: 'double_mix_meal',
          name: 'وجبة دبل مكس',
          description: '1 ساندويش دجاج سوبر + 1 ساندويش لحمة سوبر + بطاطا + مثومة + طحينية + مخلل',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 4.1,
              image: '/images/menu/shawerma/shwrmaMxDbl.jpeg',
            },
          ],
        },
        {
          id: 'mix_family_value',
          name: 'وجبة عائلية توفير مكس',
          description: '3 ساندويش دجاج سوبر + 2 ساندويش لحمة سوبر + بطاطا عائلي + 3 مثومة + 2 طحينية + 3 مخلل + 3 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 11,
              image: '/images/menu/shawerma/shwrmaMxFamEco.jpeg',
            },
          ],
        },
        {
          id: 'mix_family_economy',
          name: 'وجبة عائلية اقتصادية مكس',
          description: '4 ساندويش دجاج سوبر + 4 ساندويش لحمة سوبر + بطاطا عائلي + 4 مثومة + 4 طحينية + 5 مخلل + 5 مشروب غازي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 14.5,
              image: '/images/menu/shawerma/shwrmaMxFam.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'snacks_burger',
      name: 'سناكات و برجر',
      items: [
        {
          id: 'beef_burger_100g',
          name: 'برجر لحمة 100 غرام',
          description: 'برجر لحم بوزن 100 غرام',
          variants: [
            {
              id: 'regular',
              name: '100 غرام',
              price: 2.25,
              image: '/images/menu/burger/brgrMt100gSndwch.jpeg',
            },
          ],
        },
        {
          id: 'beef_burger_150g',
          name: 'برجر لحمة 150 غرام',
          description: 'برجر لحم بوزن 150 غرام',
          variants: [
            {
              id: 'regular',
              name: '150 غرام',
              price: 2.75,
              image: '/images/menu/burger/brgrMt150gSndwch.jpeg',
            },
          ],
        },
        {
          id: 'grilled_chicken_burger',
          name: 'برجر دجاج مشوي',
          description: 'برجر دجاج مشوي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2.25,
              image: '/images/menu/burger/brgrChknSndwch.jpeg',
            },
          ],
        },
        {
          id: 'escalope_burger',
          name: 'برجر اسكالوب/ صدر قلي',
          description: 'برجر اسكالوب أو صدر دجاج مقلي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2,
              image: '/images/menu/burger/brgrChknSndwch.jpeg',
            },
          ],
        },
        {
          id: 'kids_burger',
          name: 'برجر اطفال لحمة / دجاج',
          description: 'برجر أطفال باللحم أو الدجاج',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1.25,
              image: '/images/menu/burger/brgrChknKidsSndwch.jpeg',
            },
          ],
        },
        {
          id: 'crispy_zinger',
          name: 'زنجر كرسبي',
          description: 'زنجر دجاج كرسبي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2,
              image: '/images/menu/snacks/zngrSndwch.jpeg',
            },
          ],
        },
                {
          id: 'crispy_zinger',
          name: 'زنجر كرسبي',
          description: 'زنجر دجاج كرسبي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2,
              image: '/images/menu/snacks/zngrMeal.jpeg',
            },
          ],
        },
        {
          id: 'cordon_bleu',
          name: 'كوردن بلو',
          description: 'ساندويش كوردن بلو',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2,
              image: '/images/menu/snacks/crdnBluMeal.jpeg',
            },
          ],
        },
        {
          id: 'nuggets_6pcs',
          name: 'نجتس 6 قطع',
          description: 'نجتس دجاج 6 قطع',
          variants: [
            {
              id: 'regular',
              name: '6 قطع',
              price: 1.5,
              image: '/images/menu/snacks/nuggets.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'sides_sauces',
      name: 'مقبلات وإضافات',
      items: [
        {
          id: 'fries',
          name: 'علبة بطاطا',
          description: 'علبة بطاطا',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.75,
              image: '/images/menu/appetizers/fries.jpeg',
            },
          ],
        },
        {
          id: 'wedges',
          name: 'علبة بطاطا ودجز',
          description: 'علبة بطاطا ودجز',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 1.25,
              image: '/images/menu/appetizers/friesWidges.jpeg',
            },
          ],
        },
        {
          id: 'crunchy_potato',
          name: 'كرانشي بوتيتو',
          description: 'بطاطا كرانشي مقرمشة',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 2,
              image: '/images/menu/appetizers/crunchyPotato.jpeg',
            },
          ],
        },
        {
          id: 'coleslaw',
          name: 'سلطة ملفوف كول سلو',
          description: 'سلطة ملفوف كول سلو',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.4,
              image: '/images/menu/appetizers/coleslaw.jpeg',
            },
          ],
        },
        {
          id: 'honey_mustard_sauce',
          name: 'صوص هاني ماسترد',
          description: 'صوص هاني ماسترد',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.35,
              image: '/images/menu/appetizers/honeymustardSauce.jpeg',
            },
          ],
        },
        {
          id: 'bbq_sauce',
          name: 'صوص باربيكيو',
          description: 'صوص باربيكيو',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.35,
              image: '/images/menu/appetizers/bbqSauce.jpeg',
            },
          ],
        },
        {
          id: 'cheese_sauce',
          name: 'صوص جبنة',
          description: 'صوص جبنة كريمي',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.35,
              image: '/images/menu/appetizers/creamySauce.jpeg',
            },
          ],
        },
        {
          id: 'garlic_sauce',
          name: 'صوص ثوم',
          description: 'صوص ثومية',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.25,
              image: '/images/menu/appetizers/garlicSauce.jpeg',
            },
          ],
        },
        {
          id: 'pomegranate_sauce',
          name: 'صوص دبس رمان',
          description: 'صوص دبس الرمان',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.25,
              image: '/images/menu/appetizers/bbqSauce.jpeg',
            },
          ],
        },
        {
          id: 'extra_cheese',
          name: 'إضافة قطعة جبنة',
          description: 'إضافة قطعة جبنة',
          variants: [
            {
              id: 'regular',
              name: 'قطعة واحدة',
              price: 0.25,
              image: '/images/menu/appetizers/cheeseSauce.jpeg',
            },
          ],
        },
        {
          id: 'extra_cream_sauce',
          name: 'إضافة صوص كريمة',
          description: 'إضافة صوص كريمة',
          variants: [
            {
              id: 'regular',
              name: 'عادي',
              price: 0.4,
              image: '/images/menu/appetizers/creamySauce.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'broasted',
      name: 'بروستيد وتندر',
      items: [
        {
          id: 'broasted_4pcs',
          name: 'بروستيد 4 قطع',
          description: '4 قطع بروستيد + بطاطا + مثومة + كولسلو + مشروب غازي + خبز',
          variants: [
            {
              id: 'regular',
              name: '4 قطع',
              price: 3.5,
              image: '/images/menu/broasted/broasted4Pcs.jpeg',
            },
          ],
        },
        {
          id: 'broasted_8pcs',
          name: 'بروستيد 8 قطع',
          description: '8 قطع بروستيد + 2 بطاطا + 2 مثومة + 2 كولسلو + 2 مشروب غازي + 2 خبز',
          variants: [
            {
              id: 'regular',
              name: '8 قطع',
              price: 6.75,
              image: '/images/menu/broasted/broasted8Pcs.jpeg',
            },
          ],
        },
        {
          id: 'broasted_12pcs',
          name: 'بروستيد 12 قطعة',
          description: '12 قطعة بروستيد + 3 بطاطا + 3 مثومة + 3 كولسلو + 3 مشروب غازي + 3 خبز',
          variants: [
            {
              id: 'regular',
              name: '12 قطعة',
              price: 10,
              image: '/images/menu/broasted/broasted12Pcs.jpeg',
            },
          ],
        },
        {
          id: 'broasted_16pcs',
          name: 'بروستيد 16 قطعة',
          description: '16 قطعة بروستيد + 4 بطاطا + 4 مثومة + 4 كولسلو + 4 مشروب غازي + 4 خبز',
          variants: [
            {
              id: 'regular',
              name: '16 قطعة',
              price: 13,
              image: '/images/menu/broasted/broasted16Pcs.jpeg',
            },
          ],
        },
        {
          id: 'broasted_20pcs',
          name: 'بروستيد 20 قطعة',
          description: '20 قطعة بروستيد + 5 بطاطا + 5 مثومة + 5 كولسلو + 5 مشروب غازي + 5 خبز',
          variants: [
            {
              id: 'regular',
              name: '20 قطعة',
              price: 16,
              image: '/images/menu/broasted/broasted20Pcs.jpeg',
            },
          ],
        },
        {
          id: 'chicken_tender_5pcs',
          name: 'تشكن تندر 5 قطع',
          description: '5 قطع تشكن تندر + بطاطا + مثومة + خبز',
          variants: [
            {
              id: 'regular',
              name: '5 قطع',
              price: 3.5,
              image: '/images/menu/broasted/tender5Pcs.jpeg',
            },
          ],
        },
      ],
    },

    {
      id: 'juices',
      name: 'العصائر',
      items: [
        {
          id: 'orange_juice',
          name: 'برتقال',
          description: 'عصير برتقال طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 1.5,
              image: '/images/menu/juice/orangeJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2,
              image: '/images/menu/juice/orangeJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 3,
              image: '/images/menu/juice/orangeJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'carrot_juice',
          name: 'جزر',
          description: 'عصير جزر طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 1.5,
              image: '/images/menu/juice/carrotJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2,
              image: '/images/menu/juice/carrotJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 3,
              image: '/images/menu/juice/orangeJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'lemonade',
          name: 'ليموناضة',
          description: 'ليموناضة طازجة',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 1.75,
              image: '/images/menu/juice/lemonJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.25,
              image: '/images/menu/juice/lemonJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 3.5,
              image: '/images/menu/juice/lemonJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'lemon_mint',
          name: 'ليمون مع نعنع',
          description: 'عصير ليمون مع نعنع طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 1.75,
              image: '/images/menu/juice/lemonMintJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.25,
              image: '/images/menu/juice/lemonMintJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 3.5,
              image: '/images/menu/juice/lemonJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'melon_juice',
          name: 'شمام',
          description: 'عصير شمام طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 1.75,
              image: '/images/menu/juice/melonJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.25,
              image: '/images/menu/juice/melonJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 3.5,
              image: '/images/menu/juice/lemonJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'apple_juice',
          name: 'تفاح',
          description: 'عصير تفاح طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2,
              image: '/images/menu/juice/appleJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.5,
              image: '/images/menu/juice/appleJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4,
              image: '/images/menu/juice/orangeJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'strawberry_juice',
          name: 'فراولة',
          description: 'عصير فراولة طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2,
              image: '/images/menu/juice/strawberryJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.5,
              image: '/images/menu/juice/strawberryJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4,
              image: '/images/menu/juice/strawberryJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'kiwi_juice',
          name: 'كيوي',
          description: 'عصير كيوي طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2,
              image: '/images/menu/juice/kiwiJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.5,
              image: '/images/menu/juice/kiwiJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4,
              image: '/images/menu/juice/lemonJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'mango_juice',
          name: 'مانجا',
          description: 'عصير مانجا طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2.25,
              image: '/images/menu/juice/mangoJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.75,
              image: '/images/menu/juice/mangoJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4.5,
              image: '/images/menu/juice/orangeJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'pineapple_juice',
          name: 'اناناس',
          description: 'عصير أناناس طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2.25,
              image: '/images/menu/juice/pinappleJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.75,
              image: '/images/menu/juice/pinappleJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4.5,
              image: '/images/menu/juice/lemonJuiceLiter.jpeg',
            },
          ],
        },
        {
          id: 'pomegranate_juice',
          name: 'رمان',
          description: 'عصير رمان طازج',
          variants: [
            {
              id: 'medium',
              name: 'وسط',
              price: 2.25,
              image: '/images/menu/juice/pmgrntJuice.jpeg',
            },
            {
              id: 'large',
              name: 'لارج',
              price: 2.75,
              image: '/images/menu/juice/pmgrntJuice.jpeg',
            },
            {
              id: 'liter',
              name: 'لتر',
              price: 4.5,
              image: '/images/menu/juice/strawberryJuiceLiter.jpeg',
            },
          ],
        },
      ],
    },
  ];


  if (!fs.existsSync(publicMenuPath)) {
    return baseCategories;
  }``

  // Override images if local files exist in the corresponding folders
  // for (const category of baseCategories) {
  //   const folderPath = path.join(publicMenuPath, category.id);
  //   if (fs.existsSync(folderPath)) {
  //     const files = fs.readdirSync(folderPath).filter(file => file.match(/\.(jpg|jpeg|png|webp|gif)$/i));

  //     // Replace images sequentially
  //     for (let i = 0; i < files.length && i < category.items.length; i++) {
  //       category.items[i].image = `/images/menu/${category.id}/${encodeURIComponent(files[i])}`;
  //     }

  //     // If there are more files than items, add generic items
  //     for (let i = category.items.length; i < files.length; i++) {
  //       let name = files[i].replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").replace(/\d+/g, "").trim();
  //       if (!name) name = "صنف جديد";

  //       category.items.push({
  //         name: name,
  //         description: "وصف الصنف",
  //         price: "٣.٠ د.أ",
  //         image: `/images/menu/${category.id}/${encodeURIComponent(files[i])}`
  //       });
  //     }
  //   }
  // }

  return baseCategories;
}