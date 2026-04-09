import { motion } from 'motion/react';
import { Layers, Sparkles, Wrench, BookOpenText, UserRoundCog } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const traits = [
  { icon: UserRoundCog, label: '明确角色定位' },
  { icon: Wrench, label: '掌握多样工具' },
  { icon: BookOpenText, label: '沉淀业务记忆' }
];

export function Slide1() {
  return (
    <BusinessSectionShell eyebrow="INTRODUCTION">
      <div className="max-w-6xl w-full mx-auto text-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#d9d4e6] bg-white shadow-[0_18px_40px_rgba(40,37,98,0.12)]">
            <Layers className="h-12 w-12 text-[#282562]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d9d4e6] bg-white px-4 py-2 text-sm font-medium text-[#C8242B]">
            <Sparkles className="h-4 w-4" />
            Biz Agent 平台方案
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-5xl md:text-6xl font-bold text-[#282562] leading-tight mb-5"
        >
          业务智能体平台
        </motion.h1>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-2xl text-[#c8242b] font-medium mb-4"
        >
          面向业务任务的智能体工作平台
        </motion.p>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600"
        >
          帮助业务团队更顺畅地借助 AI 力量，推动实际业务问题的解决与落地。
        </motion.p>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3"
        >
          {traits.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-[#d9d4e6] bg-white px-4 py-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d1cbe4] bg-[#f8f6fb]">
                <item.icon className="h-5 w-5 text-[#282562]" />
              </div>
              <div className="text-sm font-bold text-[#282562]">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
