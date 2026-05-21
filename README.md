# my-app-2026
課題提出用ポジトリ
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>マイ・プランナー (My Planner)</title>
    <style>
        /* --- グローバル変数と基本スタイル --- */
        :root {
            --primary-color: #4f46e5;
            --primary-hover: #4338ca;
            --bg-color: #f3f4f6;
            --card-bg: #ffffff;
            --text-main: #1f2937;
            --text-muted: #6b7280;
            --border-color: #e5e7eb;
            --danger-color: #ef4444;
            --success-color: #10b981;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        /* --- メインコンテナ --- */
        .planner-container {
            background: var(--card-bg);
            width: 100%;
            max-width: 550px;
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }

        .header {
            margin-bottom: 20px;
            text-align: center;
        }

        .header h1 {
            font-size: 24px;
            color: var(--primary-color);
        }

        /* --- タブ切り替え (日/週/月) --- */
        .tabs {
            display: flex;
            background: #e5e7eb;
            padding: 4px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .tab-btn {
            flex: 1;
            background: transparent;
            border: none;
            padding: 10px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-muted);
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .tab-btn.active {
            background: var(--card-bg);
            color: var(--primary-color);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        /* --- 期間選択バー --- */
        .period-selector {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 22px;
            background: #f9fafb;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .period-selector label {
            font-size: 13px;
            color: var(--text-muted);
            font-weight: bold;
        }

        .period-input {
            border: 1px solid var(--border-color);
            padding: 6px 12px;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
            color: var(--text-main);
        }

        /* --- 入力エリア --- */
        .input-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 25px;
        }

        .input-row {
            display: flex;
            gap: 10px;
        }

        input[type="text"] {
            flex: 1;
            padding: 12px 14px;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 14px;
            outline: none;
        }

        input[type="text"]:focus {
            border-color: var(--primary-color);
        }

        /* 時間入力はデイリープランのみ表示 */
        input[type="time"] {
            padding: 12px;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 14px;
            outline: none;
        }

        button.add-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        button.add-btn:hover {
            background-color: var(--primary-hover);
        }

        /* --- リストエリア --- */
        .task-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-height: 350px;
            overflow-y: auto;
        }

        .task-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #f9fafb;
            padding: 14px 16px;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
            transition: all 0.2s;
        }

        /* タブごとのテーマカラー調整 */
        .planner-container.weekly .task-item { border-left-color: #0ea5e9; }
        .planner-container.monthly .task-item { border-left-color: #f59e0b; }

        .task-item.completed {
            border-left-color: var(--text-muted) !important;
            opacity: 0.5;
            background: #f3f4f6;
        }

        .task-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }

        .checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid var(--border-color);
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .task-item.completed .checkbox {
            background-color: var(--success-color);
            border-color: var(--success-color);
        }

        .task-item.completed .checkbox::after {
            content: "✓";
            color: white;
            font-size: 11px;
        }

        .task-content {
            display: flex;
            flex-direction: column;
        }

        .task-text {
            font-size: 15px;
            font-weight: 500;
        }

        .task-item.completed .task-text {
            text-decoration: line-through;
            color: var(--text-muted);
        }

        .task-time {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 2px;
        }

        .delete-btn {
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            font-size: 16px;
            padding: 4px;
        }

        .delete-btn:hover {
            color: var(--danger-color);
        }

        .empty-state {
            text-align: center;
            color: var(--text-muted);
            font-size: 14px;
            padding: 30px 0;
        }
    </style>
</head>
<body>

    <div class="planner-container daily" id="planner-card">
        <div class="header">
            <h1>マイ・プランナー</h1>
        </div>

        <div class="tabs">
            <button class="tab-btn active" onclick="switchTab('daily')">デイリー</button>
            <button class="tab-btn" onclick="switchTab('weekly')">ウィークリー</button>
            <button class="tab-btn" onclick="switchTab('monthly')">マンスリー</button>
        </div>

        <div class="period-selector">
            <label id="period-label">日付を選択:</label>
            <input type="date" id="date-picker" class="period-input">
            <input type="week" id="week-picker" class="period-input" style="display: none;">
            <input type="month" id="month-picker" class="period-input" style="display: none;">
        </div>

        <div class="input-section">
            <div class="input-row">
                <input type="text" id="task-input" placeholder="予定を入力してください..." autocomplete="off">
                <input type="time" id="time-input">
            </div>
            <button class="add-btn" onclick="addTask()">予定を追加</button>
        </div>

        <ul class="task-list" id="task-list"></ul>
    </div>

    <script>
        // --- グローバル状態 ---
        let currentTab = 'daily'; 
        let tasks = JSON.parse(localStorage.getItem('multi_period_tasks')) || [];

        // --- DOM ノード ---
        const plannerCard = document.getElementById('planner-card');
        const taskInput = document.getElementById('task-input');
        const timeInput = document.getElementById('time-input');
        const taskList = document.getElementById('task-list');
        
        const periodLabel = document.getElementById('period-label');
        const datePicker = document.getElementById('date-picker');
        const weekPicker = document.getElementById('week-picker');
        const monthPicker = document.getElementById('month-picker');

        // --- デフォルト日時の初期化 ---
        function initPickers() {
            const today = new Date();
            
            // 1. 日付デフォルト値 (YYYY-MM-DD)
            datePicker.value = today.toISOString().split('T')[0];
            
            // 2. 月デフォルト値 (YYYY-MM)
            monthPicker.value = today.toISOString().slice(0, 7);

            // 3. 週デフォルト値 (YYYY-Www)
            const target = new Date(today.valueOf());
            const dayNr = (today.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            const firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() !== 4) {
                target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            const weekNum = 1 + Math.ceil((firstThursday - target) / 604800000);
            weekPicker.value = `${target.getFullYear()}-W${String(weekNum).padStart(2, '0')}`;
        }

        // --- 選択されている期間の値を取得 ---
        function getCurrentPeriodValue() {
            if (currentTab === 'daily') return datePicker.value;
            if (currentTab === 'weekly') return weekPicker.value;
            if (currentTab === 'monthly') return monthPicker.value;
        }

        // --- タブ切り替え ---
        function switchTab(tab) {
            currentTab = tab;
            plannerCard.className = `planner-container ${tab}`;

            // タブのアクティブ状態更新
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                if (
                    (tab === 'daily' && btn.innerText === 'デイリー') ||
                    (tab === 'weekly' && btn.innerText === 'ウィークリー') ||
                    (tab === 'monthly' && btn.innerText === 'マンスリー')
                ) {
                    btn.classList.add('active');
                }
            });

            // 選択器と入力欄の制御
            datePicker.style.display = 'none';
            weekPicker.style.display = 'none';
            monthPicker.style.display = 'none';
            timeInput.style.display = 'none';

            if (tab === 'daily') {
                periodLabel.innerText = '日付を選択:';
                datePicker.style.display = 'inline-block';
                timeInput.style.display = 'inline-block'; 
                taskInput.placeholder = "今日の予定・タスクを追加...";
            } else if (tab === 'weekly') {
                periodLabel.innerText = '週を選択:';
                weekPicker.style.display = 'inline-block';
                taskInput.placeholder = "今週の目標・タスクを追加...";
            } else if (tab === 'monthly') {
                periodLabel.innerText = '月を選択:';
                monthPicker.style.display = 'inline-block';
                taskInput.placeholder = "今月の目標・イベントを追加...";
            }

            renderTasks();
        }

        // --- タスクのレンダリング ---
        function renderTasks() {
            taskList.innerHTML = '';
            const activePeriod = getCurrentPeriodValue();

            // 選択中のタブと期間に一致するタスクを抽出
            let filteredTasks = tasks.filter(t => t.type === currentTab && t.period === activePeriod);

            if (filteredTasks.length === 0) {
                taskList.innerHTML = `<li class="empty-state">予定がありません。新しい予定を追加しましょう！</li>`;
                return;
            }

            // デイリープランの場合は時間順にソート
            if (currentTab === 'daily') {
                filteredTasks.sort((a, b) => (a.time > b.time ? 1 : -1));
            }

            filteredTasks.forEach((task) => {
                const realIndex = tasks.findIndex(t => t.id === task.id);

                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;

                let timeTag = '';
                if (currentTab === 'daily') {
                    timeTag = task.time ? `⏰ ${task.time}` : '🕒 終日';
                } else if (currentTab === 'weekly') {
                    timeTag = `📅 週のタスク`;
                } else {
                    timeTag = `🎯 月の目標`;
                }

                li.innerHTML = `
                    <div class="task-left">
                        <div class="checkbox" onclick="toggleTask(${realIndex})"></div>
                        <div class="task-content">
                            <span class="task-text">${task.text}</span>
                            <span class="task-time">${timeTag}</span>
                        </div>
                    </div>
                    <button class="delete-btn" onclick="deleteTask(${realIndex})">✕</button>
                `;
                taskList.appendChild(li);
            });
        }

        // --- タスク追加 ---
        function addTask() {
            const text = taskInput.value.trim();
            const time = timeInput.value;
            const period = getCurrentPeriodValue();

            if (!text) {
                alert('予定内容を入力してください！');
                return;
            }
            if (!period) {
                alert('有効な期間を選択してください！');
                return;
            }

            const newTask = {
                id: Date.now(), 
                type: currentTab,
                period: period,
                text: text,
                time: currentTab === 'daily' ? time : '',
                completed: false
            };

            tasks.push(newTask);
            saveAndRender();
            taskInput.value = '';
            timeInput.value = '';
        }

        // --- ステータス切り替えと削除 ---
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            saveAndRender();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            saveAndRender();
        }

        function saveAndRender() {
            localStorage.setItem('multi_period_tasks', JSON.stringify(tasks));
            renderTasks();
        }

        // --- イベントリスナー ---
        datePicker.addEventListener('change', renderTasks);
        weekPicker.addEventListener('change', renderTasks);
        monthPicker.addEventListener('change', renderTasks);
        
        taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

        // --- 初期起動 ---
        initPickers();
        switchTab('daily'); 
    </script>
</body>
</html>