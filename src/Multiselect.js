import React from "react";
import "./multiselect.css"

const Multiselect = ({dados1, dados2, setDados1, setDados2}) => {
    //hooks
    const [select1, setSelect1] = React.useState([]);
    const [select2, setSelect2] = React.useState([]);

    //functions
    function handleChangeLeft(valores) {
        valores = valores.target.selectedOptions
        let new_valores = [];
        for(let i in valores) {
            new_valores.push((valores[i].value != undefined ? valores[i].value : null))
        }
        setSelect1(new_valores);
    }
    
    function handleChangeRight(valores) {
        valores = valores.target.selectedOptions
        let new_valores = []
        for(let i in valores) {
            new_valores.push((valores[i].value != undefined ? valores[i].value : null))
        }
        setSelect2(new_valores)
    }

    function toRight() {
        let n_dados1 = []
        let n_dados2 = []
        for(let i in dados1) {
            if(select1.includes(dados1[i])) {
                n_dados2.push(dados1[i])
            }
            else {
                n_dados1.push(dados1[i])
            }
        }

        setDados1(n_dados1)
        setDados2([...dados2, ...n_dados2])
    }
    function toLeft() {
        let n_dados1 = []
        let n_dados2 = []
        for(let i in dados2) {
            if(select2.includes(dados2[i])) {
                n_dados1.push(dados2[i])
            }
            else {
                n_dados2.push(dados2[i])
            }
        }

        setDados1([...dados1, ...n_dados1])
        setDados2(n_dados2)
    }
    
    return(
        <div className="main">
            <div className="side">
                <label>Itens</label>
                <select multiple onChange={handleChangeLeft}>
                    {dados1.map(el => {
                        return(
                            <option key={el} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
            <div className="side"
                style={{marginTop: 30}}
                >
                <button onClick={toRight}>To Right</button>
                <button onClick={toLeft}>To Left</button>
            </div>
            <div className="side">
                <label>Itens aceitos</label>
                <select multiple onChange={handleChangeRight}>
                    {dados2.map(el => {
                        return(
                            <option key={el} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Multiselect