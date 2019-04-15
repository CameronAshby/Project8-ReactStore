import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
    state = {
        open: false,
        vertical: 'top',
        horizontal: 'center',
    };

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>
                <Button variant="contained" size="small" color="primary" onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                    {this.props.type === 'ADD' ? 'Add To Cart' : 'Remove'}
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.type === 'ADD' ? 'Added To Cart' : 'Removed From Cart'}</span>}
                />
            </div>
        );
    }
}

export default PositionedSnackbar;
