import { motion } from 'motion/react';
import { AppWindow, FolderKanban, BookOpenText, Wrench, History, ShieldCheck, ArrowRight } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const parts = [
  {
    icon: AppWindow,
    title: '使用入口',
    desc: '用户在这里提出任务，并查看系统返回的结果。'
  },
  {
    icon: FolderKanban,
    title: '专属工作空间',
    desc: '为每个任务保留独立的资料、过程和结果记录。'
  },
  {
    icon: BookOpenText,
    title: '知识与资料中心',
    desc: '统一管理制度、手册和参考文档，为输出提供专业依据。'
  },
  {
    icon: History,
    title: '历史记录与记忆',
    desc: '保留历史任务、使用偏好和可复用经验，确保执行过程可溯源，帮助后续任务衔接。'
  },
  {
    icon: Wrench,
    title: '工具与系统连接',
    desc: '连接内部系统接口和功能组件，支持按规则调用。'
  },
  {
    icon: ShieldCheck,
    title: '安全管理',
    desc: '支持环境隔离，并可结合本地私有化部署大模型，满足权限控制和数据安全要求。'
  }
];

export function Slide7() {
  return (
    <BusinessSectionShell eyebrow="PLATFORM PARTS">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">平台的核心组成</h2>
          <p className="text-lg text-[#6f6a86]">由使用入口、工作空间、资料管理、系统连接和治理能力共同支撑运行</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {parts.map((item, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 mx-auto max-w-5xl rounded-[26px] border border-[#d9d4e6] bg-[#f8f6fb] px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.06)]"
        >
          <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-left">
            <span className="text-sm font-medium text-slate-600">用户提出任务</span>
            <ArrowRight className="h-4 w-4 text-[#C8242B]" />
            <span className="text-sm font-medium text-slate-600">平台组织资料与工具</span>
            <ArrowRight className="h-4 w-4 text-[#C8242B]" />
            <span className="text-sm font-medium text-slate-600">形成结果并沉淀经验</span>
          </div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
