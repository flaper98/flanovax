import sharp from 'sharp'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f0e0e"/>
      <stop offset="100%" stop-color="#1a1814"/>
    </linearGradient>
    <linearGradient id="gd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#9a7834"/>
      <stop offset="35%"  stop-color="#c9a84c"/>
      <stop offset="65%"  stop-color="#e8c96e"/>
      <stop offset="100%" stop-color="#c9a84c"/>
    </linearGradient>
    <linearGradient id="gv" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   stop-color="#f2de7e"/>
      <stop offset="40%"  stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#7e5e18"/>
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#c9a84c" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#c9a84c" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Fondo -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Destellos ambientales -->
  <ellipse cx="190" cy="315" rx="280" ry="280" fill="url(#glow1)"/>
  <ellipse cx="1050" cy="100" rx="200" ry="200" fill="url(#glow2)"/>

  <!-- Línea dorada superior -->
  <rect x="0" y="0" width="1200" height="3" fill="url(#gd)"/>

  <!-- Ícono circular -->
  <circle cx="185" cy="315" r="125" fill="#0f0e0e"/>
  <circle cx="185" cy="315" r="123" fill="none" stroke="url(#gd)" stroke-width="2"/>

  <!-- Letra F dentro del círculo -->
  <path d="M135,250 L235,250 L235,272 L157,272 L157,306 L215,306 L215,328 L157,328 L157,380 L135,380 Z"
        fill="url(#gv)"/>

  <!-- Separador vertical -->
  <line x1="346" y1="180" x2="346" y2="450" stroke="#c9a84c" stroke-width="1" opacity="0.22"/>

  <!-- FLANOVAX wordmark -->
  <text x="378" y="308"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="96"
    font-weight="900"
    letter-spacing="4"
    fill="#c9a84c"
  >FLANOVAX</text>

  <!-- Tagline -->
  <text x="382" y="368"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26"
    letter-spacing="0.5"
    fill="#ffffff"
    opacity="0.62"
  >Landing pages y páginas web que convierten</text>

  <!-- Línea separadora -->
  <rect x="382" y="408" width="540" height="1" fill="#c9a84c" opacity="0.25"/>

  <!-- Datos de contacto -->
  <text x="382" y="446"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18"
    letter-spacing="2.5"
    fill="#c9a84c"
    opacity="0.55"
  >DISEÑO WEB · CAPTACIÓN DE LEADS · ENTREGA EN 7-14 DÍAS</text>

  <text x="382" y="487"
    font-family="Arial, Helvetica, sans-serif"
    font-size="19"
    fill="#c9a84c"
    opacity="0.42"
  >contacto@flanovax.com  ·  +51 977 913 748</text>

  <!-- Línea dorada inferior -->
  <rect x="0" y="627" width="1200" height="3" fill="url(#gd)"/>
</svg>`

await sharp(Buffer.from(svg), { density: 96 })
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png')

console.log('✓ OG image generada: public/og-image.png (1200×630)')
