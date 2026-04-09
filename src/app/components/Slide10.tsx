import { motion } from 'motion/react';
import { Layers, Server, Zap, Radio } from 'lucide-react';

const techStack = [
  {
    category: '架构解耦',
    icon: Layers,
    tech: '双 Agent 分工',
    color: 'from-blue-500 to-cyan-500',
    description: 'Agent 1 负责规划，Agent 2 负责执行与回退'
  },
  {
    category: '状态协同',
    icon: Zap,
    tech: '双端基线同步',
    color: 'from-blue-600 to-cyan-600',
    description: '远端 baseline 与 active path 一起约束当前上下文'
  },
  {
    category: '执行保护',
    icon: Radio,
    tech: '节点级 Validator',
    color: 'from-cyan-600 to-blue-500',
    description: 'Join / SQL Script 先验证，再决定继续执行'
  },
  {
    category: '持续优化',
    icon: Server,
    tech: 'RL 闭环调优',
    color: 'from-cyan-500 to-blue-600',
    description: '基于 Agent-Lightning 与 VERL 迭代高频错误节点'
  }
];

export function Slide10() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl font-bold text-white mb-3">系统架构与工程总结</h2>
        <p className="text-xl text-blue-200/80">从用户对话到 Plan 执行，并对应解决关键工程痛点</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-4 gap-3 mb-5"
      >
        {techStack.map((item, index) => (
          <div key={index} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[28px] blur-xl opacity-15`}></div>
            <div className="relative bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] h-full hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/50 text-[10px] uppercase tracking-wider">{item.category}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{item.tech}</h3>
              <p className="text-white/40 text-[10px]">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:shadow-2xl hover:bg-white/[0.04] transition-all"
      >
        <h3 className="text-sm font-bold text-white mb-4 text-center">从用户对话到计划执行的交接流程</h3>

        <div className="flex items-start gap-2">
          <div className="w-[10%] flex flex-col items-center">
            <div className="bg-blue-500/20 rounded-lg px-2 py-3 border border-blue-500/30 text-center w-full">
              <div className="text-blue-300 text-[10px] font-bold">浏览器 / UI</div>
              <div className="text-white/40 text-[9px]">用户界面</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center self-center">
            <div className="text-[9px] text-white/30">WS</div>
            <div className="text-white/20">→</div>
          </div>

          <div className="w-[40%]">
            <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-300 text-[10px] font-bold mb-2 text-center">Agent 1 (对话规划)</div>
              <div className="flex gap-1">
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Baseline Sync</div>
                  <div className="text-[8px] text-cyan-300/70">远端防漂移基线</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Active Path</div>
                  <div className="text-[8px] text-cyan-300/70">动态剪枝历史</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Plan Package</div>
                  <div className="text-[8px] text-cyan-300/70">封装执行指令包</div>
                </div>
              </div>
              <div className="mt-1.5 text-[8px] text-white/25 text-center">隔离自然语言，生成干净无状态的结构化 Handoff Payload</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center self-center">
            <div className="text-center">
              <div className="text-[7px] text-white/30 text-center">Async Plan Submit (202)</div>
              <div className="text-white/20 text-xs">→</div>
            </div>
          </div>

          <div className="w-[40%]">
            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
              <div className="text-purple-300 text-[10px] font-bold mb-2 text-center">Agent 2 (计划执行)</div>
              <div className="flex gap-1">
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Plan Consumer</div>
                  <div className="text-[8px] text-purple-300/70">接收并加载计划</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">ETL Engine</div>
                  <div className="text-[8px] text-purple-300/70">修改与图谱重建</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Fail-Safe</div>
                  <div className="text-[8px] text-purple-300/70">熔断验证与兜底</div>
                </div>
              </div>
              <div className="mt-1.5 text-[8px] text-white/25 text-center">杜绝漫无边际的黑盒漫游，仅专注于安全落库和局部自修补</div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/[0.05] bg-black/20 px-4 py-3 text-center">
          <span className="text-[10px] text-white/45">
            最终把架构解耦、状态协同、节点级验证和 RL 优化串成一个闭环，让大模型能力从“能回答”变成“能稳定落地”。
          </span>
        </div>
      </motion.div>
    </div>
  );
}
