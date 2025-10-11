import React from 'react';
import { Box, Typography, Container, Divider, Link } from '@mui/material';
import { GitHub, Email, School } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" className="footer-container">
            {/* Animated background layer */}
            <Box aria-hidden="true" className="footer-bg">
                {/* We duplicate donuts for a parallax-like effect */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className={`donut donut-${i + 1}`} />
                ))}
            </Box>
            <Container maxWidth="lg">
                <Box className="footer-content">
                    {/* Authors Section */}
                    <Box className="footer-section">
                        <Typography variant="h6" className="footer-title simpsons-text">
                            Authors
                        </Typography>
                        <Box className="authors-grid">
                            <Box className="author-card">
                                <Typography variant="body1" className="author-name simpsons-text">
                                    Jaider Bautista Rodriguez
                                </Typography>
                                <Box className="author-links">
                                    <Link href="mailto:jaid.bautista@udla.edu.co" className="author-link">
                                        <Email sx={{ fontSize: 16, mr: 0.5 }} />
                                        Contact
                                    </Link>
                                    <Link href="https://github.com/Jaiderbr" className="author-link">
                                        <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                                        GitHub
                                    </Link>
                                </Box>
                            </Box>
                            <Box className="author-card">
                                <Typography variant="body1" className="author-name simpsons-text">
                                    Jean Carlos Jimenez Ortega
                                </Typography>
                                <Box className="author-links">
                                    <Link href="#" className="author-link">
                                        <Email sx={{ fontSize: 16, mr: 0.5 }} />
                                        Contact
                                    </Link>
                                    <Link href="https://github.com/Jeank-J" className="author-link">
                                        <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                                        GitHub
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Divider className="footer-divider" />

                    {/* Project Info Section */}
                    <Box className="footer-section">
                        <Typography variant="h6" className="footer-title simpsons-text">
                            About This Project
                        </Typography>
                        <Typography variant="body2" className="project-description">
                            A React application that explores The Simpsons universe through an interactive API.
                            Built with React, Material-UI, and lots of D'oh! moments.
                        </Typography>
                        <Box className="project-links">
                            <Link href="#" className="project-link">
                                <School sx={{ fontSize: 16, mr: 0.5 }} />
                                Academic Project
                            </Link>
                            <Link href="#" className="project-link">
                                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                                Source Code
                            </Link>
                        </Box>
                    </Box>

                    <Divider className="footer-divider" />

                    {/* Copyright Section */}
                    <Box className="footer-bottom">
                        <Typography variant="body2" className="copyright simpsons-text">
                            &copy; {currentYear} ApiSimpsons Group 2
                        </Typography>
                        <Typography variant="caption" className="disclaimer">
                            The Simpsons™ is a trademark of 20th Century Fox. This is a non-commercial educational project.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
