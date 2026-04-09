import { motion } from 'motion/react';
import { BrainCircuit, FileText, History, Layers3, UserRound } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const layers = [
    {
        icon: History,
        title: '当前任务上下文',
        desc: '保留当前指令、近期对话和正在推进的任务状态，保证 Agent 先理解眼前要做什么。'
    },
    {
        icon: UserRound,
        title: '长期业务记忆',
        desc: '沉淀用户偏好、常见约束和历史经验，让后续任务不必每次从零开始重新解释。'
    },
    {
        icon: FileText,
        title: '外挂业务知识',
        desc: '按需接入制度文档、SOP、产品资料和数据说明，把业务事实补进上下文。'
    }
];

export function Slide12() {
    return (
        <BusinessSectionShell eyebrow="CONTEXT ENGINE">
        <div className="max-w-6xl w-full mx-auto pt-5">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mb-6"
            >
                <div className="flex items-center gap-4 rounded-[28px] border border-[#d9d4e6] bg-[#f6f4fa] px-6 py-5 shadow-[0_10px_24px_rgba(40,37,98,0.06)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#cbc4e2] bg-white shrink-0">
                        <BrainCircuit className="w-6 h-6 text-[#282562]" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-3xl font-bold text-[#282562] leading-tight">下一步：通过 Context Engine 扩展 Biz Agent</h2>
                        <p className="text-sm text-[#6f6a86] mt-1">把当前任务、长期记忆和业务知识按需组合，提升业务理解能力</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-7 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-5 bg-[#C8242B] rounded-full" />
                        <h3 className="text-sm font-bold text-[#282562]">三层上下文</h3>
                    </div>
                    <div className="space-y-3">
                        {layers.map((item, i) => (
                            <div key={i} className="flex gap-3 items-start p-4 bg-[#f8f6fb] rounded-xl border border-[#e6e1ec]">
                                <div className="w-9 h-9 flex items-center justify-center bg-white border border-[#d1cbe4] rounded-xl shrink-0">
                                    <item.icon className="w-4 h-4 text-[#282562]" />
                                </div>
                                <div>
                                    <div className="text-[#282562] font-bold text-[13px] mb-1">{item.title}</div>
                                    <div className="text-slate-500 text-[11px] leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="col-span-12 md:col-span-5 flex flex-col gap-5"
                >
                    <div className="bg-white rounded-[28px] p-6 border border-[#d9d4e6] flex-1 shadow-[0_14px_32px_rgba(40,37,98,0.08)]">
                        <div className="flex items-center gap-2 mb-4">
                            <Layers3 className="w-4 h-4 text-[#C8242B]" />
                            <h3 className="text-sm font-bold text-[#282562]">上下文组装方式</h3>
                        </div>
                        <div className="bg-[#f8f6fb] p-3 rounded-xl border border-[#e6e1ec] text-[11px] text-slate-500 space-y-2">
                            <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                                <div className="text-[#282562] font-bold mb-1">固定基础</div>
                                <div className="leading-relaxed">System Prompt + User Instruction</div>
                            </div>
                            <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                                <div className="text-[#282562] font-bold mb-1">会话层</div>
                                <div className="leading-relaxed">Recent Messages + Task State</div>
                            </div>
                            <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                                <div className="text-[#282562] font-bold mb-1">记忆层</div>
                                <div className="leading-relaxed">Long-term Memory</div>
                            </div>
                            <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                                <div className="text-[#282562] font-bold mb-1">知识层</div>
                                <div className="leading-relaxed">Optional Knowledge / Documents</div>
                            </div>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                            不是每次都把所有材料塞进模型，而是按任务需要动态取用真正相关的上下文。
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
        </BusinessSectionShell>
    );
}
