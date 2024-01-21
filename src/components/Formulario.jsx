import React, { useState } from 'react';

const Formulario = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica del envío del formulario si es necesario
        console.log('Formulario enviado:', formulario);
    };

    return (
        <>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
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
                        type="text"
                        name="nombre"
                        className="form-control"
                        value={formulario.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar contraseña</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        value={formulario.nombre}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </>
    );
};

export default Formulario;
