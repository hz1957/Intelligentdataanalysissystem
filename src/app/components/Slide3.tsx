import { motion } from 'motion/react';
import { Workflow, MessageSquare, Cog, ArrowRight, BrainCircuit, Database, CheckCircle } from 'lucide-react';

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
        <p className="text-lg text-blue-200/60">关注点分离 (Separation of Concerns)：交互与执行解耦</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Agent 1: Chatbot (Interaction Layer) */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-6 hover:border-blue-500/20 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/10">
              <MessageSquare className="w-7 h-7 text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Agent 1: Chatbot (交互层)</h3>
                <span className="px-2 py-1 bg-blue-500/10 rounded text-xs text-blue-300 border border-blue-500/10">Stateful</span>
              </div>
              <p className="text-blue-100/70 mb-4 text-sm leading-relaxed">
                负责处理模糊的自然语言，通过多轮对话消歧，维护上下文记忆 (Memory)，将非结构化需求转化为结构化的分析指令。
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded border border-white/5 text-xs text-slate-300">
                  <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
                  <span>意图识别</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded border border-white/5 text-xs text-slate-300">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>记忆管理</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transition: Handoff */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center my-4"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
            <div className="px-3 py-1 bg-black/40 rounded-full border border-white/5 text-xs text-slate-400 flex items-center gap-2">
              <span>Explicit Handoff</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
          </div>
        </motion.div>

        {/* Agent 2: ETL Agent (Execution Layer) */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-start gap-6 hover:border-cyan-500/20 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/10">
              <Cog className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Agent 2: ETL Agent (执行层)</h3>
                <span className="px-2 py-1 bg-cyan-500/10 rounded text-xs text-cyan-300 border border-cyan-500/10">Stateless Execution</span>
              </div>
              <p className="text-blue-100/70 mb-4 text-sm leading-relaxed">
                接收明确指令，专注于代码生成的准确性与运行时稳定性。通过 ReAct 循环与 Spark 引擎交互，确保生成的 ETL 逻辑 100% 可执行。
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded border border-white/5 text-xs text-slate-300">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DAG 构建</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded border border-white/5 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> {/* Note: CheckCircle not imported yet, adding to imports */}
                  <span>运行时校验</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-400 text-sm">
          💡 解耦优势：交互层处理“模糊性”，执行层处理“正确性”，大幅降低了单一 Agent 的上下文负担。
        </p>
      </motion.div>
    </div>
  );
}