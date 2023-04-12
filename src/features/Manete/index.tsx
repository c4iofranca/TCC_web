import React from "react";
import { colors } from "../../theme/colors";

interface IManete { 
  value: number; 
}

export default function Manete({ value }: IManete) {
  const angularPosition = -90 + (177*value)/9.3
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderRightStyle: "dotted",
        borderRightWidth: "thin",
        borderRightColor: '#80808080',
      }}
    >
      <svg
        width="108"
        height="84"
        viewBox="0 0 54 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="19.3833"
          width="16.9546"
          height="53.7262"
          fill="url(#pattern0)"
          style={{ transform: `rotate(${angularPosition}deg)`, transformOrigin: "50% 65%" }}
        />
        <rect
          x="0.666992"
          y="28.8449"
          width="53.2859"
          height="35.0101"
          fill="url(#pattern1)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_58_293"
              transform="scale(0.012987 0.00409836)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_58_293"
              transform="scale(0.00413223 0.00628931)"
            />
          </pattern>
          <image
            id="image0_58_293"
            width="77"
            height="244"
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="image1_58_293"
            width="242"
            height="159"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
        <path
          d="M82 41C82 30.1261 77.6804 19.6976 69.9914 12.0086C62.3024 4.31963 51.8739 8.20955e-07 41 0C30.1261 -8.20955e-07 19.6976 4.31963 12.0086 12.0086C4.31963 19.6976 1.64191e-06 30.1261 0 41L10.564 41C10.564 32.9279 13.7706 25.1863 19.4785 19.4785C25.1863 13.7706 32.9279 10.564 41 10.564C49.0721 10.564 56.8137 13.7706 62.5215 19.4785C68.2294 25.1863 71.436 32.9279 71.436 41H82Z"
          stroke="#D9D9D9"
          style={{
            transformOrigin: "10px 10px",
            transform: "translate(-14px, 0px)",
          }}
        />
      </svg>
    </div>
  );
}
