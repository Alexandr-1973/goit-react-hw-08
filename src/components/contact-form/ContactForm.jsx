import { useId } from "react";
import { Field, Formik, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(
        /[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/,
        "Input format xxx-xx-xx, x - only numbers"
      ),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css["form-divs"]}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} autoComplete="off" />
          <ErrorMessage className={css.error} name="name" component="p" />
        </div>

        <div className={css["form-divs"]}>
          <label htmlFor={phoneId}>Number</label>
          <Field type="text" name="number" id={phoneId} autoComplete="off" />
          <ErrorMessage className={css.error} name="number" component="p" />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
