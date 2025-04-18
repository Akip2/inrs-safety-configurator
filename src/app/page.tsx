'use client'
import AppBar from "@/components/app-bar";
import DataContainer from "@/components/data-container";
import KonvaStage from "@/components/konva-stage";
import { useRef } from "react";

export default function Home() {  
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="h-[100vh] flex flex-col bg-gray-900">
      <AppBar currentPage="main"></AppBar>

      <div className="flex flex-col h-full justify-center">
        <div className="w-full h-fit flex flex-row justify-around">
          <div ref={containerRef} className="w-1/2 h-fit bg-gray-50 rounded-2xl">
            <KonvaStage containerRef={containerRef}></KonvaStage>
          </div>
          <DataContainer className="w-2/5 h-full"></DataContainer>
        </div>
      </div>
    </div>
  );
}
