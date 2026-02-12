import { motion } from 'motion/react';
import { GitBranch, GitCommit, AlertOctagon, ArrowRight, ShieldAlert } from 'lucide-react';

export function Slide5() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <GitBranch className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">混合修改策略</h2>
        </div>
        <p className="text-xl text-blue-200/80">Hybrid Strategy: 分层决策 + 声明式变更</p>
      </motion.div>

      {/* 1. Intent Classifier */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {/* PURE_MODIFICATION */}
        <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 flex flex-col items-center text-center group hover:bg-blue-500/20 transition-all">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
            <span className="text-blue-300 font-bold">1</span>
          </div>
          <h3 className="text-white font-bold mb-1">纯修改</h3>
          <p className="text-blue-200/60 text-xs mb-2">仅修改内容 (SQL/参数)</p>
          <div className="text-[10px] text-blue-200/40 mb-2">需兼容下游节点 Schema</div>
          <div className="mt-auto px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs font-mono">
            Direct Update
          </div>
        </div>

        {/* STRUCTURE_CHANGE */}
        <div className="bg-cyan-500/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 flex flex-col items-center text-center group hover:bg-cyan-500/20 transition-all ring-1 ring-cyan-500/50">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-3 relative">
            <GitCommit className="w-5 h-5 text-cyan-300" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <h3 className="text-white font-bold mb-1">结构变更</h3>
          <p className="text-cyan-200/60 text-xs mb-2">增删节点 / 改变连线</p>
          <div className="mt-auto px-2 py-1 bg-cyan-500/20 rounded text-cyan-300 text-xs font-mono">
            Changeset Plan
          </div>
        </div>

        {/* RESTRUCTURE */}
        <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 flex flex-col items-center text-center group hover:bg-purple-500/20 transition-all">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
            <AlertOctagon className="w-5 h-5 text-purple-300" />
          </div>
          <h3 className="text-white font-bold mb-1">完全重构</h3>
          <p className="text-purple-200/60 text-xs mb-2">大规模重构 / 意图模糊</p>
          <div className="mt-auto px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs font-mono">
            Full Re-plan
          </div>
        </div>
      </motion.div>

      {/* 2. Changeset Flow (Focus on Middle Path) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 rounded-full px-4 py-1 text-cyan-200 text-xs font-bold tracking-wider">
          Changeset Pattern
        </div>

        <div className="flex items-center justify-between gap-4 mt-2">
          {/* Source: User Intent */}
          <div className="w-1/4">
            <div className="bg-white/10 rounded-lg p-3 border border-white/5">
              <div className="text-white/40 text-xs mb-1">用户指令</div>
              <div className="text-white text-sm">"在 A 和 B 之间插入过滤节点"</div>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-white/20" />

          {/* Atomic Ops */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3 bg-cyan-500/10 rounded-lg p-2 border border-cyan-500/20">
              <div className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded font-mono">ADD_NODE</div>
              <div className="text-white/80 text-xs">Node C (Filter)</div>
            </div>
            <div className="flex items-center gap-3 bg-cyan-500/10 rounded-lg p-2 border border-cyan-500/20">
              <div className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded font-mono">REWIRE</div>
              <div className="text-white/80 text-xs">{'Node B inputs: [A] -> [C]'}</div>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-white/20" />

          {/* Impact Analysis */}
          <div className="w-1/4 flex flex-col gap-2">
            <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <ShieldAlert className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-xs font-bold">影响分析</span>
              </div>
              <div className="text-white/60 text-[10px] leading-tight mb-2 font-mono">
                <div className="mb-1 text-white/80">
                  W<sub>Add</sub>×I + W<sub>Rewire</sub>×I
                </div>
                <div className="mb-1">
                  {'S > T ?'}
                </div>
              </div>
              <div className="bg-green-500/20 text-green-300 text-xs rounded py-1">
                {'S ≤ T → CHANGESET'}
              </div>
            </div>
          </div>
        </div>

        {/* Validation Fallback */}
        <div className="mt-4 flex items-center gap-3 bg-red-500/5 rounded-lg p-3 border border-red-500/20">
          <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0" />
          <div className="text-[11px] text-white/70">
            <span className="text-red-300 font-bold">验证失败</span>：若 Changeset 产生孤儿节点、断链或环路 (Cycle)，自动 Retry → Fallback 至完全重构 (Re-plan)
          </div>
        </div>
      </motion.div>

      {/* 3. Impact Analysis Formulas */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-3">
          <ShieldAlert className="w-4 h-4 text-blue-400" />
          <h3 className="text-sm font-bold text-white">影响分析算法 (Impact Analysis)</h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Node Influence */}
          <div className="bg-black/30 rounded-xl p-3 border border-blue-500/20">
            <div className="text-blue-300 text-[10px] font-bold mb-1.5 uppercase tracking-wider">Node Influence</div>
            <div className="font-mono text-white text-xs mb-1">
              I<sub>node</sub> = 1 + 0.5 × <span className="text-cyan-300">D<sub>count</sub></span>
            </div>
            <div className="text-white/40 text-[10px] leading-snug">
              从目标节点遍历至所有末端节点的去重数量
            </div>
          </div>

          {/* Impact Score */}
          <div className="bg-black/30 rounded-xl p-3 border border-cyan-500/20">
            <div className="text-cyan-300 text-[10px] font-bold mb-1.5 uppercase tracking-wider">Impact Score</div>
            <div className="font-mono text-white text-xs mb-1">
              S = Σ (W<sub>op</sub> × I<sub>node</sub>)
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded font-mono">Add=1.0</span>
              <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 text-[10px] rounded font-mono">Del=1.2</span>
              <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded font-mono">Rewire=0.5</span>
              <span className="px-1.5 py-0.5 bg-white/10 text-white/60 text-[10px] rounded font-mono">Update=0.1</span>
            </div>
          </div>

          {/* Threshold & Decision */}
          <div className="bg-black/30 rounded-xl p-3 border border-purple-500/20">
            <div className="text-purple-300 text-[10px] font-bold mb-1.5 uppercase tracking-wider">Threshold & Decision</div>
            <div className="font-mono text-white text-xs mb-1">
              T = max(5.0, N<sub>total</sub> × 0.4)
            </div>
            <div className="space-y-1 mt-1">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-green-400">{'S ≤ T'}</span>
                <span className="text-white/30">→</span>
                <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded font-mono">CHANGESET</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-red-400">{'S > T'}</span>
                <span className="text-white/30">→</span>
                <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded font-mono">RESTRUCTURE</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
