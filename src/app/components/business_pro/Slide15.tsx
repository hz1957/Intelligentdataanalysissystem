import { motion } from 'motion/react';
import { Award, BookOpenText, Shield, Blocks, BrainCircuit } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const benefits = [
    { icon: Blocks, title: '接入成本更低', desc: '能力可以直接嵌入现有平台，不需要额外建设一套独立系统。' },
    { icon: Shield, title: '运行边界更清晰', desc: '不同业务场景拥有相对独立的执行空间，减少相互影响。' },
    { icon: BrainCircuit, title: '上下文更懂业务', desc: '通过 Context Engine，把当前任务、长期记忆和业务知识按需组合。' },
    { icon: BookOpenText, title: '场景落地更快', desc: '借助 RAG 与业务知识扩展，Agent 更容易进入具体业务场景。' }
];

export function Slide15() {
    return (
        <BusinessSectionShell eyebrow="BUSINESS VALUE">
        <div className="max-w-6xl w-full mx-auto pt-5">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white mb-6 border border-[#d1cbe4] shadow-[0_8px_18px_rgba(40,37,98,0.08)]">
                    <Award className="w-8 h-8 text-[#282562]" />
                </div>
                <h2 className="text-4xl font-bold text-[#282562] mb-3">Biz Agent 的业务价值</h2>
                <p className="text-xl text-[#6f6a86]">从可持续运行的 Agent 平台，进一步扩展为更懂业务上下文的智能底座</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {benefits.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                        className="bg-white rounded-[28px] p-8 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d1cbe4] mb-5">
                            <item.icon className="w-6 h-6 text-[#282562]" />
                        </div>
                        <h3 className="text-[16px] font-bold text-[#282562] mb-2">{item.title}</h3>
                        <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-block px-4 py-2 bg-[#f8f6fb] border border-[#d1cbe4] rounded-full">
                    <span className="text-[12px] font-medium text-[#282562]">可持续运行 / 可接入知识 / 更懂业务</span>
                </div>
            </motion.div>
        </div>
        </BusinessSectionShell>
    );
}
