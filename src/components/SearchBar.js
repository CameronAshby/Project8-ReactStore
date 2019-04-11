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
    handleChange = (event, value) => {
        this.props.changeTab(value);
    };

    render() {
        const { classes } = this.props;
        let value = {value: this.props.stateTab};

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value.value} onChange={this.handleChange}>
                        <Tab label="Phones" />
                        <Tab label="TVs" />
                        <Tab label="Appliances" />
                        <Tab label="Refrigerators" />
                        <Tab label="Watches" />
                        <Tab label="Action-Cameras" />
                    </Tabs>
                </AppBar>
                {value.value === 0 && <TabContainer>Phones</TabContainer>}
                {value.value === 1 && <TabContainer>TVs</TabContainer>}
                {value.value === 2 && <TabContainer>Appliances</TabContainer>}
                {value.value === 3 && <TabContainer>Refrigerators</TabContainer>}
                {value.value === 4 && <TabContainer>Watches</TabContainer>}
                {value.value === 5 && <TabContainer>Action-Cameras</TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
