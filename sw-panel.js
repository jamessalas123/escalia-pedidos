// Service worker mínimo del panel: permite instalarlo como app. No guarda nada en caché (siempre datos en vivo).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
