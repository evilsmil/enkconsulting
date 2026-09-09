function CtaIllustration() {
  return (
    <div className="cta-illustration" aria-hidden="true">
      <svg viewBox="0 0 520 420" role="img">
        <defs>
          <linearGradient id="ctaScreen" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#007f83" />
            <stop offset="100%" stopColor="#00a6a8" />
          </linearGradient>
          <linearGradient id="ctaOrange" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffb35c" />
            <stop offset="100%" stopColor="#ff7a00" />
          </linearGradient>
        </defs>
        <g className="cta-illustration__halo">
          <circle cx="260" cy="210" r="178" />
          <circle cx="260" cy="210" r="118" />
        </g>
        <g className="cta-illustration__screen">
          <rect x="124" y="104" width="272" height="184" rx="22" />
          <rect x="154" y="138" width="100" height="16" rx="8" />
          <rect x="154" y="176" width="78" height="78" rx="14" />
          <path d="M174 226 L198 198 L216 216 L238 184" />
          <rect x="270" y="176" width="86" height="12" rx="6" />
          <rect x="270" y="204" width="68" height="12" rx="6" />
          <rect x="270" y="232" width="94" height="12" rx="6" />
        </g>
        <g className="cta-illustration__orbit">
          <circle cx="126" cy="86" r="30" />
          <path d="M114 86 L124 96 L140 74" />
          <circle cx="410" cy="118" r="38" />
          <path d="M392 118 H428 M410 100 V136" />
          <circle cx="388" cy="316" r="34" />
          <path d="M374 316 H402 M388 302 V330" />
        </g>
        <g className="cta-illustration__beam">
          <path d="M92 318 C166 356 294 374 432 312" />
          <path d="M92 318 C166 280 302 270 432 312" />
        </g>
      </svg>
    </div>
  )
}

export default CtaIllustration
