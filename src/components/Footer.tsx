import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Products', href: '#products' },
      { label: 'Careers', href: '#' },
      { label: 'Newsroom', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Farming Guide', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Globe, label: 'Website', href: '#' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="container-safe py-16 md:py-20">
        <motion.div
          className="grid md:grid-cols-5 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-text-dark font-poppins font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-poppins font-bold text-lg">Dinkar</p>
                <p className="text-sm text-gray-400">Seeds</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              Growing India's future through quality seeds and agricultural excellence for over 30 years.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-gold hover:text-text-dark flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-poppins font-bold text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-poppins font-bold text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-poppins font-bold text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-poppins font-bold text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400 font-inter text-sm">
                  Himmatnagar, Gujarat, India - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-gold flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-gold flex-shrink-0" />
                <a
                  href="mailto:info@dinkarseeds.com"
                  className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
                >
                  info@dinkarseeds.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 font-inter text-sm text-center md:text-left">
            © 2026 Dinkar Seeds. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
            >
              Terms of Use
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-accent-gold transition-colors font-inter text-sm"
            >
              Cookie Preferences
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
