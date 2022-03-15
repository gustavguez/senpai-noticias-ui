export function ContactPage() {
  //https://es.reactjs.org/docs/forms.html
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-8">
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">Contacto</h5>
            <form>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="contact-email"
                  placeholder="Ingrese un correo"
                  required
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  className="form-control"
                  id="contact-messag"
                  rows="3"
                  placeholder="Ingrese un mensaje"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mb-2 mt-4">
                Envíar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
