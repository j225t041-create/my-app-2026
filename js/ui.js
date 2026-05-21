const UI = {
    renderDay(date, tasks) {
        const container = document.getElementById('planner-view');
        container.innerHTML = '<div class="timeline"></div>';
        const timeline = container.querySelector('.timeline');

        const dayTasks = tasks.filter(t => t.date === date);

        for (let i = 0; i < 24; i++) {
            const hour = i.toString().padStart(2, '0') + ':00';
            const slotTasks = dayTasks.filter(t => t.time && t.time.startsWith(i.toString().padStart(2, '0')));

            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.innerHTML = `
                <div class="time-label">${hour}</div>
                <div class="task-list">
                    ${slotTasks.map(t => `
                        <div class="task-card" data-id="${t.id}">
                            <h4>${t.title}</h4>
                            ${t.desc ? `<p>${t.desc}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            timeline.appendChild(slot);
        }
    },

    renderWeek(startDate, tasks) {
        const container = document.getElementById('planner-view');
        container.innerHTML = '<div class="week-grid"></div>';
        const grid = container.querySelector('.week-grid');

        const start = new Date(startDate);
        for (let i = 0; i < 7; i++) {
            const current = new Date(start);
            current.setDate(start.getDate() + i);
            const dateStr = current.toISOString().split('T')[0];
            const dayTasks = tasks.filter(t => t.date === dateStr);

            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.innerHTML = `
                <div class="day-header">${current.getMonth() + 1}/${current.getDate()}</div>
                <div class="task-list-mini">
                    ${dayTasks.map(t => `<div class="task-dot" title="${t.title}">${t.title}</div>`).join('')}
                </div>
            `;
            grid.appendChild(cell);
        }
    },

    renderMonth(date, tasks) {
        const container = document.getElementById('planner-view');
        container.innerHTML = '<div class="month-grid"></div>';
        const grid = container.querySelector('.month-grid');

        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            grid.appendChild(document.createElement('div')).className = 'day-cell empty';
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            const dayTasks = tasks.filter(t => t.date === dateStr);

            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.innerHTML = `
                <div class="day-header">${i}</div>
                <div class="task-count">${dayTasks.length > 0 ? `${dayTasks.length}件` : ''}</div>
            `;
            grid.appendChild(cell);
        }
    },

    showModal(task = null) {
        const modal = document.getElementById('modal');
        const form = document.getElementById('task-form');
        const title = document.getElementById('modal-title');

        if (task) {
            title.textContent = '予定を編集';
            document.getElementById('task-id').value = task.id;
            document.getElementById('task-title').value = task.title;
            document.getElementById('task-date').value = task.date;
            document.getElementById('task-time').value = task.time || '';
            document.getElementById('task-desc').value = task.desc || '';
        } else {
            title.textContent = '予定を追加';
            form.reset();
            document.getElementById('task-id').value = '';
            document.getElementById('task-date').value = new Date().toISOString().split('T')[0];
        }

        modal.classList.remove('hidden');
    },

    hideModal() {
        document.getElementById('modal').classList.add('hidden');
    }
};
