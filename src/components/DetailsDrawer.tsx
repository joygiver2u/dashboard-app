import { Drawer } from "@mui/material";
import { User } from "../types/User";

interface Props {
  user: User | null;
}

const DetailsDrawer = ({ user }: Props) => {
  return (
    <Drawer
      anchor="right"
      open={!!user}
      variant="persistent"
    >
      <div style={{ width: "300px", padding: "20px" }}>
        {user ? (
          <>
            <h2>User Details</h2>

            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Status:</strong> {user.status}
            </p>

            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </>
        ) : (
          <p>Select a user.</p>
        )}
      </div>
    </Drawer>
  );
};

export default DetailsDrawer;