# React Scroll Calendar Component

## Features

- 📅 Scrollable multi-month view (default: 13 months).
- 📍 Start and end date selection with visual highlights.
- 🎨 Fully customizable with styled-components.

---

## Usage

```tsx
import React, { useState } from "react";
import { Calendar } from "react-scroll-calendar";

function App() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateClick = (date: Date) => {
    if (selectedDates.length === 2) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else {
      setSelectedDates(
        [...selectedDates, date].sort((a, b) => a.getTime() - b.getTime())
      );
    }
  };

  return (
    <div>
      <Calendar selectedDates={selectedDates} onDateClick={handleDateClick} />
    </div>
  );
}

export default App;
```

---

## Props

| **Prop**        | **Type**               | **Required** | **Description**                                   | **Default**  |
| --------------- | ---------------------- | ------------ | ------------------------------------------------- | ------------ |
| `currentDate`   | `Date`                 | No           | The initial date for the calendar view.           | `new Date()` |
| `selectedDates` | `Date[]`               | Yes          | An array of selected dates (start and end dates). | `[]`         |
| `onDateClick`   | `(date: Date) => void` | Yes          | Callback when a date is clicked.                  | -            |
| `totalMonths`   | `number`               | No           | Number of months to display in the calendar.      | `13`         |
