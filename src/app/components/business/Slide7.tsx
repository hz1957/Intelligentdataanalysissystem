import { motion } from 'motion/react';
import { RefreshCw, ShieldCheck, XCircle } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide7() {
  return (
    <BusinessSectionShell eyebrow="RELIABILITY">
    <div className="max-w-6xl w-full mx-auto pt-5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <ShieldCheck className="w-9 h-9 text-[#C8242B]" />
          <h2 className="text-4xl font-bold text-[#282562]">可靠性保障机制</h2>
        </div>
        <p className="text-base text-[#6f6a86]">把试错成本留在系统内部，而不是暴露给业务用户</p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[28px] p-5 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d9d4e6]">
              <RefreshCw className="w-5 h-5 text-[#282562]" />
            </div>
            <div>
              <h3 className="text-[#282562] font-bold text-base tracking-tight">执行前后自动校验</h3>
              <div className="text-[#C8242B]/75 text-[11px] font-medium">Controlled Validation</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-[#f8f6fb] text-slate-600 border border-[#e5dfed] rounded-lg text-[10px]">结构一致性</span>
            <span className="px-2 py-1 bg-[#f8f6fb] text-slate-600 border border-[#e5dfed] rounded-lg text-[10px]">依赖完整性</span>
            <span className="px-2 py-1 bg-[#f8f6fb] text-slate-600 border border-[#e5dfed] rounded-lg text-[10px]">关键计算验证</span>
          </div>

          <div className="bg-[#f8f6fb] rounded-xl border border-[#e5dfed] p-4 text-[11px] text-slate-600 leading-relaxed mb-4">
            系统不会把生成出的流程直接落到生产环境，而是会在关键步骤持续检查结构、依赖关系和计算结果，确认安全后才继续向下执行。
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#f8f6fb] rounded-xl border border-[#e5dfed] p-4">
                <div className="text-[#282562] font-bold text-sm mb-2">结构一致性检查</div>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  检查上下游字段、连接关系和依赖是否匹配，避免流程在中途出现断裂或口径错误。
                </div>
              </div>

              <div className="bg-[#f8f6fb] rounded-xl border border-[#e5dfed] p-4">
                <div className="text-[#282562] font-bold text-sm mb-2">关键计算试运行</div>
                <div className="text-[11px] text-slate-600 leading-relaxed">
                  对关键计算先做模拟验证，确认能够产出合理结果，再进入正式执行或保存。
                </div>
              </div>
            </div>

            <div className="bg-[#f8f6fb] rounded-xl border border-[#e5dfed] p-4 flex flex-col">
              <div className="text-[#282562] font-bold text-sm mb-2">失败后的处理方式</div>
              <div className="text-[11px] text-slate-600 leading-relaxed mb-3">
                如果校验未通过，系统会优先尝试自动修正；只有在连续失败、不收敛时，才会主动终止或切换路径。
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="bg-white rounded-xl border border-[#e5dfed] p-3 text-[11px] text-slate-600">
                  <div className="text-[#282562] font-bold mb-1">自动修正</div>
                  <div className="leading-relaxed">对于可修复问题，系统会继续尝试调整，而不是把半成品结果直接暴露给用户。</div>
                </div>

                <div className="bg-white rounded-xl border border-[#e5dfed] p-3 text-[11px] text-slate-600 flex items-center gap-3">
                  <div className="flex bg-[#f8f6fb] p-2 rounded-lg border border-[#e5dfed] gap-1.5 shrink-0">
                    <XCircle className="w-4 h-4 text-red-400/30" />
                    <XCircle className="w-4 h-4 text-red-400/60" />
                    <XCircle className="w-4 h-4 text-[#C8242B]" />
                  </div>
                  <div className="font-medium leading-relaxed">
                    若连续多轮仍无法得到稳定结果，系统会主动中断，避免错误继续放大。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[#e5dfed] bg-[#f8f6fb] px-4 py-3 text-[11px] text-slate-600 leading-relaxed">
            <span className="font-bold text-[#282562]">自动回退与重建：</span>
            如果局部调整没有产生有效结果，系统会自动回到更稳定的路径，必要时直接切换为整体重建，保证最终交付质量。
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 text-center"
      >
        <span className="text-slate-600 text-xs font-medium px-4 py-2 bg-white border border-[#d9d4e6] rounded-full inline-block shadow-[0_14px_32px_rgba(40,37,98,0.08)]">
          目标不是让系统“尽量答对”，而是让流程在交付前就被持续校验和约束。
        </span>
      </motion.div>
    </div>
    </BusinessSectionShell>
  );
}
