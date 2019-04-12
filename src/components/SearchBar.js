import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import * as _ from 'lodash';
import MediaCard from "./MediaCard";

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
    tabContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    contentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

class SimpleTabs extends React.Component {
    handleChange = (event, value) => {
        this.props.changeTab(value);
    };

    mapFilterArray(array) {
        return array.map((item, index) => {
            return (
                <div className='card'
                     key={index}
                >
                    <MediaCard
                        item={item}
                        detail={true}
                    />
                </div>
            )
        })
    }

    sortChange(choice) {
        if(choice === 'all') {
            return this.props.itemArray;
        }
        else {
            return _.filter(this.props.itemArray, {'category': choice})
        }
    }

    render() {
        const { classes } = this.props;
        let value = {value: this.props.stateTab};

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs className={classes.tabContainer} value={value.value} onChange={this.handleChange}>
                        <Tab label="All" />
                        <Tab label="Phones" />
                        <Tab label="TVs" />
                        <Tab label="Appliances" />
                        <Tab label="Refrigerators" />
                        <Tab label="Watches" />
                        <Tab label="Action-Cameras" />
                    </Tabs>
                </AppBar>
                {value.value === 0 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('all'))}
                    </div>
                </TabContainer>}
                {value.value === 1 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('phone'))}
                    </div>
                </TabContainer>}
                {value.value === 2 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('tv'))}
                    </div>
                </TabContainer>}
                {value.value === 3 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('small-appliance'))}
                    </div>
                </TabContainer>}
                {value.value === 4 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('refrigerator'))}
                    </div>
                </TabContainer>}
                {value.value === 5 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('watch'))}
                    </div>
                </TabContainer>}
                {value.value === 6 &&
                <TabContainer>
                    <div className={classes.contentContainer}>
                        {this.mapFilterArray(this.sortChange('action-camera'))}
                    </div>
                </TabContainer>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
