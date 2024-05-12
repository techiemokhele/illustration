"use client";

import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

//custom
import LeftSideBarComponent from "@/components/layout/LeftSideBarComponent";
import LiveComponent from "@/components/layout/LiveComponent";
import NavbarComponent from "@/components/layout/NavbarComponent";
import RightSideBarComponent from "@/components/layout/RightSideBarComponent";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";
import { ActiveElement } from "@/types/type";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");
  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });

  const handleActiveElement = (elem: ActiveElement) => {
    setActiveElement(elem);
    selectedShapeRef.current = elem?.value as string;
  };

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
      });
    });

    window.addEventListener("resize", () => {
      handleResize({
        canvas: fabricRef.current,
      });
    });
  }, []);

  return (
    <main className="overflow-hidden h-screen">
      <NavbarComponent
        activeElement={activeElement}
        handleActiveElement={handleActiveElement}
      />

      <section className="flex h-full flex-row">
        <LeftSideBarComponent />
        <LiveComponent canvasRef={canvasRef} />
        <RightSideBarComponent />
      </section>
    </main>
  );
}
