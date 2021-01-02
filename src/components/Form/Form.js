import React from 'react'
import './Form.css'

const Form = () => (
    <div className="form__wrapper">
        <h2 className="form__title">Dodaj nowe danie:</h2>
        <form className="form">
            <div className="item">
                <input
                    className="item__input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    maxlength="30"
                />
                <label class="item__label" htmlFor="name"> Nazwa </label>
                <div className="item__bar" />
            </div>
            <div className="item">
                <div className="item--radio">
                    <p className="item__radioQuestion">Vege: </p>
                    <input
                        className="item__input"
                        type="radio"
                        name="vege"
                        id="vege"
                        value="Tak" checked />
                    <label className="item__label" htmlFor="vege"> Tak </label>
                    <input
                        className="item__input"
                        type="radio"
                        name="vege"
                        id="vege"
                        value="Nie" />
                    <label className="item__label" htmlFor="vege"> Nie </label></div>
                <div className="item__bar" />
            </div>
            <div className="item">
                <div className="item--radio">
                    <p className="item__radioQuestion">Rodzaj: </p>
                    <input
                        className="item__input"
                        type="radio"
                        name="type"
                        id="type"
                        value="obiad" checked />
                    <label className="item__label" htmlFor="type"> obiad </label>
                    <input
                        className="item__input"
                        type="radio"
                        name="type"
                        id="type"
                        value="kolacja" />
                    <label className="item__label" htmlFor="type"> kolacja </label>
                    <input
                        className="item__input"
                        type="radio"
                        name="type"
                        id="type"
                        value="deser" />
                    <label className="item__label" htmlFor="type"> deser </label>
                </div>
                <div className="item__bar" />
            </div>
            <div className="item">
                <div className="item--radio">
                    <p className="item__radioQuestion">Na gorąco: </p>
                    <input
                        className="item__input"
                        type="radio"
                        name="hot"
                        id="hot"
                        value="Tak" checked />
                    <label className="item__label" htmlFor="hot"> Tak </label>
                    <input
                        className="item__input"
                        type="radio"
                        name="hot"
                        id="hot"
                        value="Nie" />
                    <label className="item__label" htmlFor="hot"> Nie </label>
                </div>
                <div className="item__bar" />
            </div>
            <div className="item">
                <div className="item--radio">
                    <p className="item__radioQuestion">Thermomix: </p>
                    <input
                        className="item__input"
                        type="radio"
                        name="tm"
                        id="tm"
                        value="Tak" checked />
                    <label className="item__label" htmlFor="tm"> Tak </label>
                    <input
                        className="item__input"
                        type="radio"
                        name="tm"
                        id="tm"
                        value="Nie" />
                    <label className="item__label" htmlFor="tm"> Nie </label>
                </div>
                <div className="item__bar" />
            </div>
            <div className="item">
                <input
                    className="item__input"
                    type="text"
                    name="link"
                    id="link"
                    placeholder=" "
                />
                <label className="item__label" htmlFor="link"> Link </label>
                <div className="item__bar" />
            </div>
            <button className="form__button">Dodaj nowe danie</button>
        </form>
    </div >
)

export default Form;