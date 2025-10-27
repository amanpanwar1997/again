import { motion } from 'motion/react';
import { Users, DollarSign, TrendingUp, Heart, Star, Target, Sparkles } from 'lucide-react';
import { useRef } from 'react';

interface Metric {
  icon: React.ElementType;
  number: string;
  title: string;
  desc: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: Users,
    number: '200+',
    title: 'Brand Transformations',
    desc: 'Businesses transformed into market leaders across India',
    color: 'text-yellow-500'
  },
  {
    icon: DollarSign,
    number: '₹50Cr+',
    title: 'Revenue Generated',
    desc: 'Total revenue generated for our clients through digital campaigns',
    color: 'text-yellow-500'
  },
  {
    icon: TrendingUp,
    number: '10X',
    title: 'Average ROI',
    desc: 'Industry-leading return on investment across all campaigns',
    color: 'text-yellow-500'
  },
  {
    icon: Heart,
    number: '98%',
    title: 'Client Retention',
    desc: 'Long-term partnerships built on trust and exceptional results',
    color: 'text-yellow-500'
  },
  {
    icon: Star,
    number: '4.9★',
    title: 'Google Rating',
    desc: 'Based on 200+ authentic reviews from satisfied clients',
    color: 'text-yellow-500'
  },
  {
    icon: Target,
    number: '500K+',
    title: 'Leads Generated',
    desc: 'High-quality leads delivered across all industries and platforms',
    color: 'text-yellow-500'
  }
];

const MobileImpactTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[500px] overflow-y-auto pr-2"
      style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none'  /* IE and Edge */
      }}
    >
      <div className="relative py-8">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
        
        {/* Animated Gradient Line Overlay */}
        <motion.div 
          className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-500/50 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.1 }}
        />

        {/* Metric Items */}
        <div className="space-y-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-0 top-0 w-12 h-12 bg-black border-2 border-yellow-500/30 rounded-full flex items-center justify-center z-10 shadow-lg shadow-yellow-500/20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.15, borderColor: 'rgba(234, 179, 8, 0.6)' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: index * 0.2
                    }}
                  >
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                </motion.div>

                {/* Connecting Line to Card */}
                <motion.div 
                  className="absolute left-12 top-6 w-8 h-0.5 bg-gradient-to-r from-yellow-500/30 to-white/10"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                />

                {/* Content Card */}
                <motion.div 
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                  whileHover={{ 
                    borderColor: 'rgba(234, 179, 8, 0.3)',
                    backgroundColor: 'rgba(234, 179, 8, 0.05)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Sparkle Effect - Top Right */}
                  <motion.div
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-60"
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>

                  <div className="relative z-10 text-center">
                    {/* Large Number */}
                    <motion.div 
                      className={`mb-2 ${metric.color}`}
                      style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: 1 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.4,
                        type: 'spring',
                        stiffness: 150
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(234, 179, 8, 0.3)',
                          '0 0 20px rgba(234, 179, 8, 0.5)',
                          '0 0 10px rgba(234, 179, 8, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: index * 0.3
                      }}
                    >
                      {metric.number}
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-white mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {metric.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-400 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {metric.desc}
                    </motion.p>

                    {/* Bottom Glow Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Cap with Pulse */}
        <motion.div 
          className="absolute left-6 bottom-0 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(234, 179, 8, 0.7)',
              '0 0 0 8px rgba(234, 179, 8, 0)',
              '0 0 0 0 rgba(234, 179, 8, 0)'
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </div>
    </div>
  );
};

export default MobileImpactTimeline;
