import { motion } from 'motion/react';
import { Shield, AlertTriangle, XCircle } from 'lucide-react';

export function Slide7() {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <Shield className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">看门狗机制</h2>
        </div>
        <p className="text-xl text-blue-200/80">双重保障 - 确保 DAG 的收敛性与完整性</p>
      </motion.div>

      {/* Soft Watchdog */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">软看门狗 (前置预警)</h3>
              <p className="text-blue-200 text-base">循环过程中实时检查，主动提醒 Agent 修正</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                <div className="text-blue-300 font-bold mb-1 text-sm">检查时机</div>
                <p className="text-white/90 text-xs">每轮循环中</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                <div className="text-blue-300 font-bold mb-1 text-sm">检查内容</div>
                <p className="text-white/90 text-xs">分支数 &gt; 1</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                <div className="text-blue-300 font-bold mb-1 text-sm">触发动作</div>
                <p className="text-white/90 text-xs">注入警告</p>
              </div>
            </div>

            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
              <p className="text-blue-200 text-xs">
                ⚠️ "当前管道有 2 个断开的分支，必须使用 AddJoinNode 合并" → Agent 收到后立即自我修正
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hard Watchdog */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-5 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">硬看门狗 (退出约束)</h3>
              <p className="text-blue-200 text-base">停止任务前强制验证，拒绝不完整的结果</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                <div className="text-cyan-300 font-bold mb-1 text-sm">检查时机</div>
                <p className="text-white/90 text-xs">Agent 试图停止时</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                <div className="text-cyan-300 font-bold mb-1 text-sm">检查内容</div>
                <p className="text-white/90 text-xs">孤儿 + 收敛</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
                <div className="text-cyan-300 font-bold mb-1 text-sm">触发动作</div>
                <p className="text-white/90 text-xs">拒绝并强制修复</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-blue-300 font-semibold text-xs">孤儿检查</div>
                    <p className="text-white/80 text-xs">所有输入表都被使用？</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-300 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-cyan-300 font-semibold text-xs">收敛检查</div>
                    <p className="text-white/80 text-xs">最终只输出一个节点？</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-3 border border-blue-400/20">
              <p className="text-blue-200 text-xs">
                🛡️ 验证失败则返回 "Planner Error"，强制 Agent 继续修复直到满足条件
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
