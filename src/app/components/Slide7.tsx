import { motion } from 'motion/react';
import { ShieldAlert, RefreshCw, ShieldCheck, XCircle } from 'lucide-react';

export function Slide7() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <ShieldCheck className="w-10 h-10 text-red-400" />
          <h2 className="text-5xl font-bold text-white">Agent 2: 计划执行引擎</h2>
        </div>
        <p className="text-xl text-red-200/80">运行保护与回退机制：Agent 2 在执行阶段内置的 validator 与 fail-safe</p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.02] rounded-[28px] p-6 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08]">
              <RefreshCw className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-tight">节点级验证器</h3>
              <div className="text-blue-300/50 text-[11px] font-medium">Per-Node Validators</div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl border border-white/[0.03] p-4 text-[11px] text-white/50 leading-relaxed font-medium mb-4">
            Agent 2 在真正落库前，会先做节点级验证；如果上游 output 发生变化，相关下游节点也会被自动重验并同步字段状态。
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-black/30 rounded-xl border border-white/[0.03] p-4">
                <div className="text-white font-bold text-sm mb-2">Join 节点验证</div>
                <div className="text-[11px] text-white/50 leading-relaxed font-medium">
                  校验 <span className="text-cyan-300 font-mono">selected_columns</span> 和 join 参数是否真实存在于上游 output schema 中；若字段不存在，直接拦截。
                </div>
              </div>

              <div className="bg-black/30 rounded-xl border border-white/[0.03] p-4">
                <div className="text-white font-bold text-sm mb-2">SQL Script 节点验证</div>
                <div className="text-[11px] text-white/50 leading-relaxed font-medium">
                  配置 Spark 引擎，用 mock 的上游输入先跑一遍脚本；只有能稳定生成 output，才允许继续向下执行。
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl border border-white/[0.03] p-4 flex flex-col">
              <div className="text-white font-bold text-sm mb-2">失败分支处理</div>
              <div className="text-[11px] text-white/50 leading-relaxed font-medium mb-4">
                节点验证失败后，普通错误先回传 warning 进入下一轮 loop 修补；若连续失败不收敛，再触发断路器终止执行。
              </div>

              <div className="bg-white/[0.03] rounded-xl border border-white/[0.03] p-3 text-[11px] text-white/50 font-medium mb-4">
                <div className="text-white/80 font-bold mb-1">可修复错误</div>
                <div className="leading-relaxed">保留 warning，让下一轮 loop 继续修补，而不是立刻切走整条执行路径。</div>
              </div>

              <div className="bg-white/[0.03] rounded-xl border border-white/[0.03] p-3 text-[11px] text-white/50 flex items-center gap-4 mt-auto">
                <div className="flex bg-black/30 p-2 rounded-lg border border-white/[0.05] gap-1.5 shrink-0">
                  <XCircle className="w-4 h-4 text-red-400/30" />
                  <XCircle className="w-4 h-4 text-red-400/60" />
                  <XCircle className="w-4 h-4 text-red-500" />
                </div>
                <div className="font-medium leading-relaxed">
                  若连续触发验证失败，达到 <span className="text-red-400 bg-red-500/10 px-1 py-0.5 rounded">3 轮失败断路器</span> 阈值后直接 Abort。
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-2 py-1 bg-white/[0.05] text-white/70 border border-white/[0.08] rounded-lg text-[10px]">Schema Change Detect</span>
            <span className="px-2 py-1 bg-white/[0.05] text-white/70 border border-white/[0.08] rounded-lg text-[10px]">Downstream Refresh</span>
            <span className="px-2 py-1 bg-white/[0.05] text-white/70 border border-white/[0.08] rounded-lg text-[10px]">Mock Run Before Commit</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-white/[0.02] rounded-[28px] p-5 border border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-2xl hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08]">
              <ShieldAlert className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-sm tracking-tight">无效变更熔断</h3>
          </div>

          <div className="bg-black/30 rounded-xl border border-white/[0.03] p-3 text-[11px] text-white/50 font-medium leading-relaxed">
            局部修改如果没有产生有效结构变化，说明修补无效，系统会直接切回 <span className="text-white/80">full rebuild</span> 路径。
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 text-center"
      >
        <span className="text-white/40 text-xs font-mono font-medium px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full inline-block">
          这些保护不是执行后的补丁，而是内置在 Agent 2 每一步执行和每个关键节点里的 validator。
        </span>
      </motion.div>
    </div>
  );
}
