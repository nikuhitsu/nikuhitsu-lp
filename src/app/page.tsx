import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Nikuhitsu</h1>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#how-it-works" className="hover:text-gray-600">仕組み</a>
            <a href="#faq" className="hover:text-gray-600">よくある質問</a>
            <a href="#waitlist" className="hover:text-gray-600">早期アクセス</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-4">人間制作証明 SaaS</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
              あなたが描いた絵が、<br className="hidden sm:block" />
              AIではなくあなた自身の手によるものだと、<br className="hidden sm:block" />
              <span className="text-blue-600">暗号で証明する。</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              イラストレーター・漫画家・映像作家・音楽家のための<br className="hidden sm:block" />
              C2PA準拠の制作証明サービス
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#waitlist"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                早期アクセスに登録
              </a>
              <a
                href="#how-it-works"
                className="inline-block border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                仕組みを見る
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">こんな経験はありませんか？</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>SNSに投稿したイラストが、AI学習に使われた疑念を持った</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>「これAIで作ったんじゃないの？」と疑われた</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>自分の作風を真似たAI生成画像が出回って対処できなかった</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">●</span>
                <span>Glazeや透かしを試したが、続けるのが難しかった</span>
              </li>
            </ul>
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                2026年、欧州でAI規制（EU AI Act）が施行され、AIコンテンツの表示義務が始まります。
                日本でも2025年10月、出版社17社・漫画家協会・動画協会が「生成AI時代の創作と権利」に関する共同声明を発表しました。
              </p>
              <p className="mt-4 font-medium text-gray-900">
                あなたの作品が「人間が描いた」と証明できる仕組みは、これから市場が要求する標準になります。
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-12 text-center">仕組み</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">作品をアップロード</h4>
                <p className="text-gray-600 text-sm">
                  完成したイラスト・漫画・写真・動画を、ブラウザから直接アップロード。
                  原本ファイル（.psd, .clip）はサーバに送信されません。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">制作証明書を発行</h4>
                <p className="text-gray-600 text-sm">
                  C2PAという業界標準の仕組みで、「いつ・誰が・どのツールで・人間が制作したか」を暗号署名で記録します。
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">公開・配布</h4>
                <p className="text-gray-600 text-sm">
                  証明済みファイルをダウンロード、または共有用URLを発行。
                  受け取った相手は、ブラウザで真贋確認ができます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">業界標準への準拠</h3>
            <p className="text-gray-700 mb-8">
              NikuhitsuはC2PA（Coalition for Content Provenance and Authenticity）の
              業界標準仕様v2.xに準拠しています。
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
              <span className="px-4 py-2 bg-white rounded-full border">Adobe</span>
              <span className="px-4 py-2 bg-white rounded-full border">Microsoft</span>
              <span className="px-4 py-2 bg-white rounded-full border">BBC</span>
              <span className="px-4 py-2 bg-white rounded-full border">Sony</span>
              <span className="px-4 py-2 bg-white rounded-full border">Nikon</span>
              <span className="px-4 py-2 bg-white rounded-full border">Truepic</span>
            </div>
            <p className="text-sm text-gray-500">
              公式の検証ツール{" "}
              <a
                href="https://verify.contentauthenticity.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                verify.contentauthenticity.org
              </a>
              {" "}でも、Nikuhitsuで発行した証明を確認できます。
            </p>
          </div>
        </section>

        {/* Honest Limitations Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">正直にお伝えします</h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                C2PAを含む人間制作証明の技術は、現時点では完璧ではありません。
                証明書を偽造する手法も研究で報告されています。
              </p>
              <p className="text-gray-700 mb-4">
                しかし、現時点で<strong>最も標準化された</strong>人間制作証明の手段であり、
                EU AI Actをはじめとする規制が要求する透明性に対応する、実用的な選択肢です。
              </p>
              <p className="text-gray-700">
                Nikuhitsuは、技術の限界を理解した上で、
                「自衛の選択肢を持ちたい」というクリエイターの方々に選んでいただきたいと考えています。
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">早期アクセスに登録</h3>
            <p className="text-gray-300 mb-8">
              ローンチ時の早期アクセス権、価格優遇、開発過程のフィードバック機会をご提供します。
            </p>
            {/* Kit (ConvertKit) Inline Form Embed - 新アカウント版(2026-05-12 切替) */}
            <div className="kit-form-container">
              <Script
                async
                data-uid="c76e96f837"
                src="https://nikuhitsu-2.kit.com/c76e96f837/index.js"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">よくある質問</h3>
            <div className="space-y-6">
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  「Nikuhitsu（肉筆）」とはどういう意味ですか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  「肉筆（にくひつ）」は、印刷複製やAI生成ではなく、人の手で直接描いたものを指す日本語です。
                  美術品鑑定の世界で「肉筆画」は最高の真正性を持つ作品として扱われてきました。
                  Nikuhitsuはその精神を、デジタル時代の制作証明として再定義します。
                </p>
              </details>
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  C2PAって初めて聞きました。安全ですか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  C2PAはAdobe・Microsoft・BBC等が参画する国際標準で、技術仕様が完全に公開されています。
                  Nikuhitsuはその仕様に準拠した実装です。
                </p>
              </details>
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  SNSに投稿すると、署名は消えませんか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  ご指摘の通り、XやInstagram等は投稿時にメタデータを削除する場合があります。
                  Nikuhitsuでは、画像の特徴量（perceptual hash）を用いた検証も併せて提供する予定で、
                  メタデータが剥がれても発行元の証明にたどり着ける設計を進めています。
                </p>
              </details>
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  PSDやCLIP STUDIOファイル（.clip）に直接署名できますか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  残念ながら、C2PA仕様の対応範囲外です。
                  エクスポートしたJPEG/PNG/MP4にNikuhitsuの証明を付与する形での運用を想定しています。
                  作業ファイルそのものに触れず、原本は手元に保管できます。
                </p>
              </details>
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  価格はいくらですか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  ローンチ時に確定し、早期アクセスにご登録いただいた方には先にご案内します。
                  月額1,000円前後の個人プランを想定しています。
                </p>
              </details>
              <details className="border-b border-gray-200 pb-4">
                <summary className="font-medium cursor-pointer hover:text-gray-600">
                  既にGlazeなどを使っています。併用できますか？
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  はい。Glazeはモデル学習を妨げる技術、Nikuhitsuは制作証明を発行する技術で、
                  目的が異なるため併用できます。
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">Nikuhitsu（肉筆） - 人間制作証明 SaaS</p>
          <p>© 2026 Nikuhitsu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
