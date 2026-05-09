import { useEffect, useRef } from "react";
import { Anchor, Users, Table2, Waves, Trophy, ArrowRight } from "lucide-react";
import inizio from "@/assets/inizio.jpg";
import unapertutti from "@/assets/unapertutti.jpg";
import ilTavolo from "@/assets/ilTavolo.jpg";
import crisi from "@/assets/laCrisi.jpg";
import laMeta from "@/assets/laMeta.jpg";

interface ViaggioPageProps {
  onNavigate: (page: string) => void;
}

// ── Journey steps data ────────────────────────────────────────────────
const steps = [
  {
    id: 1,
    icon: Anchor,
    emoji: "⚓",
    title: "Partire con la rotta chiara in mente",
    subtitle: "L'inizio del viaggio",
    description: (
      <>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          L'inizio è un momento pieno di emozione e incertezza — ma tracciando insieme un disegno tramite software
          avanzati come iRender, riusciremo a vedere con i tuoi occhi quello che desideri.
        </p>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Non ti verrà venduto un progetto: lo costruiremo insieme, scelta per scelta.
        </p>
        <p className="text-center italic text-navy-500 text-sm md:text-base font-light">
          "Laura, non sapevo si potesse fare questo!"
        </p>
      </>
    ),
    color: "bg-navy-700",
    image: inizio,
  },
  {
    id: 2,
    icon: Users,
    emoji: "🧭",
    title: "Un Gruppo, Non dei Singoli",
    subtitle: "Il senso di appartenenza al progetto",
    description: (
      <>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Quando lavoro, non parlo solo con i proprietari ma parlo uno per uno con tutti i presenti: muratori,
          artigiani, fornitori.
        </p>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Questo permette di unire desideri e idee, creando un senso di appartenenza condiviso, dal cliente al muratore.
        </p>
        <p className="text-center italic text-navy-500 text-sm md:text-base font-light">
          "Per mia esperienza, quando tutti sentono di essere parte del progetto, il risultato arriva spontaneamente."
        </p>
      </>
    ),
    color: "bg-navy-500",
    image: unapertutti,
  },
  {
    id: 3,
    icon: Table2,
    emoji: "🗺️",
    title: "Il Tavolo delle Decisioni",
    subtitle: "Dove tutti parlano la stessa lingua",
    description: (
      <>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Un must assoluto nel mio metodo è riunire tutti attorno a un tavolo, con l'immagine relativa al progetto in
          corso aperta.
        </p>

        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Essere insieme fisicamente e parlare la stessa lingua permette di capire dove siamo e dove stiamo andando.
        </p>
        <p className="text-center italic text-navy-500 text-sm md:text-base font-light">
          "Questo allineamento continuo è ciò che trasforma un cantiere in un progetto vivo."
        </p>
      </>
    ),
    color: "bg-navy-700",
    image: ilTavolo,
  },
  {
    id: 4,
    icon: Waves,
    emoji: "🌊",
    title: "La Crisi",
    subtitle: "Ogni viaggio ha la sua tempesta",
    description: (
      <>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Non esiste un progetto senza momenti di crisi, dubbi, incertezze, stress e decisioni difficili. Sembra un mare
          insormontabile.
        </p>

        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Ma grazie alla mia esperienza so come mantenere ordine nel disordine: tengo a mente la rotta, rimuovo il
          rumore e offro opzioni chiare tra cui scegliere. Il panico non fa parte del mio vocabolario professionale.
        </p>
        <p className="text-center italic text-navy-500 text-sm md:text-base font-light">
          "La mia esperienza mi ha insegnato che ogni crisi è un'opportunità per rafforzare il progetto e il legame con
          i clienti."
        </p>
      </>
    ),
    color: "bg-navy-500",
    image: crisi,
  },
  {
    id: 5,
    icon: Trophy,
    emoji: "🏆",
    title: "La Meta",
    subtitle: "Il momento più bello",
    description: (
      <>
        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          L'arrivo è il momento più bello, la soddisfazione della realizzazione del progetto è unica.
        </p>

        <p className="text-navy-500 text-sm md:text-base leading-relaxed font-light mb-3">
          Dopo questo viaggio insieme, non saremo più architetta e clienti: avremo sviluppato un legame personale
          autentico.
        </p>
        <p className="text-center italic text-navy-500 text-sm md:text-base font-light">
          "Portare le persone con me nel prossimo progetto, insieme alla felicità di chi può finalmente vivere il suo
          sogno realizzato, è la ragione per cui faccio questo lavoro."
        </p>
      </>
    ),
    color: "bg-gold-500",
    image: laMeta,
  },
];

