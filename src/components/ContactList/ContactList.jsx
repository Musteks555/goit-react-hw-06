import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contactsData, deleteContact }) => {
    return (
        <div className={css.conctactList}>
            {contactsData.map(({ id, name, number }) => {
                return <Contact key={id} contactName={name} contactNumber={number} contactId={id} deleteContact={deleteContact} />;
            })}
        </div>
    );
};

export default ContactList;
