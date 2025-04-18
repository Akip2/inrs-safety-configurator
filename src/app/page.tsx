'use'
import AppBar from "@/components/app-bar";
import DataContainer from "@/components/data-container";
import KonvaStage from "@/components/konva-stage";

export default function Home() {  
  return (
    <div className="h-[100vh] flex flex-col bg-gray-50">
      <AppBar currentPage="main"></AppBar>

      <div className="flex flex-col h-full justify-center">
        <div className="w-full h-fit flex flex-row justify-around">
          <KonvaStage className="w-1/2"></KonvaStage>
          <DataContainer className="w-2/5 h-full"></DataContainer>
        </div>
      </div>
    </div>
  );
}
