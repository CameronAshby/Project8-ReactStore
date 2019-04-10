import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Phones" />
                        <Tab label="TVs" />
                        <Tab label="Appliances" />
                        <Tab label="Refrigerators" />
                        <Tab label="Watches" />
                        <Tab label="Action-Cameras" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>Phones</TabContainer>}
                {value === 1 && <TabContainer>TVs</TabContainer>}
                {value === 2 && <TabContainer>Appliances</TabContainer>}
                {value === 3 && <TabContainer>Refrigerators</TabContainer>}
                {value === 4 && <TabContainer>Watches</TabContainer>}
                {value === 5 && <TabContainer>Action-Cameras</TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
