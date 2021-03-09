import React from 'react'
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story" />
                <div className="row">
                    <div className="col-10 col-sm-8
                    mx-auto text-center">
                        <p className="lead 
                        text-muted mb-5">
                            Coffee is about pleasure. It’s that moment when your hand is warmed by the mug, you raise it to your nose, inhale deeply and then take a sip.
                        </p>
                        <Link to="/about/">
                            <button className="btn
                             text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
