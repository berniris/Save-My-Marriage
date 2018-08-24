import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Resources from './components/Resources';
import DateIdeas from './components/date_ideas/DateIdeas';
import BetterDoctor from './components/BetterDoctor';
import authService from './services/authService';
import dateService from './services/dateService';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            dateideas: [],
            dateID: null,
            loggedInError: false
        }
        this.createDateIdea = this.createDateIdea.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }


    getDateIdeas() {
        dateService.All()
            .then(respBody =>
                this.setState({
                    dateideas: respBody
                }))
            .catch(err => err)
            .then(console.log(this.state.dateideas))
    }

    createDateIdea(dateidea) {
        dateService.Create(dateidea)
            .then(respBody => {
                this.setState({
                        dateID: respBody.id
                    })
                    // this.getUserDateIdea();
                    // this.props.history.push('/dateideas');
            })

    }

    deleteDateIdea(id) {
        dateService.Delete(id)
    }

    getCalls() {
        this.intervalId = setInterval(() => this.getDateIdeas(), 1000);
        this.getDateIdeas();
    }

    handleLogin(input) {
        authService.login(input)
        console.log("hello")
        this.props.history.push('/');
        // this.getCalls();
        // window.location.reload();
    }


    handleRegister(input) {
        authService.register(input)
        this.props.history.push('/');
        // window.location.reload()
    }

    handleLogout() {
        authService.destroyToken();
        this.setState({
            user: false
        })
        this.props.history.push('/')
    }

    isLoggedIn() {
        authService.checkToken().then(user => {
                this.setState({ user })
            })
            .catch(err => this.setState({ loggedInError: true }))
    }

    componentDidMount() {
        // this.getCalls();
        this.isLoggedIn();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    render() {

            return ( <
                    main >
                    <
                    div >
                    <
                    Route exact path = "/"
                    render = {
                        props =>
                        <
                        div >
                        <
                        Nav
                        user = { this.state.user }
                        loggedIn = { this.isLoggedIn }
                        logout = { this.handleLogout }
                        /> <
                        Logo / >
                        <
                        Home / >
                        <
                        /div>
                    }
                    /> <
                    Route path = "/:id"
                    render = {
                        props =>
                        <
                        div >
                        <
                        Nav
                        user = { this.state.user }
                        loggedIn = { this.isLoggedIn }
                        logout = { this.handleLogout }
                        /> <
                        Logo / >
                        <
                        /div>
                    }
                    /> <
                    Route path = "/dateideas"
                    render = {
                        () => ( <
                            DateIdeas dateideas = { this.state.dateideas }
                            dateID = { this.state.dateID }
                            onSubmit = { this.createDateIdea }
                            onDelete = { this.deleteDateIdea }
                            />
                        )
                    }
                    /> <
                    Route path = "/login"
                    render = {
                        ({ history }) => ( <
                            Login handleLogin = { this.handleLogin }
                            />)} / >
                            <
                            Route path = "/register"
                            render = {
                                ({ history }) => ( <
                                    Register handleRegister = { this.handleRegister }
                                    />)} / >
                                    <
                                    Route exact path = "/counseling"
                                    render = {
                                        () => ( < BetterDoctor / > )
                                    }
                                    /> <
                                    Route exact path = "/tips"
                                    render = {
                                        () => ( < Resources / > )
                                    }
                                    /> </div > < /main>
                                );
                            }

                        }

                        export default App;