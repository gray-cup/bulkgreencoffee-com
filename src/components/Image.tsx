import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: any;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number | string;
  width?: number | string;
  height?: number | string;
}

export function Image({ src, alt, className, fill, style, ...props }: ImageProps) {
  const computedStyle: React.CSSProperties = {
    ...style,
    ...(fill
      ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
        }
      : {}),
  };

  const resolvedSrc = typeof src === "object" && src !== null && "src" in src ? (src as any).src : src;

  return <img src={resolvedSrc} alt={alt} className={className} style={computedStyle} loading="lazy" {...props} />;
}

export default Image;
