import { motion } from 'motion/react';
import { Layers, Server, Zap, Radio } from 'lucide-react';

const techStack = [
  {
    category: '编排',
    icon: Layers,
    tech: 'LangGraph / 自研 ReAct 循环',
    color: 'from-blue-500 to-cyan-500',
    description: '智能体编排引擎'
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
    description: 'SQL 实时校验引擎'
  },
  {
    category: '通信',
    icon: Radio,
    tech: 'WebSocket (流式) + REST (Handoff)',
    color: 'from-cyan-600 to-blue-500',
    description: '实时双向通信'
  }
];

export function Slide9() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-4">技术栈</h2>
        <p className="text-xl text-blue-200/80">Tech Stack - 构建强大的技术基础</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="group relative"
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full">
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white/60 text-sm font-semibold mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {item.tech}
                  </h3>
                  <p className="text-purple-200/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-10"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">系统流程</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-400/30 text-center">
              <div className="text-blue-300 text-sm mb-1">Browser</div>
              <div className="text-white font-semibold">用户界面</div>
            </div>
            
            <div className="text-purple-400 text-2xl">→</div>
            
            <div className="bg-cyan-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-cyan-400/30 text-center">
              <div className="text-cyan-300 text-sm mb-1">WebSocket</div>
              <div className="text-white font-semibold">实时通信</div>
            </div>
            
            <div className="text-purple-400 text-2xl">→</div>
            
            <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-purple-400/30 text-center">
              <div className="text-purple-300 text-sm mb-1">Chatbot Agent</div>
              <div className="text-white font-semibold">意图理解</div>
            </div>
            
            <div className="text-purple-400 text-2xl">→</div>
            
            <div className="bg-pink-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-pink-400/30 text-center">
              <div className="text-pink-300 text-sm mb-1">ETL Agent</div>
              <div className="text-white font-semibold">代码生成</div>
            </div>
            
            <div className="text-purple-400 text-2xl">→</div>
            
            <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-orange-400/30 text-center">
              <div className="text-orange-300 text-sm mb-1">Spark</div>
              <div className="text-white font-semibold">执行校验</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}