import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Project from "./Project";
import graphic1 from "./graphic1.jpeg";
import graphic2 from "./graphic2.jpeg";
import graphic3 from "./graphic3.jpeg";
import graphic4 from "./graphic4.jpeg";
import graphic5 from "./graphic5.jpeg";
import graphic6 from "./graphic6.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Project 
       image ={graphic1}
       title = 'LaundryHelper'
       description = 'A java-based GUI desktop project that provides users with information about laundry machine availability and laundry card balance, with the emphasis on the user experience optimization and time efficiency in laundry planning'
       link = 'https://github.com/sylvia830/LaundryHelper'/>

      <Project 
       image ={graphic2}
       title = 'Vehicle Rental Service'
       description = 'A full database web application using PHP, HTML, CSS and Oracle database system that models the functionalities of a vehicle rental service company'
       link ='https://github.com/sylvia830/Vehicle-Rental-Service'/>

      <Project 
       image ={graphic3}
       title = 'To-do List Tracker'
       description = 'A React web application using HTML, CSS, JavaScript, JSON API and react-router-dom that enables users to manage their to-do lists'
       link ='https://github.com/sylvia830/To-do-List-'/>
      
      <Project 
       image ={graphic4}
       title = 'Real Estate Price Prediction'
       description = 'Utilized polynomial regression model to predict house price of unit area based on transaction date, house age, distance to the nearest MRT station, etc'
       link ='https://github.com/sylvia830/Real_Estate_Prices_Prediction'/>

      <Project 
       image ={graphic5}
       title = 'Ask BERT Anything'
       description = 'This is a question answering web app based on Natural Language Processing(NLP) with a pre-trained BERT model from Tensorflow.JS.'
       link ='https://github.com/sylvia830/nlp-qna'/>

      <Project 
       image ={graphic6}
       title = 'Discord Bot'
       description = 'A discord bot designed for music lovers that maintains the lists of played and unplayed albums, as well as reviews.'
       link ='https://github.com/sylvia830/discord-bot'/>

      <Footer />
      </header>
    </div>
  );
}

export default App;
