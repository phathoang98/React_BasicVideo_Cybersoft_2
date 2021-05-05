import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardMedia, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons/Favorite';

class DemoGrid extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>

                    <Grid item lg={3}>
                        <CardMedia image="https://media.travelmag.vn/files/maiphuong/2021/03/09/nu-ca-sy-lisa-blackpink-1-1814.jpg"
                            style={{ height: 400 }}>

                            {/* <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                    label="Custom icon"
                                />
                            </FormGroup> */}


                        </CardMedia>
                    </Grid>

                    <Grid item lg={3}>
                        <CardMedia image="https://media.travelmag.vn/files/maiphuong/2021/03/09/nu-ca-sy-lisa-blackpink-1-1814.jpg"
                            style={{ height: 400 }}>

                        </CardMedia>
                    </Grid>

                    <Grid item lg={3}>
                        <CardMedia image="https://media.travelmag.vn/files/maiphuong/2021/03/09/nu-ca-sy-lisa-blackpink-1-1814.jpg"
                            style={{ height: 400 }}>

                        </CardMedia>
                    </Grid>

                    <Grid item lg={3}>
                        <CardMedia image="https://media.travelmag.vn/files/maiphuong/2021/03/09/nu-ca-sy-lisa-blackpink-1-1814.jpg"
                            style={{ height: 400 }}>
                        </CardMedia>
                    </Grid>

                </Grid>
            </div >
        );
    }
}

export default DemoGrid;