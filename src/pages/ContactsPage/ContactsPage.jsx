import { useEffect } from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/contact-form/ContactForm.jsx";
import SearchBox from "../../components/search-box/SearchBox.jsx";
import ContactList from "../../components/contact-list/ContactList.jsx";
import "./ContactPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default ContactsPage;
