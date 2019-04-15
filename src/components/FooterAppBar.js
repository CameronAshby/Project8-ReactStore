import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import '../CSS/footerAppBar.css';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
});

function BottomAppBar(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className='toolbar'>
                    <div className='mediaIcons'>
                        <a href='https://facebook.com'><i className="fab fa-facebook-square"></i></a>
                        <a href='https://twitter.com'><i className="fab fa-twitter-square"></i></a>
                        <a href='https://instagram.com'><i className="fab fa-instagram"></i></a>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

BottomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
