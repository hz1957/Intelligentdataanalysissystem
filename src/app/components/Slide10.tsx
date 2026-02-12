import { motion } from 'motion/react';
import { Target, TrendingUp, Shield, Zap, Sparkles, CheckCircle, Brain, Database, Layers } from 'lucide-react';

const achievements = [
  { icon: Brain, label: '深度语义理解', value: '用户需求理解' },
  { icon: Zap, label: '执行效能', value: '任务高效并发' },
  { icon: Shield, label: '可靠性保障', value: '确定性执行' },
  { icon: TrendingUp, label: '生成成功率', value: 'RL 强化调优' }
];

const keyFeatures = [
  { text: '关注点分离', detail: '交互层 (Chatbot) 与 执行层 (ETL) 解耦' },
  { text: '上下文工程', detail: 'Dynamic Few-Shot (RAG) + Schema Enrichment' },
  { text: 'RL 强化训练', detail: '基于 Agent-Lightning + VERL 的定向优化' },
  { text: '确定性执行', detail: 'Stateless Executor 确保 100% 可复现' },
  { text: '自愈机制', detail: 'ReAct 循环 + 运行时沙箱校验' },
  { text: '垂类 Agent', detail: '为临床数据场景定制的极致效能' }
];

export function Slide10() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 border border-blue-500/20">
          <Sparkles className="w-8 h-8 text-blue-400" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-2">平台总结</h2>
        <p className="text-lg text-blue-200/60">Clinical Data Intelligence Platform</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center hover:bg-white/10 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 mb-3 text-blue-400">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="text-xl font-bold text-white mb-1">{item.value}</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl opacity-50"></div>
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">核心创新点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-base mb-1">{feature.text}</div>
                  <div className="text-slate-400 text-sm">{feature.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Closing */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-center"
      >
        <p className="text-slate-400 text-sm mb-2">
          让临床研究更智能、更高效、更可靠
        </p>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Thank You
        </h3>
      </motion.div>
    </div>
  );
}
