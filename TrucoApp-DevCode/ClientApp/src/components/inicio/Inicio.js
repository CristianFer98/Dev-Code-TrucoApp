import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { jugar } from "../../actions/auth";
import { ChatGeneral } from "./ChatGeneral"

export const Inicio = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleJugar = (e) => {
        e.preventDefault();
        dispatch(jugar());
        history.push("/juego");
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>

            <div className="Home p-5">
                <button onClick={handleJugar} className="btn btn-primary">
                    Jugar
                </button>
            </div>

            <ChatGeneral />

        </div>
    );
};
