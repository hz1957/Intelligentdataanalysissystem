import { motion } from 'motion/react';
import { Shield, RotateCcw, CheckCircle } from 'lucide-react';

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
          <Shield className="w-10 h-10 text-blue-400" />
          <h2 className="text-5xl font-bold text-white">安全交接与闭环</h2>
        </div>
        <p className="text-xl text-blue-200/80">前端中介机制 + 持续优化反馈</p>
      </motion.div>

      {/* Handoff Flow */}
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
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">安全交接</h3>
              <p className="text-blue-200 text-base">用户确认机制，防止误操作和不可预期的执行</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
              <div className="text-blue-400 font-bold mb-1 text-sm">Step 1</div>
              <p className="text-white/90 text-xs">Chatbot 分析并生成执行计划</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
              <div className="text-blue-400 font-bold mb-1 text-sm">Step 2</div>
              <p className="text-white/90 text-xs">前端展示计划，等待用户审查</p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
              <div className="text-blue-400 font-bold mb-1 text-sm">Step 3</div>
              <p className="text-white/90 text-xs">用户确认后才调用 ETL Agent</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modification Loop */}
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
              <RotateCcw className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">修改闭环</h3>
              <p className="text-blue-200 text-base">生成 → 反馈 → 修改，支持迭代优化</p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-cyan-500/20">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/30 flex items-center justify-center flex-shrink-0 text-xs text-blue-300 font-bold">
                  1
                </div>
                <div>
                  <div className="text-blue-300 font-semibold mb-0.5 text-sm">用户反馈</div>
                  <p className="text-white/90 text-xs">提出修改意见（如："把字段类型改成 String"）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/30 flex items-center justify-center flex-shrink-0 text-xs text-cyan-300 font-bold">
                  2
                </div>
                <div>
                  <div className="text-cyan-300 font-semibold mb-0.5 text-sm">系统处理</div>
                  <p className="text-white/90 text-xs">接收 Diff 指令，精确更新 JSON 配置</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs text-blue-200 font-bold">
                  3
                </div>
                <div>
                  <div className="text-blue-300 font-semibold mb-0.5 text-sm">持续优化</div>
                  <p className="text-white/90 text-xs">用户可继续修改直到满意，实现真正的协作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
