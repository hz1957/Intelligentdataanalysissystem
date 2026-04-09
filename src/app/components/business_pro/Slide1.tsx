import { motion } from "motion/react";
import { Database, Sparkles } from "lucide-react";
import { BusinessSectionShell } from "@/app/components/business/BusinessSectionShell";

export function Slide1() {
  return (
    <BusinessSectionShell eyebrow="INTRODUCTION">
      <div className="max-w-6xl w-full mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-[28px] bg-white mb-6 border border-[#d9d4e6] shadow-[0_18px_40px_rgba(40,37,98,0.12)]">
            <Database className="w-14 h-14 text-[#282562]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#d9d4e6] rounded-full text-[#C8242B] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Agentic Data Orchestration Engine
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-6xl md:text-7xl font-bold text-[#282562] mb-6 leading-tight"
        >
          临床数据智能平台
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl text-[#6f6a86] mb-4"
        >
          Clinical Data Intelligence Platform
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          通过多智能体架构，链接自然语言的灵活性与
          <br />
          临床数据工程的严谨性
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4 text-[#8a829f] text-sm"
        >
          <div className="w-60 h-px bg-[#d9d4e6]"></div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
