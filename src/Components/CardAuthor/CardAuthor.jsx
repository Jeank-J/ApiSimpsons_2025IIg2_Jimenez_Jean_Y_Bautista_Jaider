import react, { useState } from "react"
import { Card } from '@mui/material';
import imgS from '../../../public/queSuenio.jpeg';

import './CardAuthor.css';

export default function CardAuthor({ autor }) {

  const [hovered, setHovered] = useState(false);
  const IMG = !hovered ? autor.img : imgS;
  return (
    <Card
      className="author-card text-center p-4 shadow"
      onMouseEnter = { () => setHovered(true)}
      onMouseLeave = { () => setHovered(false)}
    >
      <div className="author-img-container mx-auto">
        <img src={IMG} alt={autor.name} className="author-img img-fluid" />
      </div>
      <h5 className="author-name mt-3 mb-2">{autor[0]}</h5>
      <a
        href={autor[1]}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <i class="bi bi-linkedin"></i>
      </a>
    </Card>
  );
}
