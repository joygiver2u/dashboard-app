import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { User } from "../types/User";

interface Props {
  users: User[];
  onSelectUser: (user: User) => void;
}

const DashboardTable = ({
  users,
  onSelectUser,
}: Props) => {
  return (
    <Table>

      {/* Table Header */}
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>

      {/* Table Body */}
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}

            // When the row is clicked,
            // send the selected user upward.
            onClick={() => onSelectUser(user)}

            style={{ cursor: "pointer" }}
          >
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  );
};

export default DashboardTable;