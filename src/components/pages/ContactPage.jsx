import { useState } from "react";
import { api } from "../../api/api";

export function ContactPage() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  //El formulario se manda
  const handleSubmit = (event) => {
    event.preventDefault();

    //Cambiar el estado loading a true
    setLoading(true);

    //Llamar un POST con axios a /contact y mandar la info en el
    //estado actual
    api
      .post("/contact", {
        otrocampo: "hola",
        correo: email,
        mensaje: mensaje,
      })
      .then((response) => {
        console.log(response);

        //Cambiar el estado loading a false
        setLoading(false);
      });
  };

  //Maneja los cambios del formulario - estado
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-8">
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Contacto</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  name="correo"
                  className="form-control"
                  id="contact-email"
                  placeholder="Ingrese un correo"
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  value={mensaje}
                  onChange={handleMensajeChange}
                  name="mensaje"
                  className="form-control"
                  id="contact-messag"
                  rows="3"
                  placeholder="Ingrese un mensaje"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mb-2 mt-4">
                {loading ? "Cargando..." : "Envíar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
