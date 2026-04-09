import React, { useId, useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Server,
  BrainCircuit,
  Database,
  Layers,
  Wrench,
  FileJson,
} from 'lucide-react';

export function Slide9() {
  const [activeTab, setActiveTab] = useState<'chat' | 'etl'>('chat');

  return (
    <div className="max-w-7xl w-full mx-auto h-[80vh] flex flex-col">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 shrink-0"
      >
        <h2 className="text-5xl font-bold text-white mb-4">系统交互流程</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${activeTab === 'chat'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
              : 'bg-white/5 text-blue-200 hover:bg-white/10'
              }`}
          >
            Agent 1 对话规划流
          </button>
          <button
            onClick={() => setActiveTab('etl')}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${activeTab === 'etl'
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-white/5 text-purple-200 hover:bg-white/10'
              }`}
          >
            Agent 2 计划执行流
          </button>
        </div>
      </motion.div>

      <div className="flex-1 relative bg-white/[0.02] rounded-3xl border border-white/[0.06] overflow-hidden p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'chat' && <ChatFlow key="chat" />}
          {activeTab === 'etl' && <EtlFlow key="etl" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ChatFlow() {
  const refs = {
    browser: useRef<HTMLDivElement>(null),
    api: useRef<HTMLDivElement>(null),
    router: useRef<HTMLDivElement>(null),
    generator: useRef<HTMLDivElement>(null),
    remote: useRef<HTMLDivElement>(null),
    db: useRef<HTMLDivElement>(null),
    agent2: useRef<HTMLDivElement>(null),
  };

  return (
    <div className="size-full flex flex-col justify-center relative tflow-container">
      {/* Nodes Layer - Functional Orchestration Layout */}
      <div className="relative w-full h-[400px] z-10 mx-auto max-w-[850px]">
        {/* Far Left: Client UI */}
        <div className="absolute bottom-6 left-0 -translate-y-1/2">
          <Node ref={refs.browser} icon={Globe} label="Browser Client" sub="用户对话" color="bg-white/[0.03]" />
        </div>

        {/* Center Left: Agent 1 orchestration pivot */}
        <div className="absolute bottom-6 left-[30%] -translate-y-1/2">
          <Node ref={refs.api} icon={Server} label="Agent 1" sub="对话规划" color="bg-white/[0.03]" />
        </div>

        {/* Top/Bottom Center: Context/Data Assembly */}
        <div className="absolute top-2 left-[30%] -translate-x-1/2">
          <Node ref={refs.remote} icon={Globe} label="Remote API" sub="线上 ETL 状态" color="bg-white/[0.02]" />
        </div>
        <div className="absolute top-2 left-[13%] -translate-x-1/2">
          <Node ref={refs.db} icon={Database} label="Local DB" sub="Active Path / 历史" color="bg-white/[0.02]" />
        </div>

        {/* Right Side: Brains (Reasoning & Generation) */}
        <div className="absolute top-[10%] right-50">
          <Node ref={refs.router} icon={BrainCircuit} label="Intent Router" sub="识别任务类型" color="bg-white/[0.03]" text="text-cyan-400" />
        </div>
        <div className="absolute bottom-[10%] right-50">
          <Node ref={refs.generator} icon={FileJson} label="Plan Builder" sub="结构化 Plan 包" color="bg-white/[0.03]" text="text-purple-400" />
        </div>

        {/* Optional Agent 2 Node */}
        <div className="absolute bottom-[10%] right-0">
          <Node ref={refs.agent2} icon={Layers} label="可选: Agent 2" sub="计划执行" color="bg-white/[0.03]" text="text-amber-400" />
        </div>
      </div>

      {/* Animation Layer */}
      <Canvas>
        <Connection start={refs.browser} end={refs.api} color="#64748B" label="1. 用户消息 / WS 请求" delay={0} duration={1.2} />
        <Connection start={refs.api} end={refs.remote} color="#64748B" label="2. 拉取远端 baseline" delay={1.2} duration={1.0} curvature={-0.1} />
        <Connection start={refs.remote} end={refs.api} color="#64748B" label="3. 写入 bootstrap" delay={2.2} duration={1.0} curvature={-0.1} />
        <Connection start={refs.api} end={refs.db} color="#64748B" label="4. 重建 Active Path" delay={3.2} duration={1.0} curvature={0.1} />
        <Connection start={refs.db} end={refs.api} color="#64748B" label="5. 返回历史上下文" delay={4.2} duration={1.0} curvature={0.1} />
        <Connection start={refs.api} end={refs.router} color="#3B82F6" label="6. 意图路由" delay={5.2} duration={1.2} curvature={-0.15} />
        <Connection start={refs.router} end={refs.generator} color="#3B82F6" label="7. 生成 Plan 包" delay={6.4} duration={1.0} />
        <Connection start={refs.generator} end={refs.api} color="#3B82F6" label="8. 回写交接结果" delay={7.4} duration={1.3} curvature={-0.15} />
        <Connection start={refs.generator} end={refs.agent2} color="#F59E0B" label="9. 按需触发 Agent 2" delay={7.4} duration={1.3} curvature={0.1} />
        <Connection start={refs.api} end={refs.browser} color="#10B981" label="10. 返回聊天结果 & 落库" delay={8.7} duration={1.4} curvature={0.1} />
      </Canvas>

      <div className="absolute bottom-8 left-0 right-0 text-center text-white/40 text-[11px]">
        Agent 1 的职责是理解用户、对齐上下文、生成 handoff payload；只有需要执行时，才把结构化 Plan 交给 Agent 2。
      </div>
    </div>
  );
}

function EtlFlow() {
  const refs = {
    input: useRef<HTMLDivElement>(null),
    state: useRef<HTMLDivElement>(null),
    llm: useRef<HTMLDivElement>(null),
    executor: useRef<HTMLDivElement>(null),
    end: useRef<HTMLDivElement>(null),
  };

  return (
    <div className="size-full flex items-center justify-center relative p-8 tflow-container">
      {/* Nodes Layer - Circular Agentic Loop Layout */}
      <div className="relative w-full max-w-[850px] h-[400px] z-10 mx-auto">
        <div className="absolute top-[40%] left-0 -translate-y-1/2">
          <Node ref={refs.input} icon={FileJson} label="Plan Payload" sub="Instruction + Constraints" color="bg-white/[0.03]" />
        </div>

        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <Node ref={refs.llm} icon={BrainCircuit} label="Agent 2" sub="读 Plan / 选工具" color="bg-cyan-500/10" text="text-cyan-400" />
        </div>

        <div className="absolute bottom-4 right-[15%]">
          <Node ref={refs.executor} icon={Wrench} label="Tool Executor" sub="执行并回传" color="bg-white/[0.03]" />
        </div>

        <div className="absolute bottom-4 left-[15%]">
          <Node ref={refs.state} icon={Database} label="Exec State" sub="DAG + Validator" color="bg-white/[0.03]" />
        </div>

        <div className="absolute top-[40%] right-0 -translate-y-1/2 flex flex-col items-center justify-center">
          <div ref={refs.end} className="p-4 border border-white/[0.08] rounded-2xl text-white/50 text-[11px] font-bold leading-tight text-center bg-white/[0.02]">
            <span className="block text-white/80 mb-1">Done / Abort</span>
            (Validated)
          </div>
        </div>
      </div>

      {/* Animation Layer */}
      <Canvas>
        {/* 1. Feed Instruction to LLM */}
        <Connection start={refs.input} end={refs.llm} color="#60A5FA" label="1. 读取结构化 Plan" delay={0} duration={1.5} curvature={-0.1} />

        {/* 2. Feed Simplified DAG to LLM */}
        <Connection start={refs.state} end={refs.llm} color="#A78BFA" label="2. 读取当前 DAG 状态" delay={1.5} duration={1.5} curvature={0.1} />

        {/* 3. LLM calls tools */}
        <Connection start={refs.llm} end={refs.executor} color="#2DD4BF" label="3. 选择工具与参数" delay={3.0} duration={1.5} curvature={-0.1} />

        {/* 4. Executor updates State */}
        <Connection start={refs.executor} end={refs.state} color="#FBBF24" label="4. 更新 DAG 并校验" delay={4.5} duration={1.5} curvature={0} />

        {/* 5. End Condition */}
        <Connection start={refs.llm} end={refs.end} color="#94A3B8" label="5. 满足结束条件 / 触发中断" delay={7.0} duration={1.5} curvature={0.1} />
      </Canvas>

      <div className="absolute bottom-6 left-0 right-0 text-center text-white/40 text-[11px]">
        Agent 2 更像 plan mode 执行器：围绕状态、工具调用和校验循环，直到产出稳定结果。
      </div>
    </div>
  );
}

const Node = React.forwardRef(({ icon: Icon, label, sub, color, text = "text-blue-400" }: any, ref: any) => {
  return (
    <div ref={ref} className="flex flex-col items-center gap-3 z-10 bg-[#0B0D14]/60 p-4 rounded-xl border border-white/[0.05] shadow-xl w-32 relative">
      <div className={`w-16 h-16 rounded-2xl ${color} border border-white/[0.05] flex items-center justify-center shadow-lg transition-colors`}>
        <Icon className={`w-8 h-8 ${text}`} />
      </div>
      <div className="text-center">
        <div className="text-white/90 font-bold text-[12px] whitespace-nowrap">{label}</div>
        {sub && <div className="text-white/40 text-[9px] mt-1 font-medium leading-tight whitespace-nowrap">{sub}</div>}
      </div>
    </div>
  );
});
Node.displayName = "Node";

function Canvas({ children }: { children: React.ReactNode }) {
  return (
    <svg className="absolute inset-0 size-full pointer-events-none overflow-visible">
      {children}
    </svg>
  )
}

function Connection({ start, end, color, label, delay, duration, curvature = 0 }: any) {
  const [path, setPath] = useState("");
  const markerId = useId().replace(/:/g, "");

  useLayoutEffect(() => {
    const updatePath = () => {
      if (start.current && end.current) {
        const startRect = start.current.getBoundingClientRect();
        const endRect = end.current.getBoundingClientRect();
        const containerRect = start.current.closest('.tflow-container')?.getBoundingClientRect();

        if (containerRect) {
          const x1 = startRect.left + startRect.width / 2 - containerRect.left;
          const y1 = startRect.top + startRect.height / 2 - containerRect.top;
          const x2 = endRect.left + endRect.width / 2 - containerRect.left;
          const y2 = endRect.top + endRect.height / 2 - containerRect.top;

          if (curvature === 0) {
            setPath(`M ${x1},${y1} L ${x2},${y2}`);
          } else {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const offsetX = -dy * curvature;
            const offsetY = dx * curvature;
            setPath(`M ${x1},${y1} Q ${midX + offsetX},${midY + offsetY} ${x2},${y2}`);
          }
        }
      }
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    const timer = setTimeout(updatePath, 100);
    return () => {
      window.removeEventListener('resize', updatePath);
      clearTimeout(timer);
    };
  }, [start, end, curvature]);

  if (!path) return null;

  return (
    <>
      <defs>
        <marker
          id={markerId}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M 0 0 L 8 4 L 0 8 z" fill={color} fillOpacity="0.9" />
        </marker>
      </defs>

      {/* Base Line */}
      <path d={path} stroke={color} strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.35" markerEnd={`url(#${markerId})`} />

      {/* Animated Path (Dashed Beam) */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={3}
        fill="none"
        strokeDasharray="5 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
          repeatDelay: 5 // longer pause between loops
        }}
      />

      {/* Single Particle */}
      <motion.circle
        r="4"
        fill={color}
        style={{ offsetPath: `path("${path}")` }}
        animate={{
          offsetDistance: ["0%", "100%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 5
        }}
      />

      {/* Label */}
      {label && (
        <motion.foreignObject
          width="100"
          height="30"
          style={{ offsetPath: `path("${path}")`, offsetRotate: "0deg" }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: duration,
            delay: delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 5
          }}
        >
          <div className="bg-[#0B0D14] font-bold text-white text-[10px] px-2 py-1 rounded w-fit mx-auto whitespace-nowrap border border-white/[0.1]">
            {label}
          </div>
        </motion.foreignObject>
      )}
    </>
  );
}
