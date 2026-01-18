import type { CSSProperties } from "react";

export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="150 10 300 310"
      width="100"
      height="50"
      aria-hidden="true"
    >
      <style>{`
        .petal {
          fill: var(--bg-color, none);
          stroke: #322018;
          stroke-width: 8;
          stroke-linecap: round;
          stroke-linejoin: round;
          transform-origin: 300px 300px;
          transform: rotate(0deg);
          animation: petal-rotate 1s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        .thin { stroke-width: 6; }
        @keyframes petal-rotate {
          to {
            transform: rotate(var(--angle, 0deg));
            opacity: 1;
          }
        }
      `}</style>
      <g>
        <path
          className="petal"
          d="M300 300 C230 220 230 120 300 60 C370 120 370 220 300 300"
          style={
            {
              "--angle": "0deg",
            } as CSSProperties
          }
        />
        <path
          className="petal"
          d="M300 300 C230 220 230 120 300 60 C370 120 370 220 300 300"
          transform="rotate(-20 300 300)"
          style={
            {
              "--angle": "-20deg",
            } as CSSProperties
          }
        />
        <path
          className="petal"
          d="M300 300 C230 220 230 120 300 60 C370 120 370 220 300 300"
          transform="rotate(20 300 300)"
          style={
            {
              "--angle": "20deg",
            } as CSSProperties
          }
        />
        <path
          className="petal"
          d="M300 300 C230 220 230 120 300 60 C370 120 370 220 300 300"
          transform="rotate(-40 300 300)"
          style={{ "--angle": "-40deg" } as CSSProperties}
        />
        <path
          className="petal"
          d="M300 300 C230 220 230 120 300 60 C370 120 370 220 300 300"
          transform="rotate(40 300 300)"
          style={
            {
              "--angle": "40deg",
            } as CSSProperties
          }
        />
      </g>
    </svg>
  );
}
