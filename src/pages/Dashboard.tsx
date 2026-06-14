import { useEffect, useState } from "react";
import { fetchUsers } from "../api/dashboardApi";
import { User } from "../types/User";

import DashboardTable from "../components/DashboardTable";
import FilterBar from "../components/FilterBar";
import DetailsDrawer from "../components/DetailsDrawer";
import UserStatusChart from "../components/UserStatusChart";

const Dashboard = () => {
  // Stores all users from the API.
  const [users, setUsers] = useState<User[]>([]);

  // Stores filtered results.
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Stores the currently selected user.
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Runs once when the component loads.
  useEffect(() => {
    loadUsers();
  }, []);

  // Function to fetch users from the backend.
  const loadUsers = async () => {
    try{
    const data = await fetchUsers();

    // Save the original data.
    setUsers(data);

    // Initially, show all users.
    setFilteredUsers(data);
    }catch (error) {
        console.error("Failed to load users:", error);
    }
  };

      // Count active users.
  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  // Count inactive users.
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;  

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Dashboard</h1>

            {/* Search and filter section */}
            <FilterBar
                users={users}
                onFilter={setFilteredUsers}
            />

            {/* User table */}
            <DashboardTable
                users={filteredUsers}
                onSelectUser={setSelectedUser}
            />

            {/* Side panel showing selected user */}
            <DetailsDrawer
                user={selectedUser}
            />

            {/* Pie chart */}
            <UserStatusChart
                active={activeUsers}
                inactive={inactiveUsers}
            />
        </div>
  );
};

export default Dashboard;