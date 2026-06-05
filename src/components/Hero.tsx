import { motion } from 'framer-motion'
import { ChevronRight, Award, Leaf, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const trustBadges = [
    { icon: Award, label: '30+ Years Experience' },
    { icon: Leaf, label: '100% Natural Seeds' },
    { icon: Zap, label: 'Quality Assured' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-green/10 via-white to-bg-light">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(27,94,32,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(249,168,37,0.15),_transparent_20%)]" />
      </motion.div>

      <div className="relative z-10 container-safe py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full bg-primary-green/10 px-4 py-2 text-sm text-primary-green font-semibold shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent-gold" />
              Trusted by farmers across India
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-poppins font-bold text-text-dark leading-tight"
            >
              Modern seed solutions with a focus on
              <span className="text-primary-green"> quality, yield, and trust.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 max-w-3xl font-inter"
            >
              Dinkar Seeds combines certified genetics, strong distribution, and farmer-first support to deliver harvest-ready seed varieties for every season.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#products"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Explore Products
                <ChevronRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Us
                <ChevronRight size={18} />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <div key={index} className="rounded-3xl border border-primary-green/10 bg-white/90 p-4 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-green/10 text-primary-green">
                      <Icon size={20} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-text-dark">{badge.label}</p>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative rounded-[2rem] bg-white/95 p-8 shadow-[0_40px_120px_rgba(27,94,32,0.12)] ring-1 ring-black/5"
          >
            <div className="absolute -left-10 top-16 h-32 w-32 rounded-full bg-accent-gold/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-28 w-28 rounded-full bg-primary-green/10 blur-3xl" />

            <div className="space-y-6">
              <div className="rounded-[1.75rem] bg-primary-green/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green">Featured seed range</p>
                <h2 className="mt-3 text-3xl font-bold text-text-dark">Crop varieties built for growth</h2>
                <p className="mt-3 text-sm text-gray-600">
                  Vegetable, spice, pulse and cereal seeds designed for stronger germination and consistent harvests.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Best seller</p>
                      <p className="mt-2 font-semibold text-text-dark">Vegetable seeds</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-green/10 text-primary-green">
                      <Leaf size={18} />
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Certified</p>
                      <p className="mt-2 font-semibold text-text-dark">Quality assurance</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gold/10 text-accent-gold">
                      <Award size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-secondary-green/5 p-6">
                <p className="text-sm text-primary-green">Why Dinkar Seeds?</p>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary-green" />
                    High-quality seeds for every region.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary-green" />
                    Reliable delivery and farmer support.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary-green" />
                    Trusted by growers and traders nationwide.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
