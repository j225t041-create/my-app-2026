# my-app-2026
課題提出用ポジトリ
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アストラ黙示録 - 中世ダークファンタジー・ドット絵メーカー</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Google Fonts for Medieval Gothic/Serif Style -->
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Noto+Serif+JP:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        .medieval-title {
            font-family: 'Cinzel', 'Noto Serif JP', serif;
            letter-spacing: 0.1em;
        }
        body {
            font-family: 'Noto Serif JP', serif;
            background-color: #120e0b; /* 深色木炭と土のグラデーション */
            background-image: radial-gradient(circle at 50% 50%, #1c1510 0%, #0d0907 100%);
        }
        /* 中世の羊皮紙風テクスチャ */
        .parchment-bg {
            background: #ebdcb9;
            color: #2c1d11;
            border: 2px solid #8c6a46;
            box-shadow: inset 0 0 15px rgba(120, 80, 40, 0.4);
        }
        /* ゴシック風フレーム */
        .gothic-border {
            border: 2px solid #5c4033;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.8), 0 10px 25px rgba(0,0,0,0.9);
        }
        .gothic-btn {
            border: 1px solid #8b5a2b;
            background: linear-gradient(to bottom, #3d2516, #21130a);
            transition: all 0.2s ease;
        }
        .gothic-btn:hover:not(:disabled) {
            background: linear-gradient(to bottom, #5c3a21, #311c0e);
            border-color: #d97706;
            box-shadow: 0 0 8px rgba(217, 119, 6, 0.4);
        }
        /* カスタムスクロールバー */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #110d0a;
        }
        ::-webkit-scrollbar-thumb {
            background: #4a3325;
            border-radius: 2px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #d97706;
        }
    </style>
</head>
<body class="text-amber-100 min-h-screen flex flex-col justify-between selection:bg-amber-800 selection:text-amber-100">

    <!-- ヘッダー -->
    <header class="border-b-2 border-[#3e2a1e] bg-[#1a120c]/90 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="bg-gradient-to-tr from-[#8b5a2b] to-[#d97706] p-2 rounded border border-amber-500/30 text-amber-100 shadow-lg">
                    <i data-lucide="shield-half" class="w-6 h-6 animate-pulse"></i>
                </div>
                <div>
                    <h1 class="text-xl font-bold tracking-wider text-amber-500 medieval-title">アストラ黙示録</h1>
                    <p class="text-xs text-amber-600/80 tracking-widest font-serif font-bold">タクティカル遠征マップ＆アーティファクト鍛造</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#2e1d11] text-amber-400 border border-amber-600/40 text-xs font-semibold">
                    <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    聖戦の時代 v1.5
                </span>
            </div>
        </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="max-w-6xl w-full mx-auto p-4 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- 左カラム：メイン操作パネル -->
        <div class="lg:col-span-7 bg-[#1c120a]/80 gothic-border rounded-xl p-6 space-y-6 min-h-[580px] flex flex-col justify-between">
            
            <div>
                <!-- 章タイトル -->
                <div class="flex items-center justify-between border-b border-[#3e2a1e] pb-4 mb-4">
                    <h2 class="text-lg font-bold flex items-center gap-2 text-amber-400 medieval-title">
                        <i data-lucide="scroll" class="w-5 h-5 text-amber-500" id="step-icon"></i>
                        <span id="step-title">第一章：祖なる血脈と運命の選択</span>
                    </h2>
                    <div class="flex gap-1 text-xs text-amber-700 font-mono">
                        <span id="step-dot-1" class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span id="step-dot-2" class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
                        <span id="step-dot-3" class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
                        <span id="step-dot-4" class="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
                    </div>
                </div>

                <!-- パネル 1: 種族選択 -->
                <div id="panel-race" class="space-y-4">
                    <p class="text-sm text-amber-200/70 leading-relaxed">
                        教皇の聖なる託宣が届かぬ、この荒涼たる辺境。群雄が割拠し、古き血脈が目を覚ます。あなたの出自は、騎士社会における立場を決めるのみならず、先祖より伝わる固有の印を授けます：
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="race-container">
                        <!-- 動的生成される種族カード -->
                    </div>
                </div>

                <!-- パネル 2: 職業と外見 -->
                <div id="panel-appearance" class="space-y-6 hidden">
                    <!-- 職業選択 -->
                    <div class="space-y-3">
                        <h3 class="text-sm font-semibold text-amber-300 flex items-center gap-1.5 medieval-title">
                            <i data-lucide="sword" class="w-4 h-4 text-amber-500"></i> 乱世に捧ぐ誓約の選択 (職業 Class)
                        </h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="class-container">
                            <!-- 動的生成される職業ボタン -->
                        </div>
                    </div>

                    <!-- 外見カスタマイズ -->
                    <div class="space-y-4 border-t border-[#3e2a1e] pt-4">
                        <h3 class="text-sm font-semibold text-amber-300 flex items-center gap-1.5 medieval-title">
                            <i data-lucide="palette" class="w-4 h-4 text-amber-500"></i> 容貌と戦甲の細部を彫刻する (外見 Customization)
                        </h3>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- 肌の色 -->
                            <div class="space-y-2">
                                <label class="text-xs text-amber-400 block font-semibold">先祖伝来の肌色 (Skin Tones)</label>
                                <div class="flex gap-2 flex-wrap" id="skin-palette"></div>
                            </div>

                            <!-- 瞳の色 -->
                            <div class="space-y-2">
                                <label class="text-xs text-amber-400 block font-semibold">魂火を宿す瞳の色 (Eye Color)</label>
                                <div class="flex gap-2 flex-wrap" id="eye-palette"></div>
                            </div>

                            <!-- 髪型・防具 -->
                            <div class="space-y-2">
                                <label class="text-xs text-amber-400 block font-semibold">髪型または頭部防具 (Hair / Coif / Helmet)</label>
                                <select id="hair-style-select" class="w-full bg-[#2a1a10] border border-[#5c4033] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200">
                                    <option value="short">領主の短髪 (Short Crop)</option>
                                    <option value="long">貴族の長髪 (Noble Long)</option>
                                    <option value="hood">レンジャーのフード (Ranger Hood)</option>
                                    <option value="helmet">鉄製グレートヘルム (Iron Helm)</option>
                                    <option value="bald">修道僧のスキンヘッド (Monastic Bald)</option>
                                </select>
                            </div>

                            <!-- 髪・織物染色 -->
                            <div class="space-y-2">
                                <label class="text-xs text-amber-400 block font-semibold">髪または織物の染色 (Hair / Fabric Color)</label>
                                <div class="flex gap-2 flex-wrap" id="hair-palette"></div>
                            </div>

                            <!-- 特徴・装飾 -->
                            <div class="space-y-2 sm:col-span-2">
                                <label class="text-xs text-amber-400 block font-semibold">紋章の印、または決闘の傷 (Accoutrements)</label>
                                <div class="grid grid-cols-3 gap-2">
                                    <button type="button" class="accessory-btn py-1.5 px-3 bg-[#2a1a10] hover:bg-[#3d2516] border border-[#5c4033] rounded text-xs font-semibold text-amber-200 transition active" data-acc="none">装飾なし</button>
                                    <button type="button" class="accessory-btn py-1.5 px-3 bg-[#2a1a10] hover:bg-[#3d2516] border border-[#5c4033] rounded text-xs font-semibold text-amber-200 transition" data-acc="glasses">領主の宝冠</button>
                                    <button type="button" class="accessory-btn py-1.5 px-3 bg-[#2a1a10] hover:bg-[#3d2516] border border-[#5c4033] rounded text-xs font-semibold text-amber-200 transition" data-acc="scar">決闘の剣痕</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- パネル 3: プロローグ -->
                <div id="panel-story" class="space-y-4 hidden">
                    <div class="bg-[#120904]/95 border-2 border-[#5c4033]/60 rounded-xl p-4 md:p-6 space-y-4 shadow-inner">
                        <!-- プレイヤー要約情報 -->
                        <div class="flex items-center justify-between border-b border-[#3e2a1e] pb-3">
                            <div class="px-2.5 py-1 bg-[#4a2e1b] border border-amber-600/30 rounded text-xs text-amber-300 font-bold" id="player-summary-tag">
                                帝国人間族 · 聖殿騎士
                            </div>
                            <div class="text-sm text-amber-400">
                                尊名: <span class="text-amber-100 font-bold font-serif" id="player-summary-name">名無しの領主</span>
                            </div>
                        </div>
                        
                        <!-- ストーリーコンソール -->
                        <div class="space-y-3 leading-relaxed text-amber-100/90 text-sm md:text-base max-h-64 overflow-y-auto pr-2" id="story-text-container">
                            <!-- ストーリーが動的に挿入されます -->
                        </div>
                    </div>

                    <!-- 選択肢 -->
                    <div class="space-y-2" id="story-choices-container">
                        <!-- 運命の選択肢 -->
                    </div>
                </div>

                <!-- パネル 4: 世界地図とダンジョン -->
                <div id="panel-worldmap" class="space-y-4 hidden">
                    <div class="parchment-bg rounded-xl p-5 text-[#2c1d11]">
                        <h3 class="text-base font-bold medieval-title flex items-center gap-1.5 border-b border-[#8c6a46] pb-2 mb-3">
                            <i data-lucide="map" class="w-5 h-5 text-[#8b5a2b]"></i> アストラ遠征タクティカル盤
                        </h3>
                        <p class="text-xs text-[#5c4033] leading-relaxed mb-4">
                            荒野に残された聖戦の座標を選択せよ。各廃墟は不朽の悪霊に守られており、守護者を撃破すれば、あなたの現在の職業に適合する【エピック】アーティファクトが鍛造されます：
                        </p>

                        <!-- マップノード -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="map-nodes-container">
                            <!-- 4つのダンジョンボスノード -->
                        </div>
                    </div>

                    <!-- 戦闘ターミナル -->
                    <div id="dungeon-terminal" class="hidden bg-[#0d0906] border border-[#5c4033] rounded-xl p-4 space-y-3 shadow-inner">
                        <div class="flex justify-between items-center border-b border-[#3e2a1e] pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                                <h4 class="text-sm font-bold text-red-400 font-serif" id="terminal-title">地牢戦闘終点</h4>
                            </div>
                            <button onclick="closeTerminal()" class="text-xs text-stone-500 hover:text-stone-300">
                                <i data-lucide="x" class="w-4 h-4"></i>
                            </button>
                        </div>
                        
                        <div id="terminal-body" class="text-xs space-y-3 leading-relaxed h-56 overflow-y-auto pr-1">
                            <!-- バトルログ -->
                        </div>

                        <!-- バトルコマンド -->
                        <div class="flex flex-wrap gap-2 pt-2 border-t border-[#3e2a1e]" id="terminal-actions">
                            <!-- コマンドボタン -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- フッター操作エリア -->
            <div class="flex items-center justify-between border-t border-[#3e2a1e] pt-4 mt-6">
                <button id="btn-prev" class="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-sm font-semibold transition flex items-center gap-1 opacity-50 cursor-not-allowed" disabled>
                    <i data-lucide="chevron-left" class="w-4 h-4"></i> 前の意志に戻る
                </button>
                
                <!-- プレイヤー命名入力 -->
                <div id="name-input-wrapper" class="flex items-center gap-2 max-w-xs">
                    <input type="text" id="char-name" placeholder="聖冊に尊名を落款..." value="アルス" class="bg-[#24160d] border border-[#5c4033] rounded px-3 py-1.5 text-sm text-amber-100 focus:ring-2 focus:ring-amber-500 outline-none w-36 sm:w-44 font-serif">
                    <button id="btn-rand-name" class="p-2 bg-[#2a1a10] hover:bg-[#3d2516] text-amber-400 hover:text-amber-200 border border-[#5c4033] rounded transition" title="ダイスで名前を決める">
                        <i data-lucide="dice-5" class="w-4 h-4"></i>
                    </button>
                </div>

                <button id="btn-next" class="px-5 py-2 bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-700 hover:to-amber-500 text-stone-950 rounded text-sm font-black shadow-lg shadow-amber-950/40 transition flex items-center gap-1">
                    誓約を交わす <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>

        </div>

        <!-- 右カラム：ドット絵キャンバスと中世風ステータス -->
        <div class="lg:col-span-5 space-y-6">
            
            <!-- アバターカード -->
            <div class="bg-gradient-to-b from-[#21160e] to-[#0f0a07] border-2 border-[#5c4033] rounded-xl overflow-hidden shadow-2xl">
                <!-- カードヘッダー -->
                <div class="bg-[#1a110a] px-4 py-3 border-b border-[#3e2a1e] flex items-center justify-between">
                    <span class="text-xs font-serif text-amber-500/80 tracking-wider flex items-center gap-1.5 font-bold">
                        <span class="w-2 h-2 rounded-full bg-amber-500"></span> 聖なるアバター写本 (16x16 Canvas)
                    </span>
                    <button id="btn-export-png" class="text-xs text-amber-400 hover:text-amber-200 transition flex items-center gap-1">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i> 肖像を保存
                    </button>
                </div>

                <!-- キャンバス -->
                <div class="p-6 flex flex-col items-center justify-center bg-[#0d0906]">
                    <div class="relative group p-4 bg-[#23170e]/40 rounded-lg border-2 border-[#412e20] shadow-inner">
                        <canvas id="pixel-canvas" width="256" height="256" class="w-48 h-48 md:w-56 md:h-56 rounded border border-amber-950 shadow-lg image-render-pixelated bg-[#150f0b]"></canvas>
                        
                        <!-- 四隅のゴールドトリム -->
                        <div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-600/50"></div>
                        <div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-600/50"></div>
                        <div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-600/50"></div>
                        <div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-600/50"></div>
                    </div>
                    
                    <p class="text-xs text-amber-700/80 mt-4 text-center">髪型、聖なる鎧の色、武器がリアルタイムで反映されます</p>
                </div>

                <!-- ステータス表示 -->
                <div class="p-6 border-t border-[#3e2a1e] bg-[#1a110a]/50 space-y-4">
                    <div class="flex items-center justify-between">
                        <h4 class="text-sm font-bold text-amber-400 flex items-center gap-1.5 medieval-title">
                            <i data-lucide="swords" class="w-4 h-4 text-amber-500"></i> 先祖から継承せし祝福 (Attributes)
                        </h4>
                        <span class="text-xs text-amber-600" id="stat-class-bonus">誓約ボーナス適用中</span>
                    </div>

                    <div class="space-y-2.5">
                        <!-- HP -->
                        <div class="space-y-1">
                            <div class="flex justify-between text-xs text-amber-200/80 font-semibold">
                                <span>生命力 (HP)</span>
                                <span class="font-bold text-amber-100" id="stat-hp-val">100 / 100</span>
                            </div>
                            <div class="w-full bg-[#24160d] h-2.5 rounded-full border border-amber-950 overflow-hidden">
                                <div id="bar-hp" class="bg-gradient-to-r from-red-800 to-red-600 h-full transition-all duration-300" style="width: 100%"></div>
                            </div>
                        </div>

                        <!-- MP -->
                        <div class="space-y-1">
                            <div class="flex justify-between text-xs text-amber-200/80 font-semibold">
                                <span>聖なる信念 / 魔力 (MP)</span>
                                <span class="font-bold text-amber-100" id="stat-mp-val">50 / 50</span>
                            </div>
                            <div class="w-full bg-[#24160d] h-2.5 rounded-full border border-amber-950 overflow-hidden">
                                <div id="bar-mp" class="bg-gradient-to-r from-amber-700 to-amber-500 h-full transition-all duration-300" style="width: 100%"></div>
                            </div>
                        </div>

                        <!-- 三大基本ステータス -->
                        <div class="grid grid-cols-3 gap-2 pt-2">
                            <div class="bg-[#120804] p-2 rounded border border-[#5c4033]/60 text-center">
                                <span class="text-[10px] text-amber-600 block uppercase font-bold tracking-wider">腕力 STR</span>
                                <span class="text-sm font-bold text-amber-300" id="stat-str">10</span>
                            </div>
                            <div class="bg-[#120804] p-2 rounded border border-[#5c4033]/60 text-center">
                                <span class="text-[10px] text-amber-600 block uppercase font-bold tracking-wider">俊敏 AGI</span>
                                <span class="text-sm font-bold text-amber-300" id="stat-agi">10</span>
                            </div>
                            <div class="bg-[#120804] p-2 rounded border border-[#5c4033]/60 text-center">
                                <span class="text-[10px] text-amber-600 block uppercase font-bold tracking-wider">知力 INT</span>
                                <span class="text-sm font-bold text-amber-300" id="stat-int">10</span>
                            </div>
                        </div>
                    </div>

                    <!-- 装備スロット -->
                    <div class="border-t border-[#3e2a1e] pt-4 space-y-3">
                        <span class="text-xs text-amber-500 font-bold block medieval-title flex items-center gap-1.5">
                            <i data-lucide="shirt" class="w-3.5 h-3.5"></i> 現在の装備品 (Equipped Armaments)
                        </span>
                        <div class="grid grid-cols-3 gap-2 text-[11px] font-serif">
                            <div id="slot-weapon" class="bg-[#120804] border border-amber-950 p-2 rounded flex flex-col items-center justify-center text-center">
                                <span class="text-[9px] text-stone-600 block">武器 Weapon</span>
                                <span class="font-bold text-stone-400" id="equip-weapon-name">錆びた剣と槌</span>
                            </div>
                            <div id="slot-armor" class="bg-[#120804] border border-amber-950 p-2 rounded flex flex-col items-center justify-center text-center">
                                <span class="text-[9px] text-stone-600 block">体防具 Armor</span>
                                <span class="font-bold text-stone-400" id="equip-armor-name">粗末なボロ布</span>
                            </div>
                            <div id="slot-helmet" class="bg-[#120804] border border-amber-950 p-2 rounded flex flex-col items-center justify-center text-center">
                                <span class="text-[9px] text-stone-600 block">頭防具 Helmet</span>
                                <span class="font-bold text-stone-400" id="equip-helmet-name">防具なし</span>
                            </div>
                        </div>
                    </div>

                    <!-- 種族特性紹介 -->
                    <div class="bg-[#120804] rounded-lg p-3 border border-[#3e2a1e] text-xs space-y-1">
                        <span class="text-amber-500 font-bold block">【先祖の血契印】</span>
                        <p class="text-amber-200/70 leading-relaxed" id="race-trait-desc">左側のパネルで種族を選び、天賦の恩恵を確認せよ。</p>
                    </div>
                </div>
            </div>

        </div>

    </main>

    <!-- フッター -->
    <footer class="border-t-2 border-[#3e2a1e] bg-[#0c0806] py-4 px-4 text-center text-xs text-amber-800 font-serif">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 1206-1260 アストラ大聖堂騎士修道会。ドット絵と宿命の書。 </p>
            <p>HTML5 テクノロジーを基盤とした、永遠なる写本プレート</p>
        </div>
    </footer>

    <!-- CSS 描画補正 -->
    <style>
        .image-render-pixelated {
            image-rendering: -moz-crisp-edges;
            image-rendering: -webkit-crisp-edges;
            image-rendering: pixelated;
            image-rendering: crisp-edges;
        }
    </style>

    <!-- 游戏核心渲染及数据剧本 -->
    <script>
        // 1. 中世ファンタジーの種族データ設定
        const RACES = {
            human: {
                id: 'human',
                name: '帝国人間族',
                enName: 'Imperial Human',
                description: '天主の加護と高潔なる天主聖堂の保護下にある領主と騎士の末裔。不屈の精神と生存力を持ち、あらゆる職能に完璧な適応力を示す。',
                trait: '【騎士道の誓い】：獲得する経験値や戦果が15%上昇。さらに、体力が25%以下になると「鉄壁の信仰」が発動し耐性が大幅に強化。',
                baseStats: { hp: 110, mp: 30, str: 11, agi: 9, int: 10 },
                defaultColors: {
                    skin: '#f1c27d', // 小麦肌
                    hair: '#4a3728', // 栗毛髪
                    eye: '#d97706'   // 琥珀の瞳
                }
            },
            elf: {
                id: 'elf',
                name: '森のエルフ',
                enName: 'Woodland Elf',
                description: '霧に包まれた聖木の庇護下に隠れ住む優雅な狩人。太古の自然ルーン文字を解し、鉄鎧を纏わずとも、風霊の加護によって敏捷に立ち回る。',
                trait: '【神木精霊の囁き】：森林や自然環境で回避率が劇的に上昇。弓や不意打ち攻撃時、対象の金属甲防壁を20%貫通する。',
                baseStats: { hp: 80, mp: 65, str: 7, agi: 15, int: 11 },
                defaultColors: {
                    skin: '#fef08a', // 白金色
                    hair: '#eab308', // 金砂髪
                    eye: '#10b981'   // 翡翠の瞳
                }
            },
            orc: {
                id: 'orc',
                name: '鉄血のオーク',
                enName: 'Iron-blood Orc',
                description: '不毛の赤岩地帯や火山脈を支配する武闘派氏族。戦獣の魂と強靭な骨肉を宿し、人間側の帝国支配に対して激しい敵意を示す。',
                trait: '【闘獣の激憤】：野生の頑健さにより最大HPが天生的に+40。致命傷の一撃を浴びても1残して踏みとどまり、5秒間腕力が爆発的に上昇。',
                baseStats: { hp: 150, mp: 15, str: 16, agi: 7, int: 4 },
                defaultColors: {
                    skin: '#65a30d', // 苔むす深緑肌
                    hair: '#1c1917', // 黒墨髪
                    eye: '#ea580c'   // 焦熱の眼光
                }
            },
            dwarf: {
                id: 'dwarf',
                name: '炉火のドワーフ',
                enName: 'Hearth Dwarf',
                description: '深山幽谷の堅牢な地下都市に暮らす不屈の鍛冶ギルド職人。大陸一の武具鍛造技を持ち、麦酒の香りと鉄錆を放ちながら揺るぎない。',
                trait: '【融解せし熱鉄】：物理ブロック率が12%上昇。炎や強撃衝撃に対して天生的に30%の免疫を持ち、手にする武具の性能を高める。',
                baseStats: { hp: 120, mp: 40, str: 12, agi: 6, int: 12 },
                defaultColors: {
                    skin: '#ffd39b', // 鉄錆色
                    hair: '#b45309', // 赤熱の炉火髪
                    eye: '#3b82f6'   // 藍銅鉱の瞳
                }
            }
        };

        // 2. クラシックな中世職業設定
        const CLASSES = {
            knight: {
                id: 'knight',
                name: '聖殿騎士',
                icon: 'shield',
                statModifier: { hp: 35, mp: 5, str: 6, agi: 1, int: -1 },
                armorColor: '#64748b', // 鋼鉄鎧
                weaponColor: '#cbd5e1', // 片手半剣
                accentColor: '#b91c1c'  // 聖十字の深紅
            },
            wizard: {
                id: 'wizard',
                name: '秘術ウィザード',
                icon: 'wand-2',
                statModifier: { hp: -20, mp: 50, str: -3, agi: 2, int: 7 },
                armorColor: '#312e81', // 禁忌の深夜星袍
                weaponColor: '#67e8f9', // クリスタル杖
                accentColor: '#d97706'  // 賢者の黄金
            },
            ranger: {
                id: 'ranger',
                name: '荒野のレンジャー',
                icon: 'compass',
                statModifier: { hp: 10, mp: 10, str: 2, agi: 6, int: 1 },
                armorColor: '#14532d', // 深林の革甲
                weaponColor: '#78350f', // 樫の木の弓
                accentColor: '#facc15'  // 矢羽の金染
            },
            cleric: {
                id: 'cleric',
                name: '聖光クレリック',
                icon: 'heart-handshake',
                statModifier: { hp: 15, mp: 30, str: 0, agi: 1, int: 5 },
                armorColor: '#1e293b', // 修道会学者布衣
                weaponColor: '#fef08a', // 祝福の十字架
                accentColor: '#60a5fa'  // 癒しの蒼光
            }
        };

        // 3. ダンジョンとボスドロップ設定 (日本語版)
        const MAP_DUNGEONS = [
            {
                id: 'forest',
                name: '霧深き黒森林',
                description: '呪われし茨が繁茂する大古の密林。怨念によって歪み、光を嫌う幽鬼の軍勢と魔獣が徘徊する。',
                icon: 'trees',
                bossName: '死森の亡霊領主・セリウス',
                bossMaxHp: 200,
                recommendedLevel: '推奨ステータス: STR / AGI 15+',
                type: 'boss',
                rewardType: 'weapon',
                rewards: {
                    knight: { name: '★ 聖光の裁定大剣', val: 12, stat: 'str', color: '#fbbf24', detail: '教皇の聖座にて祝福されし、魔を払う純金の輝き。' },
                    wizard: { name: '★ 燦然たる群星の魔杖', val: 12, stat: 'int', color: '#67e8f9', detail: '夜空から墜落した虚空の星核が埋め込まれた天体杖。' },
                    ranger: { name: '★ 極速の追風猟弓', val: 12, stat: 'agi', color: '#4ade80', detail: '世界樹のしなやかな生枝と、風の精霊の弦で編み上げられた名弓。' },
                    cleric: { name: '★ 贖罪の十字金槌', val: 10, stat: 'int', color: '#fef08a', detail: '異端審問官が握る、審判と救済の象徴たる黄金のメイス。' }
                }
            },
            {
                id: 'crypt',
                name: '極寒鉱脈の古墓',
                description: '古代ドワーフ帝国が遺した深い廃坑。底知れぬ氷に閉ざされ、巨大なスケルトンたちが眠りを乱す者を狩る。',
                icon: 'skull',
                bossName: '暗闇の屍霊神官・モロク',
                bossMaxHp: 250,
                recommendedLevel: '推奨ステータス: STR / INT 18+',
                type: 'boss',
                rewardType: 'armor',
                rewards: {
                    knight: { name: '★ 審判天使の板甲', val: 50, stat: 'hp', color: '#e2e8f0', detail: '神殿の最高騎士のみが着用を許される、純白に磨き抜かれた精鋼鎧。' },
                    wizard: { name: '★ 元素魔法の大祭衣', val: 40, stat: 'mp', color: '#4f46e5', detail: '四大元素ルーンが裏地に織り込まれた、賢者の紺碧ローブ。' },
                    ranger: { name: '★ 幽影追跡者の皮甲', val: 30, stat: 'hp', color: '#166534', detail: '毒蜘蛛の糸を煮詰めて硬化させた、音を一切立てない漆黒の軽甲。' },
                    cleric: { name: '★ 聖餐光輝の布衣', val: 45, stat: 'mp', color: '#f1f5f9', detail: '生涯の巡礼を終えた大司教が遺した、神術を無尽蔵に増幅する聖衣。' }
                }
            },
            {
                id: 'volcano',
                name: '黒曜石の火山口',
                description: '沸き立つマグマが河を成す大地の亀裂。地底から吹き荒れる炎と、硫黄の悪臭が漂う魔砦。',
                icon: 'flame',
                bossName: '溶岩の奈落巨獣・ゲルコ',
                bossMaxHp: 320,
                recommendedLevel: '推奨ステータス: ALL ST 20+',
                type: 'boss',
                rewardType: 'helmet',
                rewards: {
                    knight: { name: '★ 狂戦士の紅蓮兜', val: 8, stat: 'str', color: '#ef4444', detail: '溶岩の熱気と宿主の闘争心を糧にして赤く燃える狂戦士のヘルム。' },
                    wizard: { name: '★ 賢者の天穹知恵冠', val: 8, stat: 'int', color: '#a855f7', detail: '天上の知識を星盤から読み解く力を授ける、紫に煌めくサークレット。' },
                    ranger: { name: '★ 隠密の暗殺者フード', val: 8, stat: 'agi', color: '#1e293b', detail: '闇夜と同化し、身に着ける者の気配を完全に消失させる漆黒の風帽。' },
                    cleric: { name: '★ 救済の大天使聖冠', val: 8, stat: 'int', color: '#fbbf24', detail: 'この地に舞い降りた守護天使が聖戦の際に遺したとされる黄金の光輪。' }
                }
            },
            {
                id: 'cathedral',
                name: '聖アデラ大聖堂跡',
                description: 'いにしえの聖戦の地。崩落した大聖堂の廃墟にて、堕ちた英雄が聖なる神器を守り続けている。',
                icon: 'church',
                bossName: '堕落せし異端審問官・レイナード',
                bossMaxHp: 400,
                recommendedLevel: '最終試練・エピック等級',
                type: 'boss',
                rewardType: 'weapon_t2',
                rewards: {
                    knight: { name: '⚡ 聖剣アロンダイト', val: 25, stat: 'str', color: '#facc15', detail: '斬鉄の力を持つ伝説の重刃。振るうたび神聖な雷霆が走る。' },
                    wizard: { name: '⚡ 禁忌術書・終焉の天穹', val: 25, stat: 'int', color: '#ec4899', detail: '星界の崩壊を引き起こす禁じられた終末魔法が綴られた魔導書。' },
                    ranger: { name: '⚡ 神弩・ラストストーム', val: 25, stat: 'agi', color: '#10b981', detail: '放たれた矢が暴風と稲妻をまとい、大軍を薙ぎ払うと伝えられる神弩。' },
                    cleric: { name: '⚡ 聖典・創世記の洗礼', val: 22, stat: 'int', color: '#3b82f6', detail: '始まりの光の時代に削りだされた、全ての不浄を無に返す石版聖典。' }
                }
            }
        ];

        const PALETTES = {
            skin: ['#f1c27d', '#ffd39b', '#fef08a', '#e0f2fe', '#65a30d', '#854d0e', '#3f2204'],
            eye: ['#d97706', '#10b981', '#3b82f6', '#b91c1c', '#f43f5e', '#78350f', '#ffffff'],
            hair: ['#4a3728', '#1c1917', '#eab308', '#b45309', '#a8a29e', '#991b1b', '#1e3a8a']
        };

        const RANDOM_NAMES = {
            human: ['アーサー', 'アデラ', 'ローランド', 'リチャード', 'ボールドウィン', 'ランスロット', 'イザベラ', 'グリフィス'],
            elf: ['レゴラス', 'スランドゥイル', 'マルファ', 'アリア', 'シルヴァナス', 'イセラ', 'ウインドランナー'],
            orc: ['グロム', 'デュロタン', 'オグリム', 'スロール', 'カガス', 'ヘルスクリーム', 'ブラックハンド'],
            dwarf: ['ブロンズビアード', 'ブロガン', 'トールキン', 'マグニ', 'ムラディン', 'ダークアイアン', 'ギムリ', 'バリン']
        };

        // 3. 游戏状态管理
        let currentStep = 1; 
        let activeRace = 'human';
        let activeClass = 'knight';
        let designState = {
            skinColor: RACES.human.defaultColors.skin,
            eyeColor: RACES.human.defaultColors.eye,
            hairStyle: 'short',
            hairColor: RACES.human.defaultColors.hair,
            accessory: 'none'
        };

        let playerEquipment = {
            weapon: null,   
            armor: null,    
            helmet: null    
        };
        
        let dungeonState = {
            activeDungeon: null,
            bossHp: 0,
            playerHp: 100,
            playerMp: 50,
            combatLogs: []
        };

        // 4. 古典像素渲染板 (16x16 矩阵)
        const CANVAS_SIZE = 16;
        const canvas = document.getElementById('pixel-canvas');
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        function drawCharacter() {
            const pixelSize = canvas.width / CANVAS_SIZE;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let armorColor = playerEquipment.armor ? playerEquipment.armor.color : CLASSES[activeClass].armorColor;
            let weaponColor = playerEquipment.weapon ? playerEquipment.weapon.color : CLASSES[activeClass].weaponColor;
            let helmetColor = playerEquipment.helmet ? playerEquipment.helmet.color : '#475569'; 
            
            const colors = {
                skin: designState.skinColor,
                eye: designState.eyeColor,
                hair: designState.hairColor,
                armor: armorColor,
                weapon: weaponColor,
                accent: CLASSES[activeClass].accentColor,
                background: '#150f0b' 
            };

            ctx.fillStyle = colors.background;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            let grid = Array(16).fill(null).map(() => Array(16).fill(0));

            for(let r = 5; r <= 9; r++) {
                for(let c = 5; c <= 10; c++) {
                    grid[r][c] = 1; 
                }
            }

            if (activeRace === 'elf') {
                grid[6][3] = 1; grid[6][4] = 1;
                grid[6][11] = 1; grid[6][12] = 1;
                grid[7][4] = 1; grid[7][11] = 1;
            } else if (activeRace === 'orc') {
                grid[9][4] = 1; grid[9][11] = 1;
                grid[9][5] = 7; 
                grid[9][10] = 7;
            } else if (activeRace === 'dwarf') {
                for(let c = 5; c <= 10; c++) {
                    grid[9][c] = 2; 
                    grid[10][c] = 2;
                }
                grid[10][4] = 2; grid[10][11] = 2;
            }

            grid[7][6] = 3;
            grid[7][9] = 3;

            const hStyle = designState.hairStyle;
            if (hStyle === 'short') {
                for(let c = 4; c <= 11; c++) { grid[4][c] = 2; }
                grid[3][6] = 2; grid[3][7] = 2; grid[3][8] = 2; grid[3][9] = 2;
                grid[5][4] = 2; grid[5][11] = 2;
                grid[6][4] = 2; grid[6][11] = 2;
            } else if (hStyle === 'long') {
                for(let c = 4; c <= 11; c++) { grid[4][c] = 2; }
                grid[3][5] = 2; grid[3][6] = 2; grid[3][7] = 2; grid[3][8] = 2; grid[3][9] = 2; grid[3][10] = 2;
                for(let r = 5; r <= 11; r++) {
                    grid[r][4] = 2;
                    grid[r][11] = 2;
                }
            } else if (hStyle === 'hood') {
                for(let r = 3; r <= 9; r++) {
                    grid[r][4] = 2;
                    grid[r][11] = 2;
                }
                for(let c = 4; c <= 11; c++) {
                    grid[3][c] = 2;
                    grid[4][c] = 2;
                }
                grid[5][5] = 2; grid[5][10] = 2;
            } else if (hStyle === 'helmet') {
                for(let r = 4; r <= 9; r++) {
                    for(let c = 4; c <= 11; c++) {
                        grid[r][c] = 9; 
                    }
                }
                for(let c = 5; c <= 10; c++) { grid[7][c] = 5; } 
                for(let r = 5; r <= 9; r++) { grid[r][7] = 5; grid[r][8] = 5; }
            } else if (hStyle === 'bald' && activeRace === 'dwarf') {
                for(let c = 5; c <= 10; c++) { grid[9][c] = 2; grid[10][c] = 2; }
            }

            for (let r = 10; r <= 14; r++) {
                for (let c = 3; c <= 12; c++) {
                    if (grid[r][c] !== 2) {
                        grid[r][c] = 4; 
                    }
                }
            }
            if (grid[10][7] !== 2) grid[10][7] = 1;
            if (grid[10][8] !== 2) grid[10][8] = 1;

            grid[11][3] = 5; grid[11][12] = 5;
            grid[12][3] = 5; grid[12][12] = 5;

            if (activeClass === 'knight') {
                grid[9][2] = 6;
                grid[8][1] = 6;
                grid[7][0] = 5; 
            } else if (activeClass === 'wizard') {
                grid[9][13] = 6;
                grid[8][13] = 5; 
                grid[9][14] = 5;
            } else if (activeClass === 'ranger') {
                grid[9][3] = 6;
                grid[8][2] = 5;
                grid[7][1] = 5;
            } else if (activeClass === 'cleric') {
                grid[4][3] = 5; grid[4][12] = 5;
                grid[5][2] = 5; grid[5][13] = 5;
            }

            if (playerEquipment.helmet) {
                grid[3][6] = 9; grid[3][9] = 9;
                grid[4][7] = 9; grid[4][8] = 9;
            } else if (designState.accessory === 'glasses') {
                grid[3][5] = 5; grid[3][7] = 5; grid[3][8] = 5; grid[3][10] = 5;
                grid[4][5] = 5; grid[4][6] = 5; grid[4][7] = 5; grid[4][8] = 5; grid[4][9] = 5; grid[4][10] = 5;
            } else if (designState.accessory === 'scar') {
                grid[6][6] = 8;
                grid[7][6] = 8; 
                grid[8][6] = 8;
            }

            for(let r = 0; r < CANVAS_SIZE; r++) {
                for(let c = 0; c < CANVAS_SIZE; c++) {
                    let pixelVal = grid[r][c];
                    if (pixelVal === 0) continue;

                    switch (pixelVal) {
                        case 1: ctx.fillStyle = colors.skin; break;
                        case 2: ctx.fillStyle = colors.hair; break;
                        case 3: ctx.fillStyle = colors.eye; break;
                        case 4: ctx.fillStyle = colors.armor; break;
                        case 5: ctx.fillStyle = colors.accent; break;
                        case 6: ctx.fillStyle = colors.weapon; break;
                        case 7: ctx.fillStyle = '#ffffff'; break;
                        case 8: ctx.fillStyle = '#991b1b'; break; 
                        case 9: ctx.fillStyle = helmetColor; break; 
                    }
                    ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
                }
            }
        }

        // 5. 元素动态填充器
        function initRaces() {
            const container = document.getElementById('race-container');
            container.innerHTML = '';
            
            Object.values(RACES).forEach(race => {
                const btn = document.createElement('div');
                btn.className = `cursor-pointer border-2 p-4 rounded-lg transition duration-200 bg-[#21160e]/50 hover:border-amber-600/60 ${activeRace === race.id ? 'border-amber-600 shadow-xl shadow-amber-950/40 bg-[#2d1e13]' : 'border-amber-950/60'}`;
                btn.setAttribute('data-race-id', race.id);
                
                btn.innerHTML = `
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-amber-200 text-base font-serif">${race.name}</span>
                        <span class="text-[10px] text-amber-600 uppercase font-mono tracking-wider">${race.enName}</span>
                    </div>
                    <p class="text-xs text-amber-200/50 mt-2 line-clamp-2 leading-relaxed">${race.description}</p>
                `;
                
                btn.addEventListener('click', () => {
                    selectRace(race.id);
                });
                container.appendChild(btn);
            });
        }

        function initClasses() {
            const container = document.getElementById('class-container');
            container.innerHTML = '';

            Object.values(CLASSES).forEach(cls => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `flex flex-col items-center justify-center p-3 rounded border-2 transition ${activeClass === cls.id ? 'border-amber-500 bg-amber-950/30 text-amber-200' : 'border-amber-950/60 hover:bg-[#2a1b10] bg-[#1a110a] text-amber-600'}`;
                btn.setAttribute('data-class-id', cls.id);

                btn.innerHTML = `
                    <i data-lucide="${cls.icon}" class="w-5 h-5 mb-1.5 ${activeClass === cls.id ? 'text-amber-400' : 'text-amber-700'}"></i>
                    <span class="text-xs font-bold font-serif">${cls.name}</span>
                `;

                btn.addEventListener('click', () => {
                    selectClass(cls.id);
                });
                container.appendChild(btn);
            });
            lucide.createIcons();
        }

        // 大地图ノードカードの生成
        function initMapNodes() {
            const container = document.getElementById('map-nodes-container');
            container.innerHTML = '';

            MAP_DUNGEONS.forEach(dungeon => {
                const node = document.createElement('div');
                node.className = "bg-[#ebdcb9] border border-[#a88d6c] rounded-lg p-3 hover:bg-[#ebd5a7] transition duration-200 flex flex-col justify-between shadow-sm cursor-pointer";
                node.setAttribute('onclick', `enterDungeon('${dungeon.id}')`);

                const bossReward = dungeon.rewards[activeClass];
                
                node.innerHTML = `
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <h4 class="text-xs font-bold text-[#4a2e1b] font-serif flex items-center gap-1">
                                <i data-lucide="${dungeon.icon}" class="w-4 h-4 text-[#8b5a2b]"></i> ${dungeon.name}
                            </h4>
                            <span class="text-[9px] px-1.5 py-0.5 bg-[#4a2e1b] text-amber-200 rounded font-bold uppercase font-sans">
                                BOSS
                            </span>
                        </div>
                        <p class="text-[10px] text-[#5c4033] line-clamp-2 font-serif leading-relaxed">${dungeon.description}</p>
                    </div>
                    
                    <div class="border-t border-[#c5b597] mt-2 pt-2 flex items-center justify-between">
                        <span class="text-[9px] text-[#8b5a2b] font-mono">${dungeon.recommendedLevel}</span>
                        <div class="flex items-center gap-1">
                            <span class="text-[9px] text-emerald-800 font-bold bg-emerald-100 px-1 rounded border border-emerald-300">
                                報酬: ${bossReward.name}
                            </span>
                        </div>
                    </div>
                `;
                container.appendChild(node);
            });
            lucide.createIcons();
        }

        function buildPalettes() {
            const skinBox = document.getElementById('skin-palette');
            skinBox.innerHTML = '';
            PALETTES.skin.forEach(color => {
                const dot = createColorDot(color, designState.skinColor === color, (c) => {
                    designState.skinColor = c;
                    updateLooksAndDraw();
                });
                skinBox.appendChild(dot);
            });

            const eyeBox = document.getElementById('eye-palette');
            eyeBox.innerHTML = '';
            PALETTES.eye.forEach(color => {
                const dot = createColorDot(color, designState.eyeColor === color, (c) => {
                    designState.eyeColor = c;
                    updateLooksAndDraw();
                });
                eyeBox.appendChild(dot);
            });

            const hairBox = document.getElementById('hair-palette');
            hairBox.innerHTML = '';
            PALETTES.hair.forEach(color => {
                const dot = createColorDot(color, designState.hairColor === color, (c) => {
                    designState.hairColor = c;
                    updateLooksAndDraw();
                });
                hairBox.appendChild(dot);
            });
        }

        function createColorDot(color, isActive, clickCallback) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = `w-7 h-7 rounded-full border-2 transition transform hover:scale-110 active:scale-95 ${isActive ? 'border-amber-400 ring-2 ring-amber-800 scale-105' : 'border-[#412e20]'}`;
            dot.style.backgroundColor = color;
            dot.addEventListener('click', () => {
                clickCallback(color);
            });
            return dot;
        }

        function selectRace(raceId) {
            activeRace = raceId;
            const raceData = RACES[raceId];
            designState.skinColor = raceData.defaultColors.skin;
            designState.hairColor = raceData.defaultColors.hair;
            designState.eyeColor = raceData.defaultColors.eye;

            document.querySelectorAll('[data-race-id]').forEach(el => {
                if (el.getAttribute('data-race-id') === raceId) {
                    el.className = "cursor-pointer border-2 p-4 rounded-lg transition duration-200 bg-[#2d1e13] border-amber-600 shadow-xl shadow-amber-950/40";
                } else {
                    el.className = "cursor-pointer border-2 p-4 rounded-lg transition duration-200 bg-[#21160e]/50 border-amber-950/60 hover:border-amber-600/60";
                }
            });

            updateStats();
            buildPalettes();
            drawCharacter();
            randomizeName();
        }

        function selectClass(classId) {
            activeClass = classId;
            document.querySelectorAll('[data-class-id]').forEach(el => {
                const cid = el.getAttribute('data-class-id');
                const isSelected = cid === classId;
                el.className = `flex flex-col items-center justify-center p-3 rounded border-2 transition ${isSelected ? 'border-amber-500 bg-amber-950/30 text-amber-200' : 'border-amber-950/60 hover:bg-[#2a1b10] bg-[#1a110a] text-amber-600'}`;
                const icon = el.querySelector('i');
                if (icon) {
                    icon.className = `w-5 h-5 mb-1.5 ${isSelected ? 'text-amber-400' : 'text-amber-700'}`;
                }
            });

            playerEquipment = { weapon: null, armor: null, helmet: null };
            updateEquipUI();
            updateStats();
            drawCharacter();
        }

        function updateLooksAndDraw() {
            buildPalettes();
            drawCharacter();
        }

        function updateStats() {
            const race = RACES[activeRace];
            const cls = CLASSES[activeClass];

            let bonusStr = 0;
            let bonusAgi = 0;
            let bonusInt = 0;
            let bonusHp = 0;
            let bonusMp = 0;

            Object.values(playerEquipment).forEach(item => {
                if (item) {
                    if (item.stat === 'str') bonusStr += item.val;
                    if (item.stat === 'agi') bonusAgi += item.val;
                    if (item.stat === 'int') bonusInt += item.val;
                    if (item.stat === 'hp') bonusHp += item.val;
                    if (item.stat === 'mp') bonusMp += item.val;
                }
            });

            const totalHp = race.baseStats.hp + cls.statModifier.hp + bonusHp;
            const totalMp = race.baseStats.mp + cls.statModifier.mp + bonusMp;
            const totalStr = race.baseStats.str + cls.statModifier.str + bonusStr;
            const totalAgi = race.baseStats.agi + cls.statModifier.agi + bonusAgi;
            const totalInt = race.baseStats.int + cls.statModifier.int + bonusInt;

            document.getElementById('stat-hp-val').textContent = `${totalHp} / ${totalHp}`;
            document.getElementById('stat-mp-val').textContent = `${totalMp} / ${totalMp}`;
            document.getElementById('stat-str').textContent = totalStr;
            document.getElementById('stat-agi').textContent = totalAgi;
            document.getElementById('stat-int').textContent = totalInt;

            document.getElementById('race-trait-desc').innerHTML = `
                <strong class="text-amber-400">${race.name} · ${race.trait.split('】：')[0].replace('【', '').replace('】', '')}】：</strong>
                <span class="text-amber-200/80">${race.trait.split('】：')[1]}</span>
            `;
        }

        function updateEquipUI() {
            const wep = playerEquipment.weapon;
            const arm = playerEquipment.armor;
            const hel = playerEquipment.helmet;

            const wepBtn = document.getElementById('equip-weapon-name');
            wepBtn.textContent = wep ? wep.name : '石の槌と錆びた短剣';
            wepBtn.className = wep ? 'font-bold text-amber-400 border-b border-amber-500/40' : 'font-bold text-stone-400';

            const armBtn = document.getElementById('equip-armor-name');
            armBtn.textContent = arm ? arm.name : '苦行者のボロ麻布';
            armBtn.className = arm ? 'font-bold text-blue-400 border-b border-blue-500/40' : 'font-bold text-stone-400';

            const helBtn = document.getElementById('equip-helmet-name');
            helBtn.textContent = hel ? hel.name : '防具なし';
            helBtn.className = hel ? 'font-bold text-purple-400 border-b border-purple-500/40' : 'font-bold text-stone-400';
        }

        function randomizeName() {
            const list = RANDOM_NAMES[activeRace] || RANDOM_NAMES.human;
            const randIndex = Math.floor(Math.random() * list.length);
            document.getElementById('char-name').value = list[randIndex];
        }

        // 7. 回合制地牢 Boss 遭遇システム
        function enterDungeon(dungeonId) {
            const dungeon = MAP_DUNGEONS.find(d => d.id === dungeonId);
            if (!dungeon) return;

            dungeonState.activeDungeon = dungeon;
            dungeonState.bossHp = dungeon.bossMaxHp;
            
            const race = RACES[activeRace];
            const cls = CLASSES[activeClass];
            dungeonState.playerHp = race.baseStats.hp + cls.statModifier.hp;
            dungeonState.playerMp = race.baseStats.mp + cls.statModifier.mp;

            const term = document.getElementById('dungeon-terminal');
            term.classList.remove('hidden');

            document.getElementById('terminal-title').textContent = `遠征中：${dungeon.name}`;

            const termBody = document.getElementById('terminal-body');
            termBody.innerHTML = `
                <p class="text-amber-500 font-bold font-serif">[システム] 呪われし禁忌の地、${dungeon.name} へ足を踏み入れました。</p>
                <p class="text-stone-400">${dungeon.description}</p>
                <p class="text-red-500 font-bold font-serif animate-pulse">※ 古代の悪霊【${dungeon.bossName}】(HP: ${dungeon.bossMaxHp}) が深淵の玉座より姿を現し、あなたの行く手を阻む！</p>
            `;
            
            setupCombatActions();
            termBody.scrollTop = termBody.scrollHeight;
        }

        function closeTerminal() {
            document.getElementById('dungeon-terminal').classList.add('hidden');
        }

        function setupCombatActions() {
            const actionContainer = document.getElementById('terminal-actions');
            actionContainer.innerHTML = `
                <button onclick="combatTurn('attack')" class="py-1 px-3 bg-red-950 text-red-200 border border-red-800 rounded hover:bg-red-900 transition font-bold text-xs">🗡️ 通常攻撃</button>
                <button onclick="combatTurn('spell')" class="py-1 px-3 bg-blue-950 text-blue-200 border border-blue-800 rounded hover:bg-blue-900 transition font-bold text-xs">✨ 秘術魔法 (-15 MP)</button>
                <button onclick="combatTurn('defend')" class="py-1 px-3 bg-stone-900 text-stone-200 border border-stone-700 rounded hover:bg-stone-800 transition font-bold text-xs">🛡️ 防御体制</button>
            `;
        }

        function combatTurn(action) {
            const dungeon = dungeonState.activeDungeon;
            if (!dungeon) return;

            const termBody = document.getElementById('terminal-body');
            const playerStr = parseInt(document.getElementById('stat-str').textContent);
            const playerInt = parseInt(document.getElementById('stat-int').textContent);

            let playerDamage = 0;
            let logMsg = "";

            if (action === 'attack') {
                playerDamage = Math.floor(Math.random() * 8) + playerStr;
                logMsg = `<p class="text-amber-100">✔ あなたの魂の込もった一撃！ <b>${dungeon.bossName}</b> に <span class="text-red-400 font-bold">${playerDamage}ポイント</span> の物理ダメージを与えた！</p>`;
            } else if (action === 'spell') {
                if (dungeonState.playerMp < 15) {
                    logMsg = `<p class="text-yellow-600">⚠ 魔力(信念)が足りない！魔法の詠唱が遮られ、かろうじて不完全な防御を行った。</p>`;
                } else {
                    dungeonState.playerMp -= 15;
                    playerDamage = Math.floor(Math.random() * 15) + playerInt * 1.5;
                    playerDamage = Math.floor(playerDamage);
                    logMsg = `<p class="text-cyan-300">⚡ 魔力解放！聖殿の古き呪文を紡ぎ、星海の雷霆を召喚した！ <b>${dungeon.bossName}</b> に <span class="text-cyan-400 font-bold">${playerDamage}ポイント</span> の凄まじい魔法ダメージを与えた！</p>`;
                }
            } else if (action === 'defend') {
                logMsg = `<p class="text-stone-300">🛡 あなたは精鉄の盾を構え、堅固な聖防壁を張った。このターンに受けるボスのダメージが 60% カットされる。</p>`;
            }

            dungeonState.bossHp -= playerDamage;
            if (dungeonState.bossHp < 0) dungeonState.bossHp = 0;

            termBody.innerHTML += logMsg;

            if (dungeonState.bossHp <= 0) {
                termBody.innerHTML += `
                    <p class="text-emerald-400 font-bold font-serif mt-2">🎉 聖なる大勝利！${dungeon.bossName} は苦悶の咆哮を上げ、塵となって消え去った...</p>
                    <p class="text-amber-300 font-bold animate-bounce mt-1">🎁 聖なる箱が光の中に降臨！エピック装備を獲得できます...</p>
                `;
                triggerLoot(dungeon);
                termBody.scrollTop = termBody.scrollHeight;
                return;
            }

            let bossDamage = Math.floor(Math.random() * 12) + 5;
            if (action === 'defend') {
                bossDamage = Math.floor(bossDamage * 0.4);
            }

            dungeonState.playerHp -= bossDamage;
            if (dungeonState.playerHp < 0) dungeonState.playerHp = 0;

            termBody.innerHTML += `<p class="text-red-400">⚔ <b>${dungeon.bossName}</b> の強烈な反撃！あなたは <span class="text-red-500 font-bold">${bossDamage}ポイント</span> の反撃ダメージを受けた！</p>`;
            termBody.innerHTML += `<p class="text-stone-500 text-[10px]">[戦況追跡] あなたのHP: ${dungeonState.playerHp} | ボスのHP: ${dungeonState.bossHp}</p>`;

            if (dungeonState.playerHp <= 0) {
                termBody.innerHTML += `
                    <p class="text-red-700 font-bold font-serif mt-2">☠ 宿命の敗北... あなたの身体は冷たい廃墟の土へと帰した。</p>
                    <p class="text-stone-500">まだ希望を捨てるな。再び魂を燃やし、リトライせよ！</p>
                `;
                actionContainer.innerHTML = `
                    <button onclick="enterDungeon('${dungeon.id}')" class="py-1 px-3 bg-amber-800 text-stone-950 rounded hover:bg-amber-600 transition font-bold text-xs">魂を呼び戻す (Retry)</button>
                `;
                termBody.scrollTop = termBody.scrollHeight;
                return;
            }

            termBody.scrollTop = termBody.scrollHeight;
        }

        function triggerLoot(dungeon) {
            const rewardItem = dungeon.rewards[activeClass];
            const actionContainer = document.getElementById('terminal-actions');

            actionContainer.innerHTML = `
                <button onclick="equipReward('${dungeon.id}')" class="py-1.5 px-4 bg-gradient-to-r from-amber-600 to-amber-400 text-stone-950 font-black rounded hover:from-amber-500 hover:to-amber-300 transition text-xs shadow-md">
                    👑 アーティファクトを装備する (Equip!)
                </button>
            `;
        }

        function equipReward(dungeonId) {
            const dungeon = MAP_DUNGEONS.find(d => d.id === dungeonId);
            const rewardItem = dungeon.rewards[activeClass];

            const type = dungeon.rewardType;
            if (type === 'weapon' || type === 'weapon_t2') {
                playerEquipment.weapon = rewardItem;
            } else if (type === 'armor') {
                playerEquipment.armor = rewardItem;
            } else if (type === 'helmet') {
                playerEquipment.helmet = rewardItem;
            }

            updateEquipUI();
            updateStats();
            drawCharacter();

            const termBody = document.getElementById('terminal-body');
            termBody.innerHTML += `
                <p class="text-green-400 font-serif font-bold mt-2">✔ 装備完了：【${rewardItem.name}】の力を宿しました！</p>
                <p class="text-stone-400 text-[10px]">${rewardItem.detail} (ステータス補正: +${rewardItem.val} ${rewardItem.stat.toUpperCase()})</p>
            `;
            termBody.scrollTop = termBody.scrollHeight;

            setupCombatActions();
            closeTerminal();
        }

        // 8. 步骤控制
        function updateStep() {
            const pRace = document.getElementById('panel-race');
            const pLooks = document.getElementById('panel-appearance');
            const pStory = document.getElementById('panel-story');
            const pWorldMap = document.getElementById('panel-worldmap');

            const dot1 = document.getElementById('step-dot-1');
            const dot2 = document.getElementById('step-dot-2');
            const dot3 = document.getElementById('step-dot-3');
            const dot4 = document.getElementById('step-dot-4');

            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');
            const stepTitle = document.getElementById('step-title');
            const stepIcon = document.getElementById('step-icon');
            const nameWrapper = document.getElementById('name-input-wrapper');

            pRace.classList.add('hidden');
            pLooks.classList.add('hidden');
            pStory.classList.add('hidden');
            pWorldMap.classList.add('hidden');

            dot1.className = "w-2.5 h-2.5 rounded-full bg-stone-700";
            dot2.className = "w-2.5 h-2.5 rounded-full bg-stone-700";
            dot3.className = "w-2.5 h-2.5 rounded-full bg-stone-700";
            dot4.className = "w-2.5 h-2.5 rounded-full bg-stone-700";

            nameWrapper.classList.remove('hidden');

            if (currentStep === 1) {
                pRace.classList.remove('hidden');
                dot1.className = "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse";
                stepTitle.textContent = "第一章：祖なる血脈と運命の選択";
                stepIcon.setAttribute('data-lucide', 'scroll');
                
                btnPrev.classList.add('opacity-50', 'cursor-not-allowed');
                btnPrev.disabled = true;
                btnNext.innerHTML = `次章へ <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
            } 
            else if (currentStep === 2) {
                pLooks.classList.remove('hidden');
                dot2.className = "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse";
                stepTitle.textContent = "第二章：誓約と外見の刻印";
                stepIcon.setAttribute('data-lucide', 'palette');

                btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');
                btnPrev.disabled = false;
                btnNext.innerHTML = `誓約の宣言 <i data-lucide="swords" class="w-4 h-4"></i>`;
            } 
            else if (currentStep === 3) {
                pStory.classList.remove('hidden');
                dot3.className = "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse";
                stepTitle.textContent = "第三章：黄昏の古修道院での啓示";
                stepIcon.setAttribute('data-lucide', 'book-open');

                btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');
                btnPrev.disabled = false;
                btnNext.innerHTML = `戦術盤へ進軍 <i data-lucide="map" class="w-4 h-4"></i>`;

                generateWorldStory();
            }
            else if (currentStep === 4) {
                pWorldMap.classList.remove('hidden');
                dot4.className = "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse";
                stepTitle.textContent = "第四章：アストラ遠征タクティカル盤";
                stepIcon.setAttribute('data-lucide', 'sword');

                nameWrapper.classList.add('hidden');
                btnPrev.classList.remove('opacity-50', 'cursor-not-allowed');
                btnPrev.disabled = false;
                btnNext.innerHTML = `新たな歴史を刻む <i data-lucide="rotate-ccw" class="w-4 h-4"></i>`;

                initMapNodes(); 
            }

            lucide.createIcons();
        }

        // 日本語版ストーリーテンプレート
        const STORY_TEMPLATES = {
            intro: [
                "黒死病が過ぎ去り、教皇の宣告も届かぬほどに荒廃した「アストラ」の地。封建領主たちの非情な鉄蹄が、再び古き森林の静寂を容赦なく踏みにじっていた。その境界、黄昏の血に染まった廃修道院の前に佇むのは、古き{RACE}の血を引く継承者——<strong>{NAME}</strong>であった。",
                "誓いを立てたばかりの{CLASS}として、あなたの胸当てに刻まれた家紋には、まだ吹きすさぶ風雨と炉火の煤が新しい。荒原から吹き抜ける冷たい風が、鎧の不気味な軋みと、遠くで響く不吉な弔鐘を運んでくる。崩れかけた崩落跡には、かつての修道女たちの祈りの残響が、苔むした魔術ルーンの上に今も息づいているようだった..."
            ],
            dilemma: [
                "突如、祭壇の中央に据えられた十字架が、地響きとともに裂けた。地下室からは、かつて世界を滅ぼさんとした「穢れの霧」がじわじわと這い出し、空気を歪める。目の前には、異教徒の禁忌ルーンで固く封印された重厚なオーク鉄門。右側には、猛毒を孕んだ茨に覆われ、古い羊皮紙写本や聖杯の灰が散乱する暗いカタコンベ。血族の直感と誓約の印が、かつてない鋭さであなたに警告を発している……",
                "「王冠と聖なる土を尊ぶ者よ、その骨に星の軌跡を刻め。」 その古の血を引く、微かだが尊厳に満ちた呼びかけは、紛れもなくあなたの偉大なる{RACE}としての魂に語りかけている。誓言に生きる{CLASS}として、あなたはこの深淵を前に、己が道を断定せねばならない。"
            ]
        };

        function generateWorldStory() {
            const playerName = document.getElementById('char-name').value.trim() || '名無しの領主';
            const raceName = RACES[activeRace].name;
            const className = CLASSES[activeClass].name;

            document.getElementById('player-summary-tag').textContent = `${raceName} · ${className}`;
            document.getElementById('player-summary-name').textContent = playerName;

            const p1 = STORY_TEMPLATES.intro[0]
                .replace('{NAME}', `<strong>${playerName}</strong>`)
                .replace('{RACE}', `<span class="text-amber-500 font-bold">${raceName}</span>`);
            
            const p2 = STORY_TEMPLATES.intro[1]
                .replace('{CLASS}', `<span class="text-amber-400 font-bold">${className}</span>`);

            const p3 = STORY_TEMPLATES.dilemma[0]
                .replace('{RACE}', `<span class="text-amber-500 font-bold">${raceName}</span>`);

            const p4 = STORY_TEMPLATES.dilemma[1]
                .replace('{RACE}', `<span class="text-amber-500 font-bold">${raceName}</span>`)
                .replace('{CLASS}', `<span class="text-amber-400 font-bold">${className}</span>`);

            const storyContainer = document.getElementById('story-text-container');
            storyContainer.innerHTML = `
                <p class="text-amber-500 font-serif text-xs border-b border-amber-950 pb-2 flex items-center gap-1.5 animate-pulse">
                    <span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 領主の紋章が運命の羊皮紙に刻印されました...
                </p>
                <p class="text-amber-200/90 leading-relaxed font-serif">${p1}</p>
                <p class="text-amber-200/90 leading-relaxed font-serif">${p2}</p>
                <p class="text-amber-200/90 leading-relaxed font-serif">${p3}</p>
                <p class="text-amber-200/90 leading-relaxed font-serif">${p4}</p>
            `;

            const choicesContainer = document.getElementById('story-choices-container');
            choicesContainer.innerHTML = '';

            const choices = getChoicesForClassAndRace(activeClass, activeRace);
            choices.forEach((choice, index) => {
                const btn = document.createElement('button');
                btn.className = "w-full text-left p-3 rounded bg-[#24160d]/90 hover:bg-[#321e12] border border-[#5c4033] hover:border-amber-500/50 transition flex items-start gap-3 group text-xs sm:text-sm";
                btn.innerHTML = `
                    <span class="w-5 h-5 rounded bg-[#3d2516] group-hover:bg-amber-600 text-[10px] text-amber-500 group-hover:text-stone-950 flex items-center justify-center font-bold font-mono transition-colors shrink-0">
                        ${index + 1}
                    </span>
                    <span class="text-amber-200 group-hover:text-amber-100 transition-colors font-serif">${choice.text}</span>
                `;
                btn.addEventListener('click', () => {
                    handlePlayerChoice(choice);
                });
                choicesContainer.appendChild(btn);
            });
        }

        function getChoicesForClassAndRace(cls, race) {
            let options = [];
            options.push({
                id: 'race_trait',
                text: `[${RACES[race].name}血脈] 古代の盟約を心に唱え、血に眠る天賦の直感で闇に潜む罠の気配を探る。`,
                outcome: `あなたは静かに目を閉じ、${RACES[race].name}としての根源の力を呼び覚ましました。大気中に漂う魔力痕跡に導かれ、あなたは石段の下に隠されていた危険なトゲの罠を完全に見抜き、さらに崩れた聖母像の足元から10枚の古い帝国金貨を発見しました！`
            });

            if (cls === 'knight') {
                options.push({
                    id: 'class_action',
                    text: `[テンプルナイトの剛撃] 重装鎧を軋ませながら、腰の巨剣を両手で構えてオーク鉄門の魔ルーンごと叩き斬る！`,
                    outcome: "金属が引き裂かれる大爆音が静寂を破り、あなたの剛刃は禁忌の術式ごと鉄門を両断しました！門は火花を散らして崩壊し、暗い地下誓約大厅への道が開かれました..."
                });
            } else if (cls === 'wizard') {
                options.push({
                    id: 'class_action',
                    text: `[ウィザードの占星術] 擦り切れた魔術典籍を紐解き、不安定な青色の星系エネルギーを門の結界に流し込んで呪式を反転・解呪する。`,
                    outcome: "あなたが口ずさむ神秘の呪言と同調するように、鉄門を覆っていた穢れが青白い炎に包まれ霧散しました。門は静かに滑るように開き、あなたを地下室へと導きます..."
                });
            } else if (cls === 'ranger') {
                options.push({
                    id: 'class_action',
                    text: `[レンジャーの飛身] 毒茨の奥へ火油の矢を放ち、炎の隙間を狙ってワイヤー付きの矢を対岸へ射ち、軽やかに深淵を越える。`,
                    outcome: "放たれた火矢が毒の茨を激しく焼き払い、周囲を赤々と照らしました。あなたはロープを素早く手繰り寄せ、完璧な軌道で空中を舞い、奈落の向こうへ無音で着地しました..."
                });
            } else if (cls === 'cleric') {
                options.push({
                    id: 'class_action',
                    text: `[クレリックの聖光] 黄金の十字架を掲げ、清らかな神聖障壁（バリア）を展開し、迫る瘴気を完全に無効化しながら進む。`,
                    outcome: "十字架から解き放たれた温和な光の輪が瘴気を完全に浄化し、地下の不気味な囁きは一瞬で消え去りました。あなたは大通りを進む巡礼者のように安全に、深部へと進みました..."
                });
            }

            options.push({
                id: 'safe',
                text: `[慎重なる探索] 崩れた壁の影に身を潜め、石壁のルーンを念入りに分析。前代の騎士が残した秘密の手記から安全な隠し通路を探す。`,
                outcome: "あなたは一度冷静になることを選びました。散乱する旅人の遺品を丹念に調べた結果、百年前に大聖堂を守護していた神殿騎士の極秘手抄地図を発見しました！そこに描かれた秘密の抜け穴から、無傷で【アストラ遠征タクティカル盤】へと足を進めることができました。"
            });

            return options;
        }

        function handlePlayerChoice(choice) {
            const storyContainer = document.getElementById('story-text-container');
            const choicesContainer = document.getElementById('story-choices-container');

            storyContainer.innerHTML += `
                <div class="mt-4 p-3 bg-amber-950/40 border-l-2 border-amber-600 rounded-r">
                    <p class="text-xs text-amber-500 font-bold mb-1">▶ 運命の導き (Outcome)：</p>
                    <p class="text-sm text-amber-100 font-serif">${choice.outcome}</p>
                </div>
            `;

            choicesContainer.innerHTML = `
                <div class="text-center p-4 border border-amber-900/40 rounded bg-[#120804]">
                    <p class="text-xs text-amber-500 mb-3">大修道院の星盤があなたの英断を承認した！これより、アストラの地平を支配せし強大な不朽の悪霊たちを狩る聖戦を開始する。</p>
                    <button onclick="currentStep = 4; updateStep();" class="px-4 py-2 bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-700 hover:to-amber-500 text-stone-950 rounded text-xs font-black transition">
                        ⚔️ 遠征大マップを拓く
                    </button>
                </div>
            `;
            storyContainer.scrollTop = storyContainer.scrollHeight;
        }

        // 9. 游戏引擎初始化
        window.onload = function() {
            document.getElementById('btn-prev').addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateStep();
                }
            });

            document.getElementById('btn-next').addEventListener('click', () => {
                if (currentStep === 3) {
                    currentStep = 4;
                    updateStep();
                } else if (currentStep === 2) {
                    currentStep = 3;
                    updateStep();
                } else if (currentStep === 1) {
                    currentStep = 2;
                    updateStep();
                } else if (currentStep === 4) {
                    currentStep = 1;
                    playerEquipment = { weapon: null, armor: null, helmet: null };
                    updateEquipUI();
                    updateStep();
                }
            });

            document.getElementById('btn-rand-name').addEventListener('click', () => {
                randomizeName();
            });

            document.getElementById('hair-style-select').addEventListener('change', (e) => {
                designState.hairStyle = e.target.value;
                updateLooksAndDraw();
            });

            document.querySelectorAll('.accessory-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.accessory-btn').forEach(b => b.classList.remove('active', 'bg-amber-600', 'text-stone-950'));
                    btn.classList.add('active', 'bg-amber-600', 'text-stone-950');
                    designState.accessory = btn.getAttribute('data-acc');
                    updateLooksAndDraw();
                });
            });

            document.getElementById('btn-export-png').addEventListener('click', () => {
                const dataURL = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = `${document.getElementById('char-name').value || 'knight'}_shield.png`;
                link.href = dataURL;
                link.click();
            });

            initRaces();
            initClasses();
            buildPalettes();
            selectRace('human');
            updateStep();
        };
    </script>
</body>
</html>
