import React from 'react'
import './PageHeader.css'

export default class PageHeader extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand landing-text" href='' onClick={this.props.goToHome}>Shubham Sharma</a>
                </div>
                <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <div className="Search">
                        <a className="mx-2 content-anchor">About</a>
                        <a className="mx-2 content-anchor">Projects</a>
                        <a className="mx-2 content-anchor">Resume/CV</a>
                    </div>
                </div>
            </nav>
        );
    }
}