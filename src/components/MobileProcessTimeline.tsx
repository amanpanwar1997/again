import { motion } from 'motion/react';
import { Search, Target, Palette, BarChart, Rocket, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

interface ProcessStep {
  step: string;
  title: string;
  icon: React.ElementType;
  desc: string;
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Audit & Analysis',
    icon: Search,
    desc: 'Deep dive into your business, goals, target audience, competitive landscape, and market opportunities.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    icon: Target,
    desc: 'Comprehensive plan with clear KPIs, timelines, resource allocation, and growth roadmap.'
  },
  {
    step: '03',
    title: 'Creative Execution',
    icon: Palette,
    desc: 'Implementation with precision, creativity, and attention to detail across all touchpoints.'
  },
  {
    step: '04',
    title: 'Performance Optimization',
    icon: BarChart,
    desc: 'Continuous monitoring, A/B testing, data analysis, and strategic refinements for maximum ROI.'
  },
  {
    step: '05',
    title: 'Scale & Growth',
    icon: Rocket,
    desc: 'Amplify what works, expand reach, dominate your market, and achieve exponential growth.'
  }
];

const MobileProcessTimeline = () => {
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

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((process, index) => {
            const Icon = process.icon;
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
                  className="absolute left-0 top-0 w-12 h-12 bg-black border-2 border-white/20 rounded-full flex items-center justify-center z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(234, 179, 8, 0.5)' }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: index * 0.2
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Connecting Line to Card */}
                <motion.div 
                  className="absolute left-12 top-6 w-8 h-0.5 bg-white/10"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div 
                      className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.4,
                        type: 'spring'
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <span className="text-yellow-500 text-xs">Step {process.step}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {process.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      {process.desc}
                    </motion.p>

                    {/* Checkmark Icon */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-yellow-500/50" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Cap */}
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

export default MobileProcessTimeline;
