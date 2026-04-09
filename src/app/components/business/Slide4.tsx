import { motion } from 'motion/react';
import { AppWindow, Bot, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const rows = [
  ['操作方式', '通过菜单、按钮和表单逐步操作', '可以直接提出任务或问题，由系统理解后推进'],
  ['流程推进', '流程相对固定，用户按既定路径执行', '围绕目标组织步骤，并根据过程动态调整'],
  ['赋能模式', '以提供固定功能为主', '以推进业务任务完成为主']
];

export function Slide4() {
  return (
    <BusinessSectionShell eyebrow="AGENT VS SOFTWARE">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">智能体与传统应用系统</h2>
          <p className="text-lg text-[#6f6a86]">传统系统强调固定功能，智能体更强调围绕目标完成任务</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <AppWindow className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">传统应用系统</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              交互方式和功能路径大多预先设定，用户需要理解系统结构，并按固定步骤完成操作。
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <Bot className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">新兴智能体形态</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              以任务目标为起点，系统自动组织所需资料、规则和工具，并推动后续执行与结果交付。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-5xl mx-auto rounded-[28px] border border-[#d9d4e6] bg-white p-5 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowRightLeft className="h-5 w-5 text-[#C8242B]" />
            <h3 className="text-base font-bold text-[#282562]">区别</h3>
          </div>

          <div className="grid grid-cols-[110px_1fr_1fr] gap-3 text-sm">
            <div className="text-[#C8242B] font-semibold">对比项</div>
            <div className="text-[#282562] font-bold">传统软件</div>
            <div className="text-[#282562] font-bold">智能体</div>

            {rows.map(([label, left, right]) => (
              <div key={label} className="contents">
                <div className="text-slate-500 border-t border-[#ece7f2] pt-3">{label}</div>
                <div className="text-slate-600 border-t border-[#ece7f2] pt-3">{left}</div>
                <div className="text-slate-600 border-t border-[#ece7f2] pt-3">{right}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 mx-auto max-w-5xl rounded-[24px] border border-[#d9d4e6] bg-[#f8f6fb] px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.06)]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#C8242B] mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-slate-600">
              两者并不是简单替代关系。更现实的路径，是让智能体建立在现有系统之上，打通分散流程，提升跨环节协同效率。
            </p>
          </div>
        </motion.div>
      </div>
    </BusinessSectionShell>
  );
}
