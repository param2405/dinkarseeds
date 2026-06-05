import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Infrastructure() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const facilities = [
    { name: 'Processing Plant', desc: 'State-of-the-art facility' },
    { name: 'Testing Laboratory', desc: 'Advanced quality assurance' },
    { name: 'Seed Treatment Unit', desc: 'Modern seed coating technology' },
    { name: 'Cold Storage', desc: 'Temperature controlled facilities' },
    { name: 'Packaging Center', desc: 'Hygienic packaging equipment' },
    { name: 'Distribution Hub', desc: 'Efficient logistics network' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="infrastructure" className="py-20 md:py-32 bg-bg-light" ref={ref}>
      <div className="container-safe">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-dark mb-4">
            Our <span className="text-primary-green">Modern Infrastructure</span>
          </h2>
          <p className="text-lg text-gray-700 font-inter max-w-3xl mx-auto">
            World-class facilities ensuring the highest quality standards
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full"
                whileHover={{
                  y: -8,
                }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-green/20 to-secondary-green/20 overflow-hidden relative">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center text-primary-green">
                      <p className="text-4xl font-bold opacity-20">{index + 1}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-bold text-text-dark mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm">
                    {facility.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infrastructure Highlights */}
        <motion.div
          className="bg-gradient-to-r from-primary-green to-secondary-green rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Manufacturing Plants', value: '5+' },
              { label: 'R&D Investment', value: 'Continuous' },
              { label: 'Quality Standards', value: 'ISO Certified' },
            ].map((item, index) => (
              <motion.div key={index}>
                <p className="text-4xl font-poppins font-bold mb-2">{item.value}</p>
                <p className="text-white/80 font-inter">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
