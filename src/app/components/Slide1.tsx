import { motion } from "motion/react";
import { Database, Sparkles } from "lucide-react";

export function Slide1() {
  return (
    <div className="max-w-6xl w-full mx-auto text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mb-6 shadow-2xl">
          <Database className="w-14 h-14 text-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-4"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-blue-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Agentic Data Orchestration Engine
        </span>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        临床数据智能平台
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-2xl text-blue-200 mb-4"
      >
        Clinical Data Intelligence Platform
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-xl text-purple-200/80 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        通过多智能体架构，链接自然语言的灵活性与
        <br />
        临床数据工程的严谨性
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center justify-center gap-4 text-white/50 text-sm"
      >
        <div className="w-60 h-px bg-white/20"></div>
        {/* <span className="uppercase tracking-widest">
        </span> */}
        {/* <div className="w-20 h-px bg-white/20"></div> */}
      </motion.div>
    </div>
  );
}