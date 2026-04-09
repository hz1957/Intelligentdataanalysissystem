import { motion } from 'motion/react';
import { RefreshCw, Network, Server, Brain } from 'lucide-react';

export function Slide6() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Network className="w-10 h-10 text-cyan-400" />
          <h2 className="text-5xl font-bold text-white">Agent 2: 计划执行引擎</h2>
        </div>
        <p className="text-xl text-blue-200/80">不和用户对话，只消费 Plan、上下文和约束</p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 md:grid-rows-2 gap-5 max-w-5xl mx-auto relative">

        {/* Tall Block: execution steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-7 md:row-span-2 bg-white/[0.02] rounded-[28px] p-8 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <RefreshCw className="w-6 h-6 text-cyan-400" />
            <h3 className="text-white font-bold text-lg tracking-tight">执行主流程</h3>
          </div>

          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-white/[0.05] z-0"></div>

            {/* Node 1 */}
            <div className="flex items-start gap-5 z-10 relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0">1</div>
              <div className="pt-1">
                <div className="font-bold text-white text-[13px] mb-1">接收 Plan 与候选数据集</div>
                <div className="text-white/40 text-[11px] leading-relaxed">读取 Agent 1 交付的 refined instruction、relevant tables 和 baseline snapshot。</div>
              </div>
            </div>

            {/* Node 2 */}
            <div className="flex items-start gap-5 z-10 relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0">2</div>
              <div className="pt-1">
                <div className="font-bold text-white text-[13px] mb-1">判断新建还是修改</div>
                <div className="text-white/40 text-[11px] leading-relaxed">根据是否存在 oldEtl 以及 modification intent，选择 create、modify 或 fallback 路径。</div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="flex items-start gap-5 z-10 relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0">3</div>
              <div className="pt-1">
                <div className="font-bold text-white text-[13px] mb-1">进入 Agentic Loop</div>
                <div className="text-white/40 text-[11px] leading-relaxed">通过 Tool Call 修改 DAG，并把新状态持续回写给下一轮执行。</div>
              </div>
            </div>

            {/* Node 4 */}
            <div className="flex items-start gap-5 z-10 relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0">4</div>
              <div className="pt-1">
                <div className="font-bold text-white text-[13px] mb-1">校验并补充元数据</div>
                <div className="text-white/40 text-[11px] leading-relaxed">同步字段、标签、说明等业务元数据，并检查结构、依赖关系和 schema 是否合法。</div>
              </div>
            </div>

            {/* Node 5 */}
            <div className="flex items-start gap-5 z-10 relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center font-bold text-blue-400 text-sm flex-shrink-0">5</div>
              <div className="pt-1">
                <div className="font-bold text-white text-[13px] mb-1">输出标准化结果</div>
                <div className="text-white/40 text-[11px] leading-relaxed">生成可落库、可回放的 JSON / Schema，供 saveEtl 和下游模块直接消费。</div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <div className="rounded-2xl border border-white/[0.05] bg-black/25 p-3 overflow-hidden">
              <svg
                className="w-full h-[118px]"
                viewBox="0 0 560 150"
                preserveAspectRatio="xMidYMid meet"
                aria-label="sample dag"
              >
                <g fill="none" strokeLinecap="round">
                  <line x1="92" y1="42" x2="165" y2="42" stroke="rgba(251,191,36,0.72)" strokeWidth="1.2" />
                  <line x1="92" y1="108" x2="165" y2="108" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                  <line x1="245" y1="42" x2="305" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                  <line x1="245" y1="108" x2="305" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                  <line x1="367" y1="75" x2="425" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                  <line x1="483" y1="75" x2="512" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
                </g>

                <g fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle">
                  <rect x="20" y="24" width="72" height="36" rx="12" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.24)" />
                  <text x="56" y="39" fill="rgba(254,240,138,0.96)" fontSize="12" fontWeight="700">AE 表</text>
                  <text x="56" y="51" fill="rgba(254,240,138,0.62)" fontSize="10">不良反应</text>

                  <rect x="20" y="90" width="72" height="36" rx="12" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.24)" />
                  <text x="56" y="105" fill="rgba(254,240,138,0.96)" fontSize="12" fontWeight="700">MH 表</text>
                  <text x="56" y="117" fill="rgba(254,240,138,0.62)" fontSize="10">病史</text>

                  <rect x="165" y="24" width="80" height="36" rx="12" fill="rgba(251,191,36,0.10)" stroke="rgba(251,191,36,0.24)" />
                  <text x="205" y="45" fill="rgba(254,240,138,0.92)" fontSize="11" fontWeight="700">选择列</text>

                  <rect x="165" y="90" width="80" height="36" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
                  <text x="205" y="111" fill="rgba(255,255,255,0.72)" fontSize="11" fontWeight="700">选择列</text>

                  <rect x="305" y="57" width="62" height="36" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
                  <text x="336" y="78" fill="rgba(255,255,255,0.72)" fontSize="11" fontWeight="700">关联</text>

                  <rect x="425" y="57" width="58" height="36" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
                  <text x="454" y="72" fill="rgba(255,255,255,0.72)" fontSize="11" fontWeight="700">SQL</text>
                  <text x="454" y="84" fill="rgba(255,255,255,0.46)" fontSize="9">相关计算</text>

                  <rect x="512" y="57" width="48" height="36" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
                  <text x="536" y="78" fill="rgba(255,255,255,0.72)" fontSize="11" fontWeight="700">输出</text>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Short Block 1: Payload */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-5 md:row-span-1 bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-bold text-white text-md tracking-tight">入口交接负载 (Payload)</h3>
          </div>
          <div className="bg-black/30 rounded-xl p-4 border border-white/[0.03]">
            <ul className="space-y-3 text-white/50 text-[11px] font-medium">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/50"></span><span className="flex-1">结构化 Plan: refined instruction 与操作约束</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/50"></span><span className="flex-1">候选数据域: 允许访问的数据表 / 字段范围</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/50"></span><span className="flex-1">当前快照: oldEtl、baseline 与历史 state</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400/50"></span><span className="flex-1">执行模式: create / modify / fallback 标记</span></li>
            </ul>
          </div>
        </motion.div>

        {/* Short Block 2: Logic Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-5 md:row-span-1 bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
            <h3 className="font-bold text-white text-md tracking-tight">Agentic Loop</h3>
          </div>

          <div className="bg-black/30 rounded-xl p-4 border border-cyan-500/15 mb-4">
            <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-white/65">
              <span className="rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1">Tool Call</span>
              <span className="text-white/25">→</span>
              <span className="rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1">修改 DAG</span>
              <span className="text-white/25">→</span>
              <span className="rounded-lg border border-white/[0.05] bg-white/[0.03] px-2 py-1">回写状态</span>
              <span className="text-white/25">→</span>
              <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-cyan-300">继续执行</span>
            </div>
          </div>

          <div className="text-[11px] text-white/55 leading-relaxed font-medium">
            Agent 2 的核心不是重新理解用户需求，而是围绕当前状态持续执行这条 loop。<br /><br />
            <span className="text-cyan-300">若局部修改无法稳定收敛，则自动 fallback 到 full rebuild。</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
