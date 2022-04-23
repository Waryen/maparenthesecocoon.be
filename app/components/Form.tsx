import { useForm } from "@formspree/react";
import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import validator from "validator";

// TODO use React Hook Form

export const Form = () => {
  const [state, handleSubmit] = useForm("xvolkgpl");
  const [legal, setLegal] = useState(false);
  const [honey, setHoney] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  // validate phone number
  const validatePhoneNumber = (input: string) => {
    if (validator.isMobilePhone(input, "fr-BE")) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
  };

  if (state.succeeded) {
    return (
      <div className="bg-green-300 p-4">
        <p className="text-center">
          J&apos;ai bien reçu votre message, je vous contacterai dans les plus
          brefs délais, merci!
        </p>
      </div>
    );
  }

  if (state.errors.length > 0) {
    return (
      <div className="bg-red-300 p-4">
        <p className="text-center">
          Whoops je rencontre un problème pour recevoir votre message, veuillez
          réessayer plus tard ou envoyez-moi un message via mes réseaux sociaux.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="lg:flex flex-wrap justify-between">
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={"firstname"} className={"mb-4"}>
          Prénom
        </Label>
        <input
          type="text"
          placeholder="John"
          id="firstname"
          name="firstname"
          aria-label="firstname"
          minLength={1}
          maxLength={50}
          required={true}
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={"lastname"} className={"mb-4"}>
          Nom
        </Label>
        <input
          type="text"
          placeholder="Doe"
          id="lastname"
          name="lastname"
          aria-label="lastname"
          minLength={1}
          maxLength={50}
          required={true}
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={"email"} className={"mb-4"}>
          Adresse Email
        </Label>
        <input
          type="email"
          placeholder="doe@mail.be"
          id="email"
          name="email"
          aria-label="email"
          maxLength={100}
          required={true}
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
        />
      </div>
      <div className="mb-8 flex flex-col lg:w-5/12">
        <Label htmlFor={"phone"} className={"mb-4"}>
          Numéro de téléphone
        </Label>
        <input
          type="tel"
          placeholder="+32469780865"
          id="phone"
          name="phone"
          aria-label="phone"
          onChange={(e) => {
            validatePhoneNumber(e.target.value);
          }}
          required={true}
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
        />

        {phoneError ? (
          <p className="mt-2 italic text-sm text-red-400">
            Mauvais format de numéro
          </p>
        ) : null}
      </div>
      <div className="mb-8 flex flex-col lg:w-full">
        <Label htmlFor={"subject"} className={"mb-4"}>
          Sujet
        </Label>
        <select
          id="subject"
          name="subject"
          aria-label="subject"
          required={true}
          className="border-2 border-gray-200 p-2 outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
        >
          <option value="Formation">Formation</option>
          <option value="Rendez-vous">Rendez-vous</option>
          <option value="J'ai une question">J&apos;ai une question</option>
        </select>
      </div>
      <div className="mb-8 flex flex-col lg:w-full">
        <Label htmlFor={"message"} className={"mb-4"}>
          Message (maximum 500 caractères)
        </Label>
        <textarea
          placeholder="..."
          id="message"
          name="message"
          aria-label="message"
          required={true}
          className="border-2 border-gray-200 p-2 resize-none outline-none hover:border-darkVertdeau focus:border-darkVertdeau"
          rows={5}
        />
      </div>
      <div className="mb-8 lg:w-full flex items-center">
        <Checkbox
          id={"legal"}
          className={
            "bg-white w-6 h-6 rounded-full border-2 border-darkVertdeau"
          }
          onCheckedChange={() => setLegal(!legal)}
          required={true}
        >
          <CheckboxIndicator asChild={true}>
            <div
              className={"bg-darkVertdeau w-3.5 h-3.5 rounded-full mx-auto"}
              aria-hidden={true}
            />
          </CheckboxIndicator>
        </Checkbox>
        <Label htmlFor={"legal"} className={"text-black ml-2 cursor-pointer"}>
          J&apos;ai lu et j&apos;accepte les mentions légales
        </Label>
      </div>
      <div className="md:block flex justify-center">
        <button
          type={"submit"}
          disabled={state.submitting}
          className="button button--calypso"
        >
          <span>Envoyer</span>
        </button>
      </div>
      <input
        type="checkbox"
        id="fax"
        style={{ display: "none" }}
        aria-hidden={true}
        onChange={() => setHoney(!honey)}
      />
      <input type="text" name="_gotcha" className="fax" />
    </form>
  );
};
