import { motion } from 'motion/react';
import { AppWindow, ArrowRight, BookOpenText, SearchCode, Sparkles, FileSpreadsheet, RefreshCcw, Waypoints } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide13() {
    return (
        <BusinessSectionShell eyebrow="AGENTIC RAG">
        <div className="max-w-6xl w-full mx-auto pt-5">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mb-6"
            >
                <div className="flex items-center gap-4 rounded-[28px] border border-[#d9d4e6] bg-[#f6f4fa] px-6 py-5 shadow-[0_10px_24px_rgba(40,37,98,0.06)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#cbc4e2] bg-white shrink-0">
                        <AppWindow className="w-6 h-6 text-[#282562]" />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-3xl font-bold text-[#282562] leading-tight">Context Engine 如何接入业务知识</h2>
                        <p className="text-sm text-[#6f6a86] mt-1">优先走轻量检索，复杂材料再升级到更主动的检索方式</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d1cbe4]">
                            <BookOpenText className="w-5 h-5 text-[#282562]" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-[#282562]">标准 RAG</h3>
                            <div className="text-[10px] text-slate-500">适合 SOP、FAQ、规范和常规业务资料</div>
                        </div>
                    </div>
                    <ul className="space-y-3 text-[11px] text-slate-600">
                        <li className="flex items-start gap-2">
                            <span className="text-[#C8242B] mt-0.5">•</span>
                            先做文本解析、切块和索引，把原始文档变成可检索的业务知识库。
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#C8242B] mt-0.5">•</span>
                            查询时走关键词检索、向量检索和结果重排，优先用更轻量的方法返回相关证据。
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#C8242B] mt-0.5">•</span>
                            适合结构清晰、检索边界稳定的业务材料。
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] flex items-center justify-center border border-[#d1cbe4]">
                            <SearchCode className="w-5 h-5 text-[#282562]" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-[#282562]">Skill 引导的 Agentic RAG</h3>
                            <div className="text-[10px] text-slate-500">适合复杂文档、异构材料和深度业务场景</div>
                        </div>
                    </div>
                    <div className="bg-[#f8f6fb] p-3 rounded-xl border border-[#e6e1ec] mb-3 space-y-2 text-[11px] text-slate-600">
                        <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                            <div className="text-[#282562] font-bold mb-1">业务导航</div>
                            <div className="leading-relaxed">由技术人员补充业务导航文档，帮助 Agent 先定位该去哪些知识目录里查。</div>
                        </div>
                        <div className="rounded-lg border border-[#e6e1ec] bg-white px-3 py-2">
                            <div className="text-[#282562] font-bold mb-1">主动检索</div>
                            <div className="leading-relaxed">Agent 可以改写关键词并调用不同工具，对表格、脚本和长文档做定点查找。</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                        <span>业务问题</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8]" />
                        <span>定位资料</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8]" />
                        <span>多轮检索</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8]" />
                        <span>返回依据</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-3">
                        这样既能覆盖常规资料检索，也能让 Biz Agent 更快适配复杂业务场景。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-12 rounded-[28px] border border-[#d9d4e6] bg-white px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-2 text-[12px] text-[#6f6a86] mb-4">
                        <Sparkles className="w-4 h-4 text-[#C8242B]" />
                        默认先走成本更低的标准检索，只有在资料复杂或首轮结果不足时，才升级到更主动的 Agentic 检索。
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                                <FileSpreadsheet className="w-3.5 h-3.5 text-[#C8242B]" />
                                处理复杂资料更灵活
                            </div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">
                                遇到 Excel、表格或脚本类资料时，不只检索文本，还能先做计算和整理，再返回更可用的结果。
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                                <RefreshCcw className="w-3.5 h-3.5 text-[#282562]" />
                                检索路径可以纠偏
                            </div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">
                                如果首轮找到的资料不对，Agent 可以换关键词、换资料范围，再走下一轮检索。
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="flex items-center gap-2 text-[#282562] font-bold text-[12px] mb-1">
                                <Waypoints className="w-3.5 h-3.5 text-[#282562]" />
                                更适合长链路问题
                            </div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">
                                能逐步处理跨多个文档、多个步骤的复杂业务问题，而不是只看一轮召回结果。
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        </BusinessSectionShell>
    );
}
