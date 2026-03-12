const employees = [
    {
        id: 0,
        firstName: "Demo User",
        email: "demo@demo.com",
        password: "123",
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 0,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Explore Dashboard",
                taskDescription: "Check how the employee dashboard works",
                taskDate: "2024-10-15",
                category: "Demo"
            }
        ]
    },

    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            }
        ]
    }
]

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    },
    {
        id: 2,
        email: "demo_admin@demo.com",
        password: "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}