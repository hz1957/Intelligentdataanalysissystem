import { motion } from 'motion/react';
import { Layers, Server, Zap, Radio } from 'lucide-react';

const techStack = [
  {
    category: '编排',
    icon: Layers,
    tech: 'Blueprint-Executor',
    color: 'from-blue-500 to-cyan-500',
    description: 'Plan-then-Execute 智能体编排'
  },
  {
    category: '后端',
    icon: Server,
    tech: 'FastAPI (异步)',
    color: 'from-cyan-500 to-blue-600',
    description: '高性能异步服务'
  },
  {
    category: '校验',
    icon: Zap,
    tech: 'Apache Spark (本地 Session)',
    color: 'from-blue-600 to-cyan-600',
    description: 'SQL 实时校验 + Retry 回传'
  },
  {
    category: '通信',
    icon: Radio,
    tech: 'WebSocket (流式) + REST',
    color: 'from-cyan-600 to-blue-500',
    description: '实时双向通信 + 版本快照'
  }
];

export function Slide9() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl font-bold text-white mb-3">系统架构</h2>
        <p className="text-xl text-blue-200/80">Tech Stack & System Flow</p>
      </motion.div>

      {/* Tech Stack Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-4 gap-3 mb-5"
      >
        {techStack.map((item, index) => (
          <div key={index} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-15`}></div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 h-full">
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

      {/* System Flow */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10"
      >
        <h3 className="text-sm font-bold text-white mb-4 text-center">系统交互流程</h3>

        <div className="flex items-start gap-2">
          {/* Browser */}
          <div className="w-[10%] flex flex-col items-center">
            <div className="bg-blue-500/20 rounded-lg px-2 py-3 border border-blue-500/30 text-center w-full">
              <div className="text-blue-300 text-[10px] font-bold">Browser</div>
              <div className="text-white/40 text-[9px]">用户界面</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center self-center">
            <div className="text-[9px] text-white/30">WS</div>
            <div className="text-white/20">→</div>
          </div>

          {/* Chatbot Agent */}
          <div className="w-[30%]">
            <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-300 text-[10px] font-bold mb-2 text-center">Chatbot Agent</div>
              <div className="flex gap-1">
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">双通道</div>
                  <div className="text-[8px] text-cyan-300/70">检索</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Router</div>
                  <div className="text-[8px] text-cyan-300/70">LLM</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Generator</div>
                  <div className="text-[8px] text-cyan-300/70">LLM</div>
                </div>
              </div>
              <div className="mt-1.5 text-[8px] text-white/25 text-center">対話压缩 + 版本快照</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center self-center">
            <div className="text-[9px] text-white/30">Plan</div>
            <div className="text-white/20">→</div>
          </div>

          {/* ETL Agent */}
          <div className="w-[35%]">
            <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
              <div className="text-purple-300 text-[10px] font-bold mb-2 text-center">ETL Agent (Blueprint-Executor)</div>
              <div className="flex gap-1">
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Planner</div>
                  <div className="text-[8px] text-purple-300/70">Blueprint</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Critic</div>
                  <div className="text-[8px] text-purple-300/70">验证</div>
                </div>
                <div className="text-white/15 self-center text-[8px]">→</div>
                <div className="flex-1 bg-black/30 rounded p-1.5 text-center">
                  <div className="text-[8px] text-white/50">Executor</div>
                  <div className="text-[8px] text-purple-300/70">SQL</div>
                </div>
              </div>
              <div className="mt-1.5 text-[8px] text-white/25 text-center">影响分析 + Changeset / Restructure</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center self-center">
            <div className="text-[9px] text-white/30">SQL</div>
            <div className="text-white/20">⇄</div>
          </div>

          {/* Spark */}
          <div className="w-[10%] flex flex-col items-center">
            <div className="bg-amber-500/20 rounded-lg px-2 py-3 border border-amber-500/30 text-center w-full">
              <div className="text-amber-300 text-[10px] font-bold">Spark</div>
              <div className="text-white/40 text-[9px]">校验</div>
            </div>
          </div>
        </div>

        {/* Retry annotation */}
        <div className="mt-3 flex items-center justify-end gap-2 pr-4">
          <span className="text-[9px] text-white/25">⇄ Retry-with-Feedback: SQL 校验失败 → Error Log 回传 Executor</span>
        </div>
      </motion.div>
    </div>
  );
}