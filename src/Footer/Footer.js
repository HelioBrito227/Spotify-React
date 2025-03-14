import React from 'react';
import './Footer.css';

const Footer = () => {
  return(
    <footer className="disclaimer-premium">
        <div className="text">
            <p className="disclaimer-premium__title">Testar o premium de graça</p>
            <p className="disclaimer-premium__subtitle">
                Inscreva-se para curtit música ilimitada e podcasts só com alguns
                anúncios. Não precisa de cartão de crédito
            </p>
        </div>
        <div>
            <button type="button">Inscreva-se</button>
        </div>
    </footer>
  )
};
export default Footer;
