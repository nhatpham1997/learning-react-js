import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <span className="copyright">Copyright © Your Website 2019</span>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="/">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="/">
                                <i className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="/">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                            <a href="/">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                            <a href="/">Terms of Use</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;