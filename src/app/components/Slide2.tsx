import { motion } from 'motion/react';
import { Box, Code2, Rocket, Clock, CheckCircle } from 'lucide-react';

const comparisons = [
  {
    icon: Box,
    title: '开源 RAG 框架 (Vanna.ai)',
    subtitle: '通用方案',
    drawback: '偏重检索层，系统闭环能力有限',
    description: '擅长知识接入、检索与 Text-to-SQL 起步搭建，但多数方案更偏 retrieval infrastructure，缺少 generator / validator / 评测 / 失败恢复等 harness engineering 支撑。',
    color: 'bg-white/[0.02]',
    iconColor: 'bg-slate-700/50',
    border: 'border-white/[0.06]',
    status: 'limit'
  },
  {
    icon: Code2,
    title: '通用大模型 (Claude Code)',
    subtitle: '大模型推理',
    drawback: '通用性强，但时延与发散风险高',
    description: '适合快速探索开放任务，但在复杂执行链路中若缺少流程约束与 validator，容易出现响应慢、成本高、多轮试探甚至兜圈子的情况。',
    color: 'bg-white/[0.02]',
    iconColor: 'bg-indigo-500/30',
    border: 'border-white/[0.06]',
    status: 'limit'
  },
  {
    icon: Rocket,
    title: '垂直领域 Agent',
    subtitle: '自研方案',
    advantage: '更高的可控性、稳定性与性价比',
    description: '针对特定场景优化 Agent 架构，便于结合 harness engineering、RAG 与领域约束做端到端闭环；虽然前期建设成本更高，但更适合生产环境持续优化。',
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
            <div className={`relative h-full rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04] flex flex-col ${item.color} border ${item.border}`}>
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
