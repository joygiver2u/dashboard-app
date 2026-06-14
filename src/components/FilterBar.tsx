import { TextField } from "@mui/material";
import { User } from "../types/User";

interface Props {
  users: User[];
  onFilter: (filtered: User[]) => void;
}

const FilterBar = ({ users, onFilter }: Props) => {

  // Runs whenever the user types.
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.toLowerCase();

    // Filter users whose names contain the typed text.
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(value)
    );

    onFilter(filtered);
  };

  return (
    <TextField
      label="Search User"
      variant="outlined"
      fullWidth
      onChange={handleSearch}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default FilterBar;