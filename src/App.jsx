import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard.jsx'
import AdminDashBoard from './components/Dashboard/AdminDashBoard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (email, password) => {

    // ✅ Admin Login
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )

      return
    }

    // ✅ Demo Admin Login
    if (email === 'demo_admin@demo.com' && password === '123') {
      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )

      return
    }

    // ✅ Demo Employee Login
    if (email === 'demo@demo.com' && password === '123') {

      const demoEmployee = {
        id: 999,
        firstName: "Demo User",
        email: "demo@demo.com",
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
      }

      setUser('employee')
      setLoggedInUserData(demoEmployee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: demoEmployee
        })
      )

      return
    }

    // ✅ Normal Employee Login
    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        )

        return
      }
    }

    // ❌ Invalid credentials
    alert("Invalid Credentials")
  }


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' ? (
        <AdminDashBoard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashBoard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App