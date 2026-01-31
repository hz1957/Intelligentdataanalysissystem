import { motion } from 'motion/react';
import { TrendingUp, Target, Award, Sparkles, CheckCircle } from 'lucide-react';

const achievements = [
  { icon: Target, label: '意图理解', value: '多轮对话' },
  { icon: TrendingUp, label: 'SQL 准确率', value: '沙箱编译保障' },
  { icon: Award, label: '自动修复', value: '强制约束' },
  { icon: Sparkles, label: '显式用户确认', value: '安全架构' }
];

const keyFeatures = [
  { text: '多智能体协作', detail: '关注点分离，提高可维护性' },
  { text: '智能路由', detail: '全量历史分析，准确理解意图' },
  { text: 'ReAct 循环', detail: '状态感知，步步构建 DAG' },
  { text: '看门狗机制', detail: '确保收敛性与完整性' },
  { text: 'RL 生成', detail: '逻辑语法解耦，提高质量' },
  { text: 'Spark 校验', detail: '自愈式沙箱，运行容错' }
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 mb-4 shadow-2xl"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        
        <h2 className="text-5xl font-bold text-white mb-2">平台总结</h2>
        <p className="text-lg text-blue-200/80">Clinical Data Intelligence Platform</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-2">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-0.5">{item.value}</div>
            <div className="text-blue-200/80 text-xs">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-10"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">核心亮点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="flex items-start gap-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/5"
              >
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold text-sm">{feature.text}</span>
                  <span className="text-blue-200/70 text-xs"> - {feature.detail}</span>
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
        <div className="inline-block bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-6 py-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            链接自然语言与临床数据工程
          </h3>
          <p className="text-blue-200 text-base mb-3">
            让临床研究更智能、更高效、更可靠
          </p>
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <div className="w-12 h-px bg-white/20"></div>
            <span>Thank You</span>
            <div className="w-12 h-px bg-white/20"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
