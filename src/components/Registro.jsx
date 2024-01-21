// Registro.jsx
import React, { useState } from 'react';
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

    // Función que se llamará cuando el formulario se complete con éxito
    const handleFormSubmit = () => {
        // Actualiza el estado de Alert para mostrar el mensaje exitoso
        setAlert({ msg: '¡Registro exitoso!', color: 'success' });
    };

    return (
        <>
            <Header />
            <div className="d-flex flex-row align-items-center justify-content-center">
                <SocialButton icon={['fab', 'facebook']} />
                <SocialButton icon={['fab', 'github']} />
                <SocialButton icon={['fab', 'linkedin']} />
            </div>
            <Text />

            {/* Renderiza el componente Alert con el estado actualizado */}
            {alert.msg && (
                <Alert color={alert.color}>
                    {alert.msg}
                </Alert>
            )}

            {/* Pasa la función handleFormSubmit al componente Formulario */}
            <Formulario onFormSubmit={handleFormSubmit} />
        </>
    );
};

export default Registro;
