import { Link, Box } from "@material-ui/core";
const Navbar = () => {
  return (
    <Box>
      <Link href="/">Login</Link>
      <Link href="/search">Search albums</Link>
      <Link href="/saved-albums">Albums Library</Link>
    </Box>
  );
};
export default Navbar;
