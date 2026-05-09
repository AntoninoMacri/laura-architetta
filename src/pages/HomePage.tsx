import { useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Home, Building2, Wine } from "lucide-react";
import lauraImg from "../assets/Laura2.jpg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Reusable scroll-reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Specialty Card ──────────────────────────────────────────────────
function SpecialtyCard({ icon: Icon, title, description }: { icon: typeof Home; title: string; description: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="journey-card bg-cream-50 border border-cream-300 p-6 md:p-7 h-full">
        <div className="w-10 h-10 rounded-none bg-navy-700 flex items-center justify-center mb-5">
          <Icon size={18} className="text-gold-300" />
        </div>
        <h3 className="font-serif text-xl text-navy-700 mb-2">{title}</h3>
        <p className="text-sm text-navy-600 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
}

// ─── W Card ──────────────────────────────────────────────────────────
function WCard({ letter, label, value, delay = 0 }: { letter: string; label: string; value: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal flex gap-4 items-start">
      <div className="shrink-0 w-16 h-8 md:w-20 md:h-10 flex items-center justify-center bg-gold-500">
        <span className="font-serif text-cream-50 text-lg md:text-xl font-semibold leading-none">{letter}</span>
      </div>
      <div>
        <p className="text-xs tracking-[0.20em] uppercase text-gold-700 mb-0.5 font-sans">{label}</p>
        <p className="text-navy-700 text-sm md:text-base leading-snug">{value}</p>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────
export default function HomePage({ onNavigate }: HomePageProps) {
  const subtitleRef = useReveal();
  const wSectionRef = useReveal();

  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* ── Foto sfondo piena ── */}
        <div className="absolute inset-0">
          <img src={lauraImg} alt="Laura Trevisan" className="w-full h-full object-cover object-top" />
          {/* Overlay: scuro a sx per il testo, sfuma verso destra per mostrare la foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/45 to-navy-900/5" />
          {/* Overlay dal basso per leggibilità su mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          {/* Overlay dall'alto per la navbar — scurisce tutta la fascia superiore */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-transparent" />
        </div>

        {/* ── Testo ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto pl-5 pr-5 md:pl-4 md:pr-8 lg:pl-4 lg:pr-12
                        flex items-end md:items-center
                        min-h-screen
                        pb-24 pt-28"
        >
          <div className="max-w-lg w-full">
            {/* Studio label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500 block" />
              <span className="text-xs tracking-[0.25em] uppercase text-gold-300 font-sans">S.A.L.T.</span>
            </div>

            {/* Name */}
            <h1
              className="font-serif text-cream-50 mb-2"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.05 }}
            >
              Laura
              <br />
              Trevisan
            </h1>

            {/* Title */}
            <p className="font-serif italic text-gold-300 text-xl md:text-2xl mb-6 font-light">
              Progettista Architettonico
            </p>

            {/* Tagline */}
            <p className="text-cream-200 text-base md:text-lg leading-relaxed font-light max-w-sm mb-10">
              Trasformo le tue idee in spazi
              <br />
              che raccontano chi sei
              <br />
              <span className="text-sm tracking-widest opacity-70">cura — esperienza — passione autentica</span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  onNavigate("viaggio");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-700 text-cream-50 px-7 py-3.5 text-sm tracking-wider uppercase transition-colors duration-200"
              >
                Scopri il Mio Metodo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  onNavigate("contatti");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border border-cream-200 text-cream-200 hover:border-gold-300 hover:text-gold-300 px-7 py-3.5 text-sm tracking-wider uppercase transition-colors duration-200"
              >
                Contattami
              </button>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                        flex flex-col items-center gap-2 text-cream-200/50"
        >
          <ChevronDown size={20} className="animate-bounce" />
          <span className="text-xs tracking-widest uppercase">Scorri</span>
        </div>
      </section>

      {/* ── PRESENTAZIONE ───────────────────────────────────────── */}
      <section className="bg-cream-100 px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div ref={subtitleRef} className="reveal mb-16 md:mb-20">
            <span className="text-xs tracking-[0.25em] uppercase text-gold-500 font-sans">Il profilo</span>
            <h2
              className="font-serif text-navy-700 mt-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}
            >
              Una storia di passione
              <br />e vent'anni di cantieri
            </h2>
            <span className="mt-4 h-px w-16 bg-gold-500 block" />
          </div>

          {/* Two columns: W's + text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* W answers */}
            <div ref={wSectionRef} className="reveal space-y-7">
              <WCard
                letter="Chi"
                label="Chi sono"
                value="Laura Trevisan, progettista architettonico con oltre 20 anni di esperienza nel residenziale di qualità."
                delay={0}
              />
              <WCard
                letter="Cosa"
                label="Cosa faccio"
                value="Progetto ristrutturazioni, restauri, ville di lusso e cantine di rappresentanza — sempre su misura, mai in serie."
                delay={100}
              />
              <WCard
                letter="Dove"
                label="Dove opero"
                value="Ho il mio studio a Cologna Veneta e lavoro in tutto il Veneto, seguendo personalmente ogni progetto."
                delay={200}
              />
              <WCard
                letter="Quando"
                label="Da quanto"
                value="Dal 2004 ad oggi: oltre 20 anni di cantieri, clienti, soluzioni e soddisfazioni cresciute progetto dopo progetto."
                delay={300}
              />
              <WCard
                letter="Quale"
                label="Qual è il mio approccio"
                value="Utilizzo software avanzati come iRender per visualizzare insieme il progetto prima ancora di iniziare i lavori — così sai esattamente cosa costruiremo."
                delay={400}
              />
            </div>

            {/* Narrative text */}
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-5 py-1">
                <p className="font-serif text-navy-700 text-xl md:text-2xl leading-relaxed italic font-light">
                  "Ogni progetto è un viaggio unico. Il mio compito è essere la guida che ti porta dove vuoi arrivare —
                  con metodo, con cura e con una bussola sempre puntata sulla tua visione."
                </p>
                <p className="font-serif italic text-gold-700 mt-3 text-base">— Laura</p>
              </div>
              <p className="text-navy-600 leading-relaxed font-light">
                Ho scelto il residenziale perché credo che la casa sia lo spazio più intimo che esista. Non progetto
                semplicemente muri e arredi: ascolto chi ci vive, capisco come si muove, cosa lo emoziona, e costruisco
                attorno a questo.
              </p>
              <p className="text-navy-600 leading-relaxed font-light">
                Le ristrutturazioni e i restauri mi appassionano in modo particolare: c'è qualcosa di profondamente
                bello nel restituire vita a uno spazio che ha storia. Ma amo anche le sfide in bianco — una villa da
                costruire, una cantina da rendere elegante quanto il vino che ospiterà.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    onNavigate("contatti");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 text-sm tracking-wider uppercase text-navy-700 hover:text-gold-500 transition-colors font-medium"
                >
                  Parliamo del tuo progetto
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-500 mb-8 font-sans">Le specializzazioni</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <SpecialtyCard
                icon={Home}
                title="Ristrutturazioni & Restauri"
                description="La mia vera passione: ridare vita a spazi con storia, rispettandone l'anima e portando il comfort contemporaneo dove non c'era."
              />
              <SpecialtyCard
                icon={Building2}
                title="Ville & Case di Lusso"
                description="Progettazione residenziale di alto livello, dove ogni scelta estetica e tecnica è pensata per durare nel tempo e riflettere chi ci abita."
              />
              <SpecialtyCard
                icon={Wine}
                title="Cantine di Rappresentanza"
                description="Spazi che valorizzano il vino e chi lo produce — architettura che parla di territorio, qualità e identità di cantina."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-navy-700 px-5 py-16 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-300 mb-3 font-sans">Il prossimo passo</p>
          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl mb-6 font-light">Hai un progetto in mente?</h2>
          <p className="text-cream-300 leading-relaxed font-light mb-8 text-sm md:text-base">
            Non importa se è ancora solo un'idea vaga o se hai già le idee chiare — il momento migliore per parlarne è
            adesso.
          </p>
          <button
            onClick={() => {
              onNavigate("contatti");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-700 text-cream-50 px-8 py-4 text-sm tracking-wider uppercase transition-colors duration-200"
          >
            Iniziamo a parlare
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
