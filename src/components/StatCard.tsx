import { useEffect, useRef } from 'react';

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let v = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const timer = setInterval(() => {
      v = Math.min(v + step, value);
      el.textContent = v + suffix;
      if (v >= value) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [value, suffix]);

  return (
    <div className="bg-bg-2 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors duration-200">
      <div className="text-[32px] font-black text-white mb-1 font-cabinet">
        <span ref={ref}>0{suffix}</span>
      </div>
      <div className="font-mono text-[10px] text-muted tracking-[1.5px]">
        {label}
      </div>
    </div>
  );
}

export default StatCard;
