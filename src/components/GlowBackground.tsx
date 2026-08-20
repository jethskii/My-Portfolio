type GlowBackgroundProps = {
  variant?: "hero" | "section";
  className?: string;
};

export function GlowBackground({ variant = "section", className = "" }: GlowBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
        <div className="absolute -top-32 -right-20 h-[36rem] w-[36rem] rounded-full bg-primary/30 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[110px] animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 right-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-pink/10 blur-[100px] animate-blob [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
    </div>
  );
}
