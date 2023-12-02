import React, { useState } from 'react';
import "./Checkout.css"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string()
        .matches(
            /\+?\d{10,15}$/g,
            "It dosen't look like phone number"
        )
        .required('Required'),
    address: Yup.string()
        .min(2, 'Too short!')
        .matches(
            /\w+,\s\w+\.?\s?\w+\s\d+/g,
            "Adress should look like City, Street Number"
        )
        .required('Required'),
});

const Checkout = (props) => {
    const [openModalWindow, setOpenModalWindow] = useState(false);
    const navigation = useNavigate();
    return (
        <section className='conteiner'>
            <h1>Checkout</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                    props.state(values);
                    navigation('success')
                }}
            >
                {({ errors, touched }) => (
                    <>
                        <Form className="checkout_form">
                            <div className='first_name'>
                                <p>First name</p>
                                <Field name="firstName" className={`${errors.firstName && "error"} ${touched.firstName && !errors.firstName ? "succeed" : null}`} />
                                {errors.firstName && touched.firstName ? <p className='info_error'>{errors.firstName}</p> : null}
                            </div>
                            <div className='last_name'>
                                <p>Last name</p>
                                <Field name="lastName" className={`${errors.lastName && "error"} ${touched.lastName && !errors.lastName ? "succeed" : null}`} />
                                {errors.lastName && touched.lastName ? <p className='info_error'>{errors.lastName}</p> : null}
                            </div>
                            <div className='email'>
                                <p>Email</p>
                                <Field name="email" type="email" className={`${errors.email && "error"} ${touched.email && !errors.email ? "succeed" : null}`} />
                                {errors.email && touched.email ? <p className='info_error'>{errors.email}</p> : null}
                            </div>
                            <div className='phone'>
                                <p>Phone</p>
                                <Field name="phone" className={`${errors.phone && "error"} ${touched.phone && !errors.phone ? "succeed" : null}`} />
                                {errors.phone && touched.phone ? <p className='info_error'>{errors.phone}</p> : null}
                            </div>
                            <div className='address'>
                                <p>Address</p>
                                <Field name="address" className={`${errors.address && "error"} ${touched.address && !errors.address ? "succeed" : null}`} />
                                {errors.address && touched.address ? <p className='info_error'>{errors.address}</p> : null}
                            </div>
                            <div className='button'>
                                <Button styleType="outline" to="/cart">Go back</Button>
                                <Button type="submit" styleType="filled" onClick={() => setOpenModalWindow(true)}>Submit</Button>
                            </div>
                        </Form>
                        {(
                            errors.firstName || errors.lastName || errors.email || errors.phone || errors.phone
                        ) && openModalWindow ? <ErrorMessage closeWindow={() => { setOpenModalWindow(false) }} /> : null}

                    </>
                )}
            </Formik>
        </section>
    );
};

export default Checkout;