import { motion } from 'motion/react';
import { MessageSquare, Layers, Database, RotateCcw, ArrowRight } from 'lucide-react';

export function SlideConversation() {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <div className="inline-flex items-center gap-3 mb-3">
                    <MessageSquare className="w-10 h-10 text-blue-400" />
                    <h2 className="text-5xl font-bold text-white">对话管理</h2>
                </div>
                <p className="text-xl text-blue-200/80">分层压缩 + 版本快照 + 可回滚</p>
            </motion.div>

            {/* Two-Level Compression */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-6"
            >
                <div className="flex items-center gap-2 mb-5">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">分层压缩策略</h3>
                    <span className="ml-auto text-white/30 text-xs font-mono">窗口: 20 轮</span>
                </div>

                <div className="flex items-stretch gap-3">
                    {/* Recent 2 rounds */}
                    <div className="flex-1 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 relative">
                        <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-blue-500/30 rounded text-blue-200 text-[10px] font-bold">
                            近 2 轮
                        </div>
                        <div className="mt-2">
                            <div className="text-white font-bold text-sm mb-1">完整保留</div>
                            <div className="text-blue-200/50 text-xs mb-3">用户指令 + Agent 步骤全文</div>
                            <div className="bg-black/30 rounded-lg p-2.5 border border-white/5 text-[10px] font-mono space-y-1">
                                <div className="text-white/40">user:</div>
                                <div className="text-white/80 truncate">"关联 MH 和 AE，按受试者匹配..."</div>
                                <div className="text-white/40 mt-1">assistant:</div>
                                <div className="text-white/80">1. 提取病史数据 ...</div>
                                <div className="text-white/80">2. 提取不良事件 ...</div>
                                <div className="text-white/50">... 6 步完整计划</div>
                            </div>
                            <div className="mt-2 text-right text-[10px] text-blue-300/60 font-mono">~500 token/轮</div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-white/15" />
                    </div>

                    {/* 2+ rounds ago */}
                    <div className="flex-1 bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30 relative">
                        <div className="absolute -top-2.5 left-3 px-2 py-0.5 bg-cyan-500/30 rounded text-cyan-200 text-[10px] font-bold">
                            2 轮以前
                        </div>
                        <div className="mt-2">
                            <div className="text-white font-bold text-sm mb-1">语义压缩</div>
                            <div className="text-cyan-200/50 text-xs mb-3">保留关键决策，压缩步骤细节</div>
                            <div className="bg-black/30 rounded-lg p-2.5 border border-white/5 text-[10px] font-mono space-y-1">
                                <div className="text-cyan-300/80">[Round 5] 用户关联 MH+AE 表，</div>
                                <div className="text-cyan-300/80">按 SUBJID JOIN，匹配 MHTERM/AETERM</div>
                                <div className="mt-1.5 text-white/30">──────────</div>
                                <div className="text-cyan-300/60">[Round 4] 用户统计 DM 表按年龄分组</div>
                            </div>
                            <div className="mt-2 text-right text-[10px] text-cyan-300/60 font-mono">~150 token/轮</div>
                        </div>
                    </div>
                </div>

                {/* Token budget bar */}
                <div className="mt-4 bg-black/20 rounded-lg p-3 border border-white/5">
                    <div className="flex items-center justify-between text-[10px] text-white/40 mb-1.5">
                        <span>Token 预算</span>
                        <span className="font-mono">~3,700 / 8,000</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '46%' }}></div>
                    </div>
                </div>
            </motion.div>

            {/* Version Snapshot + Rollback */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
            >
                {/* Persistence */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <Database className="w-5 h-5 text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">持久化存储</h4>
                            <div className="text-purple-200/50 text-xs">全量历史对话存入数据库</div>
                        </div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-white/5 text-xs font-mono space-y-1.5">
                        <div className="flex items-center gap-2">
                            <span className="text-purple-300/60">conversation_id</span>
                            <span className="text-white/20">│</span>
                            <span className="text-white/50">message[]</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-300/60">message_id</span>
                            <span className="text-white/20">│</span>
                            <span className="text-white/50">role, content, artifact</span>
                        </div>
                    </div>
                </div>

                {/* Version Snapshot */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                            <RotateCcw className="w-5 h-5 text-amber-300" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">版本快照 & 回滚</h4>
                            <div className="text-amber-200/50 text-xs">每次 Agent 回复绑定 ETL JSON 版本</div>
                        </div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 border border-white/5 text-[10px] font-mono space-y-1.5">
                        <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded">v3</span>
                            <span className="text-white/50">← 当前版本</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 bg-white/10 text-white/40 rounded">v2</span>
                            <span className="text-white/30">关联 MH+AE</span>
                            <span className="text-amber-300/60 ml-auto cursor-pointer">↩ 回滚</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 bg-white/10 text-white/40 rounded">v1</span>
                            <span className="text-white/30">初始 DM 查询</span>
                            <span className="text-amber-300/60 ml-auto cursor-pointer">↩ 回滚</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
