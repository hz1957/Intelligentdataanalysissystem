import { motion } from 'motion/react';
import { AppWindow, ArrowRight, FolderSync, PlayCircle } from 'lucide-react';
import { BusinessSectionShell } from '@/app/components/business/BusinessSectionShell';

export function Slide14() {
    return (
        <BusinessSectionShell eyebrow="BUSINESS SESSION">
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
                        <h2 className="text-3xl font-bold text-[#282562] leading-tight">业务会话如何持续工作</h2>
                        <p className="text-sm text-[#6f6a86] mt-1">用户进入 Biz Agent 后，可以围绕同一业务场景持续推进任务，而不是每次重新开始</p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] border border-[#d1cbe4] flex items-center justify-center">
                            <PlayCircle className="w-5 h-5 text-[#282562]" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-[#282562]">业务会话入口</h3>
                            <div className="text-[10px] text-slate-500">围绕具体业务场景进入同一个工作界面</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">选择业务场景</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">用户先进入对应的业务场景，再发起一个新的业务会话。</div>
                        </div>
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">进入专属工作空间</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">进入会话后，Biz Agent 会打开该会话对应的对话界面和工作空间。</div>
                        </div>
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">自动带入相关资料</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">与当前业务场景相关的配置、skills 和资料，会在进入会话时一并带入。</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="col-span-12 md:col-span-6 bg-white rounded-[28px] p-6 border border-[#d9d4e6] shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#f8f6fb] border border-[#d1cbe4] flex items-center justify-center">
                            <FolderSync className="w-5 h-5 text-[#C8242B]" />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-[#282562]">如何保持工作连续性</h3>
                            <div className="text-[10px] text-slate-500">让任务和资料尽量接着上一次进度继续推进</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">继续沿用原有会话</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">同一业务场景下的后续任务，可以继续在原有会话和工作空间里推进。</div>
                        </div>
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">关键内容自动保存</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">系统会自动保存关键配置和工作结果，减少人工反复保存的负担。</div>
                        </div>
                        <div className="rounded-xl border border-[#e6e1ec] bg-[#f8f6fb] px-4 py-3">
                            <div className="text-[#282562] font-bold text-[12px] mb-1">再次进入时恢复进度</div>
                            <div className="text-slate-500 text-[11px] leading-relaxed">即使中途退出或中断，用户再次进入时也能恢复最近一次保存的关键工作内容。</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-12 rounded-[28px] border border-[#d9d4e6] bg-white px-5 py-4 shadow-[0_14px_32px_rgba(40,37,98,0.08)]"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 text-[11px] text-slate-500">
                        <span>选择业务场景</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8] mx-auto md:mx-0" />
                        <span>进入 Biz Agent 会话</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8] mx-auto md:mx-0" />
                        <span>自动带入资料与工作空间</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b4aec8] mx-auto md:mx-0" />
                        <span>再次进入继续工作</span>
                    </div>
                </motion.div>
            </div>
        </div>
        </BusinessSectionShell>
    );
}
