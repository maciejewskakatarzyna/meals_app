import React, { useState } from 'react'
import './index.css';
import Form from 'components/Form/Form'
import Header from 'components/Header/Header';
import List from 'components/List/List'
import Card from 'components/Card/Card'

const initialStateArray = [
  {
    title: 'Meksykańska zupa z batatami, fasolą i chorizo',
    image: 'https://assets.tmecosys.com/image/upload/t_web276x230@2x/img/recipe/ras/Assets/73BDF0E2-F8C2-42BD-AB20-6B3FF913A9EB/Derivates/5adab12c-e759-4857-979e-0256fce640ad.jpg',
    link: 'https://cookidoo.pl/recipes/recipe/pl/r258461',
    type: 'dinner',
    vege: false,
    hot: true,
    sweet: false,
    soup: true,
    salad: false,
  }
]

const App = () => {

  const [isCardOpen, setCard] = useState(false);
  const [isFormOpen, setForm] = useState(false);
  const [items, setItem] = useState([...initialStateArray])
  const [elName, setElName] = useState(null)

  const toggleForm = () => {
    isFormOpen ? setForm(false) : setForm(true);
  }

  const toggleCard = () => {
    isCardOpen ? setCard(false) : setCard(true);
  }

  const handleCardOpen = (e) => {
    setElName(e.target.parentNode.getAttribute('name'))
    return elName
  }

  const addItem = (data) => {
    const item = {
      title: data.title,
      image: data.image,
      link: data.link,
    }
    setItem(prevState => [...prevState, item])
    toggleForm()
  }


  return (
    <>
      <Header toggleForm={toggleForm} />
      <List items={items} handleCardOpen={handleCardOpen} toggleCard={toggleCard}></List>
      {isCardOpen && <Card items={items} toggleCard={toggleCard} ></Card>}
      {isFormOpen && <Form toggleForm={toggleForm} addItem={addItem}></Form>}
    </>
  )
}



export default App;
