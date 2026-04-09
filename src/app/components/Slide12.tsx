import { motion } from 'motion/react';
import { Cpu, Power, ShieldCheck, Activity } from 'lucide-react';

const steps = [
    { step: '1', title: '会话发起', desc: '用户请求 /api/sessions 分配环境，后端创建 Session 记录。' },
    { step: '2', title: '分配或复用 Runtime', desc: '按 appId + userId 组合查找租约；若无对应 Runtime，则创建或启动新的运行实例。' },
    { step: '3', title: '初始化环境', desc: 'Runtime 启动后注入对应的全局/应用配置，并启动 OpenCode 服务。' },
    { step: '4', title: '后续会话复用', desc: '同一 App + User 维度下的后续 Session 可以继续复用该 Runtime。' },
];

export function Slide12() {
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
                        <Cpu className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-3xl font-bold text-white leading-tight">按 App + User 分配的 Runtime 生命周期</h2>
                        <p className="text-sm text-blue-200/65 mt-1">基于 Lease 的动态启动、复用与路由机制</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-7 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06]"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-5 bg-blue-500 rounded-full" />
                        <h3 className="text-sm font-bold text-white">沙盒动态启停流</h3>
                    </div>
                    <div className="space-y-3">
                        {steps.map((item, i) => (
                            <div key={i} className="flex gap-3 items-start p-3 bg-black/20 rounded-xl border border-white/[0.03]">
                                <div className="w-6 h-6 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400 font-bold text-[11px] shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-[12px] mb-0.5">{item.title}</div>
                                    <div className="text-white/40 text-[11px]">{item.desc}</div>
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
                    <div className="bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <h3 className="text-sm font-bold text-white">状态与记录表</h3>
                        </div>
                        <div className="bg-black/30 p-3 rounded-xl border border-white/[0.04] text-[10px] text-white/50 font-mono space-y-2">
                            <div className="flex justify-between border-b border-white/[0.05] pb-2">
                                <span className="text-cyan-300/80">Container Lease</span>
                                <span className="text-white/30">管理运行时心跳</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span className="text-emerald-300/80">Session Mapping</span>
                                <span className="text-white/30">绑定 App + User</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-white/40 mt-4 leading-relaxed">
                            通过数据库维护 container_leases 与 session 映射，明确 Runtime 的归属、地址与后续访问路径。
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
