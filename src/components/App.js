import '../styles/App.css';
import RatingSection from './RatingSection';
import React from 'react';
import Total from './Total';

function App() {
  const sections = ["Design", "Functioning", "Animations", "Overall feeling"]
  const [ratings, setRatings] = React.useState(sections.map(section => {
    return {sectionName : section, rate : 0}
  }))
  const [totalShown, setTotalShown] = React.useState(false)

  function rateSection(targetStarIndex, sectionName) {
    setRatings(prevRatings => {
      return prevRatings.map(prevRating => {
        return prevRating.sectionName === sectionName
          ? {...prevRating, rate : targetStarIndex + 1}
          : prevRating
      })
    })
  }

  const starBlockElements = ratings.map(rating => {
    return <RatingSection sectionName={rating.sectionName} rateSection={rateSection} />
  })

  function allRatingsAreComplete() {
    return ratings.every(section => section.rate !== 0)
  }

  React.useEffect(() => {
    console.log(ratings)
    if(allRatingsAreComplete()) {
      setTotalShown(true)
    }
  }, [ratings])

  return (
    <div className="app">
      <div className="ratings-container">
        {starBlockElements}
      </div>
      {totalShown && <Total rates={ratings.map(section => section.rate)} />}
    </div>
  );
}

export default App;
