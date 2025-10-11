import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';


import './Header.css'
import tituloImg from '../../assets/titulo.svg'

const drawerWidth = 240;
const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Characters', path: '/Characters' },
    { label: 'Episodes', path: '/Episodes' },
    { label: 'Locations', path: '/Locations' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }} className="simpsons-text">
                The Simpsons
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: 'center',
                                transition: 'all 0.3s ease-in-out',
                                borderRadius: '8px',
                                margin: '4px 8px',
                                '&:hover': {
                                    backgroundColor: '#FFD700',
                                    color: '#0f172a',
                                    transform: 'translateX(8px)',
                                    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
                                }
                            }}
                            className="simpsons-text"
                            component={Link} to={item.path}
                        >
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontFamily: 'SimpsonsFont, Arial, sans-serif',
                                        fontWeight: 'bold'
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: '#6B7280',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: { xs: 'center', sm: 'flex-start' },
                            alignItems: 'center',
                        }}
                    >
                        <img src={tituloImg} alt="Logo de AppSimpsons" className="logo" />

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                component={Link} to={item.path}
                                key={item.label}
                                sx={{
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                    marginX: 1,
                                    borderRadius: '20px',
                                    padding: '8px 16px',
                                    transition: 'all 0.3s ease-in-out',
                                    position: 'relative',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#FFD700',
                                        color: '#0f172a',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                                    },
                                    '&:active': {
                                        transform: 'translateY(0px)',
                                        transition: 'transform 0.1s ease'
                                    }
                                }}
                                className="simpsons-text"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: '#6B7280',
                            color: '#FFFFFF'
                        },
                    }}
                >
                    {drawer}

                </Drawer>

            </nav>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
