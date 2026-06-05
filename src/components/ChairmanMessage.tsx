import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

export default function ChairmanMessage() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container-safe">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gradient-to-br from-primary-green/20 to-secondary-green/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-primary-green/20 text-6xl font-poppins font-bold">Chairman</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-primary-green rounded-2xl"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>

          {/* Right - Message */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Quote className="text-accent-gold" size={48} strokeWidth={1} />
            </motion.div>

            {/* Message */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-poppins font-bold text-text-dark leading-tight">
                Agriculture is the backbone of our nation. Our mission is to empower every farmer with the finest seeds and support they need to succeed.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                For over 30 years, we have remained committed to innovation, quality, and the prosperity of farming communities across India. Each seed we produce carries our promise of excellence and our vision for a more prosperous agricultural sector.
              </p>

              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                As we look to the future, we continue to invest in research, modernize our processes, and expand our reach. Our farmers' success is our success.
              </p>
            </div>

            {/* Signature */}
            <motion.div
              className="pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-2xl font-poppins font-bold text-primary-green mb-1">
                [Chairman Name]
              </p>
              <p className="text-gray-600 font-inter">
                Founder & Chairman, Dinkar Seeds
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
