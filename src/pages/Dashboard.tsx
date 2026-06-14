import { useEffect, useState } from "react";

import { fetchUsers } from "../api/dashboardApi";
import type { User } from "../types/User";

import FilterBar from "../components/FilterBar";
import DashboardTable from "../components/DashboardTable";
import DetailsDrawer from "../components/DetailsDrawer";
import UserStatusChart from "../components/UserStatusChart";

const Dashboard = () => {
  // All users from API.
  const [users, setUsers] = useState<User[]>([]);

  // Filtered users shown in the table.
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>([]);

  // Currently selected user.
  const [selectedUser, setSelectedUser] =
    useState<User | null>(null);

  // Load users once when page loads.
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();

      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  // Calculate chart values.
  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>

      {/* Search bar */}
      <FilterBar
        users={users}
        onFilter={setFilteredUsers}
      />

      {/* User table */}
      <DashboardTable
        users={filteredUsers}
        onSelectUser={setSelectedUser}
      />

      {/* User details panel */}
      <DetailsDrawer
        user={selectedUser}
      />

      {/* Chart */}
      <UserStatusChart
        active={activeUsers}
        inactive={inactiveUsers}
      />
    </div>
  );
};

export default Dashboard;