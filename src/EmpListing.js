import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { App } from "./App";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Cadastro de cursos</h2>
                </div>
                
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Inserir Novo (+)</Link>
                    </div>
                    <table className="table ">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>Email</td>
                                <td>Telefone</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Editar</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remover</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detalhes</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
       
    );
}

export default EmpListing;