import { motion } from 'motion/react';
import { Users, Bot, Rocket, Clock, CheckCircle } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const comparisons = [
  {
    icon: Users,
    title: '传统人工流程',
    subtitle: '人力驱动',
    description: '业务需求往往需要在业务、数据和研发之间多轮转述，需求澄清、流程修改和结果确认周期长，且高度依赖个人经验。',
    verdict: '响应慢，复用弱',
    status: 'limit'
  },
  {
    icon: Bot,
    title: '通用 AI 助手',
    subtitle: '探索友好',
    description: '适合快速回答问题和辅助探索，但在临床数据这类高约束场景里，难直接承担稳定交付、状态治理和流程复用。',
    verdict: '能辅助，但难稳定落地',
    status: 'limit'
  },
  {
    icon: Rocket,
    title: '业务导向智能平台',
    subtitle: '平台化能力',
    description: '把业务语言转成受控的分析流程，在理解需求、生成方案、执行校验和结果交付之间形成闭环，更适合长期沉淀平台能力。',
    verdict: '更可控，也更可复用',
    status: 'solution'
  }
];

export function Slide2() {
  return (
    <BusinessSectionShell eyebrow="WHY NOW">
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-[#282562] mb-4">为什么需要这套方案</h2>
        <p className="text-lg text-[#6f6a86]">核心不是“能不能回答”，而是“能不能稳定交付”</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
            className={`rounded-[28px] p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(40,37,98,0.12)] ${
              item.status === 'solution'
                ? 'bg-[#f6f2f6] border-[#d9d4e6]'
                : 'bg-white border-[#d9d4e6]'
            }`}
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                  item.status === 'solution' ? 'bg-[#282562] border-[#282562]' : 'bg-[#f8f6fb] border-[#d9d4e6]'
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.status === 'solution' ? 'text-white' : 'text-[#282562]'}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#282562]">{item.title}</h3>
                <div className="text-xs text-slate-500">{item.subtitle}</div>
              </div>
            </div>

            <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[120px]">
              {item.description}
            </p>

            <div
              className={`mt-auto p-3 rounded-lg border flex items-center gap-2 ${
                item.status === 'solution'
                  ? 'bg-[#f3eef4] border-[#d9d4e6]'
                  : 'bg-[#f8f6fb] border-[#e5dfed]'
              }`}
            >
              {item.status === 'solution' ? (
                <CheckCircle className="w-4 h-4 text-[#C8242B]" />
              ) : (
                <Clock className="w-4 h-4 text-slate-500" />
              )}
              <span
                className={`font-medium text-sm ${
                  item.status === 'solution' ? 'text-[#282562]' : 'text-slate-600'
                }`}
              >
                {item.verdict}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </BusinessSectionShell>
  );
}
