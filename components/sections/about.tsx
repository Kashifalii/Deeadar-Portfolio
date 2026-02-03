"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Amazon FBA Specialist (Private Label & Wholesale)",
  "Business Scaling & Growth Strategy",
  "Data-Driven Decision Making",
  "5+ Years of E-Commerce Expertise",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            About Me
          </h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[700px] rounded-2xl overflow-hidden border border-foreground/10 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/deedar-2.jpg"
              alt="Deedar Ali - Professional portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a dedicated Amazon Virtual Assistant with a passion for
              helping e-commerce businesses scale on the world's largest
              marketplace. With extensive experience in both private label and
              wholesale models, I've helped numerous businesses achieve
              exponential growth through strategic optimization and data-driven
              decision-making.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My expertise spans the entire Amazon seller journey: from
              identifying high-potential products and sourcing from global
              suppliers, to optimizing listings, managing advertising campaigns,
              and scaling operations efficiently. I believe in combining
              technical knowledge with strategic thinking to unlock sustainable
              business growth.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 rounded-lg border border-foreground/10">
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Successful Launches
                </p>
              </div>
              <div className="text-center p-4 rounded-lg border border-foreground/10">
                <p className="text-3xl font-bold text-foreground">250%</p>
                <p className="text-sm text-foreground/60 mt-2">Avg Growth</p>
              </div>
              <div className="text-center p-4 rounded-lg border border-foreground/10">
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-foreground/60 mt-2">
                  Clients Served
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
