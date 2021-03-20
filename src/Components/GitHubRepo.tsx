import React from 'react'
import {IRepo} from "../Models/IRepo";

interface IProps{
repo : IRepo[]
}
interface IState{

}

class GitHubRepo extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        let {repo} = this.props;
        return (
            <React.Fragment>
                <section className="mt-2">
                    <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h1>Your Repositories</h1>
                    </div>
                    <div className="card-body">
                       <div className="list-group">
                           {
                               repo.map((repo) => {
                                   return(
                                       <div className="list-group-item d-flex justify-content-between" key={repo.id}>
                                           <span>
                                           <a href={repo.html_url} className="text-decoration-none" target="_blank">{repo.name}</a>
                                           </span>
                                           <span className="badge badge-success mx-3">Stars : {repo.stargazers_count}</span>
                                           <span className="badge badge-primary mx-3">Language : {repo.language}</span>
                                       </div>
                                   )
                               })
                           }
                       </div>
                    </div>
                </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default GitHubRepo;