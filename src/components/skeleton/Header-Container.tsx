import UrlLink from '@components/common/Links/Url-Link';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';

/**
 * @function HeaderContainer Shared header content for all routes.
 * @author Patrik Duch
 * @returns Heading JSX content.
 */
const HeaderContainer: React.FC = () => {

    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <UrlLink url='/' label='React Rxjs CSR Template' />
                    </Typography>
                    <Button color="inherit"><UrlLink url='/test' label='Test page' /></Button>
            </Toolbar>
        </AppBar>
      </Box>
    </>
    );
}

export default HeaderContainer;