import { motion } from 'motion/react';
import { RefreshCw, Network, Server, Brain } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide6() {
  return (
    <BusinessSectionShell eyebrow="EXECUTION">
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Network className="w-9 h-9 text-[#282562]" />
          <h2 className="text-4xl font-bold text-[#282562]">受控执行与流程生成</h2>
        </div>
        <p className="text-base text-[#6f6a86]">把业务需求稳定转成可执行、可复用的数据流程</p>
      </motion.div>

      <div className="grid grid-cols-12 md:grid-rows-2 gap-5 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-7 md:row-span-2 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-5">
            <RefreshCw className="w-5 h-5 text-[#282562]" />
            <h3 className="text-[#282562] font-bold text-lg tracking-tight">执行主流程</h3>
          </div>

          <div className="flex flex-col gap-3 relative">
            <div className="absolute left-5 top-8 bottom-8 w-px bg-[#e1dceb] z-0" />

            {[
              ['1', '读取已确认方案', '接收已经澄清过的业务目标、数据范围和输出要求。'],
              ['2', '判断新建还是调整', '识别本次需求是新建流程还是基于已有流程做修改。'],
              ['3', '逐步生成并校验流程', '边生成边检查结构、依赖和结果是否合理。'],
              ['4', '输出可复用结果', '形成可持续复用、可追踪的分析流程和结果产物。']
            ].map(([step, title, desc]) => (
              <div key={step} className="flex items-start gap-4 z-10 relative">
                <div className="w-10 h-10 rounded-2xl bg-[#f8f6fb] border border-[#d9d4e6] flex items-center justify-center font-bold text-[#282562] text-sm flex-shrink-0">
                  {step}
                </div>
                <div className="pt-1">
                  <div className="font-bold text-[#282562] text-[12px] mb-1">{title}</div>
                  <div className="text-slate-500 text-[10px] leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-[#ece7f2] pt-4">
            <div className="rounded-2xl border border-[#e5dfed] bg-[#faf8fc] p-3 overflow-hidden">
              <svg
                className="w-full h-[96px]"
                viewBox="0 0 560 150"
                preserveAspectRatio="xMidYMid meet"
                aria-label="sample dag"
              >
                <g fill="none" strokeLinecap="round">
                  <line x1="92" y1="42" x2="165" y2="42" stroke="rgba(200,36,43,0.58)" strokeWidth="1.2" />
                  <line x1="92" y1="108" x2="165" y2="108" stroke="rgba(123,114,146,0.35)" strokeWidth="1.2" />
                  <line x1="245" y1="42" x2="305" y2="75" stroke="rgba(123,114,146,0.35)" strokeWidth="1.2" />
                  <line x1="245" y1="108" x2="305" y2="75" stroke="rgba(123,114,146,0.35)" strokeWidth="1.2" />
                  <line x1="367" y1="75" x2="425" y2="75" stroke="rgba(123,114,146,0.35)" strokeWidth="1.2" />
                  <line x1="483" y1="75" x2="512" y2="75" stroke="rgba(123,114,146,0.35)" strokeWidth="1.2" />
                </g>

                <g fontFamily="ui-sans-serif, system-ui, sans-serif" textAnchor="middle">
                  <rect x="20" y="24" width="72" height="36" rx="12" fill="rgba(200,36,43,0.08)" stroke="rgba(200,36,43,0.22)" />
                  <text x="56" y="39" fill="rgba(40,37,98,0.96)" fontSize="12" fontWeight="700">AE 表</text>
                  <text x="56" y="51" fill="rgba(40,37,98,0.55)" fontSize="10">不良反应</text>

                  <rect x="20" y="90" width="72" height="36" rx="12" fill="rgba(200,36,43,0.08)" stroke="rgba(200,36,43,0.22)" />
                  <text x="56" y="105" fill="rgba(40,37,98,0.96)" fontSize="12" fontWeight="700">MH 表</text>
                  <text x="56" y="117" fill="rgba(40,37,98,0.55)" fontSize="10">病史</text>

                  <rect x="165" y="24" width="80" height="36" rx="12" fill="rgba(200,36,43,0.07)" stroke="rgba(200,36,43,0.22)" />
                  <text x="205" y="45" fill="rgba(40,37,98,0.92)" fontSize="11" fontWeight="700">选择列</text>

                  <rect x="165" y="90" width="80" height="36" rx="12" fill="rgba(248,246,251,0.92)" stroke="rgba(123,114,146,0.22)" />
                  <text x="205" y="111" fill="rgba(123,114,146,0.84)" fontSize="11" fontWeight="700">选择列</text>

                  <rect x="305" y="57" width="62" height="36" rx="12" fill="rgba(248,246,251,0.92)" stroke="rgba(123,114,146,0.22)" />
                  <text x="336" y="78" fill="rgba(123,114,146,0.84)" fontSize="11" fontWeight="700">关联</text>

                  <rect x="425" y="57" width="58" height="36" rx="12" fill="rgba(248,246,251,0.92)" stroke="rgba(123,114,146,0.22)" />
                  <text x="454" y="72" fill="rgba(123,114,146,0.84)" fontSize="11" fontWeight="700">SQL</text>
                  <text x="454" y="84" fill="rgba(123,114,146,0.56)" fontSize="9">相关计算</text>

                  <rect x="512" y="57" width="48" height="36" rx="12" fill="rgba(248,246,251,0.92)" stroke="rgba(123,114,146,0.22)" />
                  <text x="536" y="78" fill="rgba(123,114,146,0.84)" fontSize="11" fontWeight="700">输出</text>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-5 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] border border-[#d9d4e6] flex items-center justify-center">
              <Server className="w-5 h-5 text-[#282562]" />
            </div>
            <h3 className="font-bold text-[#282562] text-md tracking-tight">执行输入</h3>
          </div>
          <div className="bg-[#f8f6fb] rounded-xl p-4 border border-[#e5dfed]">
            <ul className="space-y-2.5 text-slate-600 text-[11px]">
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#C8242B]/70" /><span className="flex-1">已确认的业务目标与分析要求</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#C8242B]/70" /><span className="flex-1">候选数据域与当前可用资产</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#C8242B]/70" /><span className="flex-1">已有流程快照或当前运行状态</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-[#C8242B]/70" /><span className="flex-1">本次输出结果的边界与约束</span></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-5 bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-[#282562]" />
            <h3 className="font-bold text-[#282562] text-md tracking-tight">迭代生成机制</h3>
          </div>

          <div className="bg-[#f8f6fb] rounded-xl p-4 border border-[#e5dfed] mb-3">
            <div className="flex items-center justify-between gap-2 text-[10px] font-medium text-slate-600">
              <span className="rounded-lg border border-[#e5dfed] bg-white px-2 py-1">读取状态</span>
              <span className="text-[#b4aec8]">→</span>
              <span className="rounded-lg border border-[#e5dfed] bg-white px-2 py-1">生成调整</span>
              <span className="text-[#b4aec8]">→</span>
              <span className="rounded-lg border border-[#e5dfed] bg-white px-2 py-1">更新流程</span>
              <span className="text-[#b4aec8]">→</span>
              <span className="rounded-lg border border-[#d9d4e6] bg-[#f3eef4] px-2 py-1 text-[#282562]">继续执行</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-600 leading-relaxed">
            系统不是一次性“生成完就结束”，而是在每一步都基于当前状态持续调整，直到形成稳定结果。<br /><br />
            <span className="text-[#282562]">如果局部调整无法收敛，系统会自动切换到整体重建路径。</span>
          </div>
        </motion.div>
      </div>
    </div>
    </BusinessSectionShell>
  );
}
