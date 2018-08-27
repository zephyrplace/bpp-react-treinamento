import React, { Component } from 'react';

export default (props) => {
    return (<div>
        <table>
            <tr>
                <td>Id</td>
                <td>Numero</td>
                <td>CVV</td>
            </tr>
            {props.lista.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{props.id}</td><td>{props.number}</td><td>{props.cvv}</td>
                    </tr>);
            })}
        </table>
    </div>
    );
}
