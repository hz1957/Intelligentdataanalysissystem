import type { ReactNode } from 'react';

const pharmaronLogo = new URL('../../../../static/ppt_template/pharmaron logo.png', import.meta.url).href;

type BusinessSectionShellProps = {
  children: ReactNode;
  eyebrow?: string;
};

export function BusinessSectionShell({
  children,
  eyebrow = 'PHARMARON'
}: BusinessSectionShellProps) {
  return (
    <div className="relative max-w-[1280px] w-full mx-auto overflow-hidden rounded-[32px] border border-[#dcd7e8] bg-[linear-gradient(180deg,#fbfafc_0%,#f4f1f7_100%)] shadow-[0_24px_60px_rgba(40,37,98,0.14)]">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#C8242B]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,37,98,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(200,36,43,0.05),transparent_24%)]" />

      <div className="absolute left-8 top-6 text-[11px] font-semibold tracking-[0.24em] text-[#282562]/55">
        {eyebrow}
      </div>

      <div className="absolute right-8 top-3 flex items-center">
        <img src={pharmaronLogo} alt="Pharmaron" className="h-[10.125rem] w-auto object-contain" />
      </div>

      <div className="relative px-8 pb-10 pt-24 md:px-10 md:pb-12 md:pt-24">
        {children}
      </div>
    </div>
  );
}
