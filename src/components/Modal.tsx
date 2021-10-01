import React from 'react';
import Form from "./Form";
import {ModalPropsType} from './interface'

function Modal({open,Close,AddNewTableItem}: ModalPropsType) {

    let modal_style = 'modal show  fade ' + (open ? 'modal--active' : ' ')
    return (
        <div onClick={Close} className={modal_style} tabIndex={1}>
            <div className="modal-dialog">
                <div onClick={event => event.stopPropagation()} className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Добавление элемента</h5>
                        <button onClick={Close} type="button" className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <p>Введите данные для добавления элемента</p>
                        <Form Send={(values)=>{AddNewTableItem(values);Close()}} />
                    </div>
                    <div className="modal-footer">
                        <button onClick={Close} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;