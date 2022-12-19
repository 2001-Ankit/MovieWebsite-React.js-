import "../style/style.css"

import * as bootstrap from "bootstrap"
import { Link, Outlet } from "react-router-dom"


export const Layout = () =>
    <div className="container bg-white pt=3">
        <header className="row">
            <div className="col-auto">
                <Link to="/" className="link-success text-decoration-none">
                    <h1> <i class="fa-solid fa-film"></i> Sakra Movies</h1>
                </Link>
            </div>
            <div className="col-4 ms-auto">
                <div className="input-group mt-2">
                    <input type="search" className="form-control" placeholder="Search  movie and more ..."></input>
                    <button className="btn btn-success"><i className="fa-solid fa-search"></i></button>
                </div>
            </div>
        </header>
        <Outlet>

        </Outlet>
        <footer className="row text-bg-dark py-3">
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            <i className="fa-solid fa-film"></i>Sakra Movies
                        </h2>
                    </div>
                    <div className="col-12">
                        <strong>Email:</strong>
                        <a href="mailto:sakra@movieinfo.com" className="link-light text-decoration-none">sakra@moviesinfo.com</a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Find us on</h3>
                    </div>
                    <div className="col-12">
                        <a href="https://facebook.com" target="_blank" className="link-light">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://snapchat.com" target="_blank" className="link-light ms-2">
                            <i className="fa-brands fa-snapchat fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Subscribe to newsletter</h3>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className=" btn btn-outline-light"><i className="fa-solid fa-send"></i>Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-12 my-3 text-center">
                &copy; Movie Info, 2022 All rights reserved
            </div>
        </footer>
    </div>

