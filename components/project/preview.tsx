"use client";

import {
  WebPreview,
  WebPreviewBody,
  WebPreviewConsole,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
} from "@/components/ui/web-preview";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  Maximize2Icon,
  MousePointerClickIcon,
  RefreshCcwIcon,
} from "lucide-react";
import { useCallback, useState } from "react";

const handleUrlChange = (url: string) => {
  console.log("URL changed to:", url);
};

const handleGoBack = () => {
  console.log("Go back");
};

const handleGoForward = () => {
  console.log("Go forward");
};

const handleReload = () => {
  console.log("Reload");
};

const handleSelect = () => {
  console.log("Select");
};

const handleOpenInNewTab = () => {
  console.log("Open in new tab");
};

const exampleLogs = [
  {
    level: "log" as const,
    message: "Page loaded successfully",
    timestamp: new Date(Date.now() - 10_000),
  },
  {
    level: "warn" as const,
    message: "Deprecated API usage detected",
    timestamp: new Date(Date.now() - 5000),
  },
  {
    level: "error" as const,
    message: "Failed to load resource",
    timestamp: new Date(),
  },
];

const Preview = () => {
  const [_fullscreen, setFullscreen] = useState(false);

  const handleToggleFullscreen = useCallback(
    () => setFullscreen((prev) => !prev),
    []
  );

  return (
    <WebPreview
      defaultUrl="/"
      onUrlChange={handleUrlChange}
      className="flex-1 flex flex-col min-w-0 rounded-none! border-0!"
    >
      <WebPreviewNavigation>
        <WebPreviewNavigationButton onClick={handleGoBack} tooltip="Go back">
          <ArrowLeftIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={handleGoForward}
          tooltip="Go forward"
        >
          <ArrowRightIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton onClick={handleReload} tooltip="Reload">
          <RefreshCcwIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewUrl />
        <WebPreviewNavigationButton onClick={handleSelect} tooltip="Select">
          <MousePointerClickIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={handleOpenInNewTab}
          tooltip="Open in new tab"
        >
          <ExternalLinkIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={handleToggleFullscreen}
          tooltip="Maximize"
        >
          <Maximize2Icon className="size-4" />
        </WebPreviewNavigationButton>
      </WebPreviewNavigation>

      <WebPreviewBody src="https://aura-devs.vercel.app/preview/lmnoq" />
    </WebPreview>
  );
};

export default Preview;
