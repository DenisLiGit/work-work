import React, { useContext } from 'react';
import { Modal, Button } from 'antd';
import { observer } from 'mobx-react';
import { modalContext } from '../../App';
import { FormikProvider, useFormik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import RegularInput from '../CustomInput/RegularInput';
import { Typography } from 'antd';
import './Modals.scss';
import { NavLink } from 'react-router-dom';

const RegisterModal = observer(() => {
  const modalStore = useContext(modalContext);

  const handleCancel = () => {
    modalStore.setRegisterModal(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      secondName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      passwordCheck: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
      actions.resetForm();
    }, validate: (values) => {
      console.log('del if valid not need');
    },
  });

  return (
    <Modal
      className="modals registerModal"
      title="Регистрация пользователя"
      visible={modalStore.getRegisterModal()}
      footer={[]}
      width={608}
      onCancel={handleCancel}>
      <FormikProvider value={formik}>
        <Form>
          <RegularInput
            width={'width-50'}
            placeholder="Введите фамилию"
            label="Фамилия"
            required={false}
            type="text"
            name="secondName"
            value={formik.values.secondName}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-50'}
            placeholder="Введите имя"
            label="Имя"
            required={false}
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-50'}
            placeholder="Введите отчество"
            label="Отчество"
            required={false}
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}/>
          <div className="divider"/>
          <RegularInput
            width={'width-50'}
            placeholder="name@example.com"
            label="Адрес электронной почты"
            required={true}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-50'}
            placeholder=""
            label="Номер мобильного телефона"
            required={false}
            name="phone"
            mask="+7 (999) 999-99-99"
            value={formik.values.phone}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-50'}
            placeholder="Пароль"
            label="Придумайте пароль"
            required={true}
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-50'}
            placeholder="Ваш пароль еще раз"
            label="Введите пароль еще раз"
            required={true}
            name="passwordCheck"
            type="password"
            value={formik.values.passwordCheck}
            onChange={formik.handleChange}/>
          <div className="divider"/>
          <Typography.Paragraph>
            Нажимая на кнопку «Зарегистрироваться» вы соглашаетесь с
            <br/>
            <NavLink to="/pd">
              условиями использования
            </NavLink>
          </Typography.Paragraph>
          <div className="divider"/>
          <Button.Group>
            <SubmitButton>Зарегистрироваться</SubmitButton>
          </Button.Group>
        </Form>
      </FormikProvider>
    </Modal>
  );
});

export default RegisterModal;
