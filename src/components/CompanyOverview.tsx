import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Leaf, Award, Users, Sprout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyOverview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef<HTMLElement>(null);

  const timeline = [
    { year: '1993', label: 'Founded', desc: 'Revolutionizing Indian agriculture', icon: Sprout },
    { year: '2005', label: 'Expansion', desc: 'Multi-state presence', icon: Users },
    { year: '2015', label: 'Innovation Lab', desc: 'Advanced research facility', icon: Award },
    { year: '2024', label: 'Industry Leader', desc: '100+ products, 1M+ farmers', icon: Leaf },
  ];

  const qualityItems = [
    'Rigorous testing & QA',
    'Modern processing facilities',
    'Continuous research',
    'Strong distribution network',
  ];

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.gsap-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        gsap.fromTo('.gsap-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.15 });
        gsap.fromTo('.quality-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, delay: 0.3 });
        gsap.fromTo('.timeline-item', { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, delay: 0.5 });
        gsap.fromTo('.image-wrapper', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 });
        
        // Counter
        gsap.fromTo('.years-count', { innerText: 0 }, { innerText: 30, duration: 2, snap: { innerText: 1 }, delay: 0.4 });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 bg-white relative overflow-hidden"
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
    >
      {/* Minimal background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-full blur-2xl" />
      </div>

      <div className="container-safe max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="image-wrapper relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="text-6xl md:text-7xl font-bold text-white"><span className="years-count">0</span>+</p>
                  <p className="text-white text-base md:text-lg font-medium mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-1.5 rounded-full mb-3">
                <Sprout className="w-4 h-4 text-primary-green" />
                <span className="text-primary-green text-sm font-semibold tracking-wide">TRUSTED SINCE 1993</span>
              </div>
              <h2 className="gsap-title text-4xl md:text-5xl font-bold text-text-dark leading-tight">
                Cultivating Trust{' '}
                <span className="text-primary-green">Since 1993</span>
              </h2>
              <p className="gsap-desc text-gray-700 text-base md:text-lg mt-3 leading-relaxed">
                Three decades of quality & innovation. Partnering with India's farmers for a prosperous future.
              </p>
            </div>

            {/* Quality Commitment - compact grid */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle size={20} className="text-primary-green" /> Quality Commitment
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {qualityItems.map((item, idx) => (
                  <div key={idx} className="quality-item flex items-center gap-2 text-gray-700">
                    <CheckCircle size={14} className="text-primary-green flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline - more compact but readable */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award size={20} className="text-primary-green" /> Our Journey
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="timeline-item flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-green/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-primary-green" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-green font-bold text-base">{item.year}</span>
                        <span className="text-base font-semibold text-text-dark">{item.label}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini stats - bigger numbers */}
            <div className="flex justify-between gap-4 pt-2">
              <div className="text-center flex-1 py-2 bg-green-50/60 rounded-xl">
                <p className="text-primary-green font-bold text-2xl">30+</p>
                <p className="text-sm text-gray-600 font-medium">Years</p>
              </div>
              <div className="text-center flex-1 py-2 bg-green-50/60 rounded-xl">
                <p className="text-primary-green font-bold text-2xl">100+</p>
                <p className="text-sm text-gray-600 font-medium">Products</p>
              </div>
              <div className="text-center flex-1 py-2 bg-green-50/60 rounded-xl">
                <p className="text-primary-green font-bold text-2xl">1M+</p>
                <p className="text-sm text-gray-600 font-medium">Farmers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .container-safe { width: 100%; }
        @media (min-width: 1280px) { .container-safe { max-width: 1280px; margin: 0 auto; } }
      `}</style>
    </section>
  );
}
