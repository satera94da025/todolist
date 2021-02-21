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

const App = React.memo(() => {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    return (
        <div className="App">
            <AppBar position="static">
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
                <TodoListsList/>
            </Container>
        </div>
    )
})

export default App;
