import { motion } from 'motion/react';
import { Cog, Map, Hammer, ArrowDown } from 'lucide-react';

export function Slide6() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Cog className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">Blueprint-Executor</h2>
        </div>
        <p className="text-xl text-blue-200/80">执行层 - 全局规划 + 局部执行</p>
      </motion.div>

      {/* Two-phase layout */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-4 mb-3"
      >
        {/* Phase 1: Global Planner */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Map className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Global Planner <span className="text-blue-300/60 font-normal">(Architect)</span></h4>
              <div className="text-blue-200/50 text-[10px]">一次性规划完整 DAG 拓扑，不涉及 SQL 细节</div>
            </div>
          </div>

          {/* Blueprint JSON preview */}
          <div className="bg-black/40 rounded-lg p-2.5 border border-white/5 text-[10px] font-mono leading-relaxed">
            <div className="text-white/30">{'{'} "steps": {'['}</div>
            <div className="ml-2 text-white/70">
              <span className="text-blue-300">node_1</span>: AddSelectColumns <span className="text-white/30">// 选取订单字段</span>
            </div>
            <div className="ml-2 text-white/70">
              <span className="text-blue-300">node_2</span>: AddSelectColumns <span className="text-white/30">// 选取用户字段</span>
            </div>
            <div className="ml-2 text-white/70">
              <span className="text-cyan-300">node_3</span>: AddJoinNode <span className="text-white/30">// deps: [1,2]</span>
            </div>
            <div className="ml-2 text-white/70">
              <span className="text-amber-300">node_4</span>: AddSqlScript <span className="text-white/30">// deps: [3]</span>
            </div>
            <div className="text-white/30">{'] }'}</div>
          </div>

          <div className="mt-2 flex gap-2">
            <span className="px-1.5 py-0.5 bg-blue-500/15 text-blue-300/80 text-[10px] rounded">仅 intent + tool + deps</span>
            <span className="px-1.5 py-0.5 bg-blue-500/15 text-blue-300/80 text-[10px] rounded">Token 消耗低</span>
          </div>
        </div>

        {/* Phase 2: Local Executor */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Hammer className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Local Executor <span className="text-amber-300/60 font-normal">(Mason)</span></h4>
              <div className="text-amber-200/50 text-[10px]">遍历 Blueprint，逐步生成具体工具参数</div>
            </div>
          </div>

          {/* Execution flow */}
          <div className="bg-black/40 rounded-lg p-2.5 border border-white/5 text-[10px] font-mono space-y-1.5">
            <div className="text-white/40">foreach step in blueprint:</div>
            <div className="ml-2 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-300">1.</span>
                <span className="text-white/70">resolve_deps → 上游 Schema</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-300">2.</span>
                <span className="text-white/70">local_context = intent + upstream_fields + downstream_intent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-300">3.</span>
                <span className="text-white/70">LLM → 生成 SQL / 工具参数</span>
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2">
            <span className="px-1.5 py-0.5 bg-amber-500/15 text-amber-300/80 text-[10px] rounded">上下文纯净</span>
            <span className="px-1.5 py-0.5 bg-amber-500/15 text-amber-300/80 text-[10px] rounded">单步可重试</span>
            <span className="px-1.5 py-0.5 bg-amber-500/15 text-amber-300/80 text-[10px] rounded">感知下游需求</span>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="flex items-center justify-center gap-6 my-3 py-2"
      >
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-white/60">全局规划 (Map-First)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          <span className="text-white/60">恒定且短的上下文 (仅局部依赖)</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-white/60">单步重试 / 修正 Blueprint</span>
        </div>
      </motion.div>

      {/* Executor Log */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white/30 text-[10px] font-mono">▸ Executor 并发运行日志 (多会话)</span>
        </div>
        <div className="bg-black/50 rounded-xl border border-white/10 p-3 max-h-[155px] overflow-hidden font-mono text-[9px] leading-[1.4] space-y-[1px]">
          <div className="text-white/30">07:37:53 <span className="text-cyan-400/70">[Generator]</span> No oldEtl. Engaging ChatSchemaPlanner (Create Mode).</div>
          <div className="text-white/30">07:37:54 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13130</div>
          <div className="text-white/30">07:37:54 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Iteration 6: 1 tools (16.81s)</div>
          <div className="text-white/30">07:37:59 <span className="text-amber-400/70">[7A9130]</span> <span className="text-white/50">[Rewrite]</span> Selected 3 of 55 tables. Done.</div>
          <div className="text-white/30">07:38:04 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13131</div>
          <div className="text-white/30">07:38:04 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Iteration 7: 1 tools (10.68s)</div>
          <div className="text-white/30">07:38:11 <span className="text-cyan-400/70">[Generator]</span> No oldEtl. Engaging ChatSchemaPlanner (Create Mode).</div>
          <div className="text-white/30">07:38:13 <span className="text-green-400/80">[B630F7]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13253</div>
          <div className="text-white/30">07:38:13 <span className="text-green-400/80">[B630F7]</span> <span className="text-white/50">[Executor]</span> Iteration 1: 1 tools (19.27s)</div>
          <div className="text-white/30">07:38:14 <span className="text-purple-400/80">[E4AF3A]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13254</div>
          <div className="text-white/30">07:38:14 <span className="text-purple-400/80">[E4AF3A]</span> <span className="text-white/50">[Executor]</span> Iteration 1: 1 tools (23.31s)</div>
          <div className="text-white/30">07:38:15 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13255</div>
          <div className="text-white/30">07:38:15 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Iteration 8: 1 tools (11.08s)</div>
          <div className="text-white/30">07:38:25 <span className="text-red-400/80">[1AD180]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13256</div>
          <div className="text-white/30">07:38:25 <span className="text-red-400/80">[1AD180]</span> <span className="text-white/50">[Executor]</span> Iteration 9: 1 tools (43.61s)</div>
          <div className="text-white/30">07:38:31 <span className="text-amber-400/70">[7A9130]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13257</div>
          <div className="text-white/30">07:38:31 <span className="text-amber-400/70">[7A9130]</span> <span className="text-white/50">[Executor]</span> Iteration 1: 1 tools (19.55s)</div>
          <div className="text-white/30">07:38:31 <span className="text-blue-400/80">[771A73]</span> <span className="text-white/50">[Executor]</span> Executed AddSelectColumnsNode → node_13258</div>
        </div>
      </motion.div>
    </div>
  );
}
