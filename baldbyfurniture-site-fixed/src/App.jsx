import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('zh')
  const t = (zh, en) => (lang === 'zh' ? zh : en)
  const brand = 'BaldbyFurniture'
  const wood = '#7C5A37'
  const woodLight = '#A07A55'

  return (
    <main className="min-h-screen bg-white text-stone-900 selection:bg-amber-200">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            {/* Redesigned bald-baby + crib mark (white bg + wood brown) */}
            <span className="inline-block rounded-2xl p-1 ring-1 ring-stone-200">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="15.5" r="7.5" stroke={wood} strokeWidth="3"/>
                <path d="M18 13c1 2 3 3 6 3" stroke={woodLight} strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 28h28v6a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-6Z" stroke={wood} strokeWidth="3"/>
                <path d="M12 28v-6m8 6v-6m8 6v-6m8 6v-6" stroke={wood} strokeWidth="3"/>
              </svg>
            </span>
            <span className="font-extrabold text-xl tracking-tight" style={{color: wood}}>{brand}</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-amber-700">{t('品牌理念','About')}</a>
            <a href="#products" className="hover:text-amber-700">{t('熱銷商品','Products')}</a>
            <a href="#craft" className="hover:text-amber-700">{t('安全與工藝','Safety')}</a>
            <a href="#testimonials" className="hover:text-amber-700">{t('口碑','Reviews')}</a>
            <a href="#contact" className="hover:text-amber-700">{t('聯絡','Contact')}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="rounded-xl px-3 py-2 border border-stone-300 text-sm hover:bg-stone-50" aria-label="toggle language">
              {lang==='zh' ? 'EN' : '中'}
            </button>
            <a href="#contact" className="inline-flex items-center rounded-2xl" style={{backgroundColor: wood, color:'#fff'}}>
              <span className="px-4 py-2 text-sm">{t('取得報價','Get a Quote')}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-amber-50 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              {t('專注寶寶的第一個家居','Baby’s First Home, Crafted with Care')}<br/>
              <span className="text-stone-600">{t('白底＋木質棕的簡約識別，融入「光頭」元素','Minimal white + wood-brown identity with a playful bald-baby mark')}</span>
            </h1>
            <p className="mt-5 text-stone-700 text-lg">
              {t(
                '以天然材質與圓角工藝打造安全、耐用又有溫度的寶寶家具。此處為替代文字，待提供品牌文案後替換。',
                'Made with natural materials and rounded craftsmanship for safety and warmth. Placeholder copy to be replaced with your final brand message.'
              )}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#products" className="rounded-2xl px-5 py-3 text-white font-semibold hover:opacity-95 transition" style={{backgroundColor: wood}}>{t('看產品','See Products')}</a>
              <a href="#craft" className="rounded-2xl border border-stone-300 px-5 py-3 font-semibold hover:bg-white/60 transition">{t('了解安全','Learn Safety')}</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-stone-200 p-6 grid place-items-center">
              {/* Replace with real product photo */}
              <div className="text-center">
                <div className="mx-auto w-28 h-28 rounded-full grid place-items-center mb-5" style={{backgroundColor:'#F4E6D6'}}>
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="15.5" r="7.5" stroke={wood} strokeWidth="3"/>
                    <path d="M18 13c1 2 3 3 6 3" stroke={woodLight} strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 28h28v6a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-6Z" stroke={wood} strokeWidth="3"/>
                    <path d="M12 28v-6m8 6v-6m8 6v-6m8 6v-6" stroke={wood} strokeWidth="3"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl">{t('Baldby 幼兒成長床（產品圖替代）','Baldby Convertible Crib (Placeholder)')}</h3>
                <p className="mt-2 text-stone-600">{t('圓角安全｜可調整床板｜無毒塗料（替代文字）','Rounded edges • Adjustable base • Non-toxic finish (placeholder)')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 p-8">
            <h2 className="text-2xl font-extrabold">{t('品牌故事','Our Story')}</h2>
            <p className="mt-4 leading-7 text-stone-700">
              {t(
                '此區為替代文字：描述品牌起源、理念與安全承諾，待你提供正式文案後替換。',
                'Placeholder section: add your brand origin, values, and safety commitments here.'
              )}
            </p>
          </div>
          <ul className="grid gap-6">
            {[
              {title:t('天然材質','Natural Materials'),desc:t('FSC 認證木材、低 VOC 無毒塗料（替代）','FSC wood, low-VOC water-based finishes (placeholder)')},
              {title:t('極致圓角','Soft Roundings'),desc:t('全方位倒角，手摸不到尖銳邊（替代）','Full chamfers, no sharp edges (placeholder)')},
              {title:t('可長期使用','Built to Grow'),desc:t('模組化配件，陪伴從新生兒到學齡前（替代）','Modular add-ons from newborn to preschool (placeholder)')},
            ].map((f,i)=> (
              <li key={i} className="rounded-3xl bg-amber-50 border border-amber-200 p-6">
                <h3 className="mt-1 font-bold text-lg" style={{color: wood}}>{f.title}</h3>
                <p className="text-stone-700 mt-1">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('熱銷商品','Featured Products')}</h2>
          <p className="text-stone-600 mt-2">{t('此處展示用，待提供實際產品與價格。','Display only. Replace with real products and pricing.')}</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {name:t('成長床 Crib','Convertible Crib'), badge:t('主打','Featured'), price:t('$399 起','$399+')},
              {name:t('尿布更換台 Dresser','Changing Dresser'), price:t('$329 起','$329+')},
              {name:t('收納書櫃 Organizer','Storage Organizer'), price:t('$149 起','$149+')},
            ].map((p,i)=> (
              <article key={i} className="group rounded-3xl overflow-hidden ring-1 ring-stone-200 bg-amber-50">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-200 grid place-items-center">
                  <span className="text-stone-500">{t('產品圖片','Product Image')}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold group-hover:text-amber-700 transition">{p.name}</h3>
                    {p.badge && <span className="text-xs" style={{backgroundColor: wood, color:'#fff', padding:'2px 8px', borderRadius:'999px'}}>{p.badge}</span>}
                  </div>
                  <p className="text-stone-600 mt-1">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Craft & Safety */}
      <section id="craft" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-white ring-1 ring-stone-200 p-8">
            <h2 className="text-2xl font-extrabold">{t('安全與工藝','Safety & Craft')}</h2>
            <ul className="mt-5 space-y-3 text-stone-700">
              <li>• {t('通過 ASTM / CPSIA 相關標準（替代）','ASTM / CPSIA compliant (placeholder)')}</li>
              <li>• {t('無毒水性塗料，甲醛與 VOC 嚴格控管（替代）','Non-toxic water-based finishes, low VOC (placeholder)')}</li>
              <li>• {t('5 段床板高度與防夾手護欄（替代）','5-level mattress base, pinch-guard rails (placeholder)')}</li>
              <li>• {t('可拆式輪組與防滑腳墊（替代）','Optional casters and anti-slip feet (placeholder)')}</li>
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[t('圓角倒角','Rounded Edges'),t('無毒塗裝','Non-toxic Finish'),t('穩固榫卯','Strong Joinery'),t('可長期使用','Long-lasting')].map((t2,i)=> (
              <div key={i} className="rounded-3xl bg-amber-50 border border-amber-200 p-6 text-center">
                <div className="font-semibold" style={{color: wood}}>{t2}</div>
                <div className="text-stone-500 text-sm mt-1">{t('替代說明文字','Placeholder description')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold">{t('爸媽怎麼說','What Parents Say')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <blockquote key={i} className="rounded-3xl bg-amber-50 p-6 ring-1 ring-stone-200">
                <p className="text-stone-700">{t('「此為替代評論，待實際客戶回饋。」','“Placeholder review. Replace with real customer feedback.”')}</p>
                <footer className="mt-3 text-sm text-stone-500">— {t('城市名稱，爸媽','City, Parents')}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 p-8">
            <h2 className="text-2xl font-extrabold">{t('聯絡我們','Contact Us')}</h2>
            <p className="mt-2 text-stone-600">{t('此處為替代文字。請提供 Email / 電話 / 地址 / 社群後替換。','Placeholder: add email / phone / address / social links later.')}</p>
            <form className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder={t('您的名字','Your Name')} />
                <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Email" type="email" />
              </div>
              <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder={t('電話（選填）','Phone (optional)')} />
              <textarea className="w-full rounded-2xl border border-stone-300 px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder={t('想了解的產品或需求（替代文字）','Tell us what you need (placeholder)')} />
              <button type="button" onClick={()=>alert(t('已送出！（示意）','Submitted! (demo)'))} className="rounded-2xl px-5 py-3 text-white font-semibold hover:opacity-95 transition w-fit" style={{backgroundColor: wood}}>{t('送出訊息','Send')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-stone-200 text-center text-sm text-stone-600">
        <p>© {new Date().getFullYear()} {brand} • All rights reserved.</p>
        <p className="mt-1">{t('服務範圍：城市（替代）','Service area: City (placeholder)')}</p>
      </footer>
    </main>
  )
}
