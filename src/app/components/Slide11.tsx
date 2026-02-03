import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MessageSquare,
    Globe,
    Server,
    BrainCircuit,
    Zap,
    Database,
    Layers,
    Wrench,
    FileJson
} from 'lucide-react';

export function Slide11() {
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
                        ETL Planning
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
        generator: useRef<HTMLDivElement>(null),
        db: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex flex-col justify-center relative">
            {/* Nodes Layer */}
            <div className="flex justify-between items-center px-12 relative z-10 h-full">
                <Node ref={refs.user} icon={MessageSquare} label="User" color="bg-gray-500" />
                <Node ref={refs.browser} icon={Globe} label="Browser" sub="Client" color="bg-blue-500" />

                <div className="flex flex-col h-full justify-center gap-16">
                    <Node ref={refs.ws} icon={Server} label="WebSocket" sub="FastAPI" color="bg-green-500" />
                </div>

                <div className="flex flex-col h-full justify-center gap-32">
                    <Node ref={refs.router} icon={BrainCircuit} label="Router LLM" sub="Table Selection" color="bg-amber-500" />
                    <Node ref={refs.generator} icon={Zap} label="Generator LLM" sub="Instruction" color="bg-purple-500" />
                </div>

                <div className="flex flex-col h-full justify-center gap-16">
                    <Node ref={refs.db} icon={Database} label="MySQL" sub="Persistence" color="bg-indigo-500" />
                </div>
            </div>

            {/* Animation Layer */}
            <Canvas>
                {/* 1. User -> Browser */}
                <Connection start={refs.user} end={refs.browser} color="#60A5FA" label="Message" delay={0} duration={1.5} />

                {/* 2. Browser -> WebSocket */}
                <Connection start={refs.browser} end={refs.ws} color="#4ADE80" label="JSON" delay={1.5} duration={1.0} />

                {/* 3a. WebSocket -> DB */}
                <Connection start={refs.ws} end={refs.db} color="#818CF8" label="Persist" delay={2.5} duration={1.0} />

                {/* 3b. WebSocket -> Router */}
                <Connection start={refs.ws} end={refs.router} color="#FCD34D" label="Analyze" delay={2.5} duration={1.0} curvature={-0.2} />

                {/* 4. Router -> WebSocket */}
                <Connection start={refs.router} end={refs.ws} color="#FCD34D" label="Selected Tables" delay={3.5} duration={1.0} curvature={0.2} />

                {/* 5. WebSocket -> Browser (Table Cards) */}
                <Connection start={refs.ws} end={refs.browser} color="#FCD34D" label="Table Cards" delay={4.5} duration={1.0} curvature={-0.2} />

                {/* 6. WebSocket -> Generator */}
                <Connection start={refs.ws} end={refs.generator} color="#C084FC" label="Prompt" delay={4.5} duration={1.0} curvature={0.2} />

                {/* 7. Generator -> WebSocket */}
                <Connection start={refs.generator} end={refs.ws} color="#C084FC" label="Tokens" delay={6.0} duration={1.0} curvature={-0.2} />

                {/* 8. WebSocket -> Browser (Stream) */}
                <Connection start={refs.ws} end={refs.browser} color="#C084FC" label="Stream" delay={7.0} duration={1.0} curvature={0.2} />
            </Canvas>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm italic">
                Loop repeats for each user message • Router runs on EVERY turn
            </div>
        </div>
    );
}

function EtlFlow() {
    const refs = {
        planner: useRef<HTMLDivElement>(null),
        llm: useRef<HTMLDivElement>(null),
        builder: useRef<HTMLDivElement>(null),
        toolkit: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex flex-col justify-center relative">
            {/* Nodes Layer */}
            <div className="flex justify-around items-center px-12 relative z-10 h-full">
                <Node ref={refs.planner} icon={Layers} label="Planner" sub="Orchestrator" color="bg-blue-600" />
                <Node ref={refs.llm} icon={BrainCircuit} label="DeepSeek LLM" sub="Reasoning" color="bg-purple-600" />
                <Node ref={refs.builder} icon={Wrench} label="Builder" sub="DAG Manager" color="bg-amber-600" />
                <Node ref={refs.toolkit} icon={FileJson} label="Toolkit" sub="Schema Ops" color="bg-green-600" />
            </div>

            {/* Animation Layer */}
            <Canvas>
                {/* 1. Planner -> LLM (State + Prompt) */}
                <Connection start={refs.planner} end={refs.llm} color="#60A5FA" label="State" delay={0} duration={1.5} curvature={-0.2} />

                {/* 2. LLM -> Planner (Tool Calls) */}
                <Connection start={refs.llm} end={refs.planner} color="#C084FC" label="Tool Call" delay={1.5} duration={1.5} curvature={-0.2} />

                {/* 3. Planner -> Builder (Execute) */}
                <Connection start={refs.planner} end={refs.builder} color="#FCD34D" label="Execute" delay={3.0} duration={2.0} curvature={0.4} />

                {/* 4. Builder -> Toolkit (Mutation) */}
                <Connection start={refs.builder} end={refs.toolkit} color="#4ADE80" delay={5.0} duration={1.0} />

                {/* 5. Toolkit -> Builder  */}
                <Connection start={refs.toolkit} end={refs.builder} color="#4ADE80" delay={6.0} duration={1.0} curvature={0.3} />

                {/* 6. Builder -> Planner (New State) */}
                <Connection start={refs.builder} end={refs.planner} color="#4ADE80" label="New DAG" delay={7.0} duration={2.5} curvature={0.5} />
            </Canvas>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm italic">
                Multi-turn Planning Loop (Max 30 iterations) • Dynamic DAG Construction
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
                const containerRect = start.current.closest('.relative')?.getBoundingClientRect();

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
                        // Orthogonal offset
                        const dx = x2 - x1;
                        const dy = y2 - y1;

                        // Perpendicular vector (-dy, dx)
                        const offsetX = -dy * curvature;
                        const offsetY = dx * curvature;

                        setPath(`M ${x1},${y1} Q ${midX + offsetX},${midY + offsetY} ${x2},${y2}`);
                    }
                }
            }
        };

        updatePath();
        window.addEventListener('resize', updatePath);
        // Small delay to ensure layout is settled
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

            {/* Beam Animation */}
            <motion.path
                d={path}
                stroke={color}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                    strokeDashoffset: [0, -20]
                }}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 5
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
