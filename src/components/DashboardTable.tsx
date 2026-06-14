import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import type { User } from "../types/User";

interface DashboardTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const DashboardTable = ({
  users,
  onSelectUser,
}: DashboardTableProps) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>

        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Email</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Role</strong></TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => onSelectUser(user)}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default DashboardTable;