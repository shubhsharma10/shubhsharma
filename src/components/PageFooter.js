import React, {Component} from 'react'

export default class PageFooter extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark fixed-bottom justify-content-center">
                <a><i className="fa fa-github fa-2x mx-4 content-anchor"></i></a>
                <a><i className="fa fa-linkedin fa-2x mx-4 content-anchor"></i></a>
                <a><i className="fa fa-medium fa-2x mx-4 content-anchor"></i></a>
            </nav>
        );
    }
}