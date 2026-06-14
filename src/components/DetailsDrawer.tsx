import {
  Drawer,
  Box,
  Typography,
} from "@mui/material";

import type { User } from "../types/User";

interface DetailsDrawerProps {
  user: User | null;
}

const DetailsDrawer = ({
  user,
}: DetailsDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={user !== null}
      variant="persistent"
    >
      <Box sx={{ width: 300, padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          User Details
        </Typography>

        {user ? (
          <>
            <Typography>
              <strong>Name:</strong> {user.name}
            </Typography>

            <Typography>
              <strong>Email:</strong> {user.email}
            </Typography>

            <Typography>
              <strong>Status:</strong> {user.status}
            </Typography>

            <Typography>
              <strong>Role:</strong> {user.role}
            </Typography>
          </>
        ) : (
          <Typography>
            Select a user from the table.
          </Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default DetailsDrawer;

/* What this does
If no user is selected → drawer stays closed.
Clicking a row sends the selected user to the drawer.
The drawer opens automatically and displays the information. */