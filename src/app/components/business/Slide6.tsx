import { motion } from 'motion/react';
import { LayoutDashboard, FileStack, Settings2, Users, TrendingUp } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const blocks = [
  {
    icon: LayoutDashboard,
    title: '统一调度入口',
    desc: '让用户可以在统一入口中使用面向不同场景的智能能力。'
  },
  {
    icon: FileStack,
    title: '积累数字常识',
    desc: '沉淀业务资料、操作规范和历史结果，作为后续复用的基础。'
  },
  {
    icon: Settings2,
    title: '规范构建方案',
    desc: '明确智能体的职责边界、可用资源和风险控制要求。'
  },
  {
    icon: Users,
    title: '职能协同支撑',
    desc: '支持业务、产品、技术等角色在同一平台上协同建设和优化。'
  },
  {
    icon: TrendingUp,
    title: '闭环自持迭代',
    desc: '根据使用反馈持续优化效果，形成长期迭代闭环。'
  }
];

export function Slide6() {
  return (
    <BusinessSectionShell eyebrow="BIZ AGENT PLATFORM">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">Agent 平台的核心价值</h2>
          <p className="text-lg text-[#6f6a86]">
            不只是一个单点工具，而是一套支持建设、运行和持续优化的业务平台
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-6 max-w-5xl rounded-[28px] border border-[#d9d4e6] bg-[#f6f4fa] px-6 py-5 shadow-[0_10px_24px_rgba(40,37,98,0.06)]"
        >
          <div className="text-xl font-bold text-[#282562] mb-2">平台定位</div>
          <p className="text-sm leading-relaxed text-slate-600">
            除了对话入口之外，平台更关注资料管理、工具接入、运行管理和安全控制，
            以支持智能体在真实业务场景中稳定落地。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {blocks.map((item, index) => (
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
      </div>
    </BusinessSectionShell>
  );
}
