import ChatPanel from "@/components/project/chat";
import { Header } from "@/components/project/header";
import Preview from "@/components/project/preview";
import { Sidebar } from "@/components/project/sidebar";

export default function ProjectPage() {
  return (
    <div className="flex flex-col h-screen w-full bg-background overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <ChatPanel />
        <Preview />
      </div>
    </div>
  )
}