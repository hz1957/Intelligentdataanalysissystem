import { motion } from 'motion/react';
import { AlertTriangle, Puzzle, Bug, HelpCircle } from 'lucide-react';

const challenges = [
  {
    icon: Puzzle,
    title: '复杂性',
    subtitle: 'Complexity',
    description: '临床标准 (SDTM/ADaM) 极其复杂，通用的 Text-to-SQL 难以处理',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HelpCircle,
    title: '模糊性',
    subtitle: 'Ambiguity',
    description: '用户的意图是在多轮对话中演进的（上下文依赖），而非单次指令',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Bug,
    title: '可靠性',
    subtitle: 'Reliability',
    description: 'LLM 生成的代码经常存在细微的编译错误（幻觉），导致运行时失败',
    color: 'from-blue-600 to-cyan-600'
  }
];

export function Slide2() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <AlertTriangle className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">挑战</h2>
        </div>
        <p className="text-xl text-blue-200/80">The "Why" - 为什么需要这个平台？</p>
      </motion.div>

      <div className="space-y-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${challenge.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg`}>
                  <challenge.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="text-3xl font-bold text-white">{challenge.title}</h3>
                    <span className="text-sm text-white/50 font-mono uppercase tracking-wider">{challenge.subtitle}</span>
                  </div>
                  <p className="text-lg text-blue-200/90 leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl px-6 py-3">
          <p className="text-blue-200 text-sm">
            💡 我们需要一个能够理解临床标准、处理模糊意图、并保证代码可靠性的智能系统
          </p>
        </div>
      </motion.div>
    </div>
  );
}