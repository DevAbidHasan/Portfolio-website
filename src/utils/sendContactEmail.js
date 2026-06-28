const CONTACT_EMAIL = "abidhasanplabon80@gmail.com";

export async function sendContactEmail({ name, email, message }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("MISSING_KEY");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio message from ${name}`,
      from_name: "Portfolio — Abid Hasan Plabon",
      to_email: CONTACT_EMAIL,
      replyto: email,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Send failed");
  }

  return data;
}
