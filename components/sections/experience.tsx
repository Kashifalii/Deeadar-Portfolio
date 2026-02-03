'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Experience & Work
          </h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative group"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="hidden md:block absolute left-6 top-16 w-1 h-24 bg-gradient-to-b from-foreground to-foreground/0" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-12 h-12 hidden md:flex items-center justify-center">
                <motion.div
                  className="absolute w-4 h-4 rounded-full bg-foreground"
                  whileHover={{ scale: 1.5 }}
                />
              </div>

              {/* Content */}
              <motion.div
                className="md:ml-24 p-6 rounded-lg border border-border hover:border-foreground/30 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-foreground/60 font-medium mt-1">{exp.period}</p>
                  </div>
                  <motion.div
                    className="text-foreground/40 group-hover:text-foreground transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                </div>

                <ul className="mt-4 space-y-3">
                  {exp.responsibilities.map((responsibility) => (
                    <motion.li
                      key={responsibility}
                      className="flex gap-3 text-foreground/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-foreground font-bold mt-1">•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
