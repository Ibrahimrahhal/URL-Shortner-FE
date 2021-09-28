import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar className="mat-nav">
                <Typography variant="h4" className="mat-nav__logo">
                    BlaBla

                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className="mat-nav__navlinks">
                        <Link to="/" className="mat-nav__link">
                            Home
                        </Link>
                        <Link to="/about" className="mat-nav__link">
                            About
                        </Link>
                        <Link to="/contact" className="mat-nav__link">
                            Contact
                        </Link>
                        <Link to="/faq" className="mat-nav__link">
                            FAQ
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;