import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import '../CSS/navMenu.css';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <IconButton
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <Link to='/' className='item menuLink'>
                            Login
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to='/productList' className='item menuLink'>
                            View Products
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <Link to='/cart' className='item menuLink'>
                            View Cart
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;
