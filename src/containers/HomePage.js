import React, {Component} from 'react'
import PageHeader from '../components/PageHeader'
import PageFooter from "../components/PageFooter";

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <PageHeader/>
                <div className="container-fluid py-5 my-5">
                    <label>Shubham Sharma</label>
                </div>
                <PageFooter/>
            </div>
        );
    }
}
