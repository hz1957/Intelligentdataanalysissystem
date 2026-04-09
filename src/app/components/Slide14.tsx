import { motion } from 'motion/react';
import { DatabaseZap, FolderSync, TimerReset, CloudLightning } from 'lucide-react';

export function Slide14() {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mb-6"
            >
                <div className="flex items-center gap-4 rounded-[28px] border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 shrink-0">
                        <DatabaseZap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-3xl font-bold text-white leading-tight">工作空间云端同步与恢复</h2>
                        <p className="text-sm text-blue-200/65 mt-1">依托 RustFS 实现配置拉取、状态同步与 Runtime 重建后的恢复</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-4 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] flex flex-col items-center text-center hover:bg-white/[0.04] transition-all"
                >
                    <div className="h-14 w-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                        <CloudLightning className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-[14px] font-bold text-white mb-2">初始化配置恢复</h3>
                    <p className="text-[11px] text-white/40 leading-relaxed">
                        启动时从 RustFS 拉取 global 与 app config；当 Runtime 重建后，可恢复最近一次同步的工作区内容。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="col-span-12 md:col-span-4 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] flex flex-col items-center text-center hover:bg-white/[0.04] transition-all"
                >
                    <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                        <TimerReset className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-[14px] font-bold text-white mb-2">Idle 空闲时段自动上云</h3>
                    <p className="text-[11px] text-white/40 leading-relaxed">
                        Runtime 在检测到文件变化后，会在设定的空闲窗口内自动执行同步，减少频繁写入带来的干扰。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-12 md:col-span-4 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] flex flex-col items-center text-center hover:bg-white/[0.04] transition-all"
                >
                    <div className="h-14 w-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
                        <FolderSync className="w-7 h-7 text-rose-400" />
                    </div>
                    <h3 className="text-[14px] font-bold text-white mb-2">网关节流降躁 (Debounce)</h3>
                    <p className="text-[11px] text-white/40 leading-relaxed">
                        针对大量写事件引入 Debounce 处理，合并碎片化同步请求，降低云端存储与带宽压力。
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
