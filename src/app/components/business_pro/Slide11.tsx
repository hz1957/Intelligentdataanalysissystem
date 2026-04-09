import { motion } from 'motion/react';
import { Layers, Database, HardDrive, ArrowRight, Code2, LibraryBig, UserRound, LayoutTemplate, Network } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide11() {
  return (
    <BusinessSectionShell eyebrow="BIZ AGENT">
    <div className="max-w-6xl w-full mx-auto pt-5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-6"
      >
        <div className="flex items-center gap-4 rounded-[28px] border border-[#d9d4e6] bg-[#f6f4fa] px-6 py-5 shadow-[0_10px_24px_rgba(40,37,98,0.06)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#cbc4e2] bg-white shrink-0">
            <Layers className="w-6 h-6 text-[#282562]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-[#282562] leading-tight">Biz Agent：平台架构概览</h2>
            <p className="text-sm text-[#6f6a86] mt-1">围绕业务会话、工作空间和知识资料，构建一套可持续运行的 Agent 平台</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-5 bg-[#C8242B] rounded-full" />
            <h3 className="text-base font-bold text-[#282562]">整体链路</h3>
          </div>

          <div className="rounded-[24px] border border-[#e6e0ef] bg-[#f8f6fb] p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-center">
              <div className="flex-1 rounded-2xl border border-[#e0dbea] bg-white px-4 py-4">
                <div className="flex justify-center mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d1cbe4] bg-[#f7f4fa]">
                    <UserRound className="w-4 h-4 text-[#282562]" />
                  </div>
                </div>
                <div className="text-[#282562] font-bold text-[13px]">业务用户</div>
                <div className="text-slate-500 text-[10px] mt-1">发起任务与页面访问</div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#a19ab7] mx-auto shrink-0" />

              <div className="flex-1 rounded-2xl border border-[#e0dbea] bg-white px-4 py-4">
                <div className="flex justify-center mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d1cbe4] bg-[#f7f4fa]">
                    <LayoutTemplate className="w-4 h-4 text-[#282562]" />
                  </div>
                </div>
                <div className="text-[#282562] font-bold text-[13px]">业务工作台</div>
                <div className="text-[#C8242B]/75 text-[10px] font-medium mt-1">用户入口</div>
                <div className="text-slate-500 text-[10px] mt-1 leading-relaxed">承接应用管理、会话管理和页面接入。</div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#a19ab7] mx-auto shrink-0" />

              <div className="flex-1 rounded-2xl border border-[#e0dbea] bg-white px-4 py-4">
                <div className="flex justify-center mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d1cbe4] bg-[#f7f4fa]">
                    <Network className="w-4 h-4 text-[#282562]" />
                  </div>
                </div>
                <div className="text-[#282562] font-bold text-[13px]">统一接入层</div>
                <div className="text-[#C8242B]/75 text-[10px] font-medium mt-1">访问与调度</div>
                <div className="text-slate-500 text-[10px] mt-1 leading-relaxed">统一处理访问、鉴权和路由，把请求分发到对应执行环境。</div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#a19ab7] mx-auto shrink-0" />

              <div className="flex-[1.4] rounded-2xl border border-[#d9d4e6] bg-[#f4f1f9] px-4 py-4">
                <div className="flex items-center justify-center gap-2 text-[#282562] font-bold text-[13px] mb-3">
                  <Code2 className="w-4 h-4 text-[#C8242B]" />
                  独立执行环境
                </div>
                <div className="text-[#6f6a86] text-[10px] text-center mb-3">按需分配的独立运行空间，用于承载具体任务执行</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-[#e0dbea] bg-white px-2 py-3">
                    <div className="text-[12px] font-bold text-[#282562]">实例 A</div>
                    <div className="text-[10px] text-slate-500 mt-1">独立执行</div>
                  </div>
                  <div className="rounded-xl border border-[#e0dbea] bg-white px-2 py-3">
                    <div className="text-[12px] font-bold text-[#282562]">实例 B</div>
                    <div className="text-[10px] text-slate-500 mt-1">独立执行</div>
                  </div>
                  <div className="rounded-xl border border-[#e0dbea] bg-white px-2 py-3">
                    <div className="text-[12px] font-bold text-[#282562]">实例 C</div>
                    <div className="text-[10px] text-slate-500 mt-1">独立执行</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="rounded-2xl border border-[#e0dbea] bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                  <Database className="w-3.5 h-3.5 text-[#282562]" />
                  状态数据库
                </div>
                <div className="text-[#C8242B]/75 text-[10px] font-medium mb-1">关系记录</div>
                <div className="text-slate-500 text-[10px] leading-relaxed">
                  负责记录用户、会话以及执行环境的映射关系。
                </div>
              </div>

              <div className="rounded-2xl border border-[#e0dbea] bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                  <HardDrive className="w-3.5 h-3.5 text-[#282562]" />
                  文件管理系统
                </div>
                <div className="text-[#C8242B]/75 text-[10px] font-medium mb-1">状态保存</div>
                <div className="text-slate-500 text-[10px] leading-relaxed">
                  负责保存 skills、业务文档、SOP、配置文件以及后续恢复所需状态。
                </div>
              </div>

              <div className="rounded-2xl border border-[#e0dbea] bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                  <LibraryBig className="w-3.5 h-3.5 text-[#282562]" />
                  向量数据库
                </div>
                <div className="text-[#C8242B]/75 text-[10px] font-medium mb-1">快速索引</div>
                <div className="text-slate-500 text-[10px] leading-relaxed">
                  负责保存业务文档、SOP 等资料的切块结果，用于后续快速检索与召回。
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </BusinessSectionShell>
  );
}
