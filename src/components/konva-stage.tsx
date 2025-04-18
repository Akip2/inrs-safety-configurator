import { useEffect, useRef, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";

export default function KonvaStage({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
    const sceneWidth = 1900;
    const sceneHeight = 1200;
    
    // State to track current scale and dimensions
    const [stageSize, setStageSize] = useState({
      width: sceneWidth,
      height: sceneHeight,
      scale: 1
    });
    
    
    const updateSize = () => {
      if (!containerRef.current) return;
      
      // Get container width
      const containerWidth = containerRef.current.clientWidth;
      
      // Calculate scale
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
    );
}