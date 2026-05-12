"use client";

import { useEffect, useRef } from "react";

/**
 * Kit (旧ConvertKit) Inline フォームを埋め込むコンポーネント
 *
 * Kit JS は form タグを body 直下に挿入する仕様のため、
 * 1. body に script タグを inject して Kit JS を起動
 * 2. MutationObserver で form の出現を待ち、コンテナ内に移動
 *
 * フォーム設定は Kit ダッシュボードで管理(Form ID: c76e96f837)。
 */
export function KitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 既にコンテナ内に form があるなら何もしない(StrictMode 二重実行対策)
    if (containerRef.current.querySelector("form.formkit-form")) return;

    const KIT_FORM_UID = "c76e96f837";

    // Step 1: Kit のフォーム固有スクリプトを body に inject
    //   - Kit JS が form を body 直下に挿入する
    //   - 同じスクリプトが既に存在する場合は inject しない
    const existingScript = document.querySelector(
      `script[data-uid="${KIT_FORM_UID}"]`
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-uid", KIT_FORM_UID);
      script.src = `https://nikuhitsu-2.kit.com/${KIT_FORM_UID}/index.js`;
      document.body.appendChild(script);
    }

    // Step 2: form の出現を MutationObserver で監視し、現れたらコンテナ内に移動
    const moveFormIntoContainer = () => {
      const form = document.querySelector(
        `form.formkit-form[data-uid="${KIT_FORM_UID}"]`
      );
      if (
        form &&
        containerRef.current &&
        form.parentElement !== containerRef.current
      ) {
        containerRef.current.appendChild(form);
        return true;
      }
      return false;
    };

    // 既に挿入済みなら即移動、なければ Observer で待機
    if (moveFormIntoContainer()) return;

    const observer = new MutationObserver(() => {
      if (moveFormIntoContainer()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: false });

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className="kit-form-container" />;
}
