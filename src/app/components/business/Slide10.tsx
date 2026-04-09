import { motion } from 'motion/react';
import { MessageSquareText, Clock3, BookOpenText, History, Plus } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const sources = [
  {
    icon: MessageSquareText,
    title: '当前核心业务诉求',
    desc: '明确本次任务的核心目标，这是后续处理的首要依据。'
  },
  {
    icon: Clock3,
    title: '近期上下文连贯记忆',
    desc: '保留近期交流内容，避免重复说明背景和要求。'
  },
  {
    icon: History,
    title: '固化历史纠偏机制',
    desc: '沉淀历史经验和常见修正方式，提升同类任务处理的一致性。'
  },
  {
    icon: BookOpenText,
    title: '针对性业务资料挂载',
    desc: '结合相关 SOP、规范表格和知识资料，减少理解偏差。'
  }
];

export function Slide10() {
  return (
    <BusinessSectionShell eyebrow="KNOWLEDGE AND CONTEXT">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">AI 如何形成业务判断</h2>
          <p className="text-lg text-[#6f6a86]">并不是只看当前一句话，而是结合多类信息形成完整判断</p>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-6 max-w-5xl rounded-[28px] border border-[#d9d4e6] bg-white p-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium text-slate-600">
            <span className="rounded-xl border border-[#d9d4e6] bg-[#f8f6fb] px-3 py-2">系统规则</span>
            <Plus className="h-4 w-4 text-[#C8242B]" />
            <span className="rounded-xl border border-[#d9d4e6] bg-[#f8f6fb] px-3 py-2">当前任务</span>
            <Plus className="h-4 w-4 text-[#C8242B]" />
            <span className="rounded-xl border border-[#d9d4e6] bg-[#f8f6fb] px-3 py-2">最近对话</span>
            <Plus className="h-4 w-4 text-[#C8242B]" />
            <span className="rounded-xl border border-[#d9d4e6] bg-[#f8f6fb] px-3 py-2">历史经验</span>
            <Plus className="h-4 w-4 text-[#C8242B]" />
            <span className="rounded-xl border border-[#d9d4e6] bg-[#f8f6fb] px-3 py-2">业务资料</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {sources.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
              className="rounded-[26px] border border-[#d9d4e6] bg-white p-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
                <item.icon className="h-5 w-5 text-[#282562]" />
              </div>
              <h3 className="text-base font-bold text-[#282562] mb-2">{item.title}</h3>
              <p className="text-[12px] leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 mx-auto max-w-5xl rounded-[24px] border border-[#d9d4e6] bg-[#f8f6fb] px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.06)]"
        >
          <p className="text-sm leading-relaxed text-slate-600">
            资料越完整、上下文越准确、历史经验越充分，AI 的判断就越接近真实业务需求。
          </p>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
