import React from 'react';
import './App.css';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container, LinearProgress} from "@material-ui/core";
import TodoListsList from "../features/TodoListsLists/TodoListsList";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {RequestStatusType} from "./app-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import { Route, Switch, Redirect } from 'react-router-dom';
import {Login} from "../features/Login/Login";

const App = React.memo(() => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    return (
        <div className="App">
            <AppBar position="static">
                <ErrorSnackbar/>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {status === 'loading' && <LinearProgress/>}
            <Container fixed>
                <Switch>
                    <Route exat path={'/'} render={()=> <TodoListsList/>}/>
                    <Route  path={'/login'} render={()=> <Login/>}/>
                    <Route path={ '*' } render={ () => <h1>404: PAGE NOT FOUND</h1> }/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </Container>
        </div>
    )
})

export default App;
