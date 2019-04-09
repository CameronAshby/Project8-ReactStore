import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NavMenu from './NavMenu';
import Badge from '@material-ui/core/Badge';
import {Link} from "react-router-dom";

import '../CSS/navBar.css';
import store from './Store';

const styles = theme => ({
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

function SearchAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
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

SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
