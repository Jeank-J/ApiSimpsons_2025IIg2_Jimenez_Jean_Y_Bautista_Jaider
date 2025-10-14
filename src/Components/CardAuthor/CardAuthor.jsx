import react, { useState } from "react"
import { Card } from '@mui/material';
import imgS from '../../assets/queSuenio.jpeg';

import './CardAuthor.css';

export default function CardAuthor({ autor }) {

    const [hovered, setHovered] = useState(false);
    const IMG = hovered ? imgS : autor.img;

    return (
        <Card
            className="author-card text-center p-4 shadow"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                borderRadius: "25px",
                background: "linear-gradient(145deg, #fff9c4, #fffde7, #fff8e1)",
                border: "1px solid rgba(253, 216, 53, 0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                    transform: "translateY(-6px)",
                    background: "linear-gradient(145deg, #f8f544ff, #fffde7, #fff8e1)",
                }
            }}
        >
            <div className="author-img-container mx-auto">
                <img src={IMG} alt={autor.name} className="author-img img-fluid" />

            </div>
            <h5 className="author-namee mt-3 mb-2">
                {autor.name}</h5>
            <a
                href={autor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
            >
                <i className="bi bi-linkedin"></i>
            </a>
        </Card>
    );
}
