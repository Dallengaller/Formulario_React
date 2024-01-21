// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        contraseñaConfirmacion: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const validarInput = () => {
        if (formulario.nombre.trim() === '' || formulario.email.trim() === '' || formulario.contraseña.trim() === '' || formulario.contraseñaConfirmacion.trim() === '') {
            setError('Completa todos los campos');
            return false;
        } else if (formulario.contraseña !== formulario.contraseñaConfirmacion) {
            setError('Los campos de contraseña no coinciden');
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarInput()) {
            console.log('Formulario enviado:', formulario);
            // Llamada a la función proporcionada desde Registro.jsx
            onFormSubmit();
        }
    };

    return (
        <>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        placeholder='Ingresa tu nombre'
                        type="text"
                        name="nombre"
                        className="form-control"
                        value={formulario.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        placeholder='tuemail@ejemplo.com'
                        type="email"
                        name="email"
                        className="form-control"
                        value={formulario.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        placeholder='Ingresa tu contraseña'
                        type="password"
                        name="contraseña"
                        className="form-control"
                        value={formulario.contraseña}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        placeholder='Confirma tu contraseña'
                        type="password"
                        name="contraseñaConfirmacion"
                        className="form-control"
                        value={formulario.contraseñaConfirmacion}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Registrarse
                </button>

                {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>
                )}
            </form>
        </>
    );
};

export default Formulario;
