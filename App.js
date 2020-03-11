import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

const VSU_STUDENTS = [
  { name: 'Razmik', surname: 'Kirakosyan', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Van', surname: null, image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Tatev', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Mariam', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Fillik', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Aram', surname: 'Ghevondyan', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'David', surname: 'Ulikhanov', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'Seyran', surname:'Fidanyan', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
  { name: 'NN', email:'nanenare@gmail.com', image: 'https://www.pngfind.com/pngs/m/201-2013416_tux-linux-logo-start-menu-linux-icons-hd.png' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: VSU_STUDENTS };
  }

  boo() {
    return <h1>VSU</h1>
  };

  handleChange = (e) => {
    const val = e.target.value
    this.setState({ list: VSU_STUDENTS.filter(i => i.name.includes(val)) });
  }

  render() {

    return (
      <div className="App">
        {this.boo()}

        <div className='search'>
          <label for="gsearch">Search Contact:</label>
          <input type="search" id="gsearch" name="gsearch" onChange={this.handleChange} />
        </div>
        <div className='maincontact'>
        <div className='contacts'>
          {this.state.list.map(i =>
            <Contact
              email={i.email}
              image={i.image}
              name={i.name}
              surname={i.surname}
              key={i.name} />)}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
