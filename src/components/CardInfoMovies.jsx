import React from 'react'
import PropTypes from "prop-types"

export default function CardInfoMovies({
    key,
    id = 200,
    title= "No hay datos", 
    quantity = 0, 
    borderColor = "danger", 
    icon = "fa-shopping-cart",
    array= [],
}) {
    return (
            <div className="col-md-6 mb-4">
                <div className={`card border-left-${borderColor} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title} </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${icon}  fa-2x text-gray-300`}></i>
                            </div>
                            <ul>
                                {
                                   array.length > 0 ? array.map(item => (<li>{item} </li>)) : "Array vacio"
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
   
}
CardInfoMovies.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
    key: PropTypes.number,
}
