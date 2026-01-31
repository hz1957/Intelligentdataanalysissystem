import { motion } from 'motion/react';
import { Workflow, MessageSquare, Cog, ArrowRight } from 'lucide-react';

export function Slide3() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-white text-center mb-4"
      >
        多智能体架构
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-blue-200/80 text-center mb-16"
      >
        关注点分离 (Separation of Concerns)
      </motion.p>

      <div className="relative">
        {/* Agent 1: Chatbot */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20"></div>
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white">Agent 1: Chatbot</h3>
                    <span className="text-sm text-cyan-300 font-mono">交互层</span>
                  </div>
                  <p className="text-lg text-blue-200 mb-4">专注于意图理解、历史追踪和需求细化</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm">智能路由</span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm">全量历史分析</span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm">上下文理解</span>
                  </div>
                </div>
              </div>
              <Workflow className="w-10 h-10 text-cyan-400/50" />
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center my-6"
        >
          <div className="flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-blue-400 rotate-90" />
            <span className="text-blue-300 text-sm mt-2 font-medium">Handoff</span>
          </div>
        </motion.div>

        {/* Agent 2: ETL Agent */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20"></div>
          <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-white">Agent 2: ETL Agent</h3>
                    <span className="text-sm text-cyan-300 font-mono">执行层</span>
                  </div>
                  <p className="text-lg text-blue-200 mb-4">专注于 DAG 构建、Schema 校验和代码执行</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-200 text-sm">ReAct 循环</span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-200 text-sm">DAG 状态感知</span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-200 text-sm">Spark 校验</span>
                  </div>
                </div>
              </div>
              <Workflow className="w-10 h-10 text-blue-400/50" />
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
        <div className="inline-block bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl px-6 py-3">
          <p className="text-blue-200 text-sm">
            ✨ 解耦设计：每个 Agent 专注于自己的职责，提高系统的可维护性和可扩展性
          </p>
        </div>
      </motion.div>
    </div>
  );
}