import React, { useId, useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MessageSquare,
    Globe,
    Server,
    BrainCircuit,
    Zap,
    Database,
    Search,
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
        generator: useRef<HTMLDivElement>(null),
        retrieval: useRef<HTMLDivElement>(null),
        db: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex flex-col justify-center relative tflow-container">
            {/* Nodes Layer */}
            <div className="flex justify-between items-center gap-4 px-4 lg:px-8 relative z-10 h-full">
                <Node ref={refs.user} icon={MessageSquare} label="User" color="bg-gray-500" />
                <Node ref={refs.browser} icon={Globe} label="Browser" sub="Client" color="bg-blue-500" />
                <Node ref={refs.ws} icon={Server} label="WebSocket" sub="FastAPI" color="bg-green-500" />
                <Node ref={refs.router} icon={BrainCircuit} label="Router LLM" sub="Intent Check" color="bg-amber-500" />
                <Node ref={refs.generator} icon={Zap} label="Generator LLM" color="bg-purple-500" />
                <Node ref={refs.retrieval} icon={Search} label="Retrieval" sub="On Demand" color="bg-teal-500" />
                <Node ref={refs.db} icon={Database} label="MySQL" sub="Meta" color="bg-indigo-500" />
            </div>

            {/* Animation Layer */}
            <Canvas>
                {/* 1. User -> Browser */}
                <Connection start={refs.user} end={refs.browser} color="#60A5FA" label="Ask" delay={0} duration={1.2} />

                {/* 2. Browser -> WebSocket */}
                <Connection start={refs.browser} end={refs.ws} color="#4ADE80" label="Send" delay={1.2} duration={1.0} />

                {/* 3. WebSocket -> Router */}
                <Connection start={refs.ws} end={refs.router} color="#FCD34D" label="Route" delay={2.2} duration={1.0} />

                {/* 4. Router -> Generator */}
                <Connection start={refs.router} end={refs.generator} color="#C084FC" label="Intent" delay={3.2} duration={1.0} curvature={0.12} />

                {/* 5. Generator -> Retrieval */}
                <Connection start={refs.generator} end={refs.retrieval} color="#2DD4BF" label="Need Meta" delay={4.2} duration={1.0} curvature={0.12} />

                {/* 6. Retrieval -> DB */}
                <Connection start={refs.retrieval} end={refs.db} color="#818CF8" label="Query" delay={5.2} duration={1.0} curvature={0.12} />

                {/* 7. DB -> Retrieval */}
                <Connection start={refs.db} end={refs.retrieval} color="#818CF8" label="Meta" delay={6.2} duration={1.0} curvature={-0.12} />

                {/* 8. Retrieval -> Generator */}
                <Connection start={refs.retrieval} end={refs.generator} color="#2DD4BF" label="Context" delay={7.2} duration={1.0} curvature={-0.12} />

                {/* 9. Generator -> WebSocket */}
                <Connection start={refs.generator} end={refs.ws} color="#C084FC" label="Stream" delay={8.2} duration={1.4} curvature={-0.18} />

                {/* 10. WebSocket -> Browser */}
                <Connection start={refs.ws} end={refs.browser} color="#4ADE80" label="Render" delay={9.8} duration={1.0} curvature={-0.12} />
            </Canvas>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm italic">
                Agent 1: intent routing, on-demand metadata retrieval, streamed response back to UI
            </div>
        </div>
    );
}

function EtlFlow() {
    const refs = {
        planner: useRef<HTMLDivElement>(null),
        builder: useRef<HTMLDivElement>(null),
        json: useRef<HTMLDivElement>(null),
        dag: useRef<HTMLDivElement>(null),
    };

    return (
        <div className="size-full flex items-center justify-center relative p-8 tflow-container">
            {/* Nodes Layer */}
            <div className="relative w-[760px] h-[420px] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <Node ref={refs.planner} icon={Layers} label="Planner" sub="toolcall args" color="bg-blue-600" />
                </div>

                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <Node ref={refs.builder} icon={Wrench} label="Builder" sub="toolkit runner" color="bg-amber-600" />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <Node ref={refs.json} icon={FileJson} label="JSON Nodes" sub="append/update/delete" color="bg-green-600" />
                </div>

                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                    <Node ref={refs.dag} icon={Database} label="DAG Summary" sub="updated graph" color="bg-indigo-600" />
                </div>
            </div>

            {/* Animation Layer */}
            <Canvas>
                <Connection start={refs.planner} end={refs.builder} color="#60A5FA" label="toolcall args" delay={0} duration={1.2} curvature={0.18} />
                <Connection start={refs.builder} end={refs.json} color="#F59E0B" label="append / update / delete" delay={1.4} duration={1.3} curvature={0.18} />
                <Connection start={refs.json} end={refs.dag} color="#22C55E" label="refresh DAG summary" delay={2.9} duration={1.2} curvature={0.18} />
                <Connection start={refs.dag} end={refs.planner} color="#A78BFA" label="return to planner" delay={4.3} duration={1.3} curvature={0.18} />
            </Canvas>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white/40 text-sm italic">
                Agent 2: Planner emits tool calls, Builder mutates JSON nodes, DAG summary feeds back into planning
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
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded w-fit mx-auto backdrop-blur-md whitespace-nowrap">
                        {label}
                    </div>
                </motion.foreignObject>
            )}
        </>
    );
}
