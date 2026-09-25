import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

/** HQ number (Canada) — used for the global floating entry point. Regional numbers live on the office cards. */
const HQ_WHATSAPP_NUMBER = "15145592551";

interface WhatsAppButtonProps {
  label: string;
}

export function WhatsAppButton({ label }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${HQ_WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-4 end-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#18794e] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-5 sm:end-5 sm:size-14"
    >
      <WhatsAppIcon className="size-6 sm:size-7" />
    </a>
  );
}
