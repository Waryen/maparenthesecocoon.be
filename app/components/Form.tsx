import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { initialValues, validationSchema } from '~/const';

export const Form = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [honey, setHoney] = useState(false);
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const submitHandler: SubmitHandler<typeof initialValues> = async (data) => {
    if (honey) {
      setDisable(true);
      return;
    }
    if (disable) return;

    const response = await axios.post('https://formspree.io/f/xvolkgpl', data);
    if (response.status !== 200) {
      enqueueSnackbar(
        'Nous rencontrons un problème pour recevoir votre message, veuillez réessayer plus tard.',
        { variant: 'error' }
      );
    } else {
      enqueueSnackbar('Votre message a été envoyé.', { variant: 'success' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="lg:flex flex-wrap justify-between"
    >
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={'firstname'} className={'mb-4'}>
          Prénom
        </Label>
        <input
          type="text"
          id="firstname"
          placeholder="John"
          aria-label="firstname"
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          {...register('firstname')}
        />
        <ErrorMessage
          errors={errors}
          name="firstname"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={'lastname'} className={'mb-4'}>
          Nom
        </Label>
        <input
          type="text"
          id="lastname"
          placeholder="Smith"
          aria-label="lastname"
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          {...register('lastname')}
        />
        <ErrorMessage
          errors={errors}
          name="lastname"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={'email'} className={'mb-4'}>
          Adresse Email
        </Label>
        <input
          type="email"
          id="email"
          placeholder="smith@example.be"
          aria-label="email"
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          {...register('email')}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={'phone'} className={'mb-4'}>
          Numéro de téléphone
        </Label>
        <input
          type="tel"
          id="phone"
          placeholder="+32487986759"
          aria-label="phone"
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          {...register('phone')}
        />
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-full">
        <Label htmlFor={'subject'} className={'mb-4'}>
          Sujet
        </Label>
        <select
          id="subject"
          aria-label="subject"
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          {...register('subject')}
        >
          <option value="Formation">Formation</option>
          <option value="Rendez-vous">Rendez-vous</option>
          <option value="J'ai une question">J&apos;ai une question</option>
        </select>
        <ErrorMessage
          errors={errors}
          name="subject"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-full">
        <Label htmlFor={'message'} className={'mb-4'}>
          Message (maximum 500 caractères)
        </Label>
        <textarea
          id="message"
          aria-label="message"
          placeholder="Votre message ici..."
          className="border-2 border-gray-200 p-2 resize-none outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          rows={5}
          {...register('message')}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <div className="mb-8 lg:w-full flex flex-col">
        <div className="flex items-center">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <>
                <Checkbox
                  id="consent"
                  className="bg-white w-6 h-6 rounded-full border-2 border-darkVertdeau"
                  onCheckedChange={field.onChange}
                >
                  <CheckboxIndicator asChild={true}>
                    <div
                      className={
                        'bg-darkVertdeau w-3.5 h-3.5 rounded-full mx-auto'
                      }
                      aria-hidden={true}
                    />
                  </CheckboxIndicator>
                </Checkbox>
                <Label
                  htmlFor={'consent'}
                  className={'text-black ml-2 cursor-pointer'}
                >
                  J&apos;ai lu et j&apos;accepte les mentions légales
                </Label>
              </>
            )}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="consent"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 m-1" key={type}>
                {message}
              </p>
            ))
          }
        />
      </div>
      <input
        type="checkbox"
        id="fax"
        style={{ display: 'none' }}
        aria-hidden={true}
        onChange={() => setHoney(true)}
      />
      <div className="md:block flex justify-center">
        <button
          type="submit"
          disabled={disable || isSubmitting}
          className="bg-darkVertdeau py-4 px-6 text-gray-700 text-xl hover:bg-vertdeau focus:bg-vertdeau transition-colors"
        >
          {isSubmitting ? (
            <span>Envois en cours...</span>
          ) : (
            <span>Envoyer</span>
          )}
        </button>
      </div>
    </form>
  );
};
