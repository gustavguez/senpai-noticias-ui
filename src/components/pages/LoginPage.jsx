import { useState } from "react";
import { api } from "../../api/api";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //El formulario se manda
  const handleSubmit = (event) => {
    event.preventDefault();

    //Cambiar el estado loading a true
    setLoading(true);

    //Borramos el error
    setError("");

    //Llamar un POST con axios a /login y mandar la info en el
    //estado actual
    api.post("/auth/login", { email: email, password: password }).then(
      (response) => {
        console.log(response);

        //Cambiar el estado loading a false
        setLoading(false);
      },
      (errorResponse) => {
        //Guardamos la respuesta de la api en una constante
        const response = errorResponse.response.data;

        //Cambiamos el estado para mostrar el error
        setError(response.error);

        //Cambiar el estado loading a false
        setLoading(false);
      }
    );
  };

  //Maneja los cambios del formulario - estado
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-8">
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
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
              <div className="form-group">
                <label htmlFor="contact-password">Clave</label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="contact-password"
                  placeholder="Ingrese una clave"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mb-2 mt-4">
                {loading ? "Cargando..." : "Login"}
              </button>

              <span className="text-danger d-block">{error}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
