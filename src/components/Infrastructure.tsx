import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Factory, Microscope, Droplet, Snowflake, Package, Truck, 
  Award, Shield, MapPin, Play 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Infrastructure() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef<HTMLElement | null>(null);
  

  const facilities = [
    { name: 'Processing Plant', desc: 'State-of-the-art facility with 50MT/day capacity', icon: Factory, color: 'from-emerald-600 to-green-600' },
    { name: 'Testing Laboratory', desc: 'Advanced quality assurance with NABL accreditation', icon: Microscope, color: 'from-blue-600 to-cyan-600' },
    { name: 'Seed Treatment Unit', desc: 'Modern seed coating & pelleting technology', icon: Droplet, color: 'from-sky-500 to-blue-500' },
    { name: 'Cold Storage', desc: 'Temperature controlled facilities for seed viability', icon: Snowflake, color: 'from-teal-500 to-cyan-500' },
    { name: 'Packaging Center', desc: 'Hygienic automated packaging lines', icon: Package, color: 'from-amber-600 to-orange-600' },
    { name: 'Distribution Hub', desc: 'Pan-India logistics network', icon: Truck, color: 'from-purple-600 to-indigo-600' },
  ];

  

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'NABL Accredited', desc: 'Laboratory Testing' },
    { name: 'Seed Tech Certified', desc: 'Modern Seed Technology' },
    { name: 'Green Building', desc: 'Eco-friendly Campus' },
  ];

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Animate section header
        gsap.fromTo('.infra-header', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.fromTo('.infra-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });

        // Animate cards with stagger
        gsap.fromTo('.infra-card', 
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(0.4)', delay: 0.3 }
        );

        

        // Animate certification badges
        gsap.fromTo('.cert-badge',
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, delay: 1.3 }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [inView]);

  

  return (
    <section 
      id="infrastructure" 
      className="py-16 md:py-24 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden"
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-green/3 to-secondary-green/3 rounded-full blur-3xl" />
      </div>

      <div className="container-safe max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-1.5 rounded-full mb-4">
            <Factory className="w-4 h-4 text-primary-green" />
            <span className="text-primary-green text-sm font-semibold tracking-wide">WORLD-CLASS FACILITIES</span>
          </div>
          <h2 className="infra-header text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-text-dark mb-4">
            Our <span className="text-primary-green relative inline-block">
              Modern Infrastructure
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary-green/30" viewBox="0 0 200 8">
                <path d="M0,4 Q50,8 100,4 T200,4" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
          </h2>
          <p className="infra-sub text-lg text-gray-700 font-inter max-w-2xl mx-auto">
            World-class facilities ensuring the highest quality standards from seed to harvest
          </p>
        </div>

        {/* Facilities Grid - Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="infra-card group">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/0 to-primary-green/0 group-hover:from-primary-green/5 group-hover:to-secondary-green/5 transition-all duration-500" />
                  
                  {/* Decorative image area - now with icon & pattern */}
                  <div className={`relative h-48 bg-gradient-to-br ${facility.color} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="text-white/80 w-16 h-16 mb-2 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                        <div className="text-white/60 text-sm font-mono">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                    </div>
                    {/* Animated scan line */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-poppins font-bold text-text-dark mb-2 group-hover:text-primary-green transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
                      {facility.desc}
                    </p>
                    {/* Learn More link */}
                    <div className="mt-4 flex items-center gap-2 text-primary-green font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>Virtual Tour</span>
                      <Play size={14} />
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-green/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        

        {/* Virtual Tour / Interactive Map Concept */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-primary-green to-secondary-green p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4">
                  <MapPin size={14} />
                  <span className="text-xs font-semibold">PAN-INDIA PRESENCE</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">Take a Virtual Tour</h3>
                <p className="text-white/80 text-sm md:text-base mb-5">
                  Explore our state-of-the-art facilities across India. See how we ensure quality at every step.
                </p>
                <motion.button
                  className="bg-white text-primary-green px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02, gap: '0.75rem' }}
                >
                  Launch Interactive Map <Play size={16} />
                </motion.button>
              </div>
              <div className="relative h-48 md:h-40 bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 p-4 w-full">
                  {['Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Bengaluru', 'Hyderabad'].map((city, i) => (
                    <div key={i} className="text-center">
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mb-1 animate-pulse" />
                      <span className="text-[10px] text-white/70">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Badges */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-md"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-poppins font-bold text-text-dark">Quality Certifications</h3>
            <p className="text-gray-600 text-sm">Recognized for excellence in seed production & processing</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-badge text-center p-4 rounded-xl bg-green-50/50 border border-green-100 hover:shadow-md transition-all">
                <Award className="text-primary-green w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-text-dark text-sm">{cert.name}</p>
                <p className="text-xs text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Trust Signal */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-inter flex items-center justify-center gap-2">
            <Shield size={14} className="text-primary-green" />
            Certified by Ministry of Agriculture & Farmers Welfare
          </p>
        </div>
      </div>

      <style>{`
        .infra-card {
          opacity: 0;
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: softPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
