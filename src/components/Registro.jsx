// Registro.jsx
import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';
import Formulario from './Formulario';
import Text from './Text';
import SocialButton from './SocialButton';
import Alert from './Alert';


library.add(fab);

const Registro = () => {
    const [alert, setAlert] = useState({ msg: '', color: 'info' });

    
    const handleFormSubmit = () => {
        
        setAlert({ msg: '¡Registro exitoso!', color: 'success' });
    };

    return (
        <>
            <Header />
            <div className="d-flex flex-row align-items-center justify-content-center mt-3 mb-3">
                <SocialButton icon={['fab', 'facebook',]} />
                <SocialButton icon={['fab', 'github']} />
                <SocialButton icon={['fab', 'linkedin']} />
            </div>
            <Text />

            {alert.msg && (
                <Alert color={alert.color}>
                    {alert.msg}
                </Alert>
            )}

            
            <Formulario onFormSubmit={handleFormSubmit} />
        </>
    );
};

export default Registro;
