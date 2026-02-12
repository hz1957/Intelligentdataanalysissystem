import { motion } from 'motion/react';
import { Zap, Brain, Database, Settings, Play, ArrowRight } from 'lucide-react';

export function Slide8() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Zap className="w-10 h-10 text-blue-400" />
          <h2 className="text-4xl font-bold text-white">SQL工具优化 II</h2>
        </div>
        <p className="text-xl text-blue-200/80">强化学习: Agent-Lightning + VERL</p>
      </motion.div>

      {/* SQL Agent Workflow */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 mb-4"
      >
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">SQL Agent 工作流 (LangGraph)</h3>
          <span className="ml-auto text-white/30 text-[10px] font-mono">RL 优化目标: write_query + rewrite_query</span>
        </div>

        <div className="flex items-center gap-2">
          {/* write_query */}
          <div className="flex-1 bg-blue-500/10 rounded-lg p-3 border border-blue-500/30 text-center">
            <div className="text-blue-300 text-xs font-bold mb-1">write_query</div>
            <div className="text-white/40 text-[10px]">根据问题 + Schema</div>
            <div className="text-white/40 text-[10px]">生成初始 SQL</div>
            <div className="mt-1 px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[9px] rounded inline-block font-mono">RL ⚡</div>
          </div>

          <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />

          {/* execute_query */}
          <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10 text-center">
            <div className="text-white/70 text-xs font-bold mb-1">execute_query</div>
            <div className="text-white/40 text-[10px]">在目标数据库</div>
            <div className="text-white/40 text-[10px]">执行 SQL</div>
          </div>

          <ArrowRight className="w-3 h-3 text-white/20 flex-shrink-0" />

          {/* check_query */}
          <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10 text-center">
            <div className="text-white/70 text-xs font-bold mb-1">check_query</div>
            <div className="text-white/40 text-[10px]">评估查询结果</div>
            <div className="text-white/40 text-[10px]">或捕获错误</div>
          </div>

          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="text-green-300/60 text-[10px]">✓ END</div>
            <div className="text-white/10">│</div>
            <div className="text-red-300/60 text-[10px]">✗ ↓</div>
          </div>

          {/* rewrite_query */}
          <div className="flex-1 bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30 text-center">
            <div className="text-cyan-300 text-xs font-bold mb-1">rewrite_query</div>
            <div className="text-white/40 text-[10px]">根据反馈重写</div>
            <div className="text-white/40 text-[10px]">→ 重新执行</div>
            <div className="mt-1 px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-[9px] rounded inline-block font-mono">RL ⚡</div>
          </div>
        </div>
      </motion.div>

      {/* Bridge + Reward + Config */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-3 mb-4"
      >
        {/* LitSQLAgent Bridge */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Settings className="w-4 h-4 text-blue-300" />
            </div>
            <span className="text-white font-bold text-xs">LitSQLAgent</span>
          </div>
          <div className="text-white/50 text-[10px] mb-2">桥接 LangGraph → Agent-Lightning</div>
          <div className="bg-black/30 rounded-lg p-2 text-[10px] font-mono space-y-1">
            <div className="text-purple-300">class LitSQLAgent(agl.LitAgent):</div>
            <div className="text-white/50 ml-2">build_agent()</div>
            <div className="text-white/50 ml-2">run_agent(task)</div>
            <div className="text-white/50 ml-2">evaluate() → reward</div>
          </div>
        </div>

        {/* Reward Signal */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Database className="w-4 h-4 text-green-300" />
            </div>
            <span className="text-white font-bold text-xs">Reward 信号</span>
          </div>
          <div className="text-white/50 text-[10px] mb-2">Spider 数据集 (~8k 样本)</div>
          <div className="bg-black/30 rounded-lg p-2 text-[10px] font-mono space-y-1">
            <div className="text-white/60">agent_result == ground_truth?</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-green-300">✓</span>
              <span className="text-white/50">reward = 1</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-red-300">✗</span>
              <span className="text-white/50">reward = 0</span>
            </div>
          </div>
          <div className="mt-2 text-[9px] text-red-300/60">⚠️ 训练时不暴露 ground-truth SQL</div>
        </div>

        {/* VERL Config */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-amber-300" />
            </div>
            <span className="text-white font-bold text-xs">VERL 配置</span>
          </div>
          <div className="text-white/50 text-[10px] mb-2">GRPO 算法 + 分布式训练</div>
          <div className="bg-black/30 rounded-lg p-2 text-[10px] font-mono space-y-1">
            <div className="flex justify-between">
              <span className="text-white/40">algorithm</span>
              <span className="text-amber-300/80">GRPO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">batch_size</span>
              <span className="text-white/60">32</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">group_size</span>
              <span className="text-white/60">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">model</span>
              <span className="text-cyan-300/70 truncate ml-2">Qwen2.5-Coder</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trainer Orchestration */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
      >
        <div className="flex items-center gap-2 mb-3">
          <Play className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">Trainer 编排</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/30 rounded-lg p-3 border border-white/5">
            <div className="text-white/40 text-[10px] mb-1.5">训练</div>
            <div className="font-mono text-[10px] text-cyan-300/80 leading-relaxed">
              <div>trainer = agl.Trainer(</div>
              <div className="ml-2">n_runners=10,</div>
              <div className="ml-2">algorithm=grpo,</div>
              <div className="ml-2">adapter={'{agent_match: "write"}'}</div>
              <div>)</div>
              <div className="text-green-300/70">trainer.fit(agent, train, val)</div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-white/5">
            <div className="text-white/40 text-[10px] mb-1.5">Dry-Run 调试</div>
            <div className="font-mono text-[10px] text-cyan-300/80 leading-relaxed mb-2">
              <div className="text-amber-300/70">trainer.dev()</div>
              <div className="text-white/40"># Baseline 算法, ≤10 个任务</div>
              <div className="text-white/40"># 验证 DB 连接 + 工作流逻辑</div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-1.5 py-0.5 bg-white/5 text-white/40 text-[9px] rounded font-mono">python train.py qwen</span>
              <span className="px-1.5 py-0.5 bg-white/5 text-white/40 text-[9px] rounded font-mono">llama</span>
              <span className="px-1.5 py-0.5 bg-white/5 text-white/40 text-[9px] rounded font-mono">npu</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
