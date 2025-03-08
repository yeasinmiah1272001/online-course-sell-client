import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import useRole from "../../../hooks/useRole";
import DasboardTitle from "../../../components/Dashboard/DasboardTitle";
import Container from "../../../components/Container";

const apiData = [
  {
    timetable: [
      {
        time: "08:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "09:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "10:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
      {
        time: "11:15 am",
        schedule: [
          {
            day: "Monday",
            subject: "Maths",
            teacher: "Mr. John",
            class: "Six",
          },
          {
            day: "Tuesday",
            subject: "Science",
            teacher: "Ms. Sarah",
            class: "Seven",
          },
          {
            day: "Wednesday",
            subject: "English",
            teacher: "Mr. Brown",
            class: "Eight",
          },
          {
            day: "Thursday",
            subject: "History",
            teacher: "Ms. Lisa",
            class: "Nine",
          },
          {
            day: "Friday",
            subject: "Religion",
            teacher: "Mr. David",
            class: "Ten",
          },
        ],
      },
    ],
  },
];

const TeacherClassSchedule = () => {
  const [role] = useRole();
  const timetable = apiData[0].timetable;

  return (
    <div className=" min-h-screen">
      <DasboardTitle role={role} action={"Class Schedules of Yearly"} />
      <Container className="p-4  shadow-lg rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Day</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Teacher</th>
                <th className="border border-gray-300 px-4 py-2">Class</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((slot, index) => (
                <React.Fragment key={index}>
                  {slot.schedule.map((item, subIndex) => (
                    <tr key={subIndex} className={subIndex % 2 === 0 ? "" : ""}>
                      {subIndex === 0 && (
                        <td
                          rowSpan={slot.schedule.length}
                          className="border border-gray-300 px-4 py-2 font-medium text-gray-700 align-top"
                        >
                          {slot.time}
                        </td>
                      )}
                      <td className="border border-gray-300 px-4 py-2">
                        {item.day}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.subject}
                      </td>

                      <td className="border border-gray-300 px-4 py-2">
                        {item.class}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.teacher}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default TeacherClassSchedule;
