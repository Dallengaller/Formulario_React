// Registro.jsx
import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import Formulario from './Formulario';
import Text from './Text';
import SocialButton from './SocialButton';
import Alert from './Alert';

// Agrega los iconos de FontAwesome al conjunto de iconos
library.add(fab);

const Registro = () => {
    const [alert, setAlert] = useState({ msg: '', color: 'info' });

    return (
        <>
            <Header />
            <div>
                <SocialButton icon={['fab', 'facebook']}/>
                <SocialButton icon={['fab', 'github']}/>
                <SocialButton icon={['fab', 'linkedin']}/>   
            </div>
            <Text />
            <Formulario />
        </>
    );
};

export default Registro;
