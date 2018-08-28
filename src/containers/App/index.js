import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Card from '../../components/card';
import getUsers from './actions';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            noDataError: false,
            userMetaData: []
        }
    };

    componentDidMount() {
    };

    componentWillReceiveProps(nextProps) {
        nextProps.error === null ?
        this.showCard(nextProps.userData) :
        this.setError();
    };
    
    onSubmit = (event) => {
        event.preventDefault();
        let githubUserName = document.getElementById("githubUserName").value;
        this.setState({userName: githubUserName});
        this.props.getUser(githubUserName);
    };

    showCard = (data) => {
        this.setState({ userMetaData: data });
    };

    setError = () => {
        this.setState({ noDataError: true });
    };

    render() {
        return (          
            <div>
                <h1>
                    Consume Github Api
                </h1>
                <form onSubmit={(event)=>this.onSubmit(event)}>
                    Enter the Github UserName: <br/>
                    <TextField
                        id="githubUserName"
                        label="UserName"
                    />
                </form>
                {
                    Object.keys(this.state.userMetaData).length === 0 && this.state.noDataError ? <div>There is no Github User</div> : null
                }
                {
                    Object.keys(this.state.userMetaData).length !== 0 ? <Card user={this.state.userMetaData.data}/> : null
                }
            </div>
        );
    }
}

App.propTypes = {
    getUser: PropTypes.func.isRequired,
    userData: PropTypes.array.isRequired,
    error: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        error: state.getUserName.getUserError,
        userData: state.getUserName.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (name) => {
            dispatch(getUsers(name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
