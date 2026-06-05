import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-green to-secondary-green"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="container-safe relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-6xl font-poppins font-bold text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ready to Grow with <span className="text-accent-gold">Dinkar Seeds?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/90 font-inter"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Connect with our team today and discover how Dinkar Seeds can transform your farming journey
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="#contact"
              className="bg-accent-gold hover:bg-yellow-600 text-text-dark font-semibold px-10 py-4 rounded-lg flex items-center gap-3 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
              <ChevronRight size={20} />
            </motion.a>

            <motion.a
              href="#about"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-4 rounded-lg flex items-center gap-3 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ChevronRight size={20} />
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="pt-12 border-t border-white/20 flex flex-col md:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="tel:+911234567890"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Phone size={20} />
              <span>+91 12345 67890</span>
            </motion.a>

            <div className="hidden md:block w-px h-6 bg-white/30" />

            <motion.a
              href="mailto:info@dinkarseeds.com"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail size={20} />
              <span>info@dinkarseeds.com</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
