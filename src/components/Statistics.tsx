import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [counts, setCounts] = useState({
    years: 0,
    products: 0,
    area: 0,
    farmers: 0,
  })

  const stats = [
    { label: 'Years Experience', value: 30, suffix: '+', key: 'years' },
    { label: 'Product Range', value: 100, suffix: '+', key: 'products' },
    { label: 'Production Area', value: 1, suffix: 'M+ Sq.ft', key: 'area' },
    { label: 'Happy Farmers', value: 10, suffix: 'M+', key: 'farmers' },
  ]

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounts({
        years: Math.floor(30 * progress),
        products: Math.floor(100 * progress),
        area: Math.floor(100 * progress) / 100,
        farmers: Math.floor(10 * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [inView])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-green to-secondary-green relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-safe relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-white/90 font-inter max-w-3xl mx-auto">
            Our impact across India and beyond
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                {/* Number */}
                <motion.div
                  className="text-6xl md:text-7xl font-poppins font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                >
                  {stat.key === 'years' && `${counts.years}${stat.suffix}`}
                  {stat.key === 'products' && `${counts.products}${stat.suffix}`}
                  {stat.key === 'area' && `${counts.area}${stat.suffix}`}
                  {stat.key === 'farmers' && `${counts.farmers}${stat.suffix}`}
                </motion.div>

                {/* Label */}
                <p className="text-white/80 font-inter text-lg font-semibold">
                  {stat.label}
                </p>

                {/* Underline */}
                <motion.div
                  className="mt-4 h-1 w-12 bg-accent-gold rounded-full mx-auto"
                  initial={{ width: 0 }}
                  animate={inView ? { width: 48 } : { width: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
