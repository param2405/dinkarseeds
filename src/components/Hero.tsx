'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Award, Leaf, Zap, Sprout, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const step = to / 60
        let cur = 0
        const id = setInterval(() => {
          cur += step
          if (cur >= to) { setVal(to); clearInterval(id) }
          else setVal(Math.floor(cur))
        }, 18)
      }
    }, { threshold: 0.5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [to])
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const SEEDS = ['Tomato F1','Chilli Hybrid','Brinjal','Bottle Gourd','Bitter Gourd','Okra','Spinach','Coriander','Fenugreek','Watermelon','Muskmelon','Ridge Gourd']

const FEATURES = [
  { icon: Sprout,     text: 'Certified genetics for every region' },
  { icon: TrendingUp, text: 'Higher yield, season after season' },
  { icon: Leaf,       text: '100% natural, non-GMO seed stock' },
  { icon: Zap,        text: 'Fast germination, proven results' },
]

const STATS = [
  { val: 500,   suffix: '+', label: 'Varieties',     green: true },
  { val: 50000, suffix: '+', label: 'Farmers',       green: false },
  { val: 98,    suffix: '%', label: 'Germination',   green: true },
  { val: 30,    suffix: '+', label: 'Years of Trust', green: false },
]

const BADGES = [
  { icon: Award, label: '30+ Years',    sub: 'of Experience' },
  { icon: Leaf,  label: '100% Natural', sub: 'Certified Seeds' },
  { icon: Zap,   label: 'Quality',      sub: 'Assured Always' },
]

const CATEGORIES = ['Vegetables','Spices','Pulses','Cereals','Hybrids','Organic']

const WHY = [
  'High-yield seeds for every Indian soil & climate',
  'Reliable distribution network & farmer support',
  'Trusted by 50,000+ growers across the country',
]

