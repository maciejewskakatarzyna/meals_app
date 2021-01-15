import React from 'react'
import styles from './Form.module.scss'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'


const Form = ({ closeFormFn }) => {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data)

    console.log(watch('title'))

    return (
        <div className={styles.wrapper}>
            <Button closeBtn onClick={closeFormFn}></Button>
            <h1 className={styles.title}>Dodaj nowe danie</h1>
            <form
                autoComplete="off"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.formOptions}>
                    <label className={styles.radio}>
                        <input
                            type='radio'
                            id='dinner'
                        >
                        </input>
                        <div className={styles.radioButton} />
            Obiad
            </label>
                    <label className={styles.radio}>
                        <input
                            type='radio'
                            id='dessert'
                        >
                        </input>
                        <div className={styles.radioButton} />
            Deser
            </label>
                    <label className={styles.radio}>
                        <input
                            type='radio'
                            id='sapper'
                        >
                        </input>
                        <div className={styles.radioButton} />
            Kolacja
            </label>
                </div>
                <div className={styles.formItem}>
                    <input className={styles.input}
                        type="text"
                        name="title"
                        ref={register({ required: true })}
                        placeholder=" "></input>
                    <label className={styles.label}
                        htmlFor='name'>Nazwa</label>
                    <div className={styles.formItemBar} />
                </div>
                <div className={styles.formItem}>
                    <input className={styles.input}
                        type="text"
                        name="link"
                        ref={register({ required: true })}
                        placeholder=" "></input>
                    <label className={styles.label}
                        htmlFor='link'>Link</label>
                    <div className={styles.formItemBar} />
                </div>
                <div className={styles.formItem}>
                    <input className={styles.input}
                        type="text"
                        name="image"
                        ref={register({ required: true })}
                        placeholder=" "></input>
                    <label className={styles.label}
                        htmlFor='image'>Zdjęcie</label>
                    <div className={styles.formItemBar} />
                </div>

                <div className={styles.formOptions}>
                    <label className={styles.checkbox}>
                        <input
                            type='checkbox'
                            id="vege"

                        >
                        </input>
                        <div className={styles.checkboxButton} />
            Vege
            </label>
                    <label className={styles.checkbox}>
                        <input
                            type='checkbox'
                            id="hot"

                        >
                        </input>
                        <div className={styles.checkboxButton} />
            Na gorąco
            </label>
                    <label className={styles.checkbox}>
                        <input
                            type='checkbox'
                            id="sweet"

                        >
                        </input>
                        <div className={styles.checkboxButton} />
            Na słodko
            </label>
                    <label className={styles.checkbox}>
                        <input
                            type='checkbox'
                            id="soup"

                        >
                        </input>
                        <div className={styles.checkboxButton} />
            Zupa
            </label>
                    <label className={styles.checkbox}>
                        <input
                            type='checkbox'
                            id="salad"

                        >
                        </input>
                        <div className={styles.checkboxButton} />
            Sałatka
            </label>
                </div>

                <Button>Dodaj nowe danie</Button>
            </form>
        </div>
    )
}


export default Form;