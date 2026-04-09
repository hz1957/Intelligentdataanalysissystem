import { motion } from 'motion/react';
import { AppWindow, LockKeyhole, Waypoints } from 'lucide-react';

export function Slide13() {
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
                        <AppWindow className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-3xl font-bold text-white leading-tight">统一接入：Gateway 与 iframe 集成</h2>
                        <p className="text-sm text-blue-200/65 mt-1">通过单一入口接入 Runtime，并支持在页面中嵌入 OpenCode UI</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-6 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                            <LockKeyhole className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-white">Runtime Gateway 限权网关</h3>
                            <div className="text-[10px] text-white/40">浏览器不直接访问 Runtime 容器</div>
                        </div>
                    </div>
                    <ul className="space-y-3 text-[11px] text-white/50">
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            统一签发 <span className="font-mono bg-white/5 px-1 rounded mx-1">url_token</span>，隐藏后方 Runtime 地址与端口信息。
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            动态根据 Session ID 直接查询 Lease 取出真实 Runtime 地址转发。
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            作为拦截面，承担 WebSocket 握手补配与全链路 Token 过期阻断。
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="col-span-12 md:col-span-6 bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                            <Waypoints className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-white">OpenCode UI 页面嵌入</h3>
                            <div className="text-[10px] text-white/40">支持多实例并行嵌入</div>
                        </div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-xl border border-white/[0.04] mb-3">
                        <div className="text-[10px] font-mono text-purple-300/80 break-words leading-relaxed">
                            &lt;iframe<br />
                            &nbsp;&nbsp;src="/opencode/?opencodeUrl=https://gateway/&lt;sessToken&gt;"<br />
                            &gt;&lt;/iframe&gt;
                        </div>
                    </div>
                    <p className="text-[11px] text-white/40 leading-relaxed">
                        基于 Gateway 路由与独立 <span className="font-mono">sessionStorage</span>，前端可以在同屏场景下承载多个 iframe 实例，降低配置与连接相互影响的风险。
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
