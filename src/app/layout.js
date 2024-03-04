import './globals.css'

export const metadata = {
  title: '매거진 수요조사',
  description: 'Lets go',
}

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
          integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8" crossOrigin="anonymous"></script>
        <script type="module">
          import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
          const el = document.createElement('pwa-update');
          document.body.appendChild(el);
        </script>
      </head>
      <body >
        {children}
        <script>
          {`
        document.body.addEventListener('touchstart', function(e) {
            // 다중 터치일 경우 기본 동작을 막음
            if (e.touches.length > 1 || e.targetTouches.length > 1) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            // 주소창이나 네비게이션 바가 있을 경우 숨김
            window.scrollTo(0, 1);
        }, {passive: false});
        `}
        </script>

      </body>
    </html>
  )
}
