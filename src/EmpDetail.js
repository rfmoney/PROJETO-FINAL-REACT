import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Dados Criados</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Seu Nome Usado É : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Detalhe de contato</h3>
                        <h5>Email : {empdata.email}</h5>
                        <h5>Telefone : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Voltar para Lista</Link>
                    </div>
                }
            </div>
            </div>
        </div >
    );
}

export default EmpDetail;