import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicker}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    // const coordinates = {lat: 0, lng: 0};
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyBTBrMCrLd6JEqSlQGpUBfU3ocY0DniuOs'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat , lng: e.center.lng});
                    setBounds({e: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
               
                onChildClick={(child) => {setChildClicker(child)}}
            >
                {places?.map((place, i)=>(
                    <div
                        className={classes.markerContainer}
                        lat={Number(place?.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                            {
                                !isMobile ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="subtitle2" gutterBottom className={classes.typography}>
                                            {place.name}
                                        </Typography>
                                        <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'}
                                        alt={place.name}
                                        />
                                        <Rating size="small" value={Number(place.rating)} readOnly/>
                                    </Paper>
                                )
                            }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}
export default Map;
