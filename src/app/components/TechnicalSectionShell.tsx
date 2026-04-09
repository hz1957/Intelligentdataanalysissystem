import type { ReactNode } from 'react';

type TechnicalSectionShellProps = {
  children: ReactNode;
  eyebrow?: string;
};

export function TechnicalSectionShell({
  children,
  eyebrow = 'TECHNICAL'
}: TechnicalSectionShellProps) {
  return (
    <div className="technical-theme relative max-w-[1280px] w-full mx-auto overflow-hidden rounded-[32px] border border-[#dcd7e8] bg-[linear-gradient(180deg,#fbfafc_0%,#f4f1f7_100%)] shadow-[0_24px_60px_rgba(40,37,98,0.14)]">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#C8242B]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,37,98,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(200,36,43,0.05),transparent_24%)]" />

      <div className="absolute left-8 top-6 text-[11px] font-semibold tracking-[0.24em] text-[#282562]/55">
        {eyebrow}
      </div>

      <style>
        {`
          .technical-theme [class~="text-white"],
          .technical-theme [class~="text-white/90"],
          .technical-theme [class~="text-white/80"] {
            color: #282562 !important;
          }

          .technical-theme [class~="text-white/70"],
          .technical-theme [class~="text-white/60"],
          .technical-theme [class~="text-white/50"],
          .technical-theme [class~="text-white/45"],
          .technical-theme [class~="text-white/40"],
          .technical-theme [class~="text-white/35"],
          .technical-theme [class~="text-slate-500"],
          .technical-theme [class~="text-slate-400"],
          .technical-theme [class~="text-slate-300"],
          .technical-theme [class~="text-blue-200"],
          .technical-theme [class~="text-blue-200/60"],
          .technical-theme [class~="text-blue-200/80"],
          .technical-theme [class~="text-blue-100/70"] {
            color: #6f6a86 !important;
          }

          .technical-theme [class~="text-white/30"],
          .technical-theme [class~="text-white/25"],
          .technical-theme [class~="text-white/20"],
          .technical-theme [class~="text-white/15"] {
            color: #a19ab7 !important;
          }

          .technical-theme [class~="text-blue-300"],
          .technical-theme [class~="text-blue-300/50"],
          .technical-theme [class~="text-blue-300/70"],
          .technical-theme [class~="text-blue-400"],
          .technical-theme [class~="text-cyan-300"],
          .technical-theme [class~="text-cyan-300/70"],
          .technical-theme [class~="text-cyan-400"],
          .technical-theme [class~="text-purple-300"],
          .technical-theme [class~="text-purple-300/70"] {
            color: #C8242B !important;
          }

          .technical-theme [class~="text-red-400"],
          .technical-theme [class~="text-red-200/80"],
          .technical-theme [class~="text-amber-200"] {
            color: #C8242B !important;
          }

          .technical-theme [class~="bg-white/[0.02]"],
          .technical-theme [class~="bg-white/[0.03]"],
          .technical-theme [class~="bg-white/[0.04]"],
          .technical-theme [class~="bg-white/[0.05]"],
          .technical-theme [class~="bg-white/5"],
          .technical-theme [class~="bg-black/20"],
          .technical-theme [class~="bg-black/25"],
          .technical-theme [class~="bg-black/30"],
          .technical-theme [class~="bg-black/40"] {
            background: rgba(255, 255, 255, 0.82) !important;
          }

          .technical-theme [class~="bg-blue-500/10"],
          .technical-theme [class~="bg-blue-500/20"],
          .technical-theme [class~="bg-cyan-500/10"],
          .technical-theme [class~="bg-cyan-500/20"],
          .technical-theme [class~="bg-purple-500/10"],
          .technical-theme [class~="bg-purple-500/20"],
          .technical-theme [class~="bg-red-500/10"] {
            background: rgba(200, 36, 43, 0.08) !important;
          }

          .technical-theme [class~="bg-blue-400/50"] {
            background: rgba(200, 36, 43, 0.16) !important;
          }

          .technical-theme [class~="border-white/[0.03]"],
          .technical-theme [class~="border-white/[0.04]"],
          .technical-theme [class~="border-white/[0.05]"],
          .technical-theme [class~="border-white/[0.06]"],
          .technical-theme [class~="border-white/[0.08]"],
          .technical-theme [class~="border-white/[0.12]"] {
            border-color: #d9d4e6 !important;
          }

          .technical-theme [class~="border-blue-500/20"],
          .technical-theme [class~="border-blue-500/30"],
          .technical-theme [class~="border-cyan-500/15"],
          .technical-theme [class~="border-cyan-500/20"],
          .technical-theme [class~="border-purple-500/20"],
          .technical-theme [class~="border-red-500/10"] {
            border-color: rgba(200, 36, 43, 0.18) !important;
          }

          .technical-theme svg text[fill*="255,255,255"] {
            fill: #6f6a86 !important;
          }

          .technical-theme svg text[fill*="254,240,138"] {
            fill: #C8242B !important;
          }

          .technical-theme svg rect[fill*="255,255,255"] {
            fill: rgba(255, 255, 255, 0.84) !important;
          }

          .technical-theme svg rect[stroke*="255,255,255"] {
            stroke: rgba(217, 212, 230, 1) !important;
          }

          .technical-theme svg line[stroke*="255,255,255"] {
            stroke: rgba(161, 154, 183, 0.6) !important;
          }
        `}
      </style>

      <div className="relative px-8 pb-10 pt-14 md:px-10 md:pb-12 md:pt-14">
        {children}
      </div>
    </div>
  );
}
