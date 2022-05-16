import { yupResolver } from '@hookform/resolvers/yup';
import { Label } from '@radix-ui/react-label';
import { useNavigate } from '@remix-run/react';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { AdminLayout } from '~/components/AdminLayout';
import { initialValuesLogin, validationSchemaLogin } from '~/const';
import { useAuth } from '~/context/AuthContext';
import { ROUTES } from '~/routes';

export type LoginValues = {
  email: string;
  password: string;
};

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValuesLogin,
    resolver: yupResolver(validationSchemaLogin),
  });
  const [honey, setHoney] = useState(false);
  const [disable, setDisable] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { signIn, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (checkAuth()) {
      navigate(`${ROUTES.DASHBOARD}`, { replace: true });
    }
  });

  useEffect(() => {
    if (honey) {
      setDisable(true);
    }
  }, [honey]);

  const onSubmit: SubmitHandler<LoginValues> = (values) => {
    const response = signIn(values);
    if (response) {
      navigate(`${ROUTES.DASHBOARD}`, { replace: true });
    } else {
      enqueueSnackbar('Impossible de vous connecter pour le moment.', {
        variant: 'error',
      });
    }
  };

  return (
    <AdminLayout>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Label htmlFor="email">E-mail</Label>
          <input type="text" {...register('email')} id="email" />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <Label htmlFor="password">Mot de passe</Label>
          <input type="password" {...register('password')} id="password" />
          {errors.password?.message && <span>{errors.password.message}</span>}
        </fieldset>
        <fieldset>
          <input
            type="checkbox"
            style={{ display: 'none' }}
            id="fax"
            onChange={() => setHoney(true)}
          />
          <button type="submit" disabled={disable}>
            Se connecter
          </button>
        </fieldset>
      </form>
    </AdminLayout>
  );
}
