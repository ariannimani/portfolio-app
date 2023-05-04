"use client";
import React, { FC } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  IoCloseSharp,
  IoDocumentSharp,
  IoPersonSharp,
  IoMail,
} from "react-icons/io5";

interface ContactProps {
  closeContactHandler: () => void;
}

const Contact: FC<ContactProps> = ({ closeContactHandler }) => {
  const [state, handleSubmit] = useForm("xgedzzel");

  if (state.succeeded) {
    return (
      <div
        className="m-auto p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-dl dark:text-green-400 w-fit"
        role="alert"
      >
        <span className="font-medium">Message sent!</span> Thank you for
        contacting me!
      </div>
    );
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-uld opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
          className="inline-block align-bottom bg-gray-sl dark:bg-gray-d rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="flex w-full justify-end cursor-pointer">
            <IoCloseSharp className="text-2xl" onClick={closeContactHandler} />
          </div>
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Feel free to contact me
              </h3>
              <div className="mt-2">
                <form onSubmit={handleSubmit} className="p-4">
                  <div className="mb-3">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoPersonSharp />
                      </span>
                      <input
                        className="pl-10 pr-3 py-2 w-full rounded-lg border-2 bg-gray-ul dark:bg-gray-dl border-gray-ml dark:border-gray-d  focus:outline-none focus:dark:border-yellow-d focus:border-yellow-c"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required={true}
                      />
                    </div>
                    <ValidationError
                      prefix="text"
                      field="text"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoDocumentSharp />
                      </span>
                      <input
                        className="pl-10 pr-3 py-2 w-full rounded-lg border-2 bg-gray-ul dark:bg-gray-dl border-gray-ml dark:border-gray-d  focus:outline-none focus:dark:border-yellow-d focus:border-yellow-c"
                        type="text"
                        name="Subject"
                        placeholder="Subject"
                        required={true}
                      />
                    </div>
                    <ValidationError
                      prefix="text"
                      field="text"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <IoMail />
                      </span>
                      <input
                        className="pl-10 pr-3 py-2 w-full rounded-lg border-2 bg-gray-ul dark:bg-gray-dl border-gray-ml dark:border-gray-d  focus:outline-none focus:dark:border-yellow-d focus:border-yellow-c"
                        type="email"
                        name="_replyto"
                        placeholder="E-mail"
                        required={true}
                      />
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="pl-3 pr-5 py-2 w-full rounded-lg border-2 bg-gray-ul dark:bg-gray-dl border-gray-ml dark:border-gray-d focus:outline-none focus:dark:border-yellow-d focus:border-yellow-c resize-none"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      required={true}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-ul dark:bg-gray-d text-base leading-6 font-medium text-white shadow-sm hover:opc focus:outline-none hover:border-yellow-c focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
