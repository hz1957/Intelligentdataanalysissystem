import { motion } from 'motion/react';
import { UserRoundCog, Wrench, History, CheckCircle2 } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const cards = [
  {
    icon: UserRoundCog,
    title: '角色有定位',
    desc: '系统能够明确在业务中的具体定位，支持设定为如统计师，药物监察员等带有特定职责的角色。'
  },
  {
    icon: Wrench,
    title: '能力有工具',
    desc: '不止于内容生成，还可以跨应用处理文件、整理资料、数据检索和执行系统流程。'
  },
  {
    icon: History,
    title: '成长有记忆',
    desc: '能够沉淀经验、偏好和产出结果，并且随着知识与协作的增加不断成长。'
  }
];

export function Slide2() {
  return (
    <BusinessSectionShell eyebrow="WHAT IS AN AGENT">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">什么是智能体</h2>
          <p className="text-lg text-[#6f6a86]">能够理解任务、调用工具并持续完成工作的系统能力</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
                <item.icon className="h-6 w-6 text-[#282562]" />
              </div>
              <h3 className="text-lg font-bold text-[#282562] mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 mx-auto max-w-5xl rounded-[24px] border border-[#d9d4e6] bg-[#f8f6fb] px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.06)]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#C8242B] mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-slate-600">
              因此，评估智能体的重点不在于“是否像人在聊天”，而在于能否在规则范围内稳定推进任务。
            </p>
          </div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
