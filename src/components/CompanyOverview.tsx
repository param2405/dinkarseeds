import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

export default function CompanyOverview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const timeline = [
    { year: '1993', label: 'Company Founded', desc: 'Started with a vision to revolutionize Indian agriculture' },
    { year: '2005', label: 'Expansion', desc: 'Multi-state presence established across India' },
    { year: '2015', label: 'Innovation Lab', desc: 'Advanced research facility inaugurated' },
    { year: '2024', label: 'Industry Leader', desc: '100+ products, 1M+ happy farmers' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-safe">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-primary-green/20 to-secondary-green/20 rounded-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                <div>
                  <p className="text-6xl font-poppins font-bold mb-2">30+</p>
                  <p className="text-xl font-poppins">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-dark mb-4">
                Cultivating Trust Since <span className="text-primary-green">1993</span>
              </h2>
              <p className="text-lg text-gray-700 font-inter">
                For three decades, Dinkar Seeds has been synonymous with quality, reliability, and agricultural innovation. We're not just a seed company; we're a partner in India's agricultural success story.
              </p>
            </motion.div>

            {/* Quality Commitment */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-poppins font-bold text-text-dark">Our Quality Commitment</h3>
              <div className="space-y-3">
                {[
                  'Rigorous testing and quality assurance at every stage',
                  'Modern processing facilities with international standards',
                  'Continuous research for improved varieties',
                  'Strong distribution network across India',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-inter">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-gray-200"
            >
              <h3 className="text-xl font-poppins font-bold text-text-dark mb-6">Our Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-primary-green font-poppins font-bold min-w-fit">{item.year}</div>
                    <div>
                      <p className="font-semibold text-text-dark">{item.label}</p>
                      <p className="text-sm text-gray-600 font-inter">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
