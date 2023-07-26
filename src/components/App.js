import '../styles/App.css';
import RatingSection from './RatingSection';
import React from 'react';

function App() {
  const sections = ["Design", "Functioning", "Animations", "Overall feeling"]
  const [ratings, setRatings] = React.useState(sections.map(section => {
    return {sectionName : section, rate : 0}
  }))

  const starBlockElements = ratings.map(rating => {
    return <RatingSection sectionName={rating.sectionName} />
  })

  return (
    <div className="app">
      {starBlockElements}
    </div>
  );
}

export default App;
