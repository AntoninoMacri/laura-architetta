import { useRef, useEffect } from "react";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => el.classList.add("visible"), delay);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function ContattiPage() {
  const heroRef = useReveal();
  const infoRef = useReveal(100);
  const responseRef = useReveal(200);
  const quoteRef = useReveal(300);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-navy-900 px-5 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 text-center">
        <div ref={heroRef} className="reveal max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-500 block" />
            <span className="text-xs tracking-[0.25em] uppercase text-gold-300 font-sans">Contatti</span>
            <span className="h-px w-8 bg-gold-500 block" />
          </div>
          <h1
            className="font-serif text-cream-50 font-light mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 1.1 }}
          >
            Parliamo del tuo
            <br />
            <em className="text-gold-300">progetto</em>
          </h1>
          <p className="text-cream-300 text-base leading-relaxed font-light max-w-md mx-auto">
            Nessun impegno, nessuna fretta. Solo una chiacchierata per capire insieme cosa stai sognando.
          </p>
        </div>
      </section>

      {/* ── Info ────────────────────────────────────────────── */}
      <section className="bg-cream-100 px-5 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Contact details */}
          <div ref={infoRef} className="reveal bg-navy-700 text-cream-100 p-8 md:p-12 space-y-7">
            <h2 className="font-serif text-2xl md:text-3xl text-cream-50">Dove trovarmi</h2>
            <span className="h-px bg-gold-500/40 block" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base md:text-lg">
              <a
                href="mailto:info@lauratrevisan.it"
                className="flex items-start gap-4 hover:text-gold-300 transition-colors group"
              >
                <Mail size={20} className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-300" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-cream-300/60 mb-1 font-sans">Email</p>
                  <p>info@lauratrevisan.it</p>
                </div>
              </a>

              <a
                href="tel:+39XXXXXXXXXX"
                className="flex items-start gap-4 hover:text-gold-300 transition-colors group"
              >
                <Phone size={20} className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-300" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-cream-300/60 mb-1 font-sans">Telefono</p>
                  <p>+39 XXX XXX XXXX</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-cream-300/60 mb-1 font-sans">Studio</p>
                  <p>Cologna Veneta</p>
                  <p className="text-cream-300/70 text-sm mt-0.5">Lavoro in tutto il Veneto</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/lauratrevisan639/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-gold-300 transition-colors group"
              >
                <Instagram size={20} className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-300" />
                <div>
                  <p className="text-xs tracking-wider uppercase text-cream-300/60 mb-1 font-sans">Instagram</p>
                  <p>@lauratrevisan639</p>
                </div>
              </a>
            </div>
          </div>

          {/* Response time */}
          <div ref={responseRef} className="reveal bg-cream-50 border border-cream-300 p-8 md:p-12">
            <h3 className="font-serif text-navy-700 text-2xl md:text-3xl mb-4">Tempi di risposta</h3>
            <p className="text-lg md:text-xl text-navy-500 font-light leading-relaxed">
              Rispondo personalmente a ogni messaggio entro{" "}
              <strong className="text-navy-700 font-medium">24–48 ore</strong> nei giorni lavorativi. Non uso
              risponditori automatici.
            </p>
          </div>

          {/* Quote */}
          <div ref={quoteRef} className="reveal border-l-4 border-gold-500 pl-6 py-1">
            <p className="font-serif text-navy-700 text-xl md:text-2xl leading-relaxed italic font-light">
              "La prima conversazione è già parte del progetto. È il momento in cui cominciamo a sognare insieme, a
              capire se siamo sulla stessa lunghezza d'onda. Per me è importante che tu ti senta ascoltato e capito fin
              da subito."
            </p>
            <p className="font-serif italic text-gold-700 mt-3 text-base">— Laura</p>
          </div>
        </div>
      </section>
    </main>
  );
}
