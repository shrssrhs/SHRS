
'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">

      {/* HERO SECTION */}
      <section className="text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-10">SHRS™</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-2">
              <Image src="/logo.png" alt="SHRS Logo" width={48} height={48} />
              <h2 className="text-3xl font-light">SHRS <sup>®</sup></h2>
            </div>
            <p className="text-sm text-gray-400 mb-6">Next-Gen Communication. Redefined.</p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold">Начать с ShenLink</button>
              <button className="border border-white text-white px-6 py-2 rounded-full text-sm">Связаться с нами</button>
            </div>
          </div>
          <Image src="/macbook.png" alt="ShenLink Interface" width={420} height={260} />
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-[#121212] text-center px-6 py-20">
        <h2 className="text-3xl font-medium mb-6">About us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
          SHRS — независимая студия, разрабатывающая ShenLink — модульный мессенджер с веб- и терминальной оболочкой. 
          Мы фокусируемся на скорости, приватности и кастомизации.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="text-center px-6 py-20">
        <h2 className="text-3xl font-medium mb-8">Наши продукты</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-4">
          <div>
            <Image src="/shenlink-web.png" alt="ShenLink Web" width={100} height={100} className="mx-auto mb-2" />
            <p className="text-white text-lg">ShenLink <span className="text-blue-400">“Web”</span></p>
          </div>
          <div>
            <Image src="/shenlink-termi.png" alt="ShenLink Termi" width={100} height={100} className="mx-auto mb-2" />
            <p className="text-white text-lg">ShenLink <span className="text-green-400">“Termi”</span></p>
          </div>
        </div>
        <p className="text-gray-400">Один проект — разные подвиды</p>
      </section>

      {/* WHY SHRS */}
      <section className="bg-[#121212] px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">✅ Почему SHRS?</h2>
        <p className="text-sm text-gray-400 mb-8">“Что делает SHRS особенным?”</p>
        <ul className="text-left text-lg text-white max-w-xl mx-auto space-y-3">
          <li>✅ Лёгкость</li>
          <li>✅ Приватность</li>
          <li>✅ Кастомизация</li>
          <li>✅ Мгновенная синхронизация</li>
          <li>✅ Web и Termi интерфейсы</li>
        </ul>
      </section>

      {/* CONTACTS */}
      <section className="text-center px-6 py-20">
        <h2 className="text-3xl font-medium mb-6 underline">Контакты</h2>
        <div className="text-lg space-y-2">
          <p><strong>E-mail:</strong> shrssrhs@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/shrsrshs" className="underline">github.com/shrsrshs</a></p>
          <p><strong>Telegram channel:</strong> SHRS Channel</p>
        </div>
        <p className="text-sm text-gray-500 mt-12">
          © 2025 SHRS. SHRS™ и ShenLink™ являются торговыми марками. Все права защищены.
        </p>
      </section>
    </main>
  )
}
