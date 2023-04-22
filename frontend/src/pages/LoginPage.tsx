import {
  FlexboxGrid, Panel, Form, Button, Schema,
} from 'rsuite';
import React, { useState } from 'react';

const { StringType } = Schema.Types;

interface IFormValue {
  email: string,
  password: string
}

const model = Schema.Model<IFormValue>({
  email: StringType()
    .isEmail('Укажите валидный email')
    .isRequired('Укажите email'),
  password: StringType()
    .isRequired('Укажите пароль'),
});

function LoginPage() {
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = useState<IFormValue | Record<string, any>>({
    email: '',
    password: '',
  });

  const login = () => {
    const errorsLength = Object.keys(formError).length;

    if (!errorsLength) {
      console.log('log in user');
    } else {
      console.log('user log in error');
    }
  };

  return (
    <FlexboxGrid justify='center'>
      <FlexboxGrid.Item>
        <Panel header={<h3 style={{ textAlign: 'center' }}>Вход</h3>} bordered>
          <Form
            model={model}
            onCheck={setFormError}
            formValue={formValue}
            onChange={fv => setFormValue(fv)}
          >
            <Form.Group controlId='email'>
              <Form.ControlLabel>email</Form.ControlLabel>
              <Form.Control name='email' />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.ControlLabel>Пароль</Form.ControlLabel>
              <Form.Control name='password' type='password' />
            </Form.Group>
            <Button appearance='primary' onClick={login} type='submit'>Войти</Button>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
export default LoginPage;
