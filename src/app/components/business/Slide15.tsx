import { motion } from 'motion/react';
import { MessageCircleMore, Wrench, BookOpenText, CircleCheckBig } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

const summary = [
    {
        icon: MessageCircleMore,
        title: '不止提供对话能力',
        desc: '平台的价值不在于更像聊天工具，而在于能够围绕业务目标推进任务完成。'
    },
    {
        icon: BookOpenText,
        title: '依赖业务知识与规则',
        desc: '业务资料、制度和规则越完整，系统的判断和输出就越贴近真实业务需求。'
    },
    {
        icon: Wrench,
        title: '依赖系统与工具能力',
        desc: '只有具备系统连通、工具调用和安全控制能力，复杂业务场景才真正能够落地。'
    }
];

export function Slide15() {
    return (
        <BusinessSectionShell eyebrow="SUMMARY">
            <div className="max-w-6xl w-full mx-auto">
                <motion.div
                    initial={{ y: -16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-bold text-[#282562] mb-3">Biz Agent：面向业务场景的智能体平台</h2>
                    <p className="text-xl text-[#6f6a86]">
                        它不是一个独立的聊天组件，而是建立在现有业务系统和数据体系之上的智能体平台
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {summary.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                            className="rounded-[28px] border border-[#d9d4e6] bg-white p-6 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1cbe4] bg-[#f8f6fb]">
                                <item.icon className="h-6 w-6 text-[#282562]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#282562] mb-2">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-[#d9d4e6] bg-[#f8f6fb] px-5 py-3 shadow-[0_14px_32px_rgba(40,37,98,0.06)]">
                        <CircleCheckBig className="h-5 w-5 text-[#C8242B]" />
                        <span className="text-sm font-medium text-[#282562]">
                            业务经验决定方向，工程能力决定落地质量。
                        </span>
                    </div>
                </motion.div>
            </div>
        </BusinessSectionShell>
    );
}
