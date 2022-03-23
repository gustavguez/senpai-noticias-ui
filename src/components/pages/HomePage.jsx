import { useEffect, useState } from "react";
import { api } from "../../api/api";

export function HomePage() {
  const [noticias, setNoticias] = useState([]);
  const imagesUrl = "http://localhost:4000/uploads/";

  //Buscar noticias a la api
  useEffect(() => {
    //Utilizar AXIOS para ir a la API a buscar la info
    api.get("/noticias-principales").then((response) => {
      //Actualizamos el estado con las noticias de la API
      setNoticias(response.data);
    });
  }, []);

  return (
    <div className="row">
      {noticias.map((noticiaJSON, index) => {
        return (
          <div className="col-4 mt-2" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img style={{ width: "200px" }} src={imagesUrl + noticiaJSON.image} />
              <div className="card-body">
                <h5 className="card-title">{noticiaJSON.titulo}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
