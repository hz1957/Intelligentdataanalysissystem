import { motion } from 'motion/react';
import { MessageSquare, Brain, Box, Globe, DownloadCloud } from 'lucide-react';

export function Slide4() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <MessageSquare className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">Agent 1: 对话规划入口</h2>
        </div>
        <p className="text-xl text-blue-200/80">直接和用户对话，管理上下文，并生成可执行 Plan</p>
      </motion.div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto relative">

        {/* Tall Block: Intent Classification */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-6 md:row-span-2 bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight">5-Way 意图路由</h3>
              <div className="text-blue-200/50 text-[11px] font-medium">对话分类 -&gt; 规划动作</div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 flex-1 justify-center">
            <div className="bg-black/30 px-3 py-2.5 rounded-xl border border-white/[0.03] flex justify-between items-center transition-colors group-hover:border-white/[0.06]">
              <span className="text-white/80 text-[11px] font-bold">CHITCHAT</span>
              <span className="text-white/40 text-[10px]">直接回复，不触发执行</span>
            </div>
            <div className="bg-black/30 px-3 py-2.5 rounded-xl border border-white/[0.03] flex justify-between items-center transition-colors group-hover:border-white/[0.06]">
              <span className="text-white/80 text-[11px] font-bold">DATA_EXPERT</span>
              <span className="text-white/40 text-[10px]">解释表结构与领域知识</span>
            </div>
            <div className="bg-black/30 px-3 py-2.5 rounded-xl border border-white/[0.03] flex justify-between items-center transition-colors group-hover:border-white/[0.06]">
              <span className="text-white/80 text-[11px] font-bold">PLAN_RECALL</span>
              <span className="text-white/40 text-[10px]">从历史恢复当前可执行状态</span>
            </div>
            <div className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.05] flex justify-between items-center relative overflow-hidden transition-colors group-hover:border-white/[0.1]">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
              <span className="text-white/80 font-bold text-[11px] pl-2">REFINEMENT</span>
              <span className="text-white/40 text-[10px]">在现有 Plan 上增量修改</span>
            </div>
            <div className="bg-white/[0.03] px-3 py-2.5 rounded-xl border border-white/[0.05] flex justify-between items-center relative overflow-hidden transition-colors group-hover:border-white/[0.1]">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50"></div>
              <span className="text-white/80 font-bold text-[11px] pl-2">NEW_REQUEST</span>
              <span className="text-white/40 text-[10px]">为新需求生成新 Plan</span>
            </div>
          </div>
        </motion.div>

        {/* Short Block 1: Baseline & Sync */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-6 md:row-span-1 bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] group-hover:bg-white/[0.05] transition-colors">
                <DownloadCloud className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm tracking-tight">远端状态同步与防漂移</h3>
                <div className="text-cyan-200/50 text-[10px] font-medium">Baseline Sync & Drift Check</div>
              </div>
            </div>
            <p className="text-white/50 text-[11px] leading-relaxed mb-4 font-medium">
              规划前若无 baseline，主动从线上拉取作为起点；在生成修改计划或移交 Agent 2 执行前，会再次抓取线上状态进行防漂移校验。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-auto">
            <div className="bg-black/50 p-2.5 rounded-xl border border-white/[0.04] text-[10px] text-cyan-200/70 shadow-inner flex flex-col justify-center">
              <div className="text-white/80 font-bold mb-1 -mt-1 text-[10px]">1. 面包屑加载</div>
              <div className="text-white/40 leading-snug">首次聊天无本地锚点时，透明拉取线上配置。</div>
            </div>
            <div className="bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20 text-[10px] text-cyan-300/70 shadow-inner flex flex-col justify-center relative">
              <div className="text-cyan-300/90 font-bold mb-1 -mt-1 text-[10px]">2. 执行前最终对齐</div>
              <div className="text-white/40 leading-snug">执行前若发现线上配置已变更，则强制以线上最新状态为准更新本地。</div>
            </div>
          </div>
        </motion.div>

        {/* Short Block 2: Preparation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-6 md:row-span-1 bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] group-hover:bg-white/[0.05] transition-colors">
              <Box className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-tight">Plan 装配</h3>
              <div className="text-purple-200/50 text-[10px] font-medium">Plan Packaging</div>
            </div>
          </div>
          <div className="text-white/50 text-xs space-y-3 leading-relaxed font-medium mt-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full"></div>
              <div>筛选候选数据表，缩小 Agent 2 的执行范围</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full"></div>
              <div>补充远端摘要与历史上下文</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full"></div>
              <div>生成 refined instruction、constraints 与 handoff payload</div>
            </div>
          </div>
        </motion.div>

        {/* Wide Banner Block */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 bg-white/[0.02] rounded-[24px] px-6 py-4 border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-colors flex items-center gap-4"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
            <Globe className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-[12px] text-white/60 font-medium">
            Agent 1 的输出不是一段普通 Prompt，而是交给 Agent 2 的结构化 Plan 包：包含 baseline、候选表、refined instruction 与执行约束。
          </span>
        </motion.div>
      </div>
    </div>
  );
}
