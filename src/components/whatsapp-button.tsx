import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/site";

type WhatsAppButtonProps = {
  message: string;
  label?: string;
  className?: string;
};

export function WhatsAppButton({
  message,
  label = "WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);
  const classes = `button button--whatsapp ${className}`.trim();

  if (!url) {
    return (
      <span
        className={`${classes} button--unavailable`}
        title="Isi nomor WhatsApp dealer di src/data/site.ts"
        aria-label={`${label}. Nomor WhatsApp belum diatur.`}
      >
        <MessageCircle aria-hidden="true" size={18} />
        {label}
      </span>
    );
  }

  return (
    <a className={classes} href={url} target="_blank" rel="noreferrer">
      <MessageCircle aria-hidden="true" size={18} />
      {label}
      <ArrowUpRight aria-hidden="true" size={15} />
    </a>
  );
}
