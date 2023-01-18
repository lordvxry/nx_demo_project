import { FC } from 'react';
import style from './MainStyle.module.scss';
import { AnchorButton, Button, FormGroup, InputGroup } from '@blueprintjs/core';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface FormDataType {
  name: string;
  color: string;
  movie: string;
  animal: string;
}

const defaultValues: FormDataType = {
  name: '',
  color: '',
  movie: '',
  animal: ''
};

const defaultPlaceholders: FormDataType = {
  name: 'Your name...',
  color: 'Your favorite color...',
  movie: 'Your favorite movie...',
  animal: 'Your favorite animal...'
};
const QuestionnairePage: FC = () => {
  const { control, formState: { dirtyFields, isDirty }, handleSubmit } = useForm({ defaultValues });

  const formSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const formFields: Array<keyof FormDataType> = ['name', 'color', 'movie', 'animal'];

  return (
    <div className={style.container}>
      <div className={style.exit_btn}>
        <AnchorButton
          href="/"
          icon="log-out"
          intent="danger"
          text="Выйти"
        />
      </div>
      <div className={style.form}>
        {formFields.map((item) => (
          <FormGroup
            key={item}
            label={item === 'name' ? 'Name' : ''}
            labelInfo="(required)"
            labelFor="name"
          >
            <Controller
              name={item}
              control={control}
              render={({ field }) => <InputGroup
                {...field}
                id={item}
                intent={dirtyFields[item] ? 'success' : 'none'}
                placeholder={defaultPlaceholders[item]}
              />}
            />
          </FormGroup>
        ))}
        <Button
          onClick={handleSubmit(formSubmit)}
          disabled={!(dirtyFields.name && isDirty)}
          type="submit"
          intent="success"
          text="Отправить"
        />
      </div>
    </div>
  );
};

export default QuestionnairePage;
