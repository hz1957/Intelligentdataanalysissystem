import { motion } from 'motion/react';
import { Workflow, MessageSquare, Cog, ArrowRight, ActivitySquare, ShieldCheck, Database } from 'lucide-react';

export function Slide3() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">核心架构设计</h2>
        <p className="text-lg text-blue-200/60">Agent 1 负责对话与生成 Plan；Agent 2 负责按 Plan 执行</p>
      </motion.div>

      <div className="grid grid-cols-12 gap-6 max-w-5xl mx-auto relative">
        {/* Agent 1: Chatbot */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-5 relative group"
        >
          <div className="h-full bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <span className="px-3 py-1 bg-white/[0.03] rounded-full text-[10px] text-blue-300 border border-white/[0.05]">对话入口 / Plan 生成</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Agent 1: 对话规划层</h3>

            <p className="text-white/50 text-[13px] leading-relaxed flex-1 mb-6 font-medium">
              Agent 1 直接和用户对话，负责理解需求、澄清问题、维护 baseline 与上下文，并把自然语言需求整理成可执行的结构化 Plan 和约束集。它的职责是“想清楚怎么做”，而不是直接下场执行。
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 rounded-xl border border-white/[0.04] text-[11px] text-slate-300">
                <ActivitySquare className="w-3.5 h-3.5 text-blue-400" />
                <span>用户对话</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 rounded-xl border border-white/[0.04] text-[11px] text-slate-300">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>上下文 / Baseline</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-[11px] text-blue-300">
                <ArrowRight className="w-3 h-3" />
                <span>输出结构化 Plan</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agent 2: ETL Agent */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-7 relative group"
        >
          <div className="h-full bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Cog className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="px-3 py-1 bg-white/[0.03] rounded-full text-[10px] text-cyan-300 border border-white/[0.05]">Plan Mode 执行器</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Agent 2: 计划执行层</h3>

            <p className="text-white/50 text-[13px] leading-relaxed flex-1 mb-6 font-medium">
              Agent 2 不和用户聊天，只消费 Agent 1 交付的 Plan、上下文和约束，在受控 workflow 中逐步执行、校验、回退与修正。本质上它更像一个 plan mode 智能体，职责是“把计划稳定落地”。
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 rounded-xl border border-white/[0.04] text-[11px] text-slate-300">
                <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                <span>按 Plan 执行</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 rounded-xl border border-white/[0.04] text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>校验 / 回退 / 容错</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 rounded-xl border border-blue-500/20 text-[11px] text-blue-300 ml-auto">
                <ArrowRight className="w-3 h-3" />
                <span>不直接接收用户自然语言</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-8 max-w-4xl mx-auto"
      >
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-sm text-slate-300">
          <span className="text-center">User Conversation</span>
          <ArrowRight className="w-4 h-4 text-blue-300 mx-auto md:mx-0" />
          <span className="text-center text-blue-300">Agent 1: 生成结构化 Plan</span>
          <ArrowRight className="w-4 h-4 text-blue-300 mx-auto md:mx-0" />
          <span className="text-center text-cyan-300">Agent 2: 执行 + Validator + Fallback</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-400 text-sm">
          关注点分离之后，用户交互、任务规划和受控执行各自独立演化，系统边界会更容易讲清楚。
        </p>
      </motion.div>
    </div>
  );
}
