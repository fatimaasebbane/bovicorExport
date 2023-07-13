
function contacter() {
    return (
        <div>
            <br />
            <br />
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center para" >
                        <p >N'hésiter pas de nous contacter pour plus d'information :</p>
                    </div>
                    <div className="col-xl-10">
                        <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-sm-6 d-none d-sm-block bg-image">
                                    </div>
                                    <div className="col-sm-6 p-4 formulaire">
                                        <div className="text-center">
                                            <div className="h3 fw-light " style={{ textShadow: "1.5px 1px #338A08" }}>Contactez Nous</div>
                                            <p className="mb-4 text-muted"></p>
                                        </div>

                                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" action="#">


                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                                <label for="name">Name</label>
                                                <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                                            </div>



                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                                <label for="emailAddress">Email</label>
                                                <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="Téléphone" type="number" placeholder="Téléphone" data-sb-validations="required" />
                                                <label for="Téléphone">Téléphone</label>
                                                <div className="invalid-feedback" data-sb-feedback="Téléphone:required">Téléphone is required.</div>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" id="message" type="text" placeholder="Message" rows={"3"} data-sb-validations="required" style={{ height: "40px" }}></textarea>
                                                <label for="message">Message</label>
                                                <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                                            </div>


                                            <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    <p>To activate this form, sign up at</p>
                                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                </div>
                                            </div>


                                            <div className="d-none" id="submitErrorMessage">
                                                <div className="text-center text-danger mb-3">Error sending message!</div>
                                            </div>

                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
                                            </div>
                                        </form>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embed-responsive embed-responsive-16by9 border">
                <iframe className="embed-responsive-item w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301543.5775200226!2d-5.318625646506791!3d41.50764756345457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd417e88e75ac24d%3A0xd79b7fd26d75d4e8!2sPol%C3%ADgono%20Industrial%20Sur%2C%20C.%20del%20Platino%2C%2082%2C%2028770%20Colmenar%20Viejo%2C%20Madrid%2C%20Espagne!5e0!3m2!1sfr!2sma!4v1689255367681!5m2!1sfr!2sma" width={"600"} height={"450"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
}
export default contacter;