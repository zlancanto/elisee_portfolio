import type {FunctionComponent} from "react";
import {useForm} from "react-hook-form";
import {type ContactFormData, contactValidator} from "./contact.validator.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {API} from "./index.ts";

const Contact: FunctionComponent = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactValidator),
        mode: "onBlur"
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await API.post("/contact", data);
            alert("Message envoyé !");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l’envoi");
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                    rem
                    aperiam
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 g-lg-5">
                    <div className="col-lg-5">
                        <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                            <h3>Contact Info</h3>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
                                ante
                                ipsum primis.
                            </p>

                            <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="content">
                                    <h4>Adresse</h4>
                                    <p>35700 Rennes</p>
                                    <p>France</p>
                                </div>
                            </div>

                            <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-box">
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <div className="content">
                                    <h4>Téléphone</h4>
                                    <p>+33 7 51 07 86 59</p>
                                </div>
                            </div>

                            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <i className="bi bi-envelope"></i>
                                </div>
                                <div className="content">
                                    <h4>Email</h4>
                                    <p>zlanca-nto-elisee.mihan@etudiant.univ-rennes.fr</p>
                                    <p>mihanzlancanto@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
                            <h3>Me contacter</h3>

                            <form /*onSubmit={}*/
                                className="php-email-form"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input {...register("name")}
                                               className="form-control"
                                               placeholder="Nom complet"
                                        />
                                        {errors.name && <p>{errors.name.message}</p>}
                                    </div>

                                    <div className="col-md-6 ">
                                        <input {...register("email")}
                                               className="form-control"
                                               placeholder="Email"
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>

                                    <div className="col-12">
                                        <input {...register("subject")}
                                               className="form-control"
                                               placeholder="Sujet"
                                        />
                                        {errors.subject && <p>{errors.subject.message}</p>}
                                    </div>

                                    <div className="col-12">
                                        <textarea {...register("message")}
                                                  className="form-control"
                                                  rows={6}
                                                  placeholder="Message"
                                        />
                                        {errors.message && <p>{errors.message.message}</p>}
                                    </div>

                                    <div className="col-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Votre message a été envoyé. Merci !</div>

                                        <button disabled={isSubmitting} className="btn">Envoyer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;