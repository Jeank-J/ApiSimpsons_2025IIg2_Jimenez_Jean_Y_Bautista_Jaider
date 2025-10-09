import React from 'react'
import './Main.css'
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

                        {/* Columna de imagen */}
                        <div className="col-md-5 text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
                                alt="Familia Simpson"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main