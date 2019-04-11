import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import Stars from '@material-ui/icons/Stars';
import Snackbar from './SnackBar';

import store from './Store';

import '../CSS/mediaCard.css';

const styles = {
    card: {
        width: '100%',
    },
};

let handleAdd = (item) => {
    store.dispatch({
        type: 'CART_ADD',
        item: item
    })
};

function MediaCard(props) {
    const { classes } = props;
    return (
        <div className='mediaCardContainer'>
            <Card className={classes.card}>
                <CardActionArea>
                    <div className='imageContainer'>
                        <img
                            className={classes.media}
                            src={props.item.img}
                            title="Product Image"
                            alt=''
                        />
                    </div>
                    <CardContent>
                        <Typography className='cardTitle' gutterBottom variant="h5" component="h2">
                            {props.item.title}
                        </Typography>
                        <span className='infoContainer'>
                            <h3>
                            ${props.item.price}
                        </h3>
                            |
                        <h3>
                            <span className='rating'><Stars/>{props.item.rating}</span>
                        </h3>
                        </span>
                        <Typography className='cardInfo' component="p">
                            {props.item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='buttonContainer'>
                    {props.detail ?
                        <Button variant="contained" size="small" color="primary">
                            <Link to={`/productDetail/${props.item.id}`} className='item cardButton'>
                                View Details
                            </Link>
                        </Button>
                    : null}
                    <span onClick={() => handleAdd(props.item)}><Snackbar type='ADD'/></span>
                </CardActions>
            </Card>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
