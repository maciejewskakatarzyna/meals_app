import React, { useContext } from 'react';
import Header from 'components/Header/Header';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import { FormContext } from 'views/Root';

const MainTemplate = ({ children }) => {
  const { toggleForm } = useContext(FormContext);

  return (
    <Wrapper>
      <Header toggleForm={toggleForm} />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
