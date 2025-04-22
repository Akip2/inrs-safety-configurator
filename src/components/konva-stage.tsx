'use client'
import { useEffect, useRef, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";

export default function KonvaStage(props : {className?: string}) {
    const sceneWidth = 1500;
    const sceneHeight = 1250;

    const containerRef = useRef<HTMLDivElement>(null!);
    
    // State to track current scale and dimensions
    const [stageSize, setStageSize] = useState({
      width: sceneWidth,
      height: sceneHeight,
      scale: 1
    });
    
    
    const updateSize = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.clientWidth;
      
      const scale = containerWidth / sceneWidth;
      
      // Update state with new dimensions
      setStageSize({
        width: sceneWidth * scale,
        height: sceneHeight * scale,
        scale: scale
      });
    };
    
    // Update on mount and when window resizes
    useEffect(() => {
      updateSize();
      window.addEventListener('resize', updateSize);
      
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }, []);
    
    return (
        <div ref={containerRef} className={"h-fit bg-gray-100 rounded-2xl border-2 border-black shadow-2xs"+" "+props.className}>
            <Stage 
            width={stageSize.width} 
            height={stageSize.height}
            scaleX={stageSize.scale}
            scaleY={stageSize.scale}
            className="w-full h-full">
                <Layer>
                    <Rect
                        x={50}
                        y={120}
                        width={100}
                        height={100}
                        fill="blue"
                        draggable={true}
                    />
                </Layer>
            </Stage>
        </div>
    );
}