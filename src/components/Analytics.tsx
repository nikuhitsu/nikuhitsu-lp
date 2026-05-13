import Script from "next/script";

/**
 * GA4(Google Analytics 4)+ Microsoft Clarity の埋込
 *
 * ADR-008 に基づくアクセス解析。両者とも無料。
 * - GA4: 流入経路・PV/UU・コンバージョン
 * - Clarity: セッション録画・ヒートマップ
 *
 * プライバシー: 個人特定情報は収集しない。クッキー使用は footer で告知。
 */

const GA_ID = "G-WEF037NTQR";
const CLARITY_ID = "wqcrdvrfp8";

export function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
    </>
  );
}
