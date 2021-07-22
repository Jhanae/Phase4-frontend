import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {

    const useStyles = makeStyles((theme) => ({
        appbar: {
            background: 'none',
            textAlign: 'left',
        },
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: '#fff',
            fontFamily: 'Nunito',
            // textAlign: 'center',
        },
        icon: {
            color:'#fff',
            fontSize: '2rem'
        },
        appbarWrapper:{
            width: '80%',
            margin: 'auto',
        },
        appbarTitle: {
            flexGrow: '2',
        },
        colorText: {
            color:'#6827DA',
        },
        title: {
            fontSize: '3rem'
        },
        down: {
            color:'#6827DA',
            fontSize: '2rem',
        },
    }));
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper} >
                <h1 className={classes.appbarTitle}>Jay's<span className={classes.colorText}>List</span></h1>
                <IconButton >
                <SortIcon className={classes.icon} />
                </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
            <h1 className={classes.title}>Welcome to <br/> Jay's<span className={classes.colorText}>List</span></h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <IconButton >
                <ArrowDropDownIcon className={classes.down}/>
            </IconButton>
            </div>
        </div>
    );
}

export default Header;
