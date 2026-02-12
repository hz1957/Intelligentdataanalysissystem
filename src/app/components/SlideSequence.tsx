import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MessageSquare,
    Globe,
    Server,
    BrainCircuit,
    Zap,
    Database,
    Search,
    ShieldCheck,
    Layers,
    Wrench,
    FileJson
} from 'lucide-react';

export function SlideSequence() {
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
                        Chat Interaction
                    </button>
                    <button
                        onClick={() => setActiveTab('etl')}
                        className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${activeTab === 'etl'
                            ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                            : 'bg-white/5 text-purple-200 hover:bg-white/10'
                            }`}
                    >
                        ETL Execution
                    </button>
                </div>
            </motion.div>

            <div className="flex-1 relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden p-8">
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
        user: useRef<HTMLDivElement>(null),
        browser: useRef<HTMLDivElement>(null),
        ws: useRef<HTMLDivElement>(null),
        router: useRef<HTMLDivElement>(null),
        retrieval: useRef<HTMLDivElement>(null),
        generator: useRef<HTMLDivElement>(null),
        db: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex flex-col justify-center relative tflow-container">
            {/* Nodes Layer */}
            <div className="flex justify-between items-center px-8 relative z-10 h-full">
                <Node ref={refs.user} icon={MessageSquare} label="User" color="bg-gray-500" />
                <Node ref={refs.browser} icon={Globe} label="Browser" sub="Client" color="bg-blue-500" />

                <div className="flex flex-col h-full justify-center gap-16">
                    <Node ref={refs.ws} icon={Server} label="WebSocket" sub="FastAPI" color="bg-green-500" />
                </div>

                {/* Router (Center Line) */}
                <div className="flex flex-col h-full justify-center gap-16">
                    <Node ref={refs.router} icon={BrainCircuit} label="Router LLM" sub="Intent Check" color="bg-amber-500" />
                </div>

                {/* Branches: Top=Generator, Bottom=Retrieval */}
                <div className="flex flex-col h-full justify-center gap-24 py-8">
                    <Node ref={refs.generator} icon={Zap} label="Generator LLM" sub="Plan Gen" color="bg-purple-500" />
                    <Node ref={refs.retrieval} icon={Search} label="Retrieval" sub="On Demand" color="bg-teal-500" />
                </div>

                {/* DB (Aligned with Retrieval using same structure) */}
                <div className="flex flex-col h-full justify-center gap-24 py-8">
                    <div className="w-32 h-24 opacity-0 pointer-events-none" /> {/* Placeholder for alignment */}
                    <Node ref={refs.db} icon={Database} label="MySQL" sub="Meta" color="bg-indigo-500" />
                </div>
            </div>

            {/* Animation Layer */}
            <Canvas>
                {/* 1. User -> Browser */}
                <Connection start={refs.user} end={refs.browser} color="#60A5FA" label="Message" delay={0} duration={1.5} />

                {/* 2. Browser -> WebSocket */}
                <Connection start={refs.browser} end={refs.ws} color="#4ADE80" label="JSON" delay={1.5} duration={1.0} />

                {/* 3. WebSocket -> Router (Analyze Intent) */}
                <Connection start={refs.ws} end={refs.router} color="#FCD34D" label="Analyze" delay={2.5} duration={1.0} curvature={0} />

                {/* Branch 1: Retrieval (Bottom) - Bidirectional on same visual line */}
                {/* 4a. Router -> Retrieval (Request) */}
                <Connection start={refs.router} end={refs.retrieval} color="#2DD4BF" label="Need Data" delay={3.5} duration={1.0} curvature={0.2} />

                {/* 5a. Retrieval -> DB (Query) */}
                <Connection start={refs.retrieval} end={refs.db} color="#818CF8" label="Vector Search" delay={4.5} duration={1.0} curvature={0} />

                {/* 5b. DB -> Retrieval (Return Candidates - same line) */}
                <Connection start={refs.db} end={refs.retrieval} color="#818CF8" delay={5.5} duration={1.0} curvature={0} />

                {/* 4b. Retrieval -> Router (Return Top-K - same curve inverted) */}
                <Connection start={refs.retrieval} end={refs.router} color="#2DD4BF" label="Top-15" delay={6.5} duration={1.0} curvature={-0.2} />

                {/* Branch 2: Generator (Top) */}
                {/* 6. Router -> Generator (Instruction with Context) */}
                <Connection start={refs.router} end={refs.generator} color="#C084FC" label="Context" delay={6.0} duration={1.0} curvature={-0.2} />

                {/* 7. Generator -> WebSocket (Stream) - Long curve back */}
                <Connection start={refs.generator} end={refs.ws} color="#C084FC" label="Stream" delay={7.5} duration={1.5} curvature={0.4} />

                {/* 8. WebSocket -> Browser */}
                <Connection start={refs.ws} end={refs.browser} color="#C084FC" label="Update UI" delay={9.0} duration={1.0} curvature={0.2} />
            </Canvas>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm italic">
                Router (中枢) 决定分支走向：上方 Generator 生成计划，下方 Retrieval 获取数据
            </div>
        </div>
    );
}

function EtlFlow() {
    const refs = {
        planner: useRef<HTMLDivElement>(null),
        critic: useRef<HTMLDivElement>(null),
        executor: useRef<HTMLDivElement>(null),
        llm: useRef<HTMLDivElement>(null),
        toolkit: useRef<HTMLDivElement>(null),
        spark: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex items-center justify-center relative p-8 tflow-container">
            {/* Nodes Layer */}
            <div className="flex items-center gap-48 relative z-10">
                {/* Left: Planning Phase (Horizontal) */}
                <div className="flex items-center gap-16">
                    <Node ref={refs.planner} icon={Layers} label="Planner" sub="Blueprint" color="bg-blue-600" />
                    <Node ref={refs.critic} icon={ShieldCheck} label="Critic" sub="Verify" color="bg-red-500" />
                </div>

                {/* Right: Execution Loop (Diamond Layout) */}
                <div className="relative w-[500px] h-[400px]">
                    {/* Executor: Left (Center) */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                        <Node ref={refs.executor} icon={Wrench} label="Executor" sub="Coordinator" color="bg-amber-600" />
                    </div>

                    {/* LLM: Top (Center) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                        <Node ref={refs.llm} icon={BrainCircuit} label="LLM" sub="SQL Gen" color="bg-purple-600" />
                    </div>

                    {/* Toolkit: Right (Center) */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                        <Node ref={refs.toolkit} icon={FileJson} label="Toolkit" sub="Tools" color="bg-green-600" />
                    </div>

                    {/* Spark: Bottom (Center) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <Node ref={refs.spark} icon={Zap} label="Spark" sub="Execute" color="bg-orange-500" />
                    </div>
                </div>
            </div>

            {/* Animation Layer */}
            <Canvas>
                {/* 1. Planner -> Critic (Horizontal) */}
                <Connection start={refs.planner} end={refs.critic} color="#60A5FA" label="Blueprints" delay={0} duration={1.5} />

                {/* 2. Critic -> Executor (Entry to loop) */}
                <Connection start={refs.critic} end={refs.executor} color="#F87171" label="Approved" delay={1.5} duration={1.5} curvature={0} />

                {/* Loop Phase */}
                {/* 3. Executor -> LLM (Up-Right) */}
                <Connection start={refs.executor} end={refs.llm} color="#FCD34D" label="Step N Context" delay={3.0} duration={1.0} curvature={-0.3} />

                {/* 4. LLM -> Toolkit (Down-Right) */}
                <Connection start={refs.llm} end={refs.toolkit} color="#C084FC" label="Tool Call" delay={4.0} duration={1.0} curvature={-0.3} />

                {/* 5. Toolkit -> Spark (Down-Left) */}
                <Connection start={refs.toolkit} end={refs.spark} color="#4ADE80" label="SQL" delay={5.0} duration={1.0} curvature={-0.3} />

                {/* 6. Spark -> Executor (Up-Left) - Result / Retry */}
                <Connection start={refs.spark} end={refs.executor} color="#FB923C" label="Result / Retry" delay={6.0} duration={1.2} curvature={-0.3} />
            </Canvas>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white/40 text-sm italic">
                Planner → Critic • Executor ReAct Loop
            </div>
        </div>
    );
}

const Node = React.forwardRef(({ icon: Icon, label, sub, color }: any, ref: any) => {
    return (
        <div ref={ref} className="flex flex-col items-center gap-3 z-10 bg-slate-900/50 p-4 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl w-32">
            <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg bg-gradient-to-br from-white/20 to-transparent`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
                <div className="text-white font-bold text-sm">{label}</div>
                {sub && <div className="text-white/50 text-[10px] font-mono leading-tight">{sub}</div>}
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
            {/* Base Line */}
            <path d={path} stroke={color} strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.3" />

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
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded w-fit mx-auto backdrop-blur-md whitespace-nowrap">
                        {label}
                    </div>
                </motion.foreignObject>
            )}
        </>
    );
}
