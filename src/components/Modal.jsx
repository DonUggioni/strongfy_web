import React from 'react';
import PrivacyModalContent from './PrivacyModalContent';
import TermsModalContent from './TermsModalContent';
import useAppContext from '../context/Context';
import FlatButton from './UI/buttons/FlatButton';

function RenderModal({ children, onClose }) {
  return (
    <div className='fixed z-20 top-0 right-0 bottom-0 left-0 grid items-center bg-background shadow-lg'>
      <div className='h-[80vh] max-w-[40rem] mx-auto relative z-10 bg-stone-800 overflow-auto p-8 rounded'>
        {children}
        <div className='w-100% mt-6 text-right'>
          <FlatButton onClick={onClose}>Close</FlatButton>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  const {
    privacyModalIsOpen,
    termsModalIsOpen,
    setPrivacyModalIsOpen,
    setTermsModalIsOpen,
  } = useAppContext();

  function modalType() {
    if (privacyModalIsOpen) {
      return (
        <RenderModal onClose={() => setPrivacyModalIsOpen(false)}>
          <PrivacyModalContent />
        </RenderModal>
      );
    }

    if (termsModalIsOpen) {
      return (
        <RenderModal onClose={() => setTermsModalIsOpen(false)}>
          <TermsModalContent />
        </RenderModal>
      );
    }
  }

  return modalType();
}

export default Modal;
