import { motion } from 'motion/react';
import { Search, UserRoundCog, Files, PlugZap, FlaskConical, Rocket } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const steps = [
  {
    icon: Search,
    title: '1. 选场景',
    desc: '先选一个高频、边界清晰、价值明确的业务场景。'
  },
  {
    icon: UserRoundCog,
    title: '2. 定角色',
    desc: '明确智能体负责什么、不负责什么，以及输出标准。'
  },
  {
    icon: Files,
    title: '3. 准备资料',
    desc: '整理制度、SOP、模板和示例结果，作为业务依据。'
  },
  {
    icon: PlugZap,
    title: '4. 接系统',
    desc: '按需要接入相关系统、接口和可调用工具。'
  },
  {
    icon: FlaskConical,
    title: '5. 小范围试用',
    desc: '在可控范围内试运行，观察效果并修正问题。'
  },
  {
    icon: Rocket,
    title: '6. 持续优化',
    desc: '正式使用后，结合反馈持续调整能力和流程。'
  }
];

export function Slide12() {
  return (
    <BusinessSectionShell eyebrow="BUILDING AN AGENT">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">业务智能体如何建设</h2>
          <p className="text-lg text-[#6f6a86]">通常不是一次性配置完成，而是沿着“场景选择、资料准备、系统接入、试用优化”的路径逐步推进</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
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
