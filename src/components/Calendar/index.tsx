"use client";
import { useState } from "react";
import Img from "next/image";
import left from "../../../public/images/left.png";
import right from "../../../public/images/right.png";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 11, 23)); // Set the date to December 23, 2024

  const weddingDate = new Date(2024, 11, 23); // Set the wedding date to December 23, 2024

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-name">
        {day}
      </div>
    ));
  };

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay =
        year === weddingDate.getFullYear() &&
        month === weddingDate.getMonth() &&
        day === weddingDate.getDate();

      days.push(
        <div key={day} className={`day ${isWeddingDay ? "wedding-day" : ""}`}>
          {day}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (direction: number) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + direction)
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar">
      <div className="header mt-5 mb-5">
        <button onClick={() => changeMonth(-1)}>
          <Img src={left} alt="previous" width={10} height={10} />
        </button>
        <h2>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => changeMonth(1)}>
          <Img src={right} alt="next" width={10} height={10} />
        </button>
      </div>
      <div className="days-of-week">{renderDaysOfWeek()}</div>
      <div className="days">{renderDaysInMonth()}</div>

      <style jsx global>{`
        .calendar {
          width: 300px;
          margin: 15px auto;
          text-align: center;
          font-family: "Arial", sans-serif;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          overflow: hidden;
          background-color: #e6f0ff; /* Light blue background */
        }
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #c1d9f1; /* Lighter blue for the header */
          padding: 10px 20px;
          border-bottom: 2px solid #a0b8e8;
        }
        .header h2 {
          margin: 0 15px;
          font-size: 1.2rem;
          color: #333;
        }
        .header button {
          margin: 0 5px;
          background-color: #b0c7e8; /* Blue for the buttons */
          border: none;
          padding: 5px;
          border-radius: 50%;
          box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
        .header button:hover {
          background-color: #a0b8e8;
        }
        .days-of-week,
        .days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          margin: 5px 0;
        }
        .day-name,
        .day,
        .empty-day {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          background-color: #f0f8ff; /* Light blue for days */
          border-radius: 5px;
          margin: 1px;
        }
        .day-name {
          background-color: #c1d9f1;
          font-weight: bold;
          color: #555;
        }
        .day {
          position: relative;
          transition: background-color 0.3s ease;
        }
        .day:hover {
          background-color: #a0b8e8;
        }
        .day.wedding-day {
          background-color: #4a90e2; /* Highlight wedding day with blue */
          color: white;
          font-weight: bold;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
