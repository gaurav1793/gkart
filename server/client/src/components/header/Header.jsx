import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, List, ListItem, Drawer, IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import final from '../header/final.png';

//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
    background: #990012;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height:0;
    text-decoration:none;
    color: inherit;
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginleft: 4
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const Header = () => {

    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color='inherit'
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/'>
                    <img src={final} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: "flex" }}>
                        <SubHeading>Explore &nbsp;
                            <Box component='span' style={{ color: '#fff' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="plus" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header