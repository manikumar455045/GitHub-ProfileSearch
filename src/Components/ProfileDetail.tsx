import React from 'react'
import {IProfile} from "../Models/IProfile";

interface IProps{
userProfile : IProfile
}
interface IState{

}

class ProfileDetail extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <div className="badge badge-success mx-3">{this.props.userProfile.followers} Followers</div>
                        <div className="badge badge-primary mx-3">{this.props.userProfile.public_repos} Repos</div>
                        <div className="badge badge-danger mx-3">{this.props.userProfile.public_gists} Gists</div>
                    </div>
                    <div className="card-body">
                        <div className="list-group">
                            <div className="list-group-item font-weight-bold">Name : {this.props.userProfile.name}</div>
                            <div className="list-group-item">Location : {this.props.userProfile.location}</div>
                            <div className="list-group-item">Git Url : <a href={this.props.userProfile.html_url} target="_blank" className="text-decoration-none">{this.props.userProfile.html_url}</a></div>
                            <div className="list-group-item">Company : {this.props.userProfile.company}</div>
                            <div className="list-group-item">Joined Github on : {this.props.userProfile.created_at}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ProfileDetail;