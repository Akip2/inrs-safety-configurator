'use client'
import AppBar from "@/components/app-bar";
import KonvaStage from "@/components/konva-stage";
import { useRef } from "react";

export default function Home() {  
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="h-[100vh] flex flex-col bg-gray-900">
      <AppBar currentPage="tasks"></AppBar>

      <div className="flex flex-col h-full justify-center">
        <div className="w-full h-fit flex flex-row justify-around">
          <div ref={containerRef} className="w-2/3 bg-gray-50 rounded-2xl">
            <KonvaStage containerRef={containerRef}></KonvaStage>
          </div>
          <div className="bg-gray-50 w-1/4 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
