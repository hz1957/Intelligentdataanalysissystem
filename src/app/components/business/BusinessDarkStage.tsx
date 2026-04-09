import type { ReactNode } from 'react';

type BusinessDarkStageProps = {
  children: ReactNode;
};

export function BusinessDarkStage({ children }: BusinessDarkStageProps) {
  return (
    <div className="rounded-[28px] border border-[#3f3a74] bg-[radial-gradient(circle_at_top,_rgba(52,47,118,0.46),_rgba(26,23,60,0.98)_58%)] px-6 py-8 shadow-[0_22px_48px_rgba(21,18,53,0.35)] md:px-8">
      {children}
    </div>
  );
}
