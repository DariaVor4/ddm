import {
  Button, FlexboxGrid, Form, Schema, Stack, Panel,
} from 'rsuite';
import React, { useState } from 'react';

const { StringType, NumberType } = Schema.Types;

interface IFormValue {
  firstname: string;
  lastname: string;
  patronymic?: string;
  email: string;
  phone: string;
  curator: string;
  faculty: string;
  course: string;
  group: string;
  password: string;
  verifyPassword: string;
  verifyCodeField?: number;
}

const model = Schema.Model<IFormValue>({
  firstname: StringType().isRequired('Укажите имя'),
  lastname: StringType().isRequired('Укажите фамилию'),
  phone: StringType()
    .minLength(11, 'Максимальная длина телефона - 11 символов')
    .containsNumber('Телефон состоит из цифр')
    .isRequired('Укажите телефон'),
  curator: StringType().isRequired('Укажите куратора'),
  faculty: StringType().isRequired('Укажите факультет'),
  // todo спросить про диапазон курсов
  course: NumberType()
    .isRequired('Укажите курс')
    .min(1, 'Курс может быть от 1 до 5')
    .max(5, 'Курс может быть от 1 до 5'),
  group: StringType().isRequired('Укажите группу'),
  email: StringType()
    .isEmail('Укажите валидный email')
    .isRequired('Укажите email'),
  password: StringType()
    .addRule((value, data) => !data.verifyPassword || value === data.verifyPassword, 'Пароли не совпадают')
    .isRequired('Укажите пароль')
    .minLength(8, 'Минимальная длина пароля - 8 символов'),
  verifyPassword: StringType()
    .addRule((value, data) => value === data.password, 'Пароли не совпадают')
    .isRequired('Подтвердите пароль'),
  verifyCodeField: StringType().containsNumber('Код состоит из цифр').maxLength(6, 'Длина кода - 6 символов'),
});

export default function RegistrationPage() {
  const [formValue, setFormValue] = useState<IFormValue | Record<string, any>>({
    firstname: '',
    lastname: '',
    patronymic: '',
    email: '',
    phone: '',
    curator: '',
    faculty: '',
    course: '',
    group: '',
    password: '',
    verifyPassword: '',
    verifyCodeField: '',
  });
  const [formError, setFormError] = React.useState({});
  const [verifyCode, setVerifyCode] = useState<number>();
  const [isVerified, setIsVerified] = useState(false);
  const verifyEmail = () => {
    const verifyCodeField = +formValue.verifyCodeField;

    if (verifyCodeField === verifyCode) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const sendEmailVerifyCode = () => {
    console.log('Sending verifying code...');
    setVerifyCode(1);
  };

  const registrationUser = () => {
    const errorsLength = Object.keys(formError).length;

    if (isVerified && !errorsLength) {
      console.log('user was registered');
    } else {
      console.log('user registration error');
    }
  };

  return (
    <FlexboxGrid justify='center'>
      <FlexboxGrid.Item>
        <Panel header={<h3 style={{ textAlign: 'center' }}>Регистрация</h3>} bordered>
          <Form
            model={model}
            onCheck={setFormError}
            formValue={formValue}
            onChange={fv => setFormValue(fv)}
          >
            <Form.Group controlId='firstname'>
              <Form.ControlLabel>Имя</Form.ControlLabel>
              <Form.Control name='firstname' />
            </Form.Group>
            <Form.Group controlId='lastname'>
              <Form.ControlLabel>Фамилия</Form.ControlLabel>
              <Form.Control name='lastname' />
            </Form.Group>
            <Form.Group controlId='patronymic'>
              <Form.ControlLabel>Отчество</Form.ControlLabel>
              <Form.Control name='patronymic' />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.ControlLabel>email</Form.ControlLabel>
              <Stack spacing='1rem'>
                <Form.Control name='email' type='email' />
                <Button onClick={sendEmailVerifyCode}>Отправить код</Button>
              </Stack>
            </Form.Group>
            { verifyCode
              && (
              <Form.Group>
                <Form.ControlLabel>Код подтверждения</Form.ControlLabel>
                <Stack spacing='1rem'>
                  <Form.Control name='verifyCodeField' />
                  <Button onClick={verifyEmail}>Подтвердить</Button>
                  {/* <Button onClick={sendEmailVerifyCode}>Отправить ещё раз</Button> */}
                </Stack>
              </Form.Group>
              )}
            <Form.Group controlId='phone'>
              <Form.ControlLabel>Телефон</Form.ControlLabel>
              <Form.Control name='phone' type='tel' />
            </Form.Group>
            <Form.Group controlId='curator'>
              <Form.ControlLabel>Куратор</Form.ControlLabel>
              <Form.Control name='curator' />
            </Form.Group>
            {/* todo enum */}
            <Form.Group controlId='faculty'>
              <Form.ControlLabel>Факультет</Form.ControlLabel>
              <Form.Control name='faculty' />
            </Form.Group>
            <Form.Group controlId='course'>
              <Form.ControlLabel>Курс</Form.ControlLabel>
              <Form.Control name='course' />
            </Form.Group>
            <Form.Group controlId='group'>
              <Form.ControlLabel>Группа</Form.ControlLabel>
              <Form.Control name='group' />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.ControlLabel>Пароль</Form.ControlLabel>
              <Form.Control name='password' type='password' />
            </Form.Group>
            <Form.Group controlId='verifyPassword'>
              <Form.ControlLabel>Подтверждение пароля</Form.ControlLabel>
              <Form.Control name='verifyPassword' type='password' />
            </Form.Group>
            <Button
              appearance='primary'
              type='submit'
              onClick={registrationUser}
              disabled={!isVerified}
            >
              Зарегистрироваться
            </Button>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
