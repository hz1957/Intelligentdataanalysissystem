import { motion } from 'motion/react';
import { Box, Code2, Rocket, Clock, XCircle, CheckCircle } from 'lucide-react';

const comparisons = [
  {
    icon: Box,
    title: '开源 RAG 框架 (Vanna.ai)',
    subtitle: '通用方案',
    drawback: '复杂逻辑处理受限',
    description: '提供了基础的 RAG 与 Text-to-SQL 框架。在面对垂直领域（如临床数据）的复杂关联查询时，通用检索逻辑较难覆盖特定业务规则。',
    color: 'bg-white/5',
    iconColor: 'bg-slate-700/50',
    border: 'border-white/5',
    status: 'limit'
  },
  {
    icon: Code2,
    title: '通用大模型 (Claude Skills)',
    subtitle: '大模型推理',
    drawback: '端到端响应时延较高',
    description: '具备优秀的代码生成能力。作为通用推理引擎，单次任务的处理链路较长（~9min），在实时交互场景下存在一定的性能瓶颈。',
    color: 'bg-white/5',
    iconColor: 'bg-indigo-500/30',
    border: 'border-white/5',
    status: 'limit'
  },
  {
    icon: Rocket,
    title: '垂直领域 Agent',
    subtitle: '自研方案',
    advantage: '准确性与时效性的平衡',
    description: '针对特定场景优化的 Agent 架构。引入预计算规划 (Planner) 预置领域知识，配合专用执行器 (Executor) 降低推理开销，提升系统稳定性。',
    color: 'bg-blue-500/10',
    iconColor: 'bg-blue-500/50',
    border: 'border-blue-500/30',
    status: 'solution'
  }
];

export function Slide2() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">技术选型思考</h2>
        <p className="text-lg text-blue-200/60">为什么选择自研垂直 Agent 架构？</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="group h-full"
          >
            {/* Card */}
            <div className={`relative h-full backdrop-blur-sm rounded-xl p-6 transition-all flex flex-col ${item.color} border ${item.border}`}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-10 h-10 rounded-lg ${item.iconColor} flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                  <div className="text-xs text-white/40">{item.subtitle}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-blue-100/70 mb-6 flex-grow text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Status/Verdict */}
              <div className={`mt-auto p-3 rounded-lg border flex items-center gap-2 ${item.status === 'solution'
                  ? 'bg-blue-500/10 border-blue-500/20'
                  : 'bg-white/5 border-white/5'
                }`}>
                {item.status === 'solution' ? (
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                ) : (
                  <Clock className="w-4 h-4 text-slate-500" />
                )}
                <span className={`font-medium text-sm ${item.status === 'solution' ? 'text-blue-300' : 'text-slate-400'
                  }`}>
                  {item.status === 'solution' ? item.advantage : item.drawback}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}