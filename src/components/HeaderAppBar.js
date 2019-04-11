import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NavMenu from './NavMenu';
import Badge from '@material-ui/core/Badge';
import {Link} from "react-router-dom";

import '../CSS/navBar.css';
import store from './Store';

const styles = theme => ({
    appBar: {
        top: 0,
        bottom: 'auto',
    },
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    hiddenHeader: {
        display: 'hidden'
    }
});

function HeaderAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar>
                    <NavMenu/>
                    <div className={classes.grow}>
                        <div className='usernameContainer'>
                            <h3 className='navBarUsername'>{store.getState().user.username !== undefined ? 'Welcome to E-ReactStore ' + store.getState().user.username + '!' : 'E-ReactStore'}</h3>
                        </div>
                    </div>
                    <Link to='/cart' className='item cartLink'>
                        <Badge className={classes.margin} badgeContent={store.getState().cart.length} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

HeaderAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderAppBar);
