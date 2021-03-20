import React from 'react'
import {IProfile} from "../Models/IProfile";
import ProfileCard from "./ProfileCard";
import ProfileDetail from "./ProfileDetail";

interface IProps{
userProfile : IProfile
}
interface IState{

}

class GitHubProfile extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <hr/>
                <section className="mt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                {
                                    Object.keys(this.props.userProfile).length > 0 &&
                                    <ProfileCard userProfile = {this.props.userProfile}/>
                                }
                            </div>
                            <div className="col-md-8">
                                {
                                    Object.keys(this.props.userProfile).length > 0 &&
                                    <ProfileDetail userProfile = {this.props.userProfile}/>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default GitHubProfile;