"use client";

import { useEffect, useRef } from "react";

/**
 * Kit (旧ConvertKit) Inline フォームを埋め込むコンポーネント
 *
 * Next.js の <Script> コンポーネントだと script タグが <head> に挿入され、
 * Kit JS がフォームをページ末尾(body 直下)に挿入してしまうため、
 * useEffect でコンテナ内に直接 script タグを動的に追加する。
 *
 * フォーム設定は Kit ダッシュボードで管理(Form ID: c76e96f837)。
 */
export function KitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 既に script が追加済みなら何もしない(StrictMode の二重実行対策)
    if (containerRef.current.querySelector("script[data-uid='c76e96f837']")) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "c76e96f837");
    script.src = "https://nikuhitsu-2.kit.com/c76e96f837/index.js";
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="kit-form-container" />;
}
