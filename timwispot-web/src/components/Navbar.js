import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <Grid item xs="2">
    <Link to={to}>
      <Typography variant="h6">{children}</Typography>
    </Link>
  </Grid>
);

const Navbar = () => {
  return (
    <Grid container spacing={4}>
      <NavItem to="/">Login</NavItem>
      <NavItem to="/search">Search albums</NavItem>
      <NavItem to="/saved-albums">Albums Library</NavItem>
    </Grid>
  );
};
export default Navbar;