// ── Scroll reveal hook ────────────────────────────────────────────────
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => el.classList.add("visible"), delay);
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

// ── SVG dashed connector (vertical, mobile) ───────────────────────────
function DashedConnector({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center my-0 ${className}`}>
      <svg width="2" height="72" viewBox="0 0 2 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="72"
          stroke="#C4943A"
          strokeWidth="2"
          strokeDasharray="10 7"
          className="path-draw"
        />
      </svg>
    </div>
  );
}

// ── Step card ─────────────────────────────────────────────────────────
function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useReveal(index * 120);
  const isLast = index === steps.length - 1;

  return (
    <>
      <div ref={ref} className="reveal">
        <div className="journey-card bg-cream-50 border border-cream-300 overflow-hidden">
          {/* Step number + tag — above image */}
          <div className="flex items-center gap-3 px-6 md:px-8 pt-6 md:pt-8 pb-4">
            <span
              className={`w-7 h-7 text-xs font-sans font-semibold tracking-wider flex items-center justify-center ${
                isLast ? "bg-gold-500 text-cream-50" : "bg-navy-700 text-gold-300"
              }`}
            >
              {step.id}
            </span>
            <span className="text-xs tracking-[0.18em] uppercase text-gold-700 font-sans">{step.subtitle}</span>
          </div>

          {/* Illustration / image */}
          <div className="border-y border-cream-300 overflow-hidden">
            {step.image ? (
              <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
            ) : (
              <div className="text-center px-6 py-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${step.color} flex items-center justify-center mb-3`}>
                  <step.icon size={28} className={isLast ? "text-cream-50" : "text-gold-300"} />
                </div>
              </div>
            )}
          </div>

          {/* Text content */}
          <div className="p-6 md:p-8">
            <h3 className="font-serif text-navy-700 text-2xl md:text-3xl mb-3">{step.title}</h3>
            <div className="text-navy-500 text-sm md:text-base leading-relaxed font-light">{step.description}</div>
          </div>
        </div>
      </div>

      {/* Connector between steps */}
      {!isLast && <DashedConnector />}
    </>
  );
}

// ── Hero section ──────────────────────────────────────────────────────
function ViaggioHero() {
  const ref = useReveal();
  return (
    <section className="relative bg-navy-900 overflow-hidden px-5 py-16 md:px-12 md:py-20 lg:pb-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {/* Ocean waves */}
          {[0, 60, 120, 180, 240, 300, 360].map((y) => (
            <path
              key={y}
              d={`M0,${y + 50} Q200,${y} 400,${y + 40} T800,${y + 20}`}
              stroke="#C4943A"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8 5"
            />
          ))}
          {/* Compass rose */}
          <circle cx="720" cy="80" r="50" stroke="#C4943A" strokeWidth="1" fill="none" />
          <line x1="720" y1="30" x2="720" y2="130" stroke="#C4943A" strokeWidth="1" />
          <line x1="670" y1="80" x2="770" y2="80" stroke="#C4943A" strokeWidth="1" />
          <polygon points="720,32 714,55 726,55" fill="#C4943A" />
        </svg>
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-gold-500 block" />
          <span className="text-xs tracking-[0.25em] uppercase text-gold-300 font-sans">Il Mio Metodo</span>
          <span className="h-px w-8 bg-gold-500 block" />
        </div>

        <h1
          className="font-serif text-cream-50 mb-6 font-light"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1 }}
        >
          Ogni progetto è<br />
          <em className="text-gold-300">un viaggio</em>
        </h1>

        <p className="text-cream-300 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
          Come in ogni grande traversata, serve una guida che conosca la rotta e sappia condurre il progetto verso la
          meta.
        </p>
        <br />
        <p className="text-cream-300 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
          Mi pongo non solo come supporto tecnico, ma come partner esperto che accompagni il cliente in ogni fase del
          percorso.
        </p>
        <br />
        <p className="text-cream-300 text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
          Il mio obiettivo è garantire un processo chiaro, efficiente e orientato al risultato. Queste sono le tappe del
          viaggio che affrontiamo insieme.
        </p>
      </div>
    </section>
  );
}

// ── Main ──────────────────────────────────────────────────────────────
export default function ViaggioPage({ onNavigate }: ViaggioPageProps) {
  return (
    <main>
      <ViaggioHero />

      {/* Journey map */}
      <section className="bg-cream-100 px-5 py-12 md:px-12 md:py-14 lg:px-20 lg:pt-8">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-500 font-sans mb-2">La Rotta</p>
            <h2
              className="font-serif text-navy-700"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
            >
              Le tappe del viaggio
            </h2>
            <span className="mt-4 h-px w-12 bg-gold-500 block mx-auto" />
          </div>

          {/* Steps with dashed connectors */}
          <div>
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-cream-200 px-5 py-12 md:px-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-gold-500 font-sans">Perché</span>
            <h2
              className="font-serif text-navy-700 mt-2 mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
            >
              Non lavorerei mai se fosse solo un lavoro
            </h2>
            <p className="text-navy-500 leading-relaxed font-light mb-5">
              La parola "progetto" viene dal latino <em>proiectus</em> — gettare avanti. Ogni volta che comincio un
              nuovo progetto, sto gettando avanti una parte di me stessa. Ci metto il cuore, la competenza di vent'anni
              e l'umiltà di chi sa ma non smette mai di imparare.
            </p>
            <p className="text-navy-500 leading-relaxed font-light mb-5">
              Il legame umano che si crea durante un cantiere non è un effetto collaterale del mio lavoro — è il motore.
              Perché quando le persone si fidano di te abbastanza da affidarti la loro casa, la loro cantina, il loro
              sogno, quella fiducia merita il rispetto più totale.
            </p>
            <p className="text-navy-500 leading-relaxed font-light">
              Ecco perché lavoro come lavoro: perché il risultato non è solo un edificio bello. È una storia che
              qualcuno vivrà ogni giorno.
            </p>
          </div>

          {/* Pull quote */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 text-gold-200 font-serif leading-none select-none"
              style={{ fontSize: "8rem" }}
            >
              "
            </div>
            <blockquote className="relative z-10 bg-cream-50 border-l-4 border-gold-500 p-8 md:p-10">
              <p className="font-serif text-navy-700 text-xl md:text-2xl leading-relaxed italic font-light mb-6">
                Quando mi chiedono come mai i miei cantieri vadano così bene, rispondo sempre la stessa cosa: perché
                tutti vogliono andarci.
              </p>
              <footer className="text-sm text-gold-700 tracking-wider uppercase font-sans">— Laura</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-navy-700 px-5 py-16 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-gold-300 mb-3 font-sans">Pronti a salpare?</p>
          <h2 className="font-serif text-cream-50 text-3xl md:text-4xl mb-6 font-light">Inizia il tuo viaggio</h2>
          <p className="text-cream-300 leading-relaxed font-light mb-8 text-sm md:text-base">
            Il primo passo è semplice: una chiacchierata. Nessun impegno, nessuna fretta — solo conoscenza reciproca.
          </p>
          <button
            onClick={() => {
              onNavigate("contatti");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-700 text-cream-50 px-8 py-4 text-sm tracking-wider uppercase transition-colors duration-200"
          >
            Contattami ora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
