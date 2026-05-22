/**
 * Inline icon set.
 * Kept dependency-free so the bundle stays small.
 * All icons use currentColor so they inherit from the parent.
 */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function ArrowRight(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function Plus(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function Sun(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function Moon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Menu(props) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Quote(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2.5c-.25 3.5-1.5 5-3.5 5z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h2.5c-.25 3.5-1.5 5-3.5 5z" />
    </svg>
  );
}

/* Logos for the "trusted by" marquee. Plain wordmark-style SVGs — generic placeholders. */
export function MarkAlpha(props) {
  return (
    <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" aria-hidden {...props}>
      <text x="0" y="20" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="20" letterSpacing="-0.04em">Northwind</text>
    </svg>
  );
}
export function MarkBeta(props) {
  return (
    <svg width="100" height="28" viewBox="0 0 100 28" fill="currentColor" aria-hidden {...props}>
      <text x="0" y="20" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="500" fontSize="22" letterSpacing="-0.04em">Helix</text>
    </svg>
  );
}
export function MarkGamma(props) {
  return (
    <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" aria-hidden {...props}>
      <text x="0" y="20" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="18" letterSpacing="0.18em">CONTINENTAL</text>
    </svg>
  );
}
export function MarkDelta(props) {
  return (
    <svg width="90" height="28" viewBox="0 0 90 28" fill="currentColor" aria-hidden {...props}>
      <circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="32" y="20" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="18" letterSpacing="-0.03em">Orbit</text>
    </svg>
  );
}
export function MarkEpsilon(props) {
  return (
    <svg width="110" height="28" viewBox="0 0 110 28" fill="currentColor" aria-hidden {...props}>
      <text x="0" y="20" fontFamily="DM Sans, sans-serif" fontWeight="500" fontSize="20" letterSpacing="-0.04em">Northstar*</text>
    </svg>
  );
}
export function MarkZeta(props) {
  return (
    <svg width="100" height="28" viewBox="0 0 100 28" fill="currentColor" aria-hidden {...props}>
      <rect x="2" y="6" width="16" height="16" fill="currentColor" />
      <text x="24" y="20" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="18">VEKTOR</text>
    </svg>
  );
}
