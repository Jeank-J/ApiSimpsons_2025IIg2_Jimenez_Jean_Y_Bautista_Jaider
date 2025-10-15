import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import './CharacterId.css';

function CharacterId() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
            .catch(err => console.error("Error cargando personaje:", err));
    }, [id]);

    if (!character) {
        return <p className="loading">Cargando informacionn del personaje...</p>;
    }

    return (
        <motion.div
            className="character-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                style={{
                    perspective: 1200,
                    transformStyle: 'preserve-3d',
                    position: 'relative'
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <motion.div
                    className="character-card"
                    initial={{
                        y: 60,
                        opacity: 0,
                        scale: 0.9,
                        rotateX: -15,
                        rotateY: 10
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 18,
                        delay: 0.15,
                        mass: 0.8
                    }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                        rotateX: -3,
                        rotateY: 3,
                        boxShadow: '0 25px 70px rgba(255, 193, 7, 0.4)',
                        transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                >
                    <motion.img
                        className="character-image"
                        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                        alt={character.name}
                        initial={{ scale: 0.7, opacity: 0, y: 30, rotate: -5 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, -8, 0],
                            rotate: 0
                        }}
                        transition={{
                            scale: { duration: 0.6, delay: 0.3, type: 'spring', stiffness: 120 },
                            opacity: { duration: 0.5, delay: 0.3 },
                            rotate: { duration: 0.5, delay: 0.3 },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                delay: 0.8
                            }
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -3, 3, -2, 0],
                            filter: 'brightness(1.1) drop-shadow(0 8px 16px rgba(255, 193, 7, 0.4))',
                            transition: { duration: 0.5, ease: 'easeOut' }
                        }}
                    />

                    <motion.h1
                        className="character-name"
                        initial={{ y: 30, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.45,
                            type: 'spring',
                            stiffness: 200
                        }}
                        whileHover={{
                            scale: 1.05,
                            textShadow: '0 4px 12px rgba(255, 193, 7, 0.5)',
                            transition: { duration: 0.2 }
                        }}
                    >
                        {character.name}
                    </motion.h1>

                    <motion.div
                        style={{
                            height: '5px',
                            width: '65%',
                            margin: '14px auto 20px',
                            borderRadius: '999px',
                            background: 'linear-gradient(90deg, #FFD54F 0%, #FF6F00 25%, #FFD700 50%, #FF6F00 75%, #FFD54F 100%)',
                            backgroundSize: '300% 100%',
                            boxShadow: '0 2px 8px rgba(255, 193, 7, 0.3)'
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                            scaleX: 1,
                            opacity: 1,
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                            scaleX: { duration: 0.7, delay: 0.5, type: 'spring', stiffness: 100 },
                            opacity: { duration: 0.7, delay: 0.5 },
                            backgroundPosition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }}
                    />

                    <motion.div
                        className="character-info"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <strong>Edad:</strong> {character.age}
                        </motion.p>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.75 }}
                        >
                            <strong>Estado:</strong> {character.status}
                        </motion.p>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <strong>Ocupacion:</strong> {character.occupation}
                        </motion.p>
                    </motion.div>

                    {character.description && (
                        <motion.p
                            className="character-description"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.85 }}
                        >
                            {character.description}
                        </motion.p>
                    )}

                    <motion.div
                        className="phrases-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.95 }}
                        >
                            Frases mas icónicas
                        </motion.h2>
                        <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 1.1
                                    }
                                }
                            }}
                        >
                            {character.phrases && character.phrases.length > 0 ? (
                                character.phrases.map((frase, index) => (
                                    <motion.li
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, x: -40, scale: 0.9, rotateY: -10 },
                                            show: {
                                                opacity: 1,
                                                x: 0,
                                                scale: 1,
                                                rotateY: 0,
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 250,
                                                    damping: 22
                                                }
                                            }
                                        }}
                                        whileHover={{
                                            x: 12,
                                            scale: 1.03,
                                            color: '#FFC107',
                                            backgroundColor: 'rgba(255, 193, 7, 0.08)',
                                            boxShadow: '0 4px 12px rgba(255, 193, 7, 0.2)',
                                            transition: { duration: 0.25, ease: 'easeOut' }
                                        }}
                                        style={{
                                            padding: '8px 12px',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        "{frase}"
                                    </motion.li>
                                ))
                            ) : (
                                <li>No hay frases disponibles</li>
                            )}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
} export default CharacterId;
