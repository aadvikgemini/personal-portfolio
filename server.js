import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let reqPath = cleanUrl;

  // ROUTING:
  // 1. Starting Page routes:
  if (reqPath === '/' || reqPath === '/start' || reqPath === '/start.html') {
    reqPath = '/start.html';
  } else if (reqPath === '/index.html') {
    reqPath = '/index.html';
  }
  // 2. Landing Page routes:
  else if (reqPath === '/landing' || reqPath === '/landing.html' || reqPath.startsWith('/category')) {
    reqPath = '/landing.html';
  }
  // 3. Campus Connect Dedicated Animated Loading Screen:
  else if (reqPath === '/campus-connect' || reqPath === '/campus-connect.html' || reqPath === '/loading' || reqPath === '/campus') {
    reqPath = '/campus-connect.html';
  }
  // 4. Campus Connect Buffering Concept Showcase Suite:
  else if (reqPath === '/showcase' || reqPath === '/ideas' || reqPath === '/buffering' || reqPath === '/buffering-showcase.html') {
    reqPath = '/buffering-showcase.html';
  }

  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback based on URL:
        const fallbackFile = cleanUrl.includes('landing') ? 'landing.html' : 'index.html';
        fs.readFile(path.join(__dirname, fallbackFile), (fallbackErr, fallbackContent) => {
          if (fallbackErr) {
            console.error(`[404] ${req.method} ${req.url} -> Not Found`);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(200, {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Access-Control-Allow-Origin': '*'
            });
            res.end(fallbackContent);
          }
        });
      } else {
        console.error(`[500] ${req.method} ${req.url} -> Error ${err.code}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
      return;
    }

    if (!stats.isFile()) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }

    // Support HTTP Range requests (crucial for video/audio streaming and Safari playback)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (start >= stats.size || end >= stats.size || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${stats.size}`,
          'Access-Control-Allow-Origin': '*'
        });
        res.end();
        return;
      }

      const chunkSize = (end - start) + 1;
      const stream = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      stream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[Web Server] Running at http://localhost:${PORT}/`);
  console.log(`  - RoomRush Start:            http://localhost:${PORT}/ (or /start)`);
  console.log(`  - RoomRush Landing:          http://localhost:${PORT}/landing`);
  console.log(`  - Campus Connect Loading:    http://localhost:${PORT}/campus-connect`);
  console.log(`  - Buffering Concepts Suite:  http://localhost:${PORT}/showcase`);
});
