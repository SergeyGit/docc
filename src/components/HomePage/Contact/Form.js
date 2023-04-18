import React, { useState } from 'react';
import styles from './contact.module.css';
import { ButtonPrimary } from '../../Links/Links';
import SuccessImg from './checkmark.svg';
// import { sendEmail } from './mailer';

const initData = {
  nameForm: '',
  client_email: '',
  text: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!statusError && phone.length > 4) {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData(initData);
      setSuccess(true);
    }, 1000);
    // sendEmail(formData)
    //   .then((res) => {
    //     setLoading(false);
    //     if (res.status === 200) {
    //       setFormData(initData);
    //       setSuccess(true);
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //   });
  };

  return (
    <div className={styles.formWrap}>
      {success ? (
        <div className={styles.success}>
          <SuccessImg />
          <div className={styles.successCaption}>Thank you for contacing us!</div>
          <div className={styles.successText}>We will get back to you as soon as possible</div>
          <ButtonPrimary
            title="Повернутись до форми"
            classes={styles.successButton}
            onClick={() => setSuccess(false)}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <label htmlFor="nameForm">Ім’я (опціонально)</label>
            <input
              id="nameForm"
              name="nameForm"
              type="text"
              value={formData.nameForm}
              onChange={handleChange}
              required={false}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="client_email">Пошта</label>
            <input
              id="client_email"
              type="email"
              value={formData.client_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="text">Повідомлення</label>
            <textarea id="text" value={formData.text} onChange={handleChange} required />
          </div>

          <ButtonPrimary
            title="Надіслати"
            classes={styles.button}
            type="submit"
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
};

export default Form;
