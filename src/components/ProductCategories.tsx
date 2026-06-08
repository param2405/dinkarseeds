import { useEffect, useRef } from 'react';
import { motion, useInView as useMotionInView } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Flame, Sprout, Wheat, Clover, Wind, Gift, TrendingUp, Shield, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCategories() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'Vegetable Seeds', icon: Leaf, desc: 'Premium vegetables for farmers and home gardeners', color: 'from-green-600 to-emerald-600', bg: 'bg-green-50' },
    { name: 'Spices', icon: Flame, desc: 'Aromatic spice seeds for traditional cultivation', color: 'from-amber-600 to-orange-600', bg: 'bg-amber-50' },
    { name: 'Pulse Crops', icon: Sprout, desc: 'Nutrient-rich pulses for sustainable farming', color: 'from-lime-600 to-green-600', bg: 'bg-lime-50' },
    { name: 'Oil Seeds', icon: Wind, desc: 'High-yield oil seed varieties', color: 'from-yellow-600 to-amber-600', bg: 'bg-yellow-50' },
    { name: 'Fodder Crops', icon: Clover, desc: 'Nutritious feed for livestock', color: 'from-teal-600 to-green-600', bg: 'bg-teal-50' },
    { name: 'Cereal Crops', icon: Wheat, desc: 'Quality cereal seeds for grain production', color: 'from-amber-700 to-yellow-700', bg: 'bg-amber-50' },
    { name: 'Cotton & Cash Crops', icon: Gift, desc: 'High-value commercial crop seeds', color: 'from-sky-600 to-blue-600', bg: 'bg-sky-50' },
  ];

  const stats = [
    { value: 100, suffix: '+', label: 'Product Varieties', icon: TrendingUp },
    { value: 50000, suffix: '+', label: 'Happy Farmers', icon: Shield, multiplier: 1000 },
    { value: 25, suffix: ' States', label: 'Pan-India Presence', icon: Truck },
  ];

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Animate section header
        gsap.fromTo('.header-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.fromTo('.header-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });

        // Animate cards with stagger
        gsap.fromTo('.product-card', 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(0.4)', delay: 0.3 }
        );

        // Counter animation for stats
        const statsValues = {
          varieties: 0,
          farmers: 0,
          states: 0
        };
        gsap.to(statsValues, {
          varieties: 100,
          farmers: 50,
          states: 25,
          duration: 2.5,
          ease: 'power2.out',
          delay: 0.8,
          onUpdate: () => {
            const varietiesEl = document.querySelector('.stat-varieties');
            const farmersEl = document.querySelector('.stat-farmers');
            const statesEl = document.querySelector('.stat-states');
            if (varietiesEl) varietiesEl.textContent = Math.floor(statsValues.varieties) + '+';
            if (farmersEl) farmersEl.textContent = (statsValues.farmers).toFixed(0) + 'K+';
            if (statesEl) statesEl.textContent = Math.floor(statsValues.states) + '+';
          }
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section 
      id="products" 
      className="py-16 md:py-24 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden"
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-primary-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-green/3 to-secondary-green/3 rounded-full blur-3xl" />
      </div>

      <div className="container-safe max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-1.5 rounded-full mb-4">
            <Sprout className="w-4 h-4 text-primary-green" />
            <span className="text-primary-green text-sm font-semibold tracking-wide">WHAT WE OFFER</span>
          </div>
          <h2 className="header-title text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-dark mb-4">
            Our <span className="text-primary-green relative inline-block">
              Product Categories
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary-green/30" viewBox="0 0 200 8">
                <path d="M0,4 Q50,8 100,4 T200,4" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
          </h2>
          <p className="header-desc text-lg text-gray-700 font-inter max-w-2xl mx-auto">
            Comprehensive range of premium quality seeds across diverse agricultural sectors
          </p>
        </div>

        {/* Products Grid - Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="product-card group">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/0 to-primary-green/0 group-hover:from-primary-green/5 group-hover:to-secondary-green/5 transition-all duration-500" />
                  
                  <div className="p-6 md:p-8 relative z-10">
                    {/* Icon with animated background */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} bg-opacity-15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                      <Icon className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-poppins font-bold text-text-dark mb-3 group-hover:text-primary-green transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
                      {product.desc}
                    </p>
                    
                    {/* Learn More link - appears on hover */}
                    <div className="mt-6 flex items-center gap-2 text-primary-green font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>Explore Range</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-green/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}

          {/* Featured Card - Enhanced */}
          <div className="product-card group">
            <div className="relative h-full bg-gradient-to-br from-primary-green via-primary-green to-secondary-green rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
              <div className="p-6 md:p-8 text-white relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gift className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-3">And More</h3>
                <p className="text-white/90 font-inter text-base leading-relaxed">
                  Customized solutions for specific regional needs and modern farming techniques
                </p>
                <motion.a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 bg-white text-primary-green px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md group-hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Full Catalog
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
              {/* Animated leaves */}
              <Leaf className="absolute -bottom-4 -right-4 text-white/10 w-24 h-24 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Stats Section - New Addition */}
        <div className="mt-16 md:mt-20" ref={countersRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const IconStat = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-primary-green/10 rounded-full group-hover:bg-primary-green/20 transition-colors">
                      <IconStat className="text-primary-green" size={24} />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-poppins font-bold text-primary-green">
                    <span className={`stat-${stat.label === 'Product Varieties' ? 'varieties' : stat.label === 'Happy Farmers' ? 'farmers' : 'states'}`}>
                      0
                    </span>
                    {stat.suffix}
                  </p>
                  <p className="text-gray-600 font-inter text-sm mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-green/5 px-6 py-2 rounded-full">
            <Shield className="text-primary-green" size={16} />
            <span className="text-sm text-gray-600 font-inter">Certified & Tested Seeds | ISO 9001:2015 Certified</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .product-card {
          opacity: 0;
        }
        .gsap-ready .product-card {
          opacity: 1;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .group:hover .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
