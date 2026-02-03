'use client';

import React from "react"

import { motion } from 'framer-motion';
import {
  Search,
  BarChart3,
  Zap,
  TrendingUp,
  Package,
  Globe,
  PieChart,
  Users,
  FileText,
} from 'lucide-react';
import { SKILLS } from '@/lib/constants';

const skillIcons: Record<string, React.ReactNode> = {
  'Product Research & Hunting': <Search className="w-8 h-8" />,
  'Keyword Research': <BarChart3 className="w-8 h-8" />,
  'Listing Optimization': <Zap className="w-8 h-8" />,
  'Amazon PPC': <TrendingUp className="w-8 h-8" />,
  'Amazon Seller Central': <PieChart className="w-8 h-8" />,
  'Global Sourcing': <Globe className="w-8 h-8" />,
  'Inventory Management': <Package className="w-8 h-8" />,
  'Account Management': <Users className="w-8 h-8" />,
  'Business Analysis': <FileText className="w-8 h-8" />,
};

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-card-foreground mb-12" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.title}
              className="p-6 rounded-lg border border-border hover:border-foreground/30 transition-all duration-300 group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
            >
              <motion.div
                className="text-card-foreground mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                {skillIcons[skill.title]}
              </motion.div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{skill.title}</h3>
              <p className="text-card-foreground/70 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
