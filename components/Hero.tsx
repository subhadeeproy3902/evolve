import { dmsans } from "@/lib/fonts";
import { TextAnimate } from "./ui/text-animate";
import { cn } from "@/lib/utils";
import AIInput from "./ui/ai-input";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-[75vh] min-h-160 lg:h-screen items-center justify-center relative">
      <div className="size-full rounded-b-xl bg-linear-to-b from-primary/40 to-transparent h-full flex flex-col items-center p-8 pt-28 md:pt-48 text-center gap-4 relative overflow-hidden">
        <img
          alt="Hero Background"
          loading="eager"
          decoding="async"
          data-nimg="fill"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 mask-b-from-70% saturate-120"
          sizes="100vw"
          src="/bg.png"
        />
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className={cn(
            "tracking-tighter text-foreground text-3xl sm:text-5xl md:text-6xl max-w-4xl px-2 py-2 overflow-clip z-10 font-medium",
            dmsans.className
          )}
          duration={1}
        >
          What do you want to build?
        </TextAnimate>

        <AIInput />
      </div>
    </div>
  );
}
