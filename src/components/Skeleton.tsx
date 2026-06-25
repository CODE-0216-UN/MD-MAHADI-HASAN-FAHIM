import { CSSProperties, HTMLAttributes, Key } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  key?: Key;
  className?: string;
  shape?: "rect" | "circle" | "text";
  theme?: "dark" | "light";
  width?: string;
  height?: string;
}

export default function Skeleton({ 
  className = "", 
  shape = "rect", 
  theme = "dark", 
  width, 
  height 
}: SkeletonProps) {
  const isDark = theme === "dark";
  const shimmerClass = isDark ? "animate-shimmer" : "animate-shimmer-light";
  
  let shapeClass = "rounded-xl";
  if (shape === "circle") {
    shapeClass = "rounded-full";
  } else if (shape === "text") {
    shapeClass = "rounded-md h-4";
  }

  const style: CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`inline-block w-full ${shimmerClass} ${shapeClass} ${className}`}
      style={style}
    />
  );
}
