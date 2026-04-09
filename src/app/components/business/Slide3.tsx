import { motion } from 'motion/react';
import { Brain, Bot, ArrowRight } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const comparisons = [
  ['能力特点', '擅长自然语言理解、内容生成和基础推理', '围绕具体任务组织资料、规则和工具'],
  ['适用场景', '适合信息问答、内容生成和通用推理', '适合处理链路更长、步骤更多的业务任务'],
  ['协作模式', '偏向单次回答，多轮之间依赖较弱', '围绕目标持续推进，并根据过程不断调整']
];

export function Slide3() {
  return (
    <BusinessSectionShell eyebrow="AGENT VS MODEL">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">智能体(Agent) 与大模型(LLM) </h2>
          <p className="text-lg text-[#6f6a86]">大模型提供智能能力，智能体把这种能力组织成可执行的业务流程</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 max-w-5xl mx-auto items-stretch">
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <Brain className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">大模型底座</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              主要负责语言理解、内容生成和推理判断，是智能体能力的基础来源。
            </p>
          </motion.div>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-[#C8242B]" />
          </div>

          <motion.div
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <Bot className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">业务智能体</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              建立在模型之上，结合业务规则、专业资料和可调用工具，把能力真正落实到任务执行上。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-5xl mx-auto rounded-[28px] border border-[#d9d4e6] bg-white p-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="grid grid-cols-[110px_1fr_1fr] gap-3 text-sm">
            <div className="text-[#C8242B] font-semibold">对比项</div>
            <div className="text-[#282562] font-bold">大模型</div>
            <div className="text-[#282562] font-bold">智能体</div>

            {comparisons.map(([label, left, right]) => (
              <div key={label} className="contents">
                <div className="text-slate-500 border-t border-[#ece7f2] pt-3">{label}</div>
                <div className="text-slate-600 border-t border-[#ece7f2] pt-3">{left}</div>
                <div className="text-slate-600 border-t border-[#ece7f2] pt-3">{right}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
