import React from "react";
import {ReactComponent} from "*.svg";
import {IProfile} from "../Models/IProfile";
import {IRepo} from "../Models/IRepo";
import axios from "axios";
import GitHubProfile from "./GitHubProfile";
import GitHubRepo from "./GitHubRepo";

interface IProps{

}
interface IState{
username : string,
    profile : IProfile,
    repos : IRepo[],
}

class GitHubSearchPanel extends React.Component<IProps, IState>{
    constructor(props : IProps) {
        super(props);
        this.state = {
            username : '',
            profile : { } as IProfile,
            repos : [] as IRepo[],
        }
    }
/*to update the username so that it can be user for forming the url for calling the github api*/
    updateUsername = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            username : event.target.value
        })
    }
/*Submitting the form which loads the profile and repos*/
    submitUsername = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.updateProfile();
        this.updateRepo();
    }
/*function calls the github api by forming a url based on entered username to load Github profile*/
    updateProfile = () => {
        let dataUrl : string = `https://api.github.com/users/${this.state.username}?client_id=c0fda3cbc49b8b6fea98&client_secret=92a6a65ec41e8b9afff6ea3eb114ca2a2a9bd6de`
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                profile : response.data
            })
        }).catch((error) => {
            console.error(error)
        })
    }
    /*function calls the github api by forming a url based on entered username to load Github repo*/
    updateRepo = () => {
        let dataUrl : string = `https://api.github.com/users/${this.state.username}/repos?client_id=c0fda3cbc49b8b6fea98&client_secret=92a6a65ec41e8b9afff6ea3eb114ca2a2a9bd6de`
        axios.get(dataUrl).then((response) => {
            this.setState({
                ...this.state,
                repos : response.data
            })
        }).catch((error) => {
            console.error(error)
        })
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h1>GitHub Profile Search</h1>
                            <p className="lead">Please enter an existing Github username to Load all the details</p>
                        </div>
                        <form onSubmit={this.submitUsername}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-4">
                                    <input type="text" placeholder="Enter GitHub Username" className="form-control" required onChange={this.updateUsername}/>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-success btn-sm"><i className="fas fa-search"></i> Search</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <GitHubProfile userProfile = {this.state.profile}/>
                {
                    Object.keys(this.state.repos).length > 0 &&
                    <GitHubRepo repo = {this.state.repos}/>
                }
            </React.Fragment>
        );
    }

}
export default GitHubSearchPanel;