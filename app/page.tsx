'use client'

import { useState } from 'react'

export default function Page() {
  const [noCount, setNoCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedMeal, setSelectedMeal] = useState('')
  const yesScale = Math.min(1 + noCount * 0.15, 3)
  const noScale = Math.max(1 - noCount * 0.1, 0.4)

  return (
    <main className="invite-flow min-h-screen overflow-hidden bg-[#eaf6ff] px-4 py-8 text-[#18375f] sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-5xl space-y-8 sm:space-y-10">
        <section id="start" className="page-panel relative overflow-hidden rounded-[2rem] border-8 border-white bg-[#fafdff] px-5 py-8 text-center shadow-xl shadow-blue-100 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#dff2ff]" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#bce3ff]/60" />
          <div className="relative">
            <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-8 border-white bg-[#dff2ff] shadow-[0_12px_28px_rgba(0,73,160,0.22)] ring-2 ring-[#8dcaff] sm:h-52 sm:w-52">
              <img src="/mascot.jpg" alt="藍色圓形吉祥物" className="h-full w-full object-cover" />
            </div>
            <p className="mt-7 text-xs font-black tracking-[0.25em] text-[#0080ff] sm:text-sm">DATE INVITATION</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-[#143e73] sm:text-5xl">欸，要不要跟我<br />出去玩呀？</h1>
            <p className="mt-4 text-sm font-medium text-[#557396] sm:text-base">有一件很重要的事想問你～</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="#date" className="yes-button relative z-20 rounded-full bg-[#0080ff] px-7 py-3 font-bold text-white shadow-[0_5px_0_#0068d6] transition hover:bg-[#0875df]" style={{ transform: `scale(${yesScale})` }}>好呀 (Yes)</a>
              <button type="button" onClick={() => setNoCount((count) => count + 1)} className="no-button relative z-10 cursor-pointer rounded-full border-2 border-[#9bb7d4] bg-white px-5 py-3 font-bold text-[#7188a3] shadow-sm transition hover:border-[#0080ff]" style={{ transform: `scale(${noScale})` }}>不要 (No)</button>
            </div>
            <p className="invite-message mt-8 text-xs text-[#7892b0]">{noCount === 0 ? '有一件很重要的事想問你～' : noCount < 4 ? '再考慮一下嘛～' : '真的不要嗎？'}</p>
          </div>
        </section>

        <section id="date" className="page-panel rounded-[2rem] border-8 border-white bg-[#fafdff] px-5 py-8 text-center shadow-xl shadow-blue-100 sm:px-10 sm:py-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-3xl shadow-lg shadow-blue-100 sm:h-20 sm:w-20 sm:text-4xl">📅</div>
          <h2 className="text-2xl font-black text-[#143e73] sm:text-3xl">那你想什麼時候出發呢？</h2>
          <p className="mt-3 text-sm text-[#6782a1]">挑一個你方便的日子吧～</p>
          <div className="mx-auto mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {['這周五', '這周六', '這周日'].map((option) => <button type="button" onClick={() => setSelectedDate(option)} aria-pressed={selectedDate === option} key={option} className={`rounded-2xl border-2 px-3 py-4 text-sm font-bold shadow-md shadow-blue-100/70 transition hover:border-[#0080ff] hover:text-[#0080ff] ${selectedDate === option ? 'border-[#0080ff] bg-[#eaf6ff] text-[#0080ff]' : 'border-white bg-white text-[#557396]'}`}>{option}</button>)}
          </div>
          <label className="mx-auto mt-4 block max-w-2xl text-left text-sm font-bold text-[#557396]">或自訂日期<input type="date" value={selectedDate.includes('-') ? selectedDate : ''} onChange={(event) => setSelectedDate(event.target.value)} className="mt-2 w-full rounded-2xl border-2 border-white bg-white px-4 py-3 font-medium shadow-md shadow-blue-100/60 outline-none focus:border-[#0080ff]" /></label>
          <a href={selectedDate ? '#meal' : undefined} aria-disabled={!selectedDate} className={`mt-5 inline-block rounded-full px-7 py-3 font-bold text-white shadow-[0_5px_0_#0068d6] transition ${selectedDate ? 'bg-[#0080ff] hover:bg-[#0875df]' : 'cursor-not-allowed bg-[#9bb7d4] shadow-none'}`}>下一步</a>
        </section>

        <section id="meal" className="page-panel rounded-[2rem] border-8 border-white bg-[#fafdff] px-5 py-8 text-center shadow-xl shadow-blue-100 sm:px-10 sm:py-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-3xl shadow-lg shadow-blue-100 sm:h-20 sm:w-20 sm:text-4xl">🍜</div>
          <h2 className="text-2xl font-black text-[#143e73] sm:text-3xl">肚子餓餓，想吃什麼呢？</h2>
          <p className="mt-3 text-sm text-[#6782a1]">選一個最想一起吃的吧～</p>
          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[['日式料理', '🍣'], ['義式料理', '🍝'], ['燒肉', '🍖'], ['甜點下午茶', '🍰'], ['火鍋', '🍲'], ['韓式料理', '🍜'], ['咖啡廳', '☕'], ['驚喜由你決定', '🎁']].map(([name, icon]) => <a href="#finish" onClick={() => setSelectedMeal(name)} key={name} className={`rounded-2xl border-2 p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#8dcaff] ${selectedMeal === name ? 'border-[#0080ff] bg-[#eaf6ff]' : 'border-white bg-sky-50'}`}><span className="block text-3xl">{icon}</span><span className="mt-2 block text-xs font-bold text-[#456583]">{name}</span></a>)}
          </div>
        </section>

        <section id="finish" className="page-panel rounded-[2rem] border-8 border-white bg-[#0080ff] p-2 text-center shadow-2xl shadow-blue-200">
          <div className="rounded-[1.4rem] border-2 border-dashed border-white/70 bg-[#fafdff] px-5 py-8 sm:px-10 sm:py-10">
            <div className="text-3xl sm:text-4xl">✈︎　🔔　✈︎</div>
            <p className="mt-5 text-xs font-black tracking-[0.3em] text-[#0080ff]">SPECIAL INVITATION</p>
            <h2 className="mt-3 text-3xl font-black text-[#143e73] sm:text-4xl">期待和你見面！</h2>
            <p className="mt-5 font-bold leading-loose text-[#557396]">日期：{selectedDate || '尚未選擇'}<br />餐點：{selectedMeal || '尚未選擇'}<br /><span className="text-[#e63b43]">記得準時出現喔～</span><br /><span className="text-[#0080ff]">記得分享給我喔</span></p>
          </div>
        </section>
      </div>
    </main>
  )
}
