import { motion } from 'motion/react';
import { MessageSquare, BookOpen, Search, ArrowDown, Brain, FileText } from 'lucide-react';

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
        <p className="text-xl text-blue-200/80">意图层 - 双通道检索 + 两阶段 LLM</p>
      </motion.div>

      {/* Stage 1: Dual-Channel Retrieval */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-4"
      >
        <div className="absolute top-0 left-6 text-white/20 text-xs font-mono">STAGE 1</div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Rule Matching */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <h4 className="text-white font-bold">规则匹配</h4>
                <div className="text-blue-200/50 text-xs">领域术语精确命中</div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-white/5 text-xs font-mono">
              <div className="text-white/50 mb-1"># 用户输入</div>
              <div className="text-white/90 mb-2">"查看<span className="text-blue-300">不良事件</span>数据"</div>
              <div className="text-white/30 mb-1">↓ 关键词匹配</div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded">不良反应</span>
                <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded">AE</span>
                <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded">Adverse Event</span>
              </div>
            </div>
          </div>

          {/* Similarity Matching */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Search className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-white font-bold">相似度匹配</h4>
                <div className="text-cyan-200/50 text-xs">语义向量 Top-K 检索</div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-white/5 text-xs font-mono">
              <div className="text-white/50 mb-1"># Embedding 检索</div>
              <div className="text-white/90 mb-2">{'query → vector → cosine similarity'}</div>
              <div className="text-white/30 mb-1">↓ Top-15 Schema</div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded">DM</span>
                <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded">AE</span>
                <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded">CM</span>
                <span className="px-1.5 py-0.5 bg-white/10 text-white/40 rounded">+12</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrow Down - Union */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex justify-center my-2"
      >
        <div className="flex items-center gap-2 text-white/30">
          <div className="h-px w-16 bg-white/10"></div>
          <span className="text-xs font-mono px-2 py-0.5 bg-white/5 rounded border border-white/10">UNION</span>
          <ArrowDown className="w-4 h-4" />
          <div className="h-px w-16 bg-white/10"></div>
        </div>
      </motion.div>

      {/* Stage 2: Router LLM */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative mb-4"
      >
        <div className="absolute top-0 left-6 text-white/20 text-xs font-mono">STAGE 2</div>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-purple-500/20 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h4 className="text-white font-bold">Router LLM</h4>
                <div className="text-purple-200/50 text-xs">从候选集中精选相关表</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-purple-300 text-xs font-mono font-bold">{'< 100 tokens'}</div>
              </div>
              <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="text-white/40 text-[10px] mb-0.5">Output</div>
                <div className="flex gap-1">
                  <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded font-mono">AE</span>
                  <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded font-mono">DM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrow Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="flex justify-center my-2"
      >
        <ArrowDown className="w-4 h-4 text-white/20" />
      </motion.div>

      {/* Stage 3: Generator LLM */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative"
      >
        <div className="absolute top-0 left-6 text-white/20 text-xs font-mono">STAGE 3</div>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-amber-500/20 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="text-white font-bold">Generator LLM</h4>
                <div className="text-amber-200/50 text-xs">基于精选表 Schema 生成分步计划</div>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <div className="text-white/40 text-[10px] mb-0.5">Output</div>
              <div className="text-amber-300 text-xs font-mono">Step-by-Step Plan</div>
            </div>
          </div>
          <div className="mt-3 text-white/50 text-[11px]">
            仅接收 Router 选中的表 Schema → Context 纯净 → 生成质量高
          </div>
        </div>
      </motion.div>
    </div>
  );
}