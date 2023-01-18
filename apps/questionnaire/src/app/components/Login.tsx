import { FC } from 'react';
import style from './MainStyle.module.scss';
import { AnchorButton, FormGroup, InputGroup } from '@blueprintjs/core';
import { Controller, useForm } from 'react-hook-form';

interface LoginData {
  login: string;
  password: string;
}

const defaultValues: LoginData = {
  login: '',
  password: ''
};

const Login: FC = () => {
  const { control, formState: { dirtyFields } } = useForm({ defaultValues });

  return (
    <div className={style.container}>
      <div className={style.form}>
        <FormGroup label="Login" labelInfo="(required)" labelFor="login">
          <Controller
            name="login"
            control={control}
            render={({ field }) => <InputGroup
              {...field}
              id="login"
              intent={dirtyFields.login ? 'success' : 'none'}
            />}
          />
        </FormGroup>
        <FormGroup label="Password" labelInfo="(required)" labelFor="password">
          <Controller
            name="password"
            control={control}
            render={({ field }) => <InputGroup
              {...field}
              id="password"
              intent={dirtyFields.password ? 'success' : 'none'}
            />}
          />
        </FormGroup>
        <AnchorButton
          disabled={!(dirtyFields.login && dirtyFields.password)}
          type="submit"
          href="/main"
          icon="log-in"
          intent="success"
          text="Войти"
        />
      </div>
    </div>
  );
};

export default Login;
