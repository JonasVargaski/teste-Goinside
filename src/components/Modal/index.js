import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Wrapper, Container, Header, Body, Footer } from './styles';

const Modal = ({ show, toogle, children, width, maskClosabe, onCLose }) => {
  useEffect(() => {
    if (show) {
      const app = document.getElementById('root');
      if (app) app.classList.add('modal-blur');
    } else {
      const app = document.getElementById('root');
      if (app) app.classList.remove('modal-blur');
      onCLose();
    }
  }, [show, onCLose]);

  function handleOverlayClicked(e) {
    if (e.target.getAttribute('role') === 'dialog' && maskClosabe) {
      toogle(!show);
    }
  }

  return show
    ? ReactDOM.createPortal(
        <Wrapper
          onClick={handleOverlayClicked}
          aria-modal
          aria-hidden
          tabIndex="-1"
          role="dialog"
        >
          <Container width={width}>{show && children}</Container>
        </Wrapper>,
        document.body
      )
    : null;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toogle: PropTypes.func,
  onCLose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  width: PropTypes.string,
  maskClosabe: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  width: null,
  maskClosabe: false,
  toogle: () => {},
  onCLose: () => {},
};
