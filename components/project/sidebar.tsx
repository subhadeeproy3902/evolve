"use client";

import {
  MessageSquare,
  Pen,
  GitBranch,
  Link2,
  Variable,
  LayoutTemplate,
  Settings,
  Mail,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { icon: MessageSquare, label: "Chat", active: true },
  { icon: Pen, label: "Design" },
  { icon: GitBranch, label: "Git" },
  { icon: Link2, label: "Connect" },
  { icon: Variable, label: "Vars" },
  { icon: LayoutTemplate, label: "Template" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-16 bg-background items-center py-3 shrink-0 border-r border-border">
      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-2 w-full px-1">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-full py-2 cursor-pointer transition-all duration-500 ease-in-out rounded-md ${
              item.active ? "text-background bg-primary" : "text-foreground bg-secondary/80 opacity-60 hover:bg-secondary hover:opacity-100"
            }`}
          >
            <item.icon className="w-4 h-4 fill-white" />
            <span className="text-xs mt-0.5">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Bottom mail icon */}
      <div className="mt-auto text-muted-foreground hover:text-primary cursor-pointer">
        <Mail className="w-4 h-4" strokeWidth={1.5} />
      </div>
    </div>
  );
}
