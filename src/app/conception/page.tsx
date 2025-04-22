'use client'
import AppBar from "@/components/app-bar";
import DataContainer from "@/components/data-container";
import KonvaStage from "@/components/konva-stage";
import ToolBox from "@/components/tool-box";

export default function Conception() {  
  return (
    <div className="h-[100vh] flex flex-col">
      <AppBar currentPage=""></AppBar>

      <div className="w-full flex flex-col h-full justify-center">
        <div className="w-full h-fit flex flex-row justify-center">
          <ToolBox className="w-[150px] mr-1"></ToolBox>
          <KonvaStage className="w-1/2 ml-1"></KonvaStage>
        </div>
      </div>
    </div>
  );
}
