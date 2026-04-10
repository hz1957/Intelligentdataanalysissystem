import { motion } from 'motion/react';
import { LayoutDashboard, FileStack, Settings2, Users, TrendingUp } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const blocks = [
  {
    icon: LayoutDashboard,
    title: '创建与管理',
    desc: '支持智能体的创建、配置和管理，而不只是提供一个对话入口。'
  },
  {
    icon: FileStack,
    title: '知识与文件沉淀',
    desc: '支持知识、文件、记忆和模板的沉淀，形成可持续复用的业务基础。'
  },
  {
    icon: Settings2,
    title: '配置能力',
    desc: '可以定义角色、规则、资料来源和执行方式。'
  },
  {
    icon: Users,
    title: '协作与治理',
    desc: '支持不同角色在同一平台中使用、治理和协作。'
  },
  {
    icon: TrendingUp,
    title: '运营与优化',
    desc: '根据业务反馈持续优化智能体效果，形成长期运营能力。'
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
          <h2 className="text-4xl font-bold text-[#282562] mb-3">平台是什么</h2>
          <p className="text-lg text-[#6f6a86]">
            面向企业的智能体建设与运营平台
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
            平台不只提供对话入口，还提供智能体创建、配置和管理能力，
            也支持知识、文件、记忆和模板沉淀。
            目标是让智能体从“会回答”走向“能长期服务业务”。
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
