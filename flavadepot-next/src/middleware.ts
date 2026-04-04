import { NextRequest, NextResponse } from 'next/server';

// Only allow visitors from Texas (covers all Greater Houston suburbs)
const ALLOWED_COUNTRY = 'US';
const ALLOWED_REGION_CODE = 'TX';

export function middleware(request: NextRequest) {
  // Cloudflare injects these headers automatically on every request
  const country = request.headers.get('cf-ipcountry') ?? '';
  const regionCode = request.headers.get('cf-region-code') ?? '';

  const isAllowed =
    country === ALLOWED_COUNTRY && regionCode === ALLOWED_REGION_CODE;

  if (!isAllowed) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Service Area — Flava Depot</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }
    .card {
      background: #2a2a2a;
      border-radius: 12px;
      padding: 3rem 2.5rem;
      max-width: 480px;
      text-align: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    }
    .icon { font-size: 3rem; margin-bottom: 1rem; }
    h1 { font-size: 1.5rem; color: #fff; margin-bottom: 0.75rem; }
    p { color: #aaa; line-height: 1.6; font-size: 0.95rem; }
    .highlight { color: #f97316; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">🌶️</div>
    <h1>We Serve the Houston, TX Area</h1>
    <p>
      Thanks for checking us out! <span class="highlight">Flava Depot</span>
      currently serves customers in the <strong>Greater Houston, Texas</strong> area only.
    </p>
    <p style="margin-top:1rem; color:#777;">
      If you're in the Houston area and seeing this by mistake, please try again or
      reach out to us directly.
    </p>
  </div>
</body>
</html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      }
    );
  }

  return NextResponse.next();
}

// Run on all routes except Next.js internals and static assets
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
