import { motion } from 'motion/react';
import { ShieldCheck, CircleX, GitFork, Unlink, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';

export function Slide7() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <ShieldCheck className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">验证与修正</h2>
        </div>
        <p className="text-xl text-blue-200/80">Critic Agent + Self-Correction</p>
      </motion.div>

      {/* Validation Checks Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">Critic Agent — Blueprint 验证</h3>
          <span className="text-white/30 text-[10px] ml-auto font-mono">Planner 输出后触发</span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {/* No Cycles */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <CircleX className="w-4 h-4 text-red-300" />
              </div>
              <span className="text-white font-bold text-xs">无环检测</span>
            </div>
            <div className="text-white/50 text-[10px] leading-snug mb-2">
              拓扑排序验证 DAG 无循环依赖
            </div>
            <div className="font-mono text-[10px] text-red-300/60 bg-black/30 rounded px-2 py-1">
              Cycle? → Reject
            </div>
          </div>

          {/* No Orphans */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Unlink className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-white font-bold text-xs">孤立节点</span>
            </div>
            <div className="text-white/50 text-[10px] leading-snug mb-2">
              所有输入表必须被引用，无断链节点
            </div>
            <div className="font-mono text-[10px] text-amber-300/60 bg-black/30 rounded px-2 py-1">
              Orphan? → Warn
            </div>
          </div>

          {/* Convergence */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <GitFork className="w-4 h-4 text-blue-300" />
              </div>
              <span className="text-white font-bold text-xs">收敛性</span>
            </div>
            <div className="text-white/50 text-[10px] leading-snug mb-2">
              管道最终必须汇聚到单一输出节点
            </div>
            <div className="font-mono text-[10px] text-blue-300/60 bg-black/30 rounded px-2 py-1">
              Branches {'>'} 1? → Merge
            </div>
          </div>

          {/* Type Matching */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-purple-300" />
              </div>
              <span className="text-white font-bold text-xs">类型匹配</span>
            </div>
            <div className="text-white/50 text-[10px] leading-snug mb-2">
              Join Key 字段类型必须一致
            </div>
            <div className="font-mono text-[10px] text-purple-300/60 bg-black/30 rounded px-2 py-1">
              Type mismatch → Cast
            </div>
          </div>
        </div>
      </motion.div>

      {/* Self-Correction Flow */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <RotateCcw className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">Self-Correction 流程</h3>
        </div>

        <div className="flex items-center gap-3">
          {/* Step 1 */}
          <div className="flex-1 bg-black/30 rounded-lg p-3 border border-blue-500/20 text-center">
            <div className="text-blue-300 text-[10px] font-bold mb-1">Planner 输出</div>
            <div className="text-white/60 text-[10px]">Blueprint JSON</div>
          </div>

          <div className="text-white/20 text-xs">→</div>

          {/* Step 2 */}
          <div className="flex-1 bg-black/30 rounded-lg p-3 border border-cyan-500/20 text-center">
            <div className="text-cyan-300 text-[10px] font-bold mb-1">Critic 验证</div>
            <div className="text-white/60 text-[10px]">环路 / 孤立 / 收敛 / 类型</div>
          </div>

          <div className="text-white/20 text-xs">→</div>

          {/* Step 3 - Branch */}
          <div className="flex-1 space-y-2">
            <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/20 text-center">
              <div className="flex items-center justify-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span className="text-green-300 text-[10px] font-bold">Pass → Executor</span>
              </div>
            </div>
            <div className="bg-red-500/10 rounded-lg p-2 border border-red-500/20 text-center">
              <div className="flex items-center justify-center gap-1">
                <RotateCcw className="w-3 h-3 text-red-400" />
                <span className="text-red-300 text-[10px] font-bold">Fail → Retry Planner</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Executor-level correction */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-3">
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white">Executor: Retry-with-Feedback</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/30 rounded-lg p-3 border border-white/5 text-center">
            <div className="text-white/40 text-[10px] mb-1">Step N 执行</div>
            <div className="text-amber-300 text-xs font-mono">生成 SQL / Join / ...</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-red-500/15 text-center">
            <div className="text-white/40 text-[10px] mb-1">Spark / Coding 校验失败</div>
            <div className="text-red-300 text-xs font-mono">代码修正 / Error Log </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-green-500/15 text-center">
            <div className="text-white/40 text-[10px] mb-1">回传 LLM</div>
            <div className="text-green-300 text-xs font-mono">自我修正</div>
          </div>
        </div>
        <div className="mt-2 text-white/40 text-[10px] text-center">
          仅重试单步，不影响其他已完成步骤
        </div>
      </motion.div>
    </div>
  );
}
