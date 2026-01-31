import { motion } from 'motion/react';
import { Cog, Eye, Repeat } from 'lucide-react';

export function Slide6() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Cog className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">ETL Agent</h2>
        </div>
        <p className="text-xl text-blue-200/80">执行层 - ReAct 规划与 DAG 状态感知</p>
      </motion.div>

      {/* ReAct Loop */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <Repeat className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">ReAct 循环</h3>
              <p className="text-blue-200 text-base">推理 → 行动 → 观察，逐步构建 DAG</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
              <div className="text-blue-300 font-bold mb-1 text-base">Reason</div>
              <p className="text-white/90 text-xs">分析当前 DAG 状态，规划下一步</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
              <div className="text-cyan-300 font-bold mb-1 text-base">Act</div>
              <p className="text-white/90 text-xs">调用工具，创建新的 DAG 节点</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-300/30">
              <div className="text-blue-200 font-bold mb-1 text-base">Observe</div>
              <p className="text-white/90 text-xs">观察结果，更新全局状态</p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
            <p className="text-white/90 text-sm leading-relaxed">
              Agent 像搭积木一样，<span className="text-blue-300 font-semibold">步步构建</span> 数据流图及其 Schema，
              而非一次性生成整个脚本，确保每一步都可控可追溯
            </p>
          </div>
        </div>
      </motion.div>

      {/* State Awareness */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">状态感知</h3>
              <p className="text-blue-200 text-base">动态注入 DAG 状态，保证准确引用</p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 mb-3">
            <div className="font-mono text-xs text-white/80 bg-black/40 rounded-lg p-3 border border-cyan-500/10">
              <div className="text-green-400 mb-1">Current Pipeline State:</div>
              <div className="ml-3 space-y-1">
                <div className="text-yellow-300">- node_sql_1 (Filter Age):</div>
                <div className="ml-4 text-blue-300">AGE:integer, SUBJID:string</div>
                <div className="text-yellow-300">- node_join_1 (Merge Demo):</div>
                <div className="ml-4 text-blue-300">USUBJID:string, SEX:string</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
            <p className="text-blue-200 text-xs">
              ✨ 半结构化文本概览，节省 Token 同时保留完整 Schema，让 Agent 精准引用节点 ID 和字段
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
