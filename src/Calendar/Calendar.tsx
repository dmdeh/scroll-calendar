import React, { useRef, useEffect } from "react";
import * as S from "./calendar.style";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  isWithinInterval,
  getDay,
} from "date-fns";

export interface CalendarProps {
  currentDate?: Date;
  selectedDates: Date[];
  onDateClick: (date: Date) => void;
  totalMonths?: number;
}

const DEFAULT_TOTAL_MONTHS = 13;
const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar: React.FC<CalendarProps> = ({
  currentDate = new Date(),
  selectedDates,
  onDateClick,
  totalMonths = DEFAULT_TOTAL_MONTHS,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const centerMonth = Math.floor(totalMonths / 2);

  const months = Array.from({ length: totalMonths }, (_, i) =>
    addMonths(subMonths(currentDate, centerMonth), i)
  );

  useEffect(() => {
    const currentMonth = calendarRef.current?.children[
      centerMonth
    ] as HTMLElement;
    currentMonth?.scrollIntoView({ behavior: "auto", block: "center" });
  }, [centerMonth]);

  const isDateInRange = (date: Date) =>
    selectedDates.length === 2 &&
    isWithinInterval(date, {
      start: selectedDates[0],
      end: selectedDates[1],
    });

  const isStartDate = (date: Date) =>
    selectedDates.length > 0 && isSameDay(date, selectedDates[0]);

  const isEndDate = (date: Date) =>
    selectedDates.length > 1 && isSameDay(date, selectedDates[1]);

  const isWeekend = (date: Date) => {
    const dayOfWeek = getDay(date);
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <S.Container ref={calendarRef}>
      {months.map((month) => (
        <S.MonthContainer key={format(month, "yyyy-MM")}>
          <S.MonthHeader>{format(month, "yyyy년 MM월")}</S.MonthHeader>
          <S.WeekDays>
            {WEEK_DAYS.map((day) => (
              <S.WeekDay key={day}>{day}</S.WeekDay>
            ))}
          </S.WeekDays>
          <S.DaysGrid>
            {[...Array(getDay(startOfMonth(month))).keys()].map((num) => (
              <div key={num} />
            ))}
            {eachDayOfInterval({
              start: startOfMonth(month),
              end: endOfMonth(month),
            }).map((date) => (
              <S.Day
                key={format(date, "yy-MM-dd")}
                onClick={() => onDateClick(date)}
                $isInRange={isDateInRange(date)}
                $isStartDate={isStartDate(date)}
                $isEndDate={isEndDate(date)}
                $isWeekend={isWeekend(date)}
              >
                {format(date, "d")}
              </S.Day>
            ))}
          </S.DaysGrid>
        </S.MonthContainer>
      ))}
    </S.Container>
  );
};

export default Calendar;
