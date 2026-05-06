"use client";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/context";
import { trackPixelEvent, trackEvent } from "./Analytics";

const PHONE = "6287798791616";
const wa = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

interface ExperienceCard {
  id: string;
  video: string;
  poster: string;
  title: string;
  subtitle: string;
  price: string;
  primary: { label: string; href: string; kind: "megatix" | "internal" };
  secondary?: { label: string; href: string };
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function BookExperienceModal({ open, onClose }: Props) {
  const { t } = useLanguage();
  const router = useRouter();

  const experiences: ExperienceCard[] = useMemo(
    () => [
      {
        id: "entrance",
        video: "/videos/entrance-short.mp4",
        poster: "/images/entrance.webp",
        title: t.home.entrance.headline,
        subtitle: t.home.entrance.subtitle,
        price: "From 150K IDR",
        primary: {
          label: t.ui.buyTicket,
          href: "https://megatix.co.id/events/entrance-to-pacha-alpaca?utm_source=pacha&utm_medium=website&utm_campaign=entrance-modal",
          kind: "megatix",
        },
      },
      {
        id: "connection",
        video: "/videos/connection-short.mp4",
        poster: "/images/connection.webp",
        title: t.home.connection.headline,
        subtitle: t.home.connection.subtitle,
        price: "From 200K IDR",
        primary: {
          label: t.ui.buyTicket,
          href: "https://megatix.co.id/events/alpaca-connection-in-nuanu?utm_source=pacha&utm_medium=website&utm_campaign=connection-modal",
          kind: "megatix",
        },
      },
      {
        id: "dinner",
        video: "/videos/dinner-short.mp4",
        poster: "/images/dinner.webp",
        title: t.home.dinner.headline,
        subtitle: t.home.dinner.subtitle,
        price: "1.9M IDR",
        primary: {
          label: t.ui.buyTicket,
          href: "https://megatix.co.id/events/private-dinner-with-alpacas?utm_source=pacha&utm_medium=website&utm_campaign=dinner-modal",
          kind: "megatix",
        },
        secondary: {
          label: t.ui.whatsapp,
          href: wa(t.home.bookingMessages.dinner),
        },
      },
      {
        id: "lodge",
        video: "/videos/bamboo-nest-short.mp4",
        poster: "/images/bamboo-nest.webp",
        title: t.home.lodge.headline,
        subtitle: t.home.lodge.subtitle,
        price: "From 1.5M IDR",
        primary: {
          label: t.ui.viewLodges,
          href: "/lodges",
          kind: "internal",
        },
        secondary: {
          label: t.ui.whatsapp,
          href: wa(t.home.bookingMessages.lodge),
        },
      },
    ],
    [t]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const handlePrimary = (exp: ExperienceCard) => {
    if (exp.primary.kind === "megatix") {
      const whiteLabel = exp.primary.href.replace("/events/", "/white-label/");
      trackPixelEvent("InitiateCheckout", {
        content_name: `${exp.id}-modal`,
        content_category: "ticket",
      });
      trackEvent("booking_click", { experience: exp.id, source: "modal" });
      window.open(whiteLabel, "_blank", "noopener,noreferrer");
    } else {
      trackEvent("internal_nav", { destination: exp.primary.href, source: "modal" });
      onClose();
      router.push(exp.primary.href);
    }
  };

  const handleWhatsApp = (exp: ExperienceCard) => {
    if (!exp.secondary) return;
    trackPixelEvent("Contact", { content_name: `${exp.id}-whatsapp` });
    trackEvent("whatsapp_click", { experience: exp.id, source: "modal" });
    window.open(exp.secondary.href, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.ui.bookYourExperience}
            className="relative z-10 flex max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-3xl flex-col overflow-hidden rounded-3xl bg-[#1a1a1a] text-white shadow-2xl sm:w-full"
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <h2 className="font-[family-name:var(--font-golos)] text-lg font-semibold sm:text-xl">
                {t.ui.bookYourExperience}
              </h2>
              <button
                onClick={onClose}
                aria-label={t.ui.close}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {experiences.map((exp) => (
                  <article
                    key={exp.id}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
                  >
                    <video
                      src={exp.video}
                      poster={exp.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      {exp.price}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/85 via-black/65 to-transparent p-4 pt-10" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
                      <h3 className="font-[family-name:var(--font-golos)] text-base font-semibold leading-tight">
                        {exp.title}
                      </h3>
                      <p className="line-clamp-2 text-xs text-white/80">
                        {exp.subtitle}
                      </p>
                      <div className="mt-1 flex flex-col gap-2" style={{ textShadow: "none" }}>
                        <button
                          onClick={() => handlePrimary(exp)}
                          className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-95"
                        >
                          {exp.primary.label}
                        </button>
                        {exp.secondary && (
                          <button
                            onClick={() => handleWhatsApp(exp)}
                            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366]/95 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-95"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {exp.secondary.label}
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
