"use client";

import React from "react";

interface HalfCircleProgressBarProps {
  done: number;
  remaining: number;
  size?: number;
  strokeWidth?: number;
  doneColor?: string;
  remainingColor?: string;
  textColor?: string;
}

const HalfCircleProgressBar: React.FC<HalfCircleProgressBarProps> = ({
  done = 10,
  remaining = 10,
  size = 130,
  strokeWidth = 24,
  doneColor = "#00B7B3",
  remainingColor = "#2C3E50",
  textColor = "#FFFFFF",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Only half circle, so no need for 2 * Math.PI
  const progress = (done / (done + remaining)) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        className=""
        width={size}
        height={size / 2} // Half of the full circle
        viewBox={`0 0 ${size} ${size / 2}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={remainingColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset="0"
          transform={`rotate(180 ${size / 2} ${size / 2})`} // Rotate to start from the left
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={doneColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(180 ${size / 2} ${size / 2})`}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth}
          fill="transparent"
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          transform={`rotate(180 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div></div>
      {!Number.isNaN(progress) && (
        <>
          <div
            className="absolute top-[41%] left-[9%] text-center"
            style={{ color: textColor }}
          >
            <div className="text-xs font-bold">{`${(100 - progress).toFixed(
              0
            )}%`}</div>
          </div>
          <div
            className="absolute top-[41%] right-[9%] text-center"
            style={{ color: textColor }}
          >
            <div className="text-xs font-bold">{`${progress.toFixed(0)}%`}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default HalfCircleProgressBar;
