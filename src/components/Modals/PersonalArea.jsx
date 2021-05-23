import React, { useContext } from 'react';
import { Modal, Button, Checkbox } from 'antd';
import { observer } from 'mobx-react';
import { modalContext } from '../../App';
import { FormikProvider, useFormik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import RegularInput from '../CustomInput/RegularInput';
import './Modals.scss';

const PersonalArea = observer(() => {
  const modalStore = useContext(modalContext);

  const registerModal = () => {
    modalStore.setRegisterModal(true);
  };

  const handleCancel = () => {
    modalStore.setLoginModal(false);
  };

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
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
      className="modals loginModal"
      title="Вход в Личный кабинет"
      visible={modalStore.getLoginModal()}
      footer={[]}
      width={416}
      onCancel={handleCancel}>
      <FormikProvider value={formik}>
        <Form>
          <RegularInput
            width={'width-100'}
            placeholder="Логин"
            label="E-mail"
            required={false}
            type="text"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}/>
          <RegularInput
            width={'width-100'}
            placeholder="Введите пароль"
            label="Пароль"
            required={true}
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}/>
          <div className="divider"/>
          <div className="checkboxWrapper">
            <Checkbox onChange={() => console.log('remember')}>Запомнить данные</Checkbox>
          </div>
          <div className="divider"/>
          <Button.Group>
            <SubmitButton>Войти</SubmitButton>
            <Button onClick={registerModal}>Зарегистрироваться</Button>
          </Button.Group>
        </Form>
      </FormikProvider>
    </Modal>
  );
});

export default PersonalArea;
