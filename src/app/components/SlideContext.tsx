import { motion } from 'motion/react';
import { Database, Sparkles, FileText, ArrowRight, Layers, Lightbulb } from 'lucide-react';

export function SlideContext() {
    return (
        <div className="max-w-6xl w-full mx-auto">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-white mb-4">SQL工具优化 I</h2>
                <p className="text-lg text-blue-200/60">Context Engineering: Dynamic Few-Shot & Schema Enrichment</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Left: Dynamic Few-Shot (RAG) */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-full"
                >
                    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl opacity-20"></div>
                    <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/10">
                                <Database className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Dynamic Few-Shot</h3>
                                <span className="text-xs text-blue-300 px-2 py-0.5 bg-blue-500/10 rounded border border-blue-500/10">RAG Enhanced</span>
                            </div>
                        </div>

                        <div className="space-y-6 mb-4 flex-grow relative pl-2">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-blue-500/20"></div>

                            {/* Step 1 */}
                            <div className="relative pl-10 group">
                                <div className="absolute left-[15px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900/50 group-hover:bg-blue-400 transition-colors z-10"></div>
                                <h4 className="text-sm font-bold text-blue-200 mb-1">1. Query Rewrite (LLM)</h4>
                                <p className="text-xs text-blue-200/60 leading-relaxed">
                                    提取核心意图，构造标准化检索文本
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pl-10 group">
                                <div className="absolute left-[15px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900/50 group-hover:bg-blue-400 transition-colors z-10"></div>
                                <h4 className="text-sm font-bold text-blue-200 mb-1">2. Vector Search (FAISS)</h4>
                                <p className="text-xs text-blue-200/60 leading-relaxed">
                                    Embedding + Cosine Similarity 匹配历史成功案例
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pl-10 group">
                                <div className="absolute left-[15px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900/50 group-hover:bg-blue-400 transition-colors z-10"></div>
                                <h4 className="text-sm font-bold text-blue-200 mb-1">3. Context Injection</h4>
                                <p className="text-xs text-blue-200/60 leading-relaxed">
                                    Top-K SQL 作为 Few-Shot 示例引导生成
                                </p>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <Database className="w-4 h-4" />
                                <span>Vector DB (FAISS)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Schema Enrichment */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative h-full"
                >
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-xl opacity-20"></div>
                    <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/10">
                                <FileText className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Schema Enrichment</h3>
                                <span className="text-xs text-cyan-300 px-2 py-0.5 bg-cyan-500/10 rounded border border-cyan-500/10">Prompt Optimization</span>
                            </div>
                        </div>

                        <p className="text-blue-100/70 mb-6 leading-relaxed">
                            针对已选定的表，在 Prompt 中注入元数据，帮助 LLM 准确理解数据分布，无需额外检索。
                        </p>

                        <ul className="space-y-4 mb-6 flex-grow">
                            <li className="flex items-start gap-3">
                                <Layers className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm">
                                    <strong>Metadata</strong>: 字段描述、数据类型
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Lightbulb className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 text-sm">
                                    <strong>Values</strong>: 采样值 (Sample Values) 消除歧义
                                </span>
                            </li>
                        </ul>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <FileText className="w-4 h-4" />
                                <span>Enhanced Prompt Context</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
