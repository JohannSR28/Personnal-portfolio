export async function sendContactMessage(
  name: string,
  email: string,
  message: string
) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Erreur lors de l'envoi du message");
  }

  return res.json();
}
