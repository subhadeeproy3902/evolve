import {
  Brain,
  ChevronRight,
  Copy,
  ImageIcon,
  MoreHorizontal,
  Search,
} from "lucide-react";
import AIInput from "../ui/ai-input";

export default function ChatPanel() {
  return (
    <div className="flex flex-col max-w-md w-full bg-background border-r border-border shrink-0 p-3 ">
      <div className="overflow-auto ">
        <div className="mb-3">
          <div className="bg-secondary rounded-xl p-3.5 max-w-sm ml-auto">
            <p className="text-foreground text-sm leading-relaxed">
              Generate me a luxurious, high-conversion landing page for a
              fine-dining restaurant named LMNOQ, inspired by royal palace
              aesthetics, elegant interior visuals, and a premium dining
              experience. The design should feel grand, refined, and welcoming,
              with a bold hero section, clear menu highlights, and clean modern
              restaurant UI patterns that reflect royal vibes.
            </p>
          </div>

          {/* File badge and copy button row */}
          <div className="flex justify-end items-center gap-2 mt-2">
            <div className="flex items-center gap-1.5 bg-secondary border border-foreground/10 rounded-md px-2 py-1">
              <ImageIcon className="w-3.5 h-3.5 text-foreground" />
              <span className="text-foreground text-xs">image.png</span>
            </div>
            <button className="p-1.5 rounded-md bg-primary text-white hover:bg-primary/80 transition-colors">
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* AI Response area */}
        <div className="px-4 flex-1 pb-6">
          {/* Thinking indicator */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Brain className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Thought for 6s</span>
          </div>

          {/* First response paragraph */}
          <p className="text-foreground text-sm leading-relaxed mb-3">
            {
              "I'll help you design a high-conversion landing page for your royal-themed restaurant. Let me first understand your dining concept and target customers, then generate a layout that matches your brand and hospitality vision."
            }
          </p>

          {/* Explored codebase indicator */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Analyzed restaurant requirements</span>
          </div>

          {/* Second response paragraph */}
          <p className="text-foreground text-sm leading-relaxed mb-3">
            {
              "Now I'll create a modern restaurant landing page concept with a strong hero section, elegant menu presentation, and a premium visual language inspired by royal vibes."
            }
          </p>

          {/* Version card */}
          <div className="bg-secondary rounded-lg p-2.5 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-foreground text-sm">
                  Created restaurant landing page concept
                </span>
                <span className="text-muted-foreground text-sm">v1</span>
              </div>
              <button className="p-1 rounded hover:bg-background/50 transition-colors">
                <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Final response paragraph */}
          <p className="text-foreground text-sm leading-relaxed">
            {
              "I've created a landing page concept for your restaurant that emphasizes elegance, comfort, and premium dining. The design uses palace-inspired visuals, refined layout structure, and modern restaurant UI patterns to communicate trust, luxury, and an unforgettable dining experience."
            }
          </p>
        </div>
      </div>

      <AIInput
        showPrompts={false}
        className="mt-4!"
        cardClassName="min-h-28!"
      />
    </div>
  );
}
