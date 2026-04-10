import { motion } from 'motion/react';
import { ShieldCheck, Settings2, Users, Database, Wrench, FolderCog } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const roles = [
  {
    icon: ShieldCheck,
    title: '管理者',
    desc: '系统管理员，关注平台稳定、权限边界、统一治理。'
  },
  {
    icon: Settings2,
    title: '建设者',
    desc: 'Agent 管理员，负责创建、配置、运营和持续优化智能体。'
  },
  {
    icon: Users,
    title: '使用者',
    desc: '普通用户，关注是否好用、有效、可靠，能否真正完成任务。'
  }
];

const builderTasks = [
  {
    icon: FolderCog,
    title: '创建与定义',
    desc: '创建智能体，定义岗位角色和目标边界。'
  },
  {
    icon: Database,
    title: '知识与经验维护',
    desc: '维护知识库、记忆和可复用经验，让系统能够调用业务资料作为判断依据。'
  },
  {
    icon: Wrench,
    title: '工具与运行配置',
    desc: '配置提示词、规则、project 模板和执行方式，并管理 Skill、MCP、外部系统接入。'
  }
];

export function Slide13() {
  return (
    <BusinessSectionShell eyebrow="PLATFORM ROLES">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">平台中的角色，以及建设者负责什么</h2>
          <p className="text-lg text-[#6f6a86]">平台中通常有管理者、建设者和使用者三类角色，其中建设者负责把智能体真正建设和运营起来</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-6">
          {roles.map((item, index) => (
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
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-5xl mx-auto rounded-[28px] border border-[#d9d4e6] bg-white p-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="mb-4 text-base font-bold text-[#282562]">建设者的主要工作</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {builderTasks.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-[#e5dfed] bg-[#f8f6fb] p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#d1cbe4] bg-white">
                  <item.icon className="h-5 w-5 text-[#282562]" />
                </div>
                <div className="text-sm font-bold text-[#282562] mb-1.5">{item.title}</div>
                <div className="text-[12px] leading-relaxed text-slate-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[20px] border border-[#e5dfed] bg-[#f8f6fb] px-4 py-3 text-[12px] leading-relaxed text-slate-600">
            除了上面三类工作，建设者还需要收集、整理、归档智能体产生的文件、报告和过程产物，并根据业务反馈持续优化智能体效果。
          </div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
