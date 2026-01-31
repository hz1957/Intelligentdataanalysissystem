import { motion } from 'motion/react';
import { MessageSquare, Route, History, Search } from 'lucide-react';

export function Slide4() {
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
          <h2 className="text-5xl font-bold text-white">Chatbot Agent</h2>
        </div>
        <p className="text-xl text-blue-200/80">意图层 - 智能路由与全量历史分析</p>
      </motion.div>

      {/* Main Feature */}
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
              <Route className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">智能路由</h3>
              <p className="text-blue-200 text-base">全量历史分析，精准理解用户隐式意图</p>
            </div>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20">
            <p className="text-white/90 mb-3 leading-relaxed text-sm">
              在多轮对话中，用户的意图往往是隐式的。例如："筛选年龄 &gt; 18"实际意味着"筛选 [上一轮选中的表] 的年龄"
            </p>
            
            <p className="text-blue-200/90 leading-relaxed text-sm">
              Router 分析 <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-blue-300 font-mono text-xs">全量</span> 对话历史，
              而非仅最后一条消息，通过语义理解精准选中相关的临床数据表（DM、AE 等），保证上下文连贯性
            </p>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-2">
            <History className="w-6 h-6 text-blue-400" />
            <h4 className="text-lg font-bold text-white">上下文追踪</h4>
          </div>
          <p className="text-blue-200/80 text-sm">维护完整对话历史，理解意图演进过程，支持跨轮次的复杂查询</p>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Search className="w-6 h-6 text-cyan-400" />
            <h4 className="text-lg font-bold text-white">语义理解</h4>
          </div>
          <p className="text-blue-200/80 text-sm">智能识别临床术语，自动匹配 CDISC/SDTM 标准表结构和字段</p>
        </motion.div>
      </div>
    </div>
  );
}