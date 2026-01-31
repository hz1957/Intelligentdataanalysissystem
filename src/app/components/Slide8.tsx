import { motion } from 'motion/react';
import { Zap, Code, Wrench } from 'lucide-react';

export function Slide8() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Zap className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">智能生成与自愈</h2>
        </div>
        <p className="text-xl text-blue-200/80">RL 生成 + Spark 校验 - 逻辑语法解耦</p>
      </motion.div>

      {/* RL Generation */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">逻辑-语法解耦</h3>
              <p className="text-blue-200 text-base">Planner 负责逻辑，RL 模型负责代码生成</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-5 border border-blue-400/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/40 flex items-center justify-center">
                  <span className="text-base">🧠</span>
                </div>
                <h4 className="text-lg font-bold text-white">Planner</h4>
              </div>
              <p className="text-blue-200 text-xs mb-2">专注于逻辑意图</p>
              <div className="bg-black/40 rounded-lg p-2 font-mono text-xs text-green-300">
                "Filter Age &gt; 18"
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-5 border border-cyan-400/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/40 flex items-center justify-center">
                  <span className="text-base">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-white">RL Model</h4>
              </div>
              <p className="text-cyan-200 text-xs mb-2">生成高精度 Spark SQL</p>
              <div className="bg-black/40 rounded-lg p-2 font-mono text-xs text-cyan-300">
                SELECT * WHERE AGE &gt; 18
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
            <p className="text-blue-200 text-xs">
              AddSqlScriptNode 工具内置 <span className="font-semibold">强化学习小模型</span>，
              专门将逻辑转换为高质量 SQL，避免 LLM 直接生成代码的不稳定性
            </p>
          </div>
        </div>
      </motion.div>

      {/* Self-Healing Validation */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">自愈式沙箱</h3>
              <p className="text-blue-200 text-base">Spark Session 实时校验与自动修正</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/30 flex items-center justify-center flex-shrink-0 text-xs text-white font-bold">
                    1
                  </div>
                  <div>
                    <div className="text-blue-300 font-semibold mb-0.5 text-xs">本地运行</div>
                    <p className="text-white/80 text-xs font-mono">spark.sql(query)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/30 flex items-center justify-center flex-shrink-0 text-xs text-white font-bold">
                    2
                  </div>
                  <div>
                    <div className="text-cyan-300 font-semibold mb-0.5 text-xs">检测错误</div>
                    <p className="text-white/80 text-xs">报错则触发修复</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs text-white font-bold">
                    3
                  </div>
                  <div>
                    <div className="text-blue-200 font-semibold mb-0.5 text-xs">模糊修复</div>
                    <p className="text-white/80 text-xs">匹配正确列名</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-400/20">
                <div className="text-blue-300 font-semibold mb-1 text-sm">高上限</div>
                <p className="text-white/80 text-xs">RL 保证语法高精度</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/20">
                <div className="text-cyan-300 font-semibold mb-1 text-sm">兜底保障</div>
                <p className="text-white/80 text-xs">Spark 保证运行底线</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
