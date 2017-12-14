//Marcos Antonio Cruz Cruz

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ModificandoDiv extends React.Component {

   render(){
      return(
        <div className="container">
          <div className="header-top">
            <div className="container-1">
              <div className="icono-face"></div>
              <div className="search">
                <div className="gray-into-search"></div>
              </div>
            </div>
            <div className="container-2">
              <div className="cuadro1-menu"></div>
              <div className="cuadro2-menu"></div>
              <div className="cuadro3-menu"></div>
              <div className="cuadro4-menu"></div>
              <div className="cuadro5-menu"></div>
            </div>
          </div>
          <div className="body-container">
            <div className="contenedor-derecho">
                <div className="portada">
                  <div className="foto-portada">
                    <div className="contenedor-perfil">
                      <div className="foto-perfil">
                      </div>
                      <div className="foto-info">
                        <div className="blanket1"></div>
                        <div className="blanket2"></div>
                      </div>
                    </div>
                    <div className="contenedor-perfil-config">
                      <div className="content-blanket1">
                        <div className="content-gray1"></div>
                      </div>
                      <div className="content-blanket2">
                        <div className="content-gray2"></div>
                        <div className="content-gray3"></div>
                        <div className="content-gray4"></div>
                        <div className="content-gray5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="info-biografia">
                    <div className="menu-biografia">
                      <div className="item1"></div>
                      <div className="item2"></div>
                      <div className="item3"></div>
                      <div className="item4"></div>
                      <div className="item5"></div>
                    </div>
                  </div>
                </div>
                <div className="seccion">
                  <div className="seccion-derecho">
                    <div className="publicidad">
                      <div className="publicidad-arriba">
                        <div className="arriba-item1"></div>
                        <div className="arriba-item2">
                          <div className="arriba-item21"></div>
                          <div className="arriba-item22"></div>
                        </div>
                      </div>
                      <div className="publicidad-abajo">
                        <div className="info-publicidad-abajo">
                          <div className="abajo-item1"></div>
                          <div className="abajo-item2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="video-bloque1">
                      <div className="info-bloque1"></div>
                    </div>
                    <div className="video-bloque2">
                      <div className="circleBase type1">
                        <div className="triangle-right"></div>
                      </div>
                    </div>
                    <div className="video-bloque3">
                      <div className="video-bloque31">
                        <div className="bloque-item1"></div>
                        <div className="bloque-item2"></div>
                        <div className="bloque-item3"></div>
                      </div>
                      <div className="video-bloque32">
                        <div className="video-item1"></div>
                        <div className="video-item2"></div>
                      </div>
                      <div className="video-bloque33">
                        <div className="video-item11"></div>
                        <div className="video-item22"></div>
                      </div>
                    </div>
                    <div className="bloque4">
                      <div className="bloque-morado"></div>
                      <div className="bloque-morado2"></div>
                    </div>
                  </div>
                  <div className="seccion-izquierdo">
                    <div className="post-bloque1">
                      <div className="post-bloque11"></div>
                    </div>
                    <div className="post-bloque2"></div>
                    <div className="post-bloque3"></div>
                    <div className="post-publicado">
                      <div className="publicado-perfil">
                        <div className="publicado-perfil-info1"></div>
                        <div className="publicado-perfil-info2">
                          <div className="publicado-item1"></div>
                          <div className="publicado-item2"></div>
                        </div>
                        <div className="publicado-guardado"></div>
                      </div>
                      <div className="descripcion-publicacion1"></div>
                      <div className="descripcion-publicacion2"></div>
                      <div className="descripcion-publicacion3"></div>
                      <div className="descripcion-publicacion4"></div>
                      <div className="publicacion-foto"></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="contenedor-izquierdo">
              <div className="menu-vertical1">
                <div className="item1-fechaV"></div>
                <div className="item2-fechaV"></div>
                <div className="item3-fechaV"></div>
                <div className="item4-fechaV"></div>
                <div className="item5-fechaV"></div>
              </div>
              <div className="menu-vertical2">
                <div className="item1-fechaH"></div>
                <div className="item2-fechaH"></div>
                <div className="item3-fechaH"></div>
                <div className="item4-fechaH"></div>
                <div className="item5-fechaH"></div>
              </div>
            </div>
          </div>
       </div>
      );
    }
}

ReactDOM.render(<ModificandoDiv/>,
   document.getElementById('root')
);
