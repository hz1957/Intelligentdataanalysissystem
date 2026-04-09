import { motion } from 'motion/react';
import { Layers, MessageSquare, Cog, ArrowRight, FileText, ShieldCheck, Database } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide3() {
  return (
    <BusinessSectionShell eyebrow="ARCHITECTURE">
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Layers className="w-9 h-9 text-[#282562]" />
          <h2 className="text-4xl font-bold text-[#282562]">双层智能架构</h2>
        </div>
        <p className="text-base text-[#6f6a86]">前层负责理解需求，后层负责受控执行</p>
      </motion.div>

      <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-5"
        >
          <div className="h-full bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
                <MessageSquare className="w-5 h-5 text-[#282562]" />
              </div>
              <span className="px-3 py-1 bg-[#f8f6fb] rounded-full text-[10px] text-[#C8242B] border border-[#d9d4e6]">
                第一层
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#282562] mb-2 tracking-tight">需求理解与方案规划</h3>

            <p className="text-slate-600 text-[12px] leading-relaxed flex-1 mb-4">
              系统先和用户对齐业务目标、分析口径和数据范围，再把自然语言需求整理成一份明确、可执行的任务方案，避免需求在多人协作中反复失真。
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6fb] rounded-xl border border-[#e5dfed] text-[10px] text-slate-600">
                <MessageSquare className="w-3.5 h-3.5 text-[#282562]" />
                <span>需求澄清</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6fb] rounded-xl border border-[#e5dfed] text-[10px] text-slate-600">
                <Database className="w-3.5 h-3.5 text-[#282562]" />
                <span>上下文对齐</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3eef4] rounded-xl border border-[#d9d4e6] text-[10px] text-[#282562]">
                <FileText className="w-3.5 h-3.5" />
                <span>形成执行方案</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="col-span-12 md:col-span-7"
        >
          <div className="h-full bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
                <Cog className="w-5 h-5 text-[#282562]" />
              </div>
              <span className="px-3 py-1 bg-[#f8f6fb] rounded-full text-[10px] text-[#C8242B] border border-[#d9d4e6]">
                第二层
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#282562] mb-2 tracking-tight">受控执行与结果生成</h3>

            <p className="text-slate-600 text-[12px] leading-relaxed flex-1 mb-4">
              执行层不再重新理解用户需求，而是基于已确认的任务方案逐步生成、调整并校验分析流程，确保最后交付的结果更稳定、更可追踪。
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6fb] rounded-xl border border-[#e5dfed] text-[10px] text-slate-600">
                <Cog className="w-3.5 h-3.5 text-[#282562]" />
                <span>流程生成</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f6fb] rounded-xl border border-[#e5dfed] text-[10px] text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#282562]" />
                <span>执行校验</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f3eef4] rounded-xl border border-[#d9d4e6] text-[10px] text-[#282562] ml-auto">
                <ArrowRight className="w-3 h-3" />
                <span>生成可交付结果</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-5 max-w-4xl mx-auto"
      >
        <div className="rounded-2xl border border-[#d9d4e6] bg-white px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-center gap-3 text-sm text-slate-600 shadow-[0_14px_32px_rgba(40,37,98,0.08)]">
          <span className="text-center">业务问题</span>
          <ArrowRight className="w-4 h-4 text-[#b4aec8] mx-auto md:mx-0" />
          <span className="text-center text-[#282562]">需求理解与方案规划</span>
          <ArrowRight className="w-4 h-4 text-[#b4aec8] mx-auto md:mx-0" />
          <span className="text-center text-[#282562]">受控执行与结果生成</span>
        </div>
      </motion.div>
    </div>
    </BusinessSectionShell>
  );
}
