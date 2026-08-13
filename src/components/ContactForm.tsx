export function ContactForm() {
  return (
    <div
      className="rounded-lg border border-amber-400/30 bg-amber-400/10 p-5 text-sm leading-6 text-amber-100"
      role="status"
    >
      <p className="font-medium text-amber-50">Online inquiries are not configured yet.</p>
      <p className="mt-2 text-amber-100/80">
        This prototype does not store or send contact-form submissions. Add a verified business
        inbox and a server-side form handler before enabling public contact requests.
      </p>
    </div>
  )
}
