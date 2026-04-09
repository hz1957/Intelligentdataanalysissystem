import { motion } from 'motion/react';
import { Layers, LayoutTemplate, Network, PackageOpen, Database, HardDrive, ArrowRight, Code2 } from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    name: 'Web Dashboard',
    role: '用户入口',
    desc: '管理 App、Session 和页面嵌入，是用户直接看到的操作界面。'
  },
  {
    icon: Network,
    name: 'Runtime Gateway',
    role: '统一接入层',
    desc: '负责鉴权、路由和转发，把请求送到正确的运行环境。'
  },
  {
    icon: PackageOpen,
    name: 'Runtime Sandbox',
    role: '执行环境',
    desc: '按需启动的运行容器，内部承载 workspace 和 OpenCode 服务。'
  },
  {
    icon: Database,
    name: 'PostgreSQL',
    role: '状态记录',
    desc: '保存用户、Session、Lease 和映射关系。'
  },
  {
    icon: HardDrive,
    name: 'RustFS',
    role: '对象存储',
    desc: '保存配置、工作区文件和后续恢复所需状态。'
  }
];

export function Slide11() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-6"
      >
        <div className="flex items-center gap-4 rounded-[28px] border border-white/[0.06] bg-white/[0.02] px-6 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 shrink-0">
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-white leading-tight">Biz Agent：项目架构概览</h2>
            <p className="text-sm text-blue-200/65 mt-1">整体由 4 个基础服务 + N 个按需 Runtime 容器组成</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06]"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-5 bg-blue-500 rounded-full" />
            <h3 className="text-base font-bold text-white">核心服务 / 容器</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-white/[0.04] bg-black/20 p-4 hover:border-white/[0.1] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 mb-3">
                  <service.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-white font-bold text-[14px] mb-1.5">{service.name}</div>
                <div className="text-blue-300/70 text-[10px] font-medium mb-2">{service.role}</div>
                <div className="text-white/40 text-[11px] leading-relaxed">{service.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="col-span-12 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06]"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-5 bg-blue-500 rounded-full" />
            <h3 className="text-base font-bold text-white">整体链路</h3>
          </div>

          <div className="rounded-[24px] border border-white/[0.04] bg-black/20 p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-center">
              <div className="flex-1 rounded-2xl border border-white/[0.05] bg-white/[0.03] px-4 py-4">
                <div className="text-white font-bold text-[13px]">用户 / Browser</div>
                <div className="text-white/40 text-[10px] mt-1">发起会话与页面访问</div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/25 mx-auto shrink-0" />

              <div className="flex-1 rounded-2xl border border-white/[0.05] bg-white/[0.03] px-4 py-4">
                <div className="text-white font-bold text-[13px]">Web Dashboard</div>
                <div className="text-white/40 text-[10px] mt-1">管理应用、会话与界面</div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/25 mx-auto shrink-0" />

              <div className="flex-1 rounded-2xl border border-white/[0.05] bg-white/[0.03] px-4 py-4">
                <div className="text-white font-bold text-[13px]">Runtime Gateway</div>
                <div className="text-white/40 text-[10px] mt-1">统一鉴权和路由</div>
              </div>

              <ArrowRight className="w-4 h-4 text-white/25 mx-auto shrink-0" />

              <div className="flex-1 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-4">
                <div className="flex items-center justify-center gap-2 text-white font-bold text-[13px]">
                  <Code2 className="w-4 h-4 text-cyan-300" />
                  Runtime Sandbox
                </div>
                <div className="text-white/40 text-[10px] mt-1">内部运行 OpenCode 与 workspace</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] px-4 py-3">
                <div className="text-white font-bold text-[12px] mb-1">PostgreSQL</div>
                <div className="text-white/40 text-[10px] leading-relaxed">
                  负责记录用户、Session、Lease 和运行环境映射关系。
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.03] px-4 py-3">
                <div className="text-white font-bold text-[12px] mb-1">RustFS</div>
                <div className="text-white/40 text-[10px] leading-relaxed">
                  负责保存配置、工作区文件以及后续恢复所需状态。
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
