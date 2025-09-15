export default function BackgroundNoise() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ backgroundColor: "rgb(35, 13, 17)" }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="darkNoiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="12"
              numOctaves="8"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.15
                      0 0 0 0 0.05
                      0 0 0 0 0.08
                      0 0 0 0.6 0"
              result="darkNoise"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#darkNoiseFilter)" />
      </svg>
    </div>
  );
}
