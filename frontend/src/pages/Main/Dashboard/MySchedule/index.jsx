import { useState } from "react";
import { Calendar, Badge } from "antd";
import dayjs from "dayjs";
import { Icons, scheduleData } from "@/constants";
import { HMButton } from "@/components";

export const MySchedule = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs("2026-07-06"));

  const onSelect = (newValue) => {
    setSelectedDate(newValue);
  };

  const dateCellRender = (value) => {
    const listData = scheduleData.filter(
      (item) => item.date === value.format("YYYY-MM-DD")
    );
    return (
      <ul className="list-unstyled m-0 p-0">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status="warning" />
          </li>
        ))}
      </ul>
    );
  };

  const renderScheduleItems = (date) => {
    return scheduleData
      .filter((item) => item.date === date)
      .map((item, index) => (
        <div key={index} className="mb-3">
          <div className="text-white-50">{item.time}</div>
          <div className="text-white fw-bold">{item.title}</div>
          <div className="text-white-50">{item.role}</div>
        </div>
      ));
  };

  return (
    <div className="bg-dark text-white p-4" style={{ maxWidth: "400px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">My Schedule</h2>
        <div>{Icons.Calendar}</div>
      </div>
      <Calendar
        // fullscreen={false}
        headerRender={({ value, onChange }) => {
          const current = value.clone();
          return (
            <div className="d-flex justify-content-between align-items-center">
              <HMButton
                size={"small"}
                variant={"primary"}
                onClick={() => onChange(current.clone().subtract(1, "month"))}
                icon={Icons.RightArrow}
              />
              <div className="text-white fw-bold">
                {current.format("MMMM, YYYY")}
              </div>
              <HMButton
                size={"small"}
                variant={"primary"}
                onClick={() => onChange(current.clone().add(1, "month"))}
                icon={Icons.LeftArrow}
              />
            </div>
          );
        }}
        onSelect={onSelect}
        dateCellRender={dateCellRender}
        className="custom-calendar"
      />
      <div className="mt-4">
        <h5 className="mb-3">{selectedDate.format("dddd, DD MMMM YYYY")}</h5>
        {renderScheduleItems(selectedDate.format("YYYY-MM-DD"))}
      </div>
    </div>
  );
};