export default function Hero() {
  const [feat, setFeat] = useState(0)
  const [ticker, setTicker] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setFeat(p => (p + 1) % FEATURES.length), 2800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setTicker(p => (p + 1) % SEEDS.length), 1800)
    return () => clearInterval(t)
  }, [])

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const rise = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }
  const slideIn = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.35 } },
  }

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: '#f5f9f4' }}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute rounded-full"
          style={{ width: 700, height: 700, top: '-20%', right: '-12%', background: 'radial-gradient(circle,rgba(76,175,80,0.10) 0%,transparent 70%)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 450, height: 450, bottom: '-12%', left: '-8%', background: 'radial-gradient(circle,rgba(27,94,32,0.07) 0%,transparent 70%)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle,#1b5e2020 1px,transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-20 lg:py-28">

        {/* Top bar */}
        <motion.div
          className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: '#fff', border: '1px solid #d4e8d0', boxShadow: '0 2px 8px rgba(27,94,32,.07)' }}
          >
            <motion.span
              className="h-2 w-2 rounded-full"
              style={{ background: '#2e7d32' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-semibold" style={{ color: '#1b5e20' }}>Now in Stock:</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={ticker}
                className="text-xs font-medium"
                style={{ color: '#5a8a5c' }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {SEEDS[ticker]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#f5a623', fontSize: 14 }}>★</span>
            ))}
            <span className="ml-1 text-xs font-medium text-gray-400">50,000+ farmers trust Dinkar</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mb-10"
          style={{ height: 1, background: 'linear-gradient(90deg,transparent,#c8dfc4,transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Main split grid */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] items-start">

          {/* ── LEFT ── */}
          <motion.div className="space-y-6" variants={stagger} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={rise}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: 'rgba(27,94,32,.08)', color: '#2e7d32' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#2e7d32' }} />
                Since 1993 · Made for Indian Farmers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={rise}>
              <h1
                className="font-poppins font-extrabold leading-[1.07] tracking-tight"
                style={{ fontSize: 'clamp(2.4rem,4.5vw,3.8rem)', color: '#0f2a0f' }}
              >
                Seeds that grow{' '}
                <span className="relative inline-block" style={{ color: '#2e7d32' }}>
                  stronger harvests,
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 300 8"
                    preserveAspectRatio="none"
                    height="6"
                    style={{ opacity: 0.35 }}
                  >
                    <path d="M2 5 Q75 1 150 5 Q225 9 298 5" stroke="#2e7d32" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                season after season.
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p
              variants={rise}
              className="text-base leading-relaxed max-w-md"
              style={{ color: '#4b6b4e' }}
            >
              Dinkar Seeds combines certified genetics, wide distribution, and farmer-first support — built for India's diverse fields.
            </motion.p>

            {/* Feature strip */}
            <motion.div variants={rise}>
              <AnimatePresence mode="wait">
                {FEATURES.map((f, i) => {
                  if (i !== feat) return null
                  const Icon = f.icon
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 rounded-2xl px-5 py-3.5"
                      style={{ background: '#fff', border: '1px solid #d9ead5', boxShadow: '0 2px 10px rgba(27,94,32,.05)' }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: 'rgba(46,125,50,.1)', color: '#2e7d32' }}
                      >
                        <Icon size={17} />
                      </div>
                      <span className="text-sm font-semibold" style={{ color: '#1a3d1a' }}>{f.text}</span>
                      <div className="ml-auto flex gap-1.5">
                        {FEATURES.map((_, j) => (
                          <motion.button
                            key={j}
                            onClick={() => setFeat(j)}
                            className="rounded-full"
                            style={{ height: 4, background: j === feat ? '#2e7d32' : '#c8dfc4' }}
                            animate={{ width: j === feat ? 16 : 4 }}
                            transition={{ duration: 0.25 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={rise} className="flex flex-wrap gap-3">
              <motion.a
                href="#products"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white"
                style={{ background: '#1b5e20', boxShadow: '0 6px 24px rgba(27,94,32,.3)', letterSpacing: '.02em' }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(27,94,32,.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Seed Range
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ChevronRight size={16} />
                </motion.span>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold"
                style={{ background: '#fff', color: '#1b5e20', border: '1.5px solid #c8dfc4', letterSpacing: '.02em' }}
                whileHover={{ scale: 1.04, borderColor: '#2e7d32', background: '#f0f7ef' }}
                whileTap={{ scale: 0.97 }}
              >
                Talk to an Expert
                <ChevronRight size={16} />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={rise} className="grid grid-cols-3 gap-3">
              {BADGES.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-2.5 rounded-2xl bg-white p-4"
                  style={{ border: '1px solid #e0eedc', boxShadow: '0 2px 8px rgba(27,94,32,.04)' }}
                  whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(27,94,32,.10)', borderColor: '#c0dabb' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(46,125,50,.09)', color: '#2e7d32' }}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#0f2a0f' }}>{label}</p>
                    <p className="text-xs" style={{ color: '#7a9c7c' }}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT CARD ── */}
          <motion.div variants={slideIn} initial="hidden" animate="visible">
            <motion.div
              className="overflow-hidden rounded-[1.6rem] bg-white"
              style={{ border: '1px solid #d4e8d0', boxShadow: '0 12px 48px rgba(27,94,32,.10),0 2px 8px rgba(0,0,0,.04)' }}
              whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(27,94,32,.15)' }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            >
              {/* Green header */}
              <div
                className="relative overflow-hidden p-6"
                style={{ background: 'linear-gradient(135deg,#1b5e20 0%,#2e7d32 100%)' }}
              >
                <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full" style={{ background: 'rgba(255,255,255,.07)' }} />
                <div className="absolute -bottom-6 -left-4 h-20 w-20 rounded-full" style={{ background: 'rgba(255,255,255,.05)' }} />
                <p className="relative text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,.6)', marginBottom: 6 }}>
                  Featured Range · 2025
                </p>
                <h2 className="relative font-poppins text-xl font-bold leading-snug text-white" style={{ marginBottom: 6 }}>
                  Crop varieties built<br />for maximum yield
                </h2>
                <p className="relative text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,.65)' }}>
                  Vegetable, spice, pulse & cereal seeds engineered for stronger germination across every season.
                </p>
              </div>

              <div className="p-5 space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2.5">
                  {STATS.map((s, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl p-3"
                      style={{
                        background: s.green ? '#f0f7ef' : '#fffbf0',
                        border: `1px solid ${s.green ? '#d4e8d0' : '#f0e0b0'}`,
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.09 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <p className="font-poppins text-xl font-extrabold" style={{ color: s.green ? '#1b5e20' : '#a07020' }}>
                        <Counter to={s.val} suffix={s.suffix} />
                      </p>
                      <p className="mt-0.5 text-xs" style={{ color: '#7a9c7c' }}>{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div style={{ height: 1, background: '#edf4ec' }} />

                {/* Pills */}
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#9ab89c' }}>Seed Categories</p>
                  <div className="flex flex-wrap gap-1.5">
                    {CATEGORIES.map((cat, i) => (
                      <motion.span
                        key={cat}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ background: '#f0f7ef', border: '1px solid #d4e8d0', color: '#2e7d32' }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.06 }}
                        whileHover={{ background: '#ddf0da', scale: 1.05 }}
                      >
                        {cat}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Why */}
                <div className="rounded-2xl p-4" style={{ background: '#fafdf9', border: '1px solid #e0eedc' }}>
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-widest" style={{ color: '#2e7d32' }}>Why Dinkar Seeds?</p>
                  <ul className="space-y-2">
                    {WHY.map((txt, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed"
                        style={{ color: '#3d5e3f' }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <motion.span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: '#2e7d32' }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }}
                        />
                        {txt}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA inside card */}
                <motion.a
                  href="#contact"
                  className="flex items-center justify-between rounded-2xl px-5 py-4"
                  style={{ background: 'linear-gradient(135deg,#1b5e20,#2e7d32)', boxShadow: '0 6px 24px rgba(27,94,32,.25)' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 12px 36px rgba(27,94,32,.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div>
                    <p className="text-sm font-bold text-white">Get a Free Consultation</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,.6)' }}>Talk to our seed experts today</p>
                  </div>
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(255,255,255,.2)' }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight size={16} className="text-white" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,#c8dfc4,transparent)', marginBottom: 12 }} />
          <div className="flex items-center gap-8">
            <span className="shrink-0 text-xs font-bold uppercase tracking-widest" style={{ color: '#7a9c7c' }}>
              Available Now
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-1 overflow-hidden">
              {SEEDS.map((s, i) => (
                <span key={i} className="text-xs" style={{ color: '#adc8ae' }}>
                  {s}
                  {i < SEEDS.length - 1 && <span style={{ color: '#c8dfc4', margin: '0 6px' }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
