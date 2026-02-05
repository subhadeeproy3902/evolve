"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AlertTriangle, ArrowUp, Cloud, FileArchive, Gauge, Camera } from "lucide-react";
import { useRef, useState } from "react";

const PROMPTS = [
  {
    icon: FileArchive,
    text: "Documentation Site",
    prompt:
      "Write comprehensive documentation for this codebase, including setup instructions, API references, and usage examples.",
  },
  {
    icon: Gauge,
    text: "Analytics Website",
    prompt:
      "Analyze the codebase for performance bottlenecks and suggest optimizations to improve loading times and runtime efficiency.",
  },
  {
    icon: AlertTriangle,
    text: "Saas Dashboard",
    prompt:
      "Scan through the codebase to identify and fix 3 critical bugs, providing detailed explanations for each fix.",
  },
];

const MODELS = [
  {
    value: "gpt-5",
    name: "Gemini 3",
    description: "Most advanced model",
    max: true,
  },
  {
    value: "gpt-4o",
    name: "GPT-4o",
    description: "Fast and capable",
  },
  {
    value: "gpt-4",
    name: "GPT-4",
    description: "Reliable and accurate",
  },
  {
    value: "claude-3.5",
    name: "Claude 3.5 Sonnet",
    description: "Great for coding tasks",
  },
];

export default function AIInput(
  {
    showPrompts = true,
    className,
    cardClassName,
  }: {
    showPrompts?: boolean;
    className?: string;
    cardClassName?: string;
  }
) {
  const [inputValue, setInputValue] = useState("");
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handlePromptClick = (prompt: string) => {
    if (inputRef.current) {
      inputRef.current.value = prompt;
      setInputValue(prompt);
      inputRef.current.focus();
    }
  };

  const handleModelChange = (value: string) => {
    const model = MODELS.find((m) => m.value === value);
    if (model) {
      setSelectedModel(model);
    }
  };

  const renderMaxBadge = () => (
    <div className="flex h-3.5 items-center gap-1.5 rounded border border-border px-1 py-0">
      <span
        className="text-[9px] font-bold uppercase"
        style={{
          background:
            "linear-gradient(to right, rgb(129, 161, 193), rgb(125, 124, 155))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Pro
      </span>
    </div>
  );

  return (
    <div className={cn("flex flex-col gap-4 max-w-2xl mx-auto w-full z-50 mt-10", className)}>
      <div className="p-3 rounded-3xl glass-card">
        <div className={cn("flex min-h-40 flex-col rounded-xl cursor-text bg-card border-0", cardClassName)}>
          <div className="flex-1 relative overflow-y-auto max-h-80">
            <Textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything"
              className="w-full border-0 p-3 transition-[padding] duration-200 ease-in-out min-h-[48.4px] outline-none text-[16px] text-foreground resize-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent! whitespace-pre-wrap wrap-break-words"
            />
          </div>

          <div className="flex min-h-10 items-center gap-2 p-2 pb-1">
            <div className="flex aspect-1 items-center gap-1 rounded-full bg-muted p-1.5 text-xs">
              <Cloud className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="relative flex items-center">
              <Select
                value={selectedModel.value}
                onValueChange={handleModelChange}
              >
                <SelectTrigger className="w-fit border-none bg-transparent! p-0 text-sm text-muted-foreground hover:text-foreground focus:ring-0 shadow-none">
                  <SelectValue>
                    {selectedModel.max ? (
                      <div className="flex items-center gap-1">
                        <span>{selectedModel.name}</span>
                        {renderMaxBadge()}
                      </div>
                    ) : (
                      <span>{selectedModel.name}</span>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {MODELS.map((model) => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.max ? (
                        <div className="flex items-center gap-1">
                          <span>{model.name}</span>
                          {renderMaxBadge()}
                        </div>
                      ) : (
                        <span>{model.name}</span>
                      )}
                      <span className="text-muted-foreground block text-xs">
                        {model.description}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon-sm"
                className="text-muted-foreground hover:text-foreground transition-colors duration-100 ease-out"
                title="Attach images"
                aria-label="Attach images"
              >
                <Camera className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "rounded-full transition-colors duration-100 ease-out cursor-pointer bg-primary",
                  inputValue && "bg-primary hover:bg-primary/90!"
                )}
                disabled={!inputValue}
                aria-label="Send message"
              >
                <ArrowUp className="h-4 w-4 text-primary-foreground" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {
        showPrompts && (

          <div className="flex flex-wrap justify-center gap-2">
            {PROMPTS.map((button) => {
              const IconComponent = button.icon;
              return (
                <Button
                  key={button.text}
                  variant="secondary"
                  className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm text-foreground transition-all ease-in-out duration-500"
                  onClick={() => handlePromptClick(button.prompt)}
                >
                  <IconComponent className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span>{button.text}</span>
                </Button>
              );
            })}
          </div>
        )}
    </div>
  );
}