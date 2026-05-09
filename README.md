# Laura Trevisan — Portfolio Architettonico

Sito web portfolio per **Laura Trevisan**, progettista architettonico con oltre 20 anni di esperienza nel residenziale di qualità. Realizzato per lo studio **S.A.L.T.** con sede a Cologna Veneta (VR).

## Tecnologie

- **React 19** + **TypeScript**
- **Vite** — bundler e dev server
- **Tailwind CSS** — stile utility-first con palette personalizzata (navy, gold, cream)
- **shadcn/ui** + **Radix UI** — componenti accessibili
- **Lucide React** — icone

## Struttura

```
src/
├── pages/
│   ├── HomePage.tsx       # Hero, presentazione, specializzazioni
│   ├── ViaggioPage.tsx    # Il metodo di lavoro
│   └── ContattiPage.tsx   # Form di contatto
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/                # Componenti shadcn/ui
├── assets/                # Immagini
└── index.css              # Variabili CSS e animazioni
```

## Avvio in locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Funzionalità

- Design elegante con palette navy/gold/cream
- Animazioni scroll-reveal
- Layout completamente responsive
- Navigazione SPA (Single Page Application) senza routing esterno
- Sezioni: Home, Il Viaggio, Contatti
