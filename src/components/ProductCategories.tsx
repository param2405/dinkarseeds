import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, Flame, Sprout, Wheat, Clover, Wind, Gift } from 'lucide-react'

export default function ProductCategories() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const products = [
    { name: 'Vegetable Seeds', icon: Leaf, desc: 'Premium vegetables for farmers and home gardeners' },
    { name: 'Spices', icon: Flame, desc: 'Aromatic spice seeds for traditional cultivation' },
    { name: 'Pulse Crops', icon: Sprout, desc: 'Nutrient-rich pulses for sustainable farming' },
    { name: 'Oil Seeds', icon: Wind, desc: 'High-yield oil seed varieties' },
    { name: 'Fodder Crops', icon: Clover, desc: 'Nutritious feed for livestock' },
    { name: 'Cereal Crops', icon: Wheat, desc: 'Quality cereal seeds for grain production' },
    { name: 'Cotton & Cash Crops', icon: Gift, desc: 'High-value commercial crop seeds' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="products" className="py-20 md:py-32 bg-bg-light" ref={ref}>
      <div className="container-safe">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-text-dark mb-4">
            Our <span className="text-primary-green">Product Categories</span>
          </h2>
          <p className="text-lg text-gray-700 font-inter max-w-3xl mx-auto">
            Comprehensive range of premium quality seeds across diverse agricultural sectors
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px rgba(27, 94, 32, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-green/20 to-secondary-green/20 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-primary-green" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-bold text-text-dark mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Hover Action */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-primary-green font-semibold text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <span>Learn More</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Additional Info Card */}
          <motion.div
            variants={itemVariants}
            className="group"
          >
            <motion.div
              className="bg-gradient-to-br from-primary-green to-secondary-green rounded-2xl p-8 text-white h-full flex flex-col justify-center"
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(27, 94, 32, 0.3)',
              }}
            >
              <h3 className="text-2xl font-poppins font-bold mb-4">And More</h3>
              <p className="font-inter text-white/90 text-sm leading-relaxed">
                Customized solutions for specific regional needs and modern farming techniques
              </p>
              <motion.a
                href="#products"
                className="mt-6 bg-white text-primary-green px-6 py-2 rounded-lg font-semibold hover:bg-bg-light transition-colors inline-block w-fit"
                whileHover={{ scale: 1.05 }}
              >
                View Catalog
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
