import { motion } from 'motion/react';
import { Gauge, Shield, RefreshCw, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const achievements = [
  { icon: Gauge, label: '需求响应', value: '更快' },
  { icon: Shield, label: '结果交付', value: '更稳' },
  { icon: RefreshCw, label: '流程复用', value: '更顺畅' },
  { icon: TrendingUp, label: '平台能力', value: '可持续优化' }
];

const businessValues = [
  { text: '降低使用门槛', detail: '业务用户可以直接从自然语言发起需求，减少跨团队转述成本。' },
  { text: '减少重复建设', detail: '优先复用已有流程、历史版本和远端最新状态，不必每次从零开始。' },
  { text: '提高交付稳定性', detail: '在受控执行和自动校验下，减少因状态偏差和流程错误导致的返工。' },
  { text: '沉淀平台能力', detail: '每次需求处理都会沉淀为可复用、可治理、可持续优化的流程能力。' }
];

export function Slide10() {
  return (
    <BusinessSectionShell eyebrow="BUSINESS VALUE">
    <div className="max-w-6xl w-full mx-auto pt-5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-6"
      >
        <div className="flex items-center gap-4 rounded-[28px] border border-[#d9d4e6] bg-[#f6f4fa] px-6 py-5 shadow-[0_10px_24px_rgba(40,37,98,0.06)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#cbc4e2] bg-white shrink-0">
            <Sparkles className="w-6 h-6 text-[#282562]" />
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-[#282562] leading-tight">业务价值总结</h2>
            <p className="text-sm text-[#6f6a86] mt-1">让临床数据分析从人工串联走向智能协同</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-4 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-5 bg-[#C8242B] rounded-full" />
            <h3 className="text-sm font-bold text-[#282562]">业务收益</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#e5dfed] bg-[#f8f6fb] px-3 py-4 text-center"
              >
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#d9d4e6] bg-white">
                  <item.icon className="w-4 h-4 text-[#282562]" />
                </div>
                <div className="text-[#282562] font-bold text-[13px] leading-snug">{item.value}</div>
                <div className="text-slate-500 text-[10px] mt-1 tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-[#e5dfed] bg-[#f8f6fb] px-3 py-2 text-[10px] text-slate-600">
            更快响应需求，更稳交付结果，并持续沉淀流程能力。
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-8 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-5 bg-[#C8242B] rounded-full" />
            <h3 className="text-sm font-bold text-[#282562]">核心价值</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {businessValues.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-[20px] border border-[#e5dfed] bg-[#f8f6fb] px-4 py-3"
              >
                <CheckCircle className="w-4 h-4 text-[#C8242B] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[#282562] font-bold text-[13px] mb-1 leading-snug">{item.text}</div>
                  <div className="text-slate-500 text-[11px] leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-4 text-center"
      >
        <span className="inline-block rounded-full border border-[#d9d4e6] bg-white px-4 py-2 text-[11px] text-slate-600 font-medium shadow-[0_14px_32px_rgba(40,37,98,0.08)]">
          目标不是再做一个“会聊天的工具”，而是做一个真正能帮助业务稳定交付结果的平台。
        </span>
      </motion.div>
    </div>
    </BusinessSectionShell>
  );
}
