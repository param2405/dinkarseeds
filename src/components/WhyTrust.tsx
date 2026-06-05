import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Microscope, Award, Zap, TrendingUp } from 'lucide-react'

export default function WhyTrust() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const reasons = [
    {
      icon: Microscope,
      title: 'Research Driven',
      description: 'Backed by years of agricultural research and continuous innovation to develop superior seed varieties.',
    },
    {
      icon: Award,
      title: 'Quality Tested',
      description: 'Every batch undergoes rigorous testing protocols ensuring germination rates and purity standards.',
    },
    {
      icon: Zap,
      title: 'Modern Processing',
      description: 'State-of-the-art processing facilities with international standards for seed treatment and packaging.',
    },
    {
      icon: TrendingUp,
      title: 'Strong Distribution',
      description: 'Reliable distribution network ensuring fresh seeds reach farmers across every state in India.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-safe">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-dark mb-4">
            Why Farmers <span className="text-primary-green">Trust Dinkar Seeds</span>
          </h2>
          <p className="text-lg text-gray-700 font-inter max-w-3xl mx-auto">
            Four pillars of excellence that have earned us the confidence of over 1 million farmers
          </p>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full border border-gray-200 hover:border-primary-green/30"
                  whileHover={{
                    boxShadow: '0 20px 40px rgba(27, 94, 32, 0.1)',
                    borderColor: 'rgba(27, 94, 32, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-primary-green" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-bold text-text-dark mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 font-inter text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    className="mt-6 h-1 w-12 bg-accent-gold rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-700 font-inter text-lg mb-6">
            Join millions of farmers who have already experienced the Dinkar Seeds difference
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(27, 94, 32, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
