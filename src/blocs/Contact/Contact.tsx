import type {FunctionComponent} from "react";
import {useForm} from "react-hook-form";
import {type ContactFormData, contactValidator} from "./contact.validator.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {contactService} from "./service.ts";
import toast, {Toaster} from "react-hot-toast";

const Contact: FunctionComponent = () => {

    const MESSAGE = {
        SUCCESS: "Message envoyé avec succès !",
        ERROR: "Une erreur est survenue lors de l'envoi.",
    } as const;

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactValidator),
        mode: "onBlur"
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await contactService.sendEmail(data);
            toast.success(MESSAGE.SUCCESS)
            reset();
        }
        catch (error: any) {
            const errorMsg = error.message || MESSAGE.ERROR;
            toast.error(errorMsg);
        }
    };

    return (
        <section id="contact" className="contact section">
            <Toaster position="top-right" reverseOrder={false}/>
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>
                    Vous avez un projet innovant, une opportunité de collaboration
                    ou simplement une question technique ? N'hésitez pas à me contacter.
                    Je suis toujours ouvert aux échanges constructifs
                    et aux nouveaux défis technologiques.
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-4 g-lg-5">
                    <div className="col-lg-5">
                        <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                            <h3>Contact Info</h3>
                            <p>
                                Basé à Rennes, je suis disponible pour des échanges en présentiel
                                ou à distance. Vous trouverez ci-dessous mes coordonnées professionnelles
                                ainsi qu'un formulaire pour m'envoyer un message directement.
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

                            <form onSubmit={handleSubmit(onSubmit)}
                                  className="php-email-form"
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                            >
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input {...register("name")}
                                               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                               placeholder="Nom complet"
                                        />
                                        {
                                            errors.name &&
                                            <div className="invalid-feedback d-block">{errors.name.message}</div>
                                        }
                                    </div>

                                    <div className="col-md-6 ">
                                        <input {...register("email")}
                                               className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                               placeholder="Email"
                                        />
                                        {
                                            errors.email &&
                                            <div className="invalid-feedback d-block">{errors.email.message}</div>
                                        }
                                    </div>

                                    <div className="col-12">
                                        <input {...register("subject")}
                                               className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                               placeholder="Sujet"
                                        />
                                        {
                                            errors.subject &&
                                            <div className="invalid-feedback d-block">{errors.subject.message}</div>
                                        }
                                    </div>

                                    <div className="col-12">
                                        <textarea {...register("message")}
                                                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                  rows={6}
                                                  placeholder="Message"
                                        />
                                        {
                                            errors.message &&
                                            <div className="invalid-feedback d-block">{errors.message.message}</div>
                                        }
                                    </div>

                                    <div className="col-12 text-center">
                                        <button type="submit" disabled={isSubmitting} className="btn">
                                            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                                        </button>
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