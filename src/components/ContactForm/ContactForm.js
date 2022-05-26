import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = state;
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    class: '',
    text: '',
  });

  const onChangeForm = (e) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await postSubmition();
    setSubmitting(false);
  }

  const postSubmition = async () => {
    try {
      await send(
        'service_mtjpje9',
        'template_078yzwz',
        { name, email, message },
        'QUkx6P_PifsmmF3DL',
      )
      setSubmitMessage({
        class: 'bg-green-500',
        text: 'Thanks, someone will be in touch shortly.',
      });
      setState({
        name: '',
        email: '',
        message: '',
      });
    } catch {
      console.log('Faild!');
      setSubmitMessage({
        class: 'bg-red-500',
        text: 'Sorry, there was a problem. Please, try again!.',
      });
    }
  }

  const { t } = useTranslation();

  return (
    <div className="h-full flex justify-center flex-col">
      <div className="w-4/5 md:w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span>{t('contactform.1')}</span>
        </h1>
        {
          submitMessage &&
          <div className={`my-4 text-white w-full p-4 ${submitMessage.class}`}>
            { submitMessage.text }
          </div>
        }
        <form
          onSubmit={onSubmitForm}
          className="flex flex-col"
        >
          <div className="my-2 flex flex-col">
            <label htmlFor="name">{t('contactform.2')}</label>
            <input
              onChange={onChangeForm}
              type="text"
              id="name"
              className="border-2 p-2"
              value={name}
            />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="email">{t('contactform.3')}</label>
            <input
              onChange={onChangeForm}
              type="email"
              id="email"
              className="border-2 p-2"
              value={email}
            />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="message">{t('contactform.4')}</label>
            <textarea
              onChange={onChangeForm}
              id="message"
              className="border-2 p-2"
              value={message}
            />
          </div>
          <button disabled={submitting} className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
            { submitting ? 'Submitting...' : 'Submit' }
          </button>
        </form>
      </div>
    </div>
  )
}
