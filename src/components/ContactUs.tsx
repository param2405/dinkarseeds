import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website inquiry from ${name || 'Website'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@dinkarseeds.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container-safe">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-br from-primary-green/5 to-secondary-green/5 rounded-2xl p-10 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-poppins font-bold text-text-dark mb-4">Get in Touch</h2>
          <p className="text-gray-700 font-inter mb-6">Have questions or want to partner with us? Drop a message and we'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-3 rounded-lg border border-gray-200"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-3 rounded-lg border border-gray-200"
              />
            </div>

            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-200"
            />

            <div className="flex items-center gap-4">
              <motion.button
                type="submit"
                className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>

              <a href="tel:+911234567890" className="text-primary-green font-semibold">Or call us: +91 12345 67890</a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
