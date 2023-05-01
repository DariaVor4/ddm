import {
  Button, FlexboxGrid, Form, Schema, Stack, Panel,
} from 'rsuite';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  GMutationRegistrationArgs,
  useEmailConfirmByCodeMutation,
  useRegistrationMutation,
  useSendConfirmationCodeMutation,
} from '../../api/generated';

const { StringType, NumberType } = Schema.Types;

interface IFormValue {
  firstName: string;
  lastName: string;
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
  firstName: StringType().isRequired('Укажите имя'),
  lastName: StringType().isRequired('Укажите фамилию'),
  phone: StringType()
    .minLength(11, 'Максимальная длина телефона - 11 символов')
    .containsNumber('Телефон состоит из цифр')
    .isRequired('Укажите телефон'),
  curator: StringType().isRequired('Укажите куратора'),
  faculty: StringType().isRequired('Укажите факультет'),
  course: NumberType()
    .isRequired('Укажите курс')
    .min(1, 'Курс может быть от 1 до 7')
    .max(7, 'Курс может быть от 1 до 7'),
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
  verifyCodeField: StringType()
    .containsNumber('Код состоит из цифр')
    .minLength(6, 'Длина кода - 6 символов')
    .maxLength(6, 'Длина кода - 6 символов'),
});

// todo сделать проверку на существование почты в бд
// todo сделать отметку, что почта подтверждена (мб disable ....)
const RegistrationPage: FC = () => {
  const [formValue, setFormValue] = useState<IFormValue | Record<string, any>>({
    firstName: '',
    lastName: '',
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
  const [isVerifiedCodeSent, setIsVerifiedCodeSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState(false);
  const [sendEmail] = useSendConfirmationCodeMutation();
  const [confirmEmail] = useEmailConfirmByCodeMutation();
  const [registerUser] = useRegistrationMutation();
  const [verifyCodeDurationDate, setVerifyCodeDurationDate] = useState<Date>();
  const navigate = useNavigate();
  const verifyEmail = async () => {
    const { verifyCodeField, email } = formValue;

    await confirmEmail({ variables: { email, code: verifyCodeField } })
      .then(() => {
        toast.success('Почта успешно подтверждена');
        setIsVerified(true);
      })
      .catch(() => {
        toast.error('Неправильный код подтверждения');
        setIsVerified(false);
      });
  };

  const sendEmailVerifyCode = async () => {
    const duration = await sendEmail({ variables: { email: formValue.email } })
      .then(r => r.data?.sendConfirmationCode)
      .catch(e => {
        // toast.error(e.message);
        setFormError({ ...formError, email: e.message });
      });
    if (duration) {
      setVerifyCodeDurationDate(new Date(duration));
      setIsVerifiedCodeSent(true);
      console.log(verifyCodeDurationDate);
    }
  };

  const formatData = (formValue: IFormValue | Record<string, any>): GMutationRegistrationArgs => ({
    input: {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      patronymic: formValue.patronymic,
      email: formValue.email,
      phone: formValue.phone,
      curator: formValue.curator,
      faculty: formValue.faculty,
      course: +formValue.course,
      group: formValue.group,
      password: formValue.password,
    },
  });

  const handlerRegister = async () => {
    const errorsLength = Object.keys(formError).length;

    if (isVerified && !errorsLength) {
      const data = formatData(formValue);
      await registerUser({ variables: data })
        .then(res => {
          if (res.data?.registration) {
            console.log(res.data?.registration);
            toast.success('Пользователь успешно зарегистрирован');
            navigate('/login');
          } else {
            toast.error('Ошибка регистрации');
          }
        })
        .catch(e => {
          console.log(e);
          toast.error(e.message);
        });
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
            formError={formError}
            onSubmit={handlerRegister}
            onChange={fv => setFormValue(fv)}
          >
            <Form.Group controlId='firstName'>
              <Form.ControlLabel>Имя</Form.ControlLabel>
              <Form.Control name='firstName' />
            </Form.Group>
            <Form.Group controlId='lastName'>
              <Form.ControlLabel>Фамилия</Form.ControlLabel>
              <Form.Control name='lastName' />
            </Form.Group>
            <Form.Group controlId='patronymic'>
              <Form.ControlLabel>Отчество</Form.ControlLabel>
              <Form.Control name='patronymic' />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.ControlLabel>email</Form.ControlLabel>
              <Stack spacing='1rem'>
                <Form.Control name='email' type='email' />
                <Button
                  onClick={sendEmailVerifyCode}
                >
                  {isVerifiedCodeSent ? 'Отправить ещё раз' : 'Отправить код'}
                </Button>
              </Stack>
            </Form.Group>
            {isVerifiedCodeSent
              && (
                <Form.Group>
                  <Form.ControlLabel>Код подтверждения</Form.ControlLabel>
                  <Stack spacing='1rem'>
                    <Form.Control name='verifyCodeField' />
                    <Button onClick={verifyEmail}>Подтвердить</Button>
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
              disabled={!isVerified}
            >
              Зарегистрироваться
            </Button>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default RegistrationPage;
