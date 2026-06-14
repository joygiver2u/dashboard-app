import { TextField } from "@mui/material";
import type { User } from "../types/User";

interface FilterBarProps {
  users: User[];
  onFilter: (filtered: User[]) => void;
}

const FilterBar = ({
  users,
  onFilter,
}: FilterBarProps) => {
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      event.target.value.toLowerCase();

    const filtered = users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(value)
    );

    onFilter(filtered);
  };

  return (
    <TextField
      label="Search User"
      variant="outlined"
      fullWidth
      sx={{ marginBottom: 2 }}
      onChange={handleSearch}
    />
  );
};

export default FilterBar;