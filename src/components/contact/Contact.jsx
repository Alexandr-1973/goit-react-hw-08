import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contactInfo }) => {
  const { id, name, number } = contactInfo;
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <ul className={css["contact-info"]}>
        <li>
          <p className={css.item}>
            <IoPerson className={css.icon} />
            {name}
          </p>
        </li>
        <li>
          <p className={css.item}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </li>
      </ul>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
