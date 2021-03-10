import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import styles from "./style";

/**
 *  - classes: là Props bổ trợ có sẵn của Material UI
 *  - classes giúp gọi đến class tạo ở "file style" và tự thêm tên cho class đó ,
 *      giúp KO TRÙNG tên các class với nhau 
 */

class Taskboard extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button variant="contained" color="primary">
                    Material UI Button
                </Button>

                <div className={classes.taskboard}>
                    <div className={classes.shape}> ReactJS </div>
                    <div className={classes.shape}> AngularJS </div>
                    <div className={classes.shape}> VueJS </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);