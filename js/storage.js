const Storage = {
    KEY: 'daily_planner_tasks',

    getTasks() {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : [];
    },

    saveTasks(tasks) {
        localStorage.setItem(this.KEY, JSON.stringify(tasks));
    },

    addTask(task) {
        const tasks = this.getTasks();
        task.id = Date.now().toString();
        tasks.push(task);
        this.saveTasks(tasks);
        return task;
    },

    updateTask(updatedTask) {
        let tasks = this.getTasks();
        tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
        this.saveTasks(tasks);
    },

    deleteTask(id) {
        let tasks = this.getTasks();
        tasks = tasks.filter(task => task.id !== id);
        this.saveTasks(tasks);
    }
};
