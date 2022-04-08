import React from 'react'
// import ReactDOM from 'react-dom';
import './styles/servicios.scss'
import configuracion from '../data/configuracion.json'
import background from '../images/img1.jpg'


class Servicios extends React.Component {

  render() {

    return (
      <div className="container-fluid servicios-contenedor-fluid">
        <div className="container container-servicios">
          <small>{configuracion.servicios.nombre1}</small>
          <h2>{configuracion.servicios.nombre2}</h2>
            <div className="row cont-card">
              {configuracion.servicios.card.map(detalle => (
                  <div className="element-card col-2" key={detalle.id}>
                    <div className="card-imagen" style={{backgroundImage: `url(${require(`../images/${detalle.imagen}`)})`}}>
                      <h1>hola</h1>
                    </div>
                    <div className="element-card-text">
                      <h2>{detalle.titulo}</h2>
                      <p>{detalle.descripcion}</p>
                    </div>
                    <div className="card-footer"></div>
                  </div>
                ))}
            </div>
        </div>
      </div>

    )
  }
}

export default Servicios;


