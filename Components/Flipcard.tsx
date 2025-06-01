"use client";
import { useState } from "react";
//@ts-ignore
export default function FlipCard({ texts }) {
  const txtarray = [...texts];

  txtarray.map(() => {});
  return (
    <div className="flex felx-row justify-center">
      {txtarray.map((word) => ACard(word))}
    </div>
  );
}

function ACard(word: string) {
  const [rotation, setRotation] = useState(0);
  return (
    <div
      onMouseEnter={() => setRotation(rotation + 180)}
      className="w-32 h-64 bg-transparent perspective "
    >
      <div
        className="w-full h-full transition-transform duration-500 transform-3d text-black shadow-black"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="absolute w-full h-full bg-green-700 backface-hidden flex items-center justify-center text-9xl rounded-xs">
          {word}
        </div>
        <div className="absolute w-full h-full bg-green-900 backface-hidden rotate-y-180 flex items-center justify-center text-9xl rounded-xm">
          {word}
        </div>
      </div>
    </div>
  );
}
