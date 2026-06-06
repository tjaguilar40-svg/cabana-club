/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Sparkles, Building, Bookmark, Camera } from "lucide-react";
import { RETROSPECTIVE_METRICS, PORTFOLIO_GALLERY } from "../data";
import { motion } from "motion/react";

export default function MetricsAndGallery() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-cabana-border font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Subheader */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[11px] uppercase tracking-widest text-[#B2B2B2] font-extrabold block">
            Retrospective Momentum
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-cabana-dark mt-2 leading-tight">
            Community moments that turn into brand momentum.
          </h2>
          <p className="text-cabana-muted mt-4 text-sm font-medium leading-relaxed max-w-xl">
            Numbers prove our thesis. We build physical ecosystems where homegrown merchants experience genuine visual momentum, active creator discovery, and massive feedback cycles.
          </p>
        </div>

        {/* Retrospective Metric Cards (Oversized Typos) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-20" id="metrics-grid">
          {RETROSPECTIVE_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#FAFAF7] border border-cabana-border p-6 rounded-[24px] flex flex-col justify-between h-40 group hover:border-cabana-dark/25 transition-colors duration-300"
              id={`metric-item-${idx}`}
            >
              <div className="text-cabana-dark font-display font-bold text-3xl md:text-4xl tracking-tighter block group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <span className="font-sans text-[11px] text-cabana-muted font-bold uppercase tracking-wider leading-snug mt-2 block">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modular Bento Gallery Section */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-cabana-border pb-4">
            <h3 className="font-display font-medium text-lg text-cabana-dark flex items-center gap-2">
              <Camera className="w-4 h-4 text-cabana-matcha-dark" />
              <span>Activation Vignettes</span>
            </h3>
            <span className="text-[10px] uppercase font-bold text-cabana-muted tracking-wider hidden sm:block">
              Metro Manila Community Snapshots
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative rounded-[28px] overflow-hidden border border-cabana-border h-64 md:h-72 flex flex-col justify-end p-6 hover:-translate-y-1.5 transition-all duration-300"
                id={`gallery-item-${item.id}`}
              >
                {/* Clean soft background representation strictly conforming to suggested palette */}
                <div className={`absolute inset-0 ${item.bgClass}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

                {/* Styled interior aesthetic line elements referencing PDF look */}
                <div className="absolute top-4 right-4 text-cabana-dark/25 pointer-events-none uppercase tracking-widest text-[9px] font-extrabold font-sans">
                  {item.subtitle}
                </div>

                {/* Overlapping grid details */}
                <div className="relative z-10">
                  <span className="bg-cabana-dark text-white text-[8px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm block w-fit mb-2">
                    CC Archives
                  </span>
                  <h4 className="font-display font-bold text-lg text-cabana-dark leading-tight tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-cabana-dark/70 font-semibold block mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>

                {/* Replace Note Overlay on Hover */}
                <div className="absolute inset-0 bg-cabana-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white z-20 font-sans">
                  <Camera className="w-6 h-6 text-cabana-matcha mb-2" />
                  <span className="font-display font-medium text-sm block mb-1">Authentic Activation Vignette</span>
                  <span className="text-[10px] text-white/60 block mb-3">({item.subtitle} Corner)</span>
                  <span className="text-[8px] uppercase tracking-widest px-2.5 py-1 bg-cabana-matcha-dark text-cabana-dark rounded-sm font-semibold">
                    Replace with real event photo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
