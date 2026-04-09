import { motion } from 'motion/react';
import { MessageSquare, Brain, Box, Globe, DownloadCloud } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide4() {
  return (
    <BusinessSectionShell eyebrow="PLANNING">
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <MessageSquare className="w-9 h-9 text-[#282562]" />
          <h2 className="text-4xl font-bold text-[#282562]">需求进入系统后会发生什么</h2>
        </div>
        <p className="text-base text-[#6f6a86]">系统先理解业务需求，再生成一份清晰的执行方案</p>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-6 md:row-span-2 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
              <Brain className="w-5 h-5 text-[#282562]" />
            </div>
            <div>
              <h3 className="text-[#282562] font-bold text-lg tracking-tight">需求理解与澄清</h3>
              <div className="text-[#C8242B]/75 text-[11px] font-medium">从自然语言到明确任务</div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 flex-1 justify-center">
            <div className="bg-[#f8f6fb] px-4 py-3 rounded-xl border border-[#e5dfed]">
              <div className="text-[#282562] text-[12px] font-bold mb-1">识别业务目标</div>
              <div className="text-slate-500 text-[10px]">明确是探索分析、流程修改还是历史结果延续。</div>
            </div>
            <div className="bg-[#f8f6fb] px-4 py-3 rounded-xl border border-[#e5dfed]">
              <div className="text-[#282562] text-[12px] font-bold mb-1">确定数据范围</div>
              <div className="text-slate-500 text-[10px]">自动识别可能涉及的数据域、表和关键业务条件。</div>
            </div>
            <div className="bg-[#f8f6fb] px-4 py-3 rounded-xl border border-[#e5dfed]">
              <div className="text-[#282562] text-[12px] font-bold mb-1">补齐关键上下文</div>
              <div className="text-slate-500 text-[10px]">必要时追问或读取远端最新状态，避免因信息缺失导致执行偏差。</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
                <DownloadCloud className="w-5 h-5 text-[#282562]" />
              </div>
              <div>
                <h3 className="text-[#282562] font-bold text-sm tracking-tight">上下文与远端状态对齐</h3>
                <div className="text-[#C8242B]/75 text-[10px] font-medium">历史流程 / 远端最新状态 / 当前上下文</div>
              </div>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed mb-3">
              系统不会把每次需求都当成全新任务，而是会优先读取已有流程、历史版本和上下文，让修改建立在当前真实状态上。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-auto">
            <div className="bg-[#f8f6fb] p-2.5 rounded-xl border border-[#e5dfed] text-[10px] text-slate-500">
              <div className="text-[#282562] font-bold mb-1">读取已有流程</div>
              <div className="leading-snug">优先继承已有分析流程与历史结果。</div>
            </div>
            <div className="bg-[#f3eef4] p-2.5 rounded-xl border border-[#d9d4e6] text-[10px] text-slate-500">
              <div className="text-[#282562] font-bold mb-1">避免状态偏差</div>
              <div className="leading-snug">在正式执行前再次核对当前状态。</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
              <Box className="w-5 h-5 text-[#282562]" />
            </div>
            <div>
              <h3 className="text-[#282562] font-bold text-sm tracking-tight">形成执行方案</h3>
              <div className="text-[#C8242B]/75 text-[10px] font-medium">任务边界明确后再交付执行层</div>
            </div>
          </div>
          <div className="text-slate-600 text-[11px] space-y-2.5 leading-relaxed mt-1">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#C8242B]/70 rounded-full" />
              <div>明确涉及哪些数据域和分析对象</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#C8242B]/70 rounded-full" />
              <div>定义本次任务是新建、调整还是延续既有流程</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#C8242B]/70 rounded-full" />
              <div>把目标、约束和输出要求整理成结构化方案</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 bg-white rounded-[24px] px-6 py-3 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex items-center gap-4"
        >
          <div className="w-8 h-8 rounded-full bg-[#f3eef4] flex items-center justify-center border border-[#d9d4e6] flex-shrink-0">
            <Globe className="w-4 h-4 text-[#282562]" />
          </div>
          <span className="text-[12px] text-slate-600 font-medium">
            交给执行层的不是一句模糊指令，而是一份已经完成上下文对齐、边界明确的结构化任务方案。
          </span>
        </motion.div>
      </div>
    </div>
    </BusinessSectionShell>
  );
}
