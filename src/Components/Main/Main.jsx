import React from 'react'
import './Main.css'
import CardAuthor from '../CardAuthor/CardAuthor'

const Main = () => {
    return (
        <>
            <section className="py-5 bg-warning-subtle text-dark">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Columna de texto */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="fw-bold text-primary mb-3">
                                Bienvenido al mundo de Los Simpson
                            </h2>
                            <p className="lead">
                                Explora los personajes más queridos, los lugares emblemáticos de Springfield
                                y revive los episodios más icónicos de esta legendaria serie animada.
                            </p>
                            <button className="btn btn-primary mt-3 shadow-sm">
                                Explorar personajes
                            </button>
                        </div>

                        {/* Columna de imagen */}
                        <div className="col-md-6 text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
                                alt="Familia Simpson"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 bg-light text-dark" id="about">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Columna de imagen */}
                        <div className="col-md-5 text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
                                alt="Familia Simpson"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>

                        {/* Columna de texto */}
                        <div className="col-md-7">
                            <h3 className="fw-bold mb-4 text-primary border-bottom pb-2">
                                Sobre el proyecto
                            </h3>
                            <p className="lead">
                                <strong>AppSimpsons</strong> es una aplicación desarrollada como
                                demostración práctica del consumo de una API REST, la generación
                                de vistas dinámicas y la navegación estructurada mediante React,
                                aprovechando la flexibilidad de componentes reutilizables y la
                                potencia de Bootstrap para el diseño responsivo.
                            </p>
                            <p>
                                Este proyecto busca mostrar cómo integrar datos reales con una
                                interfaz moderna y amigable, centrada en la familia más icónica
                                de la televisión: <em>Los Simpson</em>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-5 bg-warning-subtle text-dark">
                <div className="container text-center">
                    <h3 className="fw-bold text-primary mb-4">¿Qué puedes hacer en AppSimpsons?</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-people display-4 text-warning"></i>
                                    <h5 className="mt-3">Explorar Personajes</h5>
                                    <p>Descubre información sobre tus personajes favoritos con datos obtenidos directamente desde la API.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-geo-alt display-4 text-warning"></i>
                                    <h5 className="mt-3">Conocer Lugares</h5>
                                    <p>Visita virtualmente los sitios más emblemáticos de Springfield y su historia dentro de la serie.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body">
                                    <i className="bi bi-tv display-4 text-warning"></i>
                                    <h5 className="mt-3">Revivir Episodios</h5>
                                    <p>Consulta la lista de episodios, detalles de emisión y curiosidades de cada temporada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container py-5">
                <h3 className="text-center mb-4 text-primary fw-bold">Autores del Proyecto</h3>
                <div className="row justify-content-center">
                    <CardAuthor />
                    <CardAuthor />
                </div>
            </section>
        </>
    )
}

export default Main