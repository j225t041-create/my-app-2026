document.addEventListener('DOMContentLoaded', () => {
    let currentView = 'day';
    let currentDate = new Date();

    const updateDisplay = () => {
        const dateStr = currentDate.toISOString().split('T')[0];
        const display = document.getElementById('display-date');
        
        if (currentView === 'day') {
            display.textContent = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`;
            UI.renderDay(dateStr, Storage.getTasks());
        } else if (currentView === 'week') {
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);
            display.textContent = `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()} - ${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`;
            UI.renderWeek(startOfWeek.toISOString().split('T')[0], Storage.getTasks());
        } else {
            display.textContent = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`;
            UI.renderMonth(dateStr, Storage.getTasks());
        }
    };

    // View Switching
    document.getElementById('view-day').onclick = () => {
        currentView = 'day';
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
        document.getElementById('view-day').classList.add('active');
        updateDisplay();
    };

    document.getElementById('view-week').onclick = () => {
        currentView = 'week';
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
        document.getElementById('view-week').classList.add('active');
        updateDisplay();
    };

    document.getElementById('view-month').onclick = () => {
        currentView = 'month';
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
        document.getElementById('view-month').classList.add('active');
        updateDisplay();
    };

    // Navigation
    document.getElementById('prev-date').onclick = () => {
        if (currentView === 'day') currentDate.setDate(currentDate.getDate() - 1);
        else if (currentView === 'week') currentDate.setDate(currentDate.getDate() - 7);
        else currentDate.setMonth(currentDate.getMonth() - 1);
        updateDisplay();
    };

    document.getElementById('next-date').onclick = () => {
        if (currentView === 'day') currentDate.setDate(currentDate.getDate() + 1);
        else if (currentView === 'week') currentDate.setDate(currentDate.getDate() + 7);
        else currentDate.setMonth(currentDate.getMonth() + 1);
        updateDisplay();
    };

    // Modal
    document.getElementById('add-task-btn').onclick = () => UI.showModal();
    document.getElementById('close-modal').onclick = () => UI.hideModal();

    document.getElementById('task-form').onsubmit = (e) => {
        e.preventDefault();
        const id = document.getElementById('task-id').value;
        const task = {
            title: document.getElementById('task-title').value,
            date: document.getElementById('task-date').value,
            time: document.getElementById('task-time').value,
            desc: document.getElementById('task-desc').value
        };

        if (id) {
            task.id = id;
            Storage.updateTask(task);
        } else {
            Storage.addTask(task);
        }

        UI.hideModal();
        updateDisplay();
    };

    // Event Delegation for task clicks
    document.getElementById('planner-view').addEventListener('click', (e) => {
        const card = e.target.closest('.task-card');
        if (card) {
            const id = card.dataset.id;
            const task = Storage.getTasks().find(t => t.id === id);
            if (task) UI.showModal(task);
        }
    });

    updateDisplay();
});
