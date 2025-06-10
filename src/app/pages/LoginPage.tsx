"use client";
import React, { useState, useRef } from "react";
import styles from "@/app/styles/LoginPage.module.scss";
import { StringState, BooleanState } from "@/app/types";

export default function LoginPage(): React.JSX.Element {
  const [email, setEmail]: StringState = useState("asd@asd");
  const [password, setPassword]: StringState = useState("ASD");
  const [isEmailInvalid, setIsEmailInvalid]: BooleanState = useState(false);
  // ZAK: trqbva da suzdam i Create user SIGN IN stranicata, za da se suzdavat useri

  const emailRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const passwordRef: React.RefObject<HTMLInputElement | null> = useRef(null);

  const emailRegex: RegExp =
    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      emailRef?.current?.focus();
      setIsEmailInvalid(true);
      return;
    } else {
      setIsEmailInvalid(false);
    }

    // ZAK: call BE za proverka ima li takuv user s takava parola
    // ZAK: ako ima, da zapisha vuv Redux {isUserLogged: true}
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.form} center-x-y`}
      action="/"
    >
      <label htmlFor="email">Email:</label>
      <input
        ref={emailRef}
        onChange={onEmailChange}
        className={`${styles["email-inp"]} inp-primary`}
        type="email"
        id="email"
        required
        autoComplete="on"
        value={email}
      />
      <p
        className={`${
          isEmailInvalid
            ? styles["show-email-error"]
            : styles["hide-email-error"]
        } ${styles["error-message"]}`}
      >
        Invalid email
      </p>
      <label htmlFor="password">Password:</label>
      <input
        ref={passwordRef}
        onChange={onPasswordChange}
        className={`${styles["password-inp"]} inp-primary`}
        type="password"
        id="password"
        required
        autoComplete="on"
        value={password}
      />
      <p className={styles["error-message"]}>&nbsp;</p>
      <input className="btn-primary" type="submit" value="Login" />
    </form>
  );
}
