import React from 'react'
import {IProfile} from "../Models/IProfile";

interface IProps{
userProfile : IProfile
}
interface IState{

}

class ProfileCard extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <div className="card">
                        <img src={this.props.userProfile.avatar_url} className= "img-thumbnail" alt=""/>
                    <div className="card-body">
                        <h2>{this.props.userProfile.name}</h2>
                        <small>{this.props.userProfile.bio}</small>
                        </div>
                    </div>
            </React.Fragment>
        );
    }

}
export default ProfileCard;