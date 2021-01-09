import React from 'react'
import './index.css';
import Form from './components/Form/Form'
import Header from './components/Header/Header';
import List from './components/List/List'
import Card from './components/Card/Card'

const App = () => (
  <>
    <Header />
    <List></List>
    <Card></Card>
    <Form></Form>
  </>
);


export default App;
