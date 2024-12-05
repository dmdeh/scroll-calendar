````ts
import React, { useState } from 'react';
import { Calendar } from 'react-scroll-calendar';

function App() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateClick = (date: Date) => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else {
      setSelectedDates([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
    }
  };

  return (
    <div>
      <Calendar
        selectedDates={selectedDates}
        onDateClick={handleDateClick}
      />
    </div>
  );
}

export default App;```
````
