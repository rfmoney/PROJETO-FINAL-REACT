import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <nav className='menu'><h1>
        Mudando Vidas
      </h1>
      <a href="#inicio" className="btn">Inicio</a>
      <a href="#sobre" className="btn">Sobre</a>
      <a href="#contato" className="btn">Contato</a>
      </nav>  
      
      <div class="back">
        <img src={require('./img/logo.jpg')} />
              <div class="Sd">
                <h1 id='inicio'>Mudando Sua Vida</h1>
          <p>Nosso Modelo busca transformar a escola para que crianças e jovens possam transformar o mundo. Procuramos reimaginar a educação através da transformação progressiva dos estabelecimentos de ensino em centros de inovação que potenciam o vínculo social com as suas comunidades, a autonomia e protagonismo dos jovens e o desenvolvimento de soluções para problemas reais do seu meio.</p>  
          </div>
      </div> 
<div className='bg'>
<img src={require('./img/bg-01.jpg')} />
</div>
      <div class="back">
        <img src={require('./img/logo2.png')} />
              <div class="Sd">
          <h1 id='sobre'>QUEM SOMOS</h1>
          <p>
          Somos uma organização não governamental, criada com o objetivo principal de promover educação formal, não formal e popular para crianças, adultos em situação de vulnerabilidade e pessoas em qualquer parte do mundo.
Intervimos no social desde a área educativa com todos os profissionais do conhecimento. Além disso, desenvolvemos projetos sociais integrais com qualquer população, priorizamos crianças, jovens e mulheres, mas qualquer pessoa é aceita, independente de cor, raça ou religião.
          </p>
        </div>
      </div>
   

    <div className='bloque'>  
        <h1 className='titulo'>Catalogo de Cursos</h1>
   <div className="produto">
      <img src={require('./img/img1.jpg')} />
   
         <h1>Desenhando com Lapis</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/img2.jpg')} />
   
         <h1>Fotografia Digital</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>

        <div className="produto">
      <img src={require('./img/img3.jpeg')} />
   
         <h1>Decoração de Festas</h1>
         <p>Curso</p>
         <p className="price">GRATIS</p>
       
         <button> DESCRIÇÃO</button> 

        <a href="#" className="btn">Registro</a>
        </div>
       </div>

       <div class="back1">
       <img src={require('./img/img5.jpg')} />
        <div class="Sc">
        <h1>OBJETIVO</h1>
          <p>
O objetivo do projeto é contribuir com a promoção de competências sociais e emocionais para a entrada no mercado de trabalho, o desenvolvimento integral dos adolescentes, construir metas e caminhos para a realização profissional e combater a extrema pobreza oferecendo condições necessárias para a inserção no mercado de trabalho.
          </p>
          <p>Esses cursos fornecem ferramentas teóricas e metodológicas úteis para superar os desafios encontrados por pessoas de diferentes disciplinas e campos, na formulação de projetos para promover o bem-estar das pessoas.</p>
          </div>
        </div>
        <br/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>


      <div class="contato">
      <div class="bloque-cn">
        <div class="social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="social1"><i class="fab fa-facebook"></i></span></a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="social2"><i class="fab fa-twitter-square"></i></span></a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="social3"><i class="fab fa-instagram"></i></span></a>
        </div>

        <img src={require('./img/logo.jpg')} />
        <h1 id='contato'>DEIXA SEUS DADOS</h1>

        <main>
          <form action="" class="formulario" id="formulario">
  
            <div class="formulario__grupo" id="grupo__nombre">
              <label for="nombre" class="formulario__label"></label>
              <div class="formulario__grupo-input">
                <input
                  type="text"
                  class="formulario__input"
                  name="nombre"
                  id="nombre"
                  placeholder="Insire seu Nome"
                />
                <i
                  class="formulario__validacion-estado far fa-times-circle"
                ></i>
                <p class="formulario__input-error"></p>
              </div>
            </div>


            <div class="formulario__grupo" id="grupo__correo">
              <label for="correo" class="formulario__label"></label>
              <div class="formulario__grupo-input">
                <input
                  type="email"
                  class="formulario__input"
                  name="correo"
                  id="correo"
                  placeholder="correo@correo.com"
                />
                <i
                  class="formulario__validacion-estado far fa-times-circle"
                ></i>
                <p class="formulario__input-error"></p>
              </div>
            </div>

       
            <div class="formulario__grupo" id="grupo__telefono">
              <label for="curso" class="formulario__label"></label>
              <div class="formulario__grupo-input">
                <input
                  type="text"
                  class="formulario__input"
                  name="curso"
                  id="telefono"
                  placeholder="Curso"
                />
                <i
                  class="formulario__validacion-estado far fa-times-circle"
                ></i>
                <p class="formulario__input-error"></p>
              </div>
            </div>
          
            <div
              class="formulario__grupo formulario__grupo-btn-enviarformilario__grupo-btn-enviar"
            >
              <button type="submit" class="formulario__btn">Enviar</button>
              <p
                class="formulario__mensaje-exito"
                id="formulario__mensaje-exito"
              >
                Formulário enviado com sucesso!
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>

<footer class="footer">
  <p>Copyright (c) 2022 All rights reserved Grupo 2 Turma 20</p>
</footer>
    </div>
  

    
  );

}

export default App;
