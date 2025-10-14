import React from 'react'
import './Main.css'
import CardAuthor from '../CardAuthor/CardAuthor'
import workImg from '../../assets/workProject.webp'
import { useNavigate } from 'react-router-dom';
import IMGJ from '../../assets/jeank.jpeg'
import PuercoA from '../../assets/puercoArania.jpg'


const Main = () => {
    const navigate = useNavigate();
    const handleClick = () => { navigate(`/Characters`); };

    const autores = [
        {
            name: 'Jean Carlos Jimenez',
            linkedin: 'https://www.linkedin.com/in/jean-carlos-jimenez-ortega/',
            img: IMGJ,            
        },
        {
            name: 'Jaider Bautista',
            linkedin: 'https://www.linkedin.com/in/jaiderbautista/',
            img: PuercoA,            
        }
    ];

    return (
        <>
            <section className="py-5 bg-warning-subtle text-dark">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="fw-bold text-primary mb-3">
                                Bienvenido al mundo de Los Simpson
                            </h2>
                            <p className="lead">
                                Explora los personajes mas queridos, los lugares emblematicos de Springfield
                                y revive los episodios mas iconicos de esta legendaria serie animada.
                            </p>
                            <button className="btn btn-primary btn-modern mt-3 shadow-sm"
                                onClick={handleClick}
                            >
                                Explorar personajes
                            </button>
                        </div>

                        <div className="col-md-6 text-center my-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
                                alt="Familia Simpson"
                                className="img-fluid rounded-4 deep-shadow"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 bg- text-dark " id="about">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-5 text-center p-3 my-2 order-2 order-md-1">
                            <img
                                src={workImg}
                                alt="Familia Simpson"
                                className="img-fluid rounded-4 deep-shadow"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>

                        <div className="col-md-7" >
                            <h3 className="fw-bold mb-4 text-primary border-bottom pb-2">
                                Sobre el proyecto
                            </h3>
                            <p className="lead">
                                <strong>AppSimpsons</strong> es una aplicacion desarrollada como
                                demostración práctica del consumo de una
                                <span className="highlight">API REST</span>, la generación
                                de <span className="highlight">vistas dinamicas</span> y la
                                <span className="highlight">navegación estructurada</span> mediante
                                <span className="highlight">React</span>, aprovechando la flexibilidad de
                                <span className="highlight">componentes reutilizables</span> y la
                                potencia de <span className="highlight">Bootstrap</span> para el
                                diseño <span className="highlight">responsivo</span>.
                            </p>
                            <p className="lead">
                                Este proyecto busca mostrar como integrar <span className="highlight">datos reales</span> con una
                                interfaz moderna y amigable, centrada en la familia mas iconica
                                de la television: <span className="highlight"> <em>Los Simpson</em> </span>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-5 bg-warning-subtle text-dark">
                <div className="container text-center">
                    <h3 className="fw-bold text-primary mb-4">¿Que puedes hacer en AppSimpsons?</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-people display-4 text-warning"></i>
                                    <h5 className="mt-3">Explorar Personajes</h5>
                                    <p>Descubre informacion sobre tus personajes favoritos con datos obtenidos directamente desde la API.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-geo-alt display-4 text-warning"></i>
                                    <h5 className="mt-3">Conocer Lugares</h5>
                                    <p>Visita virtualmente los sitios mas emblematicos de Springfield y su historia dentro de la serie.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-tv display-4 text-warning"></i>
                                    <h5 className="mt-3">Revivir Episodios</h5>
                                    <p>Consulta la lista de episodios, detalles de emision y curiosidades de cada temporada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container py-5">
                <h3 className="text-center mb-4 text-primary fw-bold">Autores del Proyecto</h3>
                <div className="d-flex justify-content-center flex-row flex-wrap" style={{ gap: '10px' }}>
                    <CardAuthor autor={autores[0]} />
                    <CardAuthor autor={autores[1]} />
                </div>
            </section>
        </>
    )
}

export default Main