import { motion } from 'motion/react';
import { FolderOpen, FileText, Save, RotateCcw } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const workspaceItems = [
  '任务沟通记录',
  '相关参考资料',
  '执行过程中生成的中间文件',
  '最终确认的结果'
];

const resumeItems = [
  '任务中断后，系统会保留关键进展',
  '再次进入时，可以继续上一次的任务进度',
  '减少重复上传资料和重复说明背景的成本'
];

export function Slide11() {
  return (
    <BusinessSectionShell eyebrow="WORK CONTINUITY">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl font-bold text-[#282562] mb-3">任务如何连续推进</h2>
          <p className="text-lg text-[#6f6a86]">系统不会把每次交流都当作全新开始，而是为任务保留连续的工作空间</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <motion.div
            initial={{ x: -18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <FolderOpen className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">为任务保留工作空间</h3>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              系统会把每个任务相关的记录、资料和产出集中保留下来，便于围绕同一任务持续推进。
            </p>

            <div className="space-y-2">
              {workspaceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#e5dfed] bg-[#f8f6fb] px-4 py-3 text-sm text-slate-600"
                >
                  <FileText className="h-4 w-4 text-[#C8242B]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
              <RotateCcw className="h-6 w-6 text-[#282562]" />
            </div>
            <h3 className="text-xl font-bold text-[#282562] mb-2">中断后可以继续进度</h3>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              当任务因中断而暂时停止时，系统会保留关键内容，便于后续在原有基础上继续推进。
            </p>

            <div className="space-y-2">
              {resumeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#e5dfed] bg-[#f8f6fb] px-4 py-3 text-sm text-slate-600"
                >
                  <Save className="h-4 w-4 text-[#C8242B]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </BusinessSectionShell>
  );
}
