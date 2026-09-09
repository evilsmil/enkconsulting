function SupportIllustration() {
  return (
    <div className="support-illustration" aria-hidden="true">
      <svg viewBox="0 0 620 420" role="img">
        <defs>
          <linearGradient id="supportPanel" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#00a6a8" />
            <stop offset="100%" stopColor="#007f83" />
          </linearGradient>
          <linearGradient id="supportAccent" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffb25c" />
            <stop offset="100%" stopColor="#ff7a00" />
          </linearGradient>
        </defs>
        <polygon className="support-illustration__back" points="108,92 454,34 548,118 548,338 196,386 80,270" />
        <rect className="support-illustration__desk" x="86" y="304" width="390" height="34" rx="12" />
        <g className="support-illustration__screen">
          <rect x="178" y="92" width="252" height="188" rx="18" />
          <rect x="202" y="122" width="204" height="18" rx="6" />
          <rect x="202" y="160" width="82" height="76" rx="8" />
          <path d="M216 214 L244 184 L266 202 L286 174" />
          <rect x="304" y="160" width="88" height="12" rx="6" />
          <rect x="304" y="190" width="64" height="12" rx="6" />
          <rect x="304" y="220" width="78" height="12" rx="6" />
        </g>
        <g className="support-illustration__operator">
          <circle cx="118" cy="204" r="48" />
          <path d="M72 206 C74 166 93 139 118 139 C143 139 162 166 164 206" />
          <path d="M82 211 C82 247 96 272 119 272 C142 272 154 247 154 211" />
          <path d="M164 213 C204 220 228 240 244 274" />
          <circle cx="248" cy="278" r="8" />
        </g>
        <g className="support-illustration__server">
          <rect x="438" y="176" width="88" height="132" rx="12" />
          <line x1="458" y1="212" x2="506" y2="212" />
          <line x1="458" y1="246" x2="506" y2="246" />
          <line x1="458" y1="280" x2="506" y2="280" />
          <circle cx="462" cy="194" r="5" />
          <circle cx="462" cy="228" r="5" />
          <circle cx="462" cy="262" r="5" />
        </g>
        <g className="support-illustration__nodes">
          <circle cx="496" cy="96" r="28" />
          <path d="M484 96 L493 105 L510 86" />
          <circle cx="380" cy="338" r="46" />
          <path d="M360 338 H400 M380 318 V358" />
          <circle cx="92" cy="330" r="13" />
          <circle cx="526" cy="348" r="17" />
        </g>
      </svg>
    </div>
  )
}

export default SupportIllustration
