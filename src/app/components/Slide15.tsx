import { motion } from 'motion/react';
import { Award, Zap, Shield, Blocks } from 'lucide-react';

const benefits = [
    { icon: Blocks, title: '统一接入', desc: '通过标准化 iframe 接口，把代码运行能力接入现有平台与页面。' },
    { icon: Shield, title: '运行隔离', desc: '基于 Docker、PTY 与租约记录隔离不同 App + User 的运行环境。' },
    { icon: Zap, title: '状态恢复', desc: '借助 RustFS 持久化配置与工作区状态，在 Runtime 重建后恢复最近一次同步结果。' }
];

export function Slide15() {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 border border-blue-500/20">
                    <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">Biz Agent 能力总结</h2>
                <p className="text-xl text-blue-200/80">为上层 AI 应用提供统一的运行、隔离与恢复底座</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {benefits.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                        className="bg-white/[0.02] rounded-[28px] p-8 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-5">
                            <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-[16px] font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-[12px] text-white/50 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
                    <span className="text-[12px] font-medium text-white/80 tracking-wide uppercase">Embedded / Isolated / Recoverable</span>
                </div>
            </motion.div>
        </div>
    );
}
