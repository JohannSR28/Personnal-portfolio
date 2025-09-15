export default function StatusMessage({
  status,
  error,
}: {
  status: "idle" | "success" | "error";
  error: string;
}) {
  if (status === "idle") return null;
  return (
    <div
      className={`mb-4 p-3 rounded ${
        status === "success"
          ? "bg-green-100 border-green-400 text-green-700"
          : "bg-red-100 border-red-400 text-red-700"
      } border`}
    >
      {status === "success" ? "Message envoyé avec succès !" : error}
    </div>
  );
}
