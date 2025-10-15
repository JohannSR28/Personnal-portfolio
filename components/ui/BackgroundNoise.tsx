export default function BackgroundNoise() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: "url('/noise.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundColor: "rgb(35, 13, 17)",
      }}
    />
  );
}
