import React from 'react'
import './index.css';
import Form from './components/Form/Form'
import Header from './components/Header/Header';
import List from './components/List/List'
import Card from './components/Card/Card'

const initialStateArray = [
  {
    name: 'Meksykańska zupa z batatami, fasolą i chorizo',
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

class App extends React.Component {

  state = {
    items: [...initialStateArray],
    isCardOpen: false,
    isFormOpen: true,
  };

  addMeal = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }))
    this.closeForm();
  }

  openCard = () => {
    this.setState({
      isCardOpen: true,
    })
  }

  closeCard = () => {
    this.setState({
      isCardOpen: false,
    })
  }

  openForm = () => {
    this.setState({
      isFormOpen: true,
    })
  }

  closeForm = () => {
    this.setState({
      isFormOpen: false,
    })
  }


  render() {
    const { isCardOpen, isFormOpen } = this.state;
    return (
      <>
        <Header openFormFn={this.openForm} />
        <List items={this.state.items} openCardFn={this.openCard}></List>
        {isCardOpen && <Card closeCardFn={this.closeCard}></Card>}
        {isFormOpen && <Form closeFormFn={this.closeForm}></Form>}
      </>
    )
  }
}


export default App;
