import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function Displayer() {
  const { locationsReducer } = useSelector((state) => state);
  const { locations } = locationsReducer;
  const [locationsDisplay, setLocationsDisplay] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (locations) {
      if (locations !== locationsDisplay) {
        setLocationsDisplay(locations);
      }
    }
  });

  if (locationsDisplay) {
    return (
      <div className="locations-displayer">
        {locationsDisplay.length > 0
          ? locationsDisplay.map((b) => <Card key={b.title} data={b} />)
          : null}
      </div>
    );
  }
  return <h3>Empty collection</h3>;
}

export default Displayer;
