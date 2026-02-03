'use client';

import React from "react"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const socialIcons: Record<string, React.ReactNode> = {
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />,
    Mail: <Mail size={20} />,
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,.1)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,.1)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-foreground/60 text-sm font-medium tracking-widest uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 leading-tight"
                variants={itemVariants}
              >
                Deedar Ali
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl text-foreground/80 font-semibold">
                Amazon Virtual Assistant & FBA Expert
              </h2>
              <p className="text-foreground/70 mt-4 text-lg leading-relaxed max-w-lg">
                Scaling Amazon businesses through strategic private label and wholesale expertise.
                Specializing in product research, listing optimization, PPC management, and
                data-driven business growth.
              </p>
            </motion.div>

            {/* CTA and Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>

              {/* Social Icons */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-foreground/20 text-foreground hover:bg-secondary hover:border-foreground/40 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {socialIcons[link.icon as keyof typeof socialIcons]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative h-[500px] md:h-[600px] hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden border border-foreground/10">
              <Image
                src="/images/deedar-1.jpg"
                alt="Deedar Ali - Amazon Virtual Assistant"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-foreground/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-medium text-foreground">Amazon FBA Expert</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}
