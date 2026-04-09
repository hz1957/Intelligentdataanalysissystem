import { motion } from 'motion/react';
import { MessageSquare, RotateCcw, ArrowRight, Save, Route, CalendarClock } from 'lucide-react';

export function Slide5() {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center gap-3 mb-3">
                    <MessageSquare className="w-10 h-10 text-amber-400" />
                    <h2 className="text-5xl font-bold text-white">Agent 1: 对话规划入口</h2>
                </div>
                <p className="text-xl text-amber-200/80">状态与历史记录同步：保证对话上下文可重建，生成 Plan 时不串历史</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

                {/* Left Side: Frontend History Management */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04] transition-all"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Route className="w-6 h-6 text-amber-400" />
                        <div>
                            <h3 className="text-white font-bold text-lg">Active Path 重建</h3>
                            <div className="text-amber-200/50 text-[10px]">前端历史裁剪规则</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs text-white/50 leading-relaxed">
                            <span className="font-mono text-amber-300">GET /messages</span> 返回完整时间线；前端不会删历史，而是通过
                            <span className="font-mono text-white/80"> buildActivePathSet(history)</span> 重新找出当前有效分支。
                        </p>

                        <div className="relative h-[280px] rounded-2xl border border-white/[0.05] bg-black/30 overflow-hidden px-6 py-5">
                            <div className="absolute left-6 top-4 text-[10px] text-white/30 font-mono">
                                full history / active path
                            </div>

                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 180 100"
                                preserveAspectRatio="xMidYMid meet"
                                aria-label="history tree"
                            >
                                <g fill="none" strokeLinecap="round">
                                    <line x1="90" y1="18" x2="90" y2="34" stroke="rgba(251,191,36,0.86)" strokeWidth="1" />
                                    <line x1="90" y1="34" x2="43" y2="54" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
                                    <line x1="43" y1="54" x2="25" y2="77" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                                    <line x1="90" y1="34" x2="86" y2="56" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
                                    <line x1="86" y1="56" x2="72" y2="78" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                                    <line x1="90" y1="34" x2="140" y2="54" stroke="rgba(251,191,36,0.86)" strokeWidth="1" />
                                    <line x1="140" y1="54" x2="155" y2="78" stroke="rgba(251,191,36,0.86)" strokeWidth="1" />
                                </g>

                                <g fontFamily="ui-monospace, SFMono-Regular, monospace" textAnchor="middle">
                                    <circle cx="90" cy="18" r="1.25" fill="rgba(252,211,77,0.96)" />
                                    <text x="90" y="24.5" fill="rgba(255,248,220,0.98)" fontSize="4">m1</text>

                                    <circle cx="90" cy="34" r="1.45" fill="rgba(252,211,77,0.96)" />
                                    <text x="90" y="40.5" fill="rgba(255,248,220,0.98)" fontSize="4">m2</text>
                                    <text x="90" y="45" fill="rgba(255,248,220,0.66)" fontSize="2.8">rollback target</text>

                                    <circle cx="43" cy="54" r="1.25" fill="rgba(255,255,255,0.58)" />
                                    <text x="43" y="60.5" fill="rgba(255,255,255,0.58)" fontSize="4">m3</text>

                                    <circle cx="25" cy="77" r="1.15" fill="rgba(255,255,255,0.46)" />
                                    <text x="25" y="83" fill="rgba(255,255,255,0.46)" fontSize="4">m4</text>

                                    <circle cx="86" cy="56" r="1.2" fill="rgba(255,255,255,0.56)" />
                                    <text x="86" y="62.5" fill="rgba(255,255,255,0.56)" fontSize="4">m5</text>

                                    <circle cx="72" cy="78" r="1.1" fill="rgba(255,255,255,0.42)" />
                                    <text x="72" y="84" fill="rgba(255,255,255,0.42)" fontSize="4">m6</text>

                                    <circle cx="140" cy="54" r="1.45" fill="rgba(252,211,77,0.96)" />
                                    <text x="140" y="60.5" fill="rgba(255,248,220,0.98)" fontSize="4">m7</text>

                                    <circle cx="155" cy="78" r="1.45" fill="rgba(252,211,77,0.96)" />
                                    <text x="155" y="84" fill="rgba(255,248,220,0.98)" fontSize="4">m8</text>
                                    <text x="155" y="88.5" fill="rgba(255,248,220,0.66)" fontSize="2.8">active path</text>

                                    <text x="22" y="92" fill="rgba(255,255,255,0.42)" fontSize="3">inactive</text>
                                    <text x="68" y="92" fill="rgba(255,255,255,0.42)" fontSize="3">inactive</text>
                                    <text x="156" y="92" fill="rgba(255,248,220,0.76)" fontSize="3">active</text>
                                </g>
                            </svg>
                        </div>

                        <div className="rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-3 text-[11px] leading-relaxed text-white/55 font-mono">
                            <span className="text-green-300">buildActivePathSet(history)</span>
                            <span className="text-white/35"> =&gt; </span>
                            只把
                            <span className="text-amber-200"> m1 -&gt; m2 -&gt; m7 -&gt; m8</span>
                            这条高亮分支送入当前上下文，其余分支仍保留在完整历史中，但不会参与本轮对话。
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Remote Synchronous Rollbacks */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/[0.02] rounded-[28px] p-7 border border-white/[0.06] hover:-translate-y-1 hover:shadow-2xl hover:bg-white/[0.04] transition-all"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <RotateCcw className="w-6 h-6 text-blue-400" />
                        <div>
                            <h3 className="text-white font-bold text-lg">回滚后的远端对齐</h3>
                            <div className="text-blue-200/50 text-[10px]">恢复历史版本时同步外部状态</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs text-white/50 leading-relaxed">
                            回滚不是只改前端游标，而是把消息树、数据库里的当前分支，以及远端 ETL 状态一起切回到同一个版本。
                        </p>

                        <div className="relative rounded-2xl border border-white/[0.05] bg-black/30 p-4 overflow-hidden">
                            <div className="absolute left-[20px] top-[38px] bottom-[38px] w-px border-l border-dashed border-blue-500/30"></div>

                            <div className="space-y-4">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-mono text-blue-200">1</div>
                                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2">
                                        <div className="text-[11px] text-white/75 font-medium">POST <span className="font-mono text-blue-200">/messages/.../rollback</span></div>
                                        <div className="text-[10px] text-white/40 mt-1">用户选中一个历史节点并点击「恢复版本」</div>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-mono text-blue-200">2</div>
                                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2">
                                        <div className="text-[11px] text-white/75 font-medium">插入 <span className="font-mono text-amber-200">ROLLBACK_NOTICE</span></div>
                                        <div className="text-[10px] text-white/40 mt-1">用 <span className="font-mono text-white/70">parent_message_id</span> 切断旧分支，明确当前回滚锚点</div>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-mono text-blue-200">3</div>
                                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2">
                                        <div className="text-[11px] text-white/75 font-medium">回溯最近一个可用的 <span className="font-mono text-white/80">oldEtl plan</span></div>
                                        <div className="text-[10px] text-white/40 mt-1">找到这次回滚应恢复的远端配置版本</div>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-mono text-blue-200">4</div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2">
                                            <div className="text-[11px] text-white/75 font-medium">同步远端状态</div>
                                            <div className="text-[10px] text-white/40 mt-1">把回滚后的版本重新写回线上环境</div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-amber-300/80 flex-shrink-0" />
                                        <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-center min-w-[128px]">
                                            <div className="text-[10px] font-mono text-amber-200">Remote saveEtl(...)</div>
                                            <div className="text-[9px] text-amber-100/60 mt-1">线上 ETL 对齐</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-mono text-blue-200">5</div>
                                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.03] px-3 py-2">
                                        <div className="text-[11px] text-white/75 font-medium">记录 <span className="font-mono text-white/80">remote_sync_result</span></div>
                                        <div className="text-[10px] text-white/40 mt-1">把同步结果挂在 notice artifact 上，便于后续追踪与重放</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-2 w-full">
                            <div className="flex-1 bg-white/[0.03] px-2 py-1.5 rounded flex items-center justify-center gap-1.5 border border-white/[0.08] text-white/70 text-[10px]">
                                <Save className="w-3 h-3 text-blue-400" /> 持久化
                            </div>
                            <div className="flex-1 bg-white/[0.03] px-2 py-1.5 rounded flex items-center justify-center gap-1.5 border border-white/[0.08] text-white/70 text-[10px]">
                                <CalendarClock className="w-3 h-3 text-blue-400" /> 远端状态一致
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 text-center text-[10px] text-white/40"
            >
                <div className="bg-black/30 inline-block px-4 py-2 rounded-lg border border-white/5 font-mono">
                    触发 Agent 2 的前提：<span className="text-white">refined_instruction</span> 已生成，且 <span className="text-white">relevant_tables</span> 至少包含一个有效 dsId。
                </div>
            </motion.div>

        </div>
    );
}
