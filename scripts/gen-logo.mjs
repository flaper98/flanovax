import sharp from 'sharp'
import { mkdirSync } from 'fs'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="120" viewBox="0 0 480 120">
  <defs>
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
  </defs>

  <!-- Círculo de fondo negro -->
  <circle cx="60" cy="60" r="56" fill="#0f0e0e"/>
  <!-- Anillo dorado -->
  <circle cx="60" cy="60" r="54" fill="none" stroke="url(#gd)" stroke-width="1.6"/>

  <!-- Letra F: trazo vertical + barra superior + barra media -->
  <path d="M33,25 L87,25 L87,38 L45,38 L45,57 L75,57 L75,68 L45,68 L45,95 L33,95 Z"
        fill="url(#gv)"/>

  <!-- Separador vertical dorado -->
  <line x1="134" y1="24" x2="134" y2="96" stroke="#c9a84c" stroke-width="0.8" opacity="0.28"/>

  <!-- Wordmark FLANOVAX -->
  <text
    x="152" y="75"
    font-family="'Arial Black', Arial, Helvetica, sans-serif"
    font-size="43"
    font-weight="900"
    letter-spacing="2"
    fill="#c9a84c"
  >FLANOVAX</text>

  <!-- Tagline -->
  <text
    x="154" y="94"
    font-family="Arial, Helvetica, sans-serif"
    font-size="9.5"
    letter-spacing="4"
    fill="#c9a84c"
    opacity="0.55"
  >DISEÑO WEB · LANDING PAGES</text>
</svg>`

mkdirSync('src/assets', { recursive: true })

await sharp(Buffer.from(svg), { density: 144 })
  .png({ compressionLevel: 9 })
  .toFile('src/assets/logo-flanovax.png')

console.log('✓ Logo generado: src/assets/logo-flanovax.png')
