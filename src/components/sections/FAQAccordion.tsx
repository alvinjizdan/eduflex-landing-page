"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is EduFlex only for educational institutions?",
    answer:
      "No. EduFlex is designed for organizations that need structured learning and competency development. The platform can support institutional, corporate, technical, and other organization-specific training environments.",
  },
  {
    question: "Can we customize the learning structure?",
    answer:
      "Yes. Learning paths can be structured around your organization's curriculum, modules, assessments, and competency model instead of forcing your training program into a fixed course structure.",
  },
  {
    question: "Can roles and permissions be customized?",
    answer:
      "EduFlex uses role-based access as part of its platform model. Administrative and learner access can be structured around the responsibilities and hierarchy defined for your organization.",
  },
  {
    question: "Does EduFlex support practical or interactive training?",
    answer:
      "Yes. EduFlex is designed to support interactive practice, simulations, virtual labs, task-based exercises, and practical evaluation alongside conventional learning materials and assessments.",
  },
  {
    question: "How does the implementation process work?",
    answer:
      "The implementation follows four stages: Discover, Design, Configure, and Deploy. We first understand your organization and learning requirements, then define the structure, configure the platform, and prepare the environment for launch.",
  },
  {
    question: "Can EduFlex integrate with our existing systems?",
    answer:
      "Integration requirements can be discussed during the implementation process. The appropriate approach depends on the systems involved, the data that needs to be exchanged, and the required implementation scope.",
  },
  {
    question: "Does EduFlex have a fixed public pricing model?",
    answer:
      "EduFlex is positioned around organization-specific requirements and configuration. Pricing can therefore depend on the learning structure, access model, deployment requirements, and implementation scope. Contact us to discuss your requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start by discussing your organization's learning requirements with us. We can explore the learning structure, user roles, practical activities, deployment expectations, and the appropriate implementation approach.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3.5 text-left">
      {faqData.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `faq-button-${idx}`;
        const panelId = `faq-panel-${idx}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
              isOpen
                ? "bg-white dark:bg-slate-900/80 border-emerald-500/40 dark:border-emerald-500/30 shadow-md shadow-emerald-500/5"
                : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/60"
                >
                  <div className="px-5 pb-5 pt-3">
                    <p className="text-body-small text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

