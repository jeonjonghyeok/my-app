import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    render() {
        return (
            <nav Classname='nav'>
                <div className="navDiv">
                    <div className="leftNavDiv">
                        <ul className="ulElement">
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        거래소
                            </div>
                                </li>
                            </Link>
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        입출금
                            </div>
                                </li>
                            </Link>
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        투자내역
                            </div>
                                </li>
                            </Link>
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        코인동향
                            </div>
                                </li>
                            </Link>
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        스테이킹
                            </div>
                                </li>
                            </Link>
                            <Link to="/" className="linkElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        고객센터
                            </div>
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className="rightNavDiv">
                        <ul className="ulElement">
                                <li className="liElement">
                                    <div className="divElement">
                                        로그인
                            </div>
                                </li>
                                <li className="liElement">
                                    <div className="divElement">
                                        회원가입
                            </div>
                                </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }
}

export default NavBar;