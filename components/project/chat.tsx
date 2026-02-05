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
    <div className="flex flex-col max-w-md w-full bg-background border-r border-border shrink-0 p-3">
      <div className="mb-3">
        <div className="bg-secondary rounded-xl p-3.5 max-w-sm ml-auto">
          <p className="text-foreground text-sm leading-relaxed">
            Generate me a modern, high-conversion landing page for a DevOps SaaS
            company named Opus, using an indigo-focused color palette with
            subtle gradients, sleek cloud and infrastructure visuals, and a
            futuristic tech aesthetic. The design should feel scalable, secure,
            and performance-driven, with a bold hero section, clear product
            value proposition, and clean SaaS UI patterns.
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
      <div className="px-4 flex-1 overflow-auto pb-6">
        {/* Thinking indicator */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Brain className="w-3.5 h-3.5 text-muted-foreground" />
          <span>Thought for 6s</span>
        </div>

        {/* First response paragraph */}
        <p className="text-foreground text-sm leading-relaxed mb-3">
          {
            "I'll help you design a high-conversion landing page for your DevOps SaaS product. Let me first understand your product goals and target audience, then generate a layout that matches your brand and technical vision."
          }
        </p>

        {/* Explored codebase indicator */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Search className="w-3.5 h-3.5" />
          <span>Analyzed product requirements</span>
        </div>

        {/* Second response paragraph */}
        <p className="text-foreground text-sm leading-relaxed mb-3">
          {
            "Now I'll create a modern landing page concept for your DevOps SaaS platform with a strong hero section, clear value proposition, and enterprise-grade visual language."
          }
        </p>

        {/* Version card */}
        <div className="bg-secondary rounded-lg p-2.5 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-foreground text-sm">
                Created landing page concept
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
            "I've created a landing page concept for your DevOps SaaS product that emphasizes automation, scalability, and reliability. The design uses an indigo-focused gradient theme, cloud and infrastructure-inspired visuals, and modern SaaS UI patterns to communicate performance and trust for enterprise users."
          }
        </p>
      </div>

      <AIInput
        showPrompts={false}
        className="mt-4!"
        cardClassName="min-h-28!"
      />
    </div>
  );
}
