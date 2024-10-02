import { Link } from "react-router-dom";
import { Icons } from ".";
import { Avatar, Tag, Space } from "antd";

function getItem(label, key, icon, path) {
  return {
    key,
    icon,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const DashboardAsideMenu = [
  getItem("Dashboard", "/", Icons.Dashboard, "/"),
  getItem(
    "All Employees",
    "/all-employees",
    Icons.AllEmployees,
    "/all-employees"
  ),
  getItem(
    "All Departments",
    "/all-departments",
    Icons.AllDepartments,
    "/all-departments"
  ),
  getItem("Attendance", "/attendance", Icons.Attendance, "/attendance"),
  getItem("Payroll", "/payroll", Icons.Payroll, "/payroll"),
  getItem("Jobs", "/jobs", Icons.Jobs, "/jobs"),
  getItem("Candidates", "/candidates", Icons.Candidates, "/candidates"),
  getItem("Leaves", "/leaves", Icons.Leaves, "/leaves"),
  getItem("Holidays", "/holidays", Icons.Holidays, "/holidays"),
  getItem("Settings", "/settings", Icons.Settings, "/settings"),
];

function stylguideItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const StyleguideAsideMenu = [
  stylguideItem("Font Family & Size", "/styleguide", "/styleguide"),
  stylguideItem("Button", "/styleguide/button", "button"),
  stylguideItem("Inputs", "/styleguide/input", "input"),
  stylguideItem("CheckBox", "/styleguide/checkbox", "checkbox"),
  stylguideItem("Modals", "/styleguide/modal", "modal"),
  stylguideItem("Table &  Pagination", "/styleguide/table", "table"),
  stylguideItem("Icons", "/styleguide/icons", "icons"),
  stylguideItem("Tabs", "/styleguide/tabs", "tabs"),
  stylguideItem("Tags", "/styleguide/tags", "tags"),
];

export const columns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Check In Time",
    dataIndex: "checkInTime",
    key: "checkInTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "on time":
          color = "var(--clr-success)";
          break;
        case "late":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const data = [
  {
    key: "2",
    name: "Jim Green",
    designation: "Project Manager",
    type: "Part-time",
    checkInTime: "09:10 AM",
    status: "Late",
  },
  {
    key: "3",
    name: "Joe Black",
    designation: "UI Designer",
    type: "Contract",
    checkInTime: "08:55 AM",
    status: "On time",
  },
  {
    key: "4",
    name: "Sarah White",
    designation: "HR Manager",
    type: "Full-time",
    checkInTime: "09:15 AM",
    status: "Late",
  },
  {
    key: "5",
    name: "Chris Green",
    designation: "Backend Developer",
    type: "Full-time",
    checkInTime: "08:50 AM",
    status: "On time",
  },
  {
    key: "6",
    name: "Sophia Brown",
    designation: "QA Engineer",
    type: "Contract",
    checkInTime: "09:20 AM",
    status: "Late",
  },
  {
    key: "7",
    name: "Henry Jones",
    designation: "Data Analyst",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "8",
    name: "Emily Davis",
    designation: "Frontend Developer",
    type: "Part-time",
    checkInTime: "09:25 AM",
    status: "Late",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "1",
    name: "John Brown",
    designation: "Software Developer",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
];

//
export const employeeColumns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "CTC",
    dataIndex: "ctc",
    key: "ctc",
  },
  {
    title: "Salary Per Month",
    dataIndex: "salaryPerMonth",
    key: "salaryPerMonth",
  },
  {
    title: "Deduction",
    dataIndex: "deduction",
    key: "deduction",
    render: (text) => <>{text[0] ? text : "-"}</>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "completed":
          color = "var(--clr-success)";
          break;
        case "pending":
          color = "var(--clr-alert)";
          break;
        case "progress":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

export const employeeData = [
  {
    key: "1",
    name: "John Doe",
    ctc: "$50,000",
    salaryPerMonth: "$4,167",
    deduction: "",
    status: "Completed",
  },
  {
    key: "2",
    name: "Jane Smith",
    ctc: "$48,000",
    salaryPerMonth: "$4,000",
    deduction: "$150",
    status: "Pending",
  },
  // Add more employees here (total of 20)
  {
    key: "3",
    name: "Michael Johnson",
    ctc: "$55,000",
    salaryPerMonth: "$4,583",
    deduction: "$250",
    status: "Completed",
  },
  {
    key: "4",
    name: "Sarah Williams",
    ctc: "$60,000",
    salaryPerMonth: "$5,000",
    deduction: "$300",
    status: "Pending",
  },
  {
    key: "5",
    name: "Robert Brown",
    ctc: "$47,500",
    salaryPerMonth: "$3,958",
    deduction: "$100",
    status: "Completed",
  },
];

export const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: " <SmileOutlined />",
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const scheduleData = [
  {
    date: "2026-07-06",
    time: "09:30",
    title: "Practical Task Review",
    role: "UI/UX Designer",
  },
  {
    date: "2026-07-06",
    time: "12:00",
    title: "Resume Review",
    role: "Magento Developer",
  },
  {
    date: "2026-07-06",
    time: "01:30",
    title: "Final HR Round",
    role: "Sales Manager",
  },
  {
    date: "2026-07-07",
    time: "09:30",
    title: "Practical Task Review",
    role: "Front end Developer",
  },
  { date: "2026-07-07", time: "11:00", title: "TL Meeting", role: "React JS" },
];

// * Dashboard Data * //

// * All Employees Data * //
export const AllEmployeesColumns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </Space>
    ),
  },
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    key: "employeeId",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "";
      switch (status.toLowerCase()) {
        case "permanent":
          color = "var(--clr-success)";
          break;
        case "contract":
          color = "var(--clr-primary)";
          break;
        case "notice":
          color = "var(--clr-alert)";
          break;
        case "probation":
          color = "var(--clr-error)";
          break;
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        {Icons.Eye}
        {Icons.Edit}
        {Icons.Bin}
      </Space>
    ),
  },
];
export const AllEmployeesData = [
  {
    key: "1",
    name: "Vasilisa Petrova",
    avatar: "https://i.pravatar.cc/150?img=1",
    employeeId: "000666001",
    department: "Design",
    designation: "UI/UX Designer",
    type: "Office",
    status: "permanent",
  },
  {
    key: "2",
    name: "Dina Ahmed",
    avatar: "https://i.pravatar.cc/150?img=2",
    employeeId: "000666002",
    department: "Development",
    designation: "PHP Developer",
    type: "Office",
    status: "contract",
  },
  {
    key: "3",
    name: "Jack Thompson",
    avatar: "https://i.pravatar.cc/150?img=3",
    employeeId: "000666003",
    department: "Sales",
    designation: "Sales Manager",
    type: "Office",
    status: "notice",
  },
  {
    key: "4",
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    employeeId: "000666004",
    department: "Marketing",
    designation: "Digital Marketing Specialist",
    type: "Remote",
    status: "probation",
  },
  {
    key: "5",
    name: "Raj Patel",
    avatar: "https://i.pravatar.cc/150?img=5",
    employeeId: "000666005",
    department: "Development",
    designation: "Full Stack Developer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "6",
    name: "Sofia Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=6",
    employeeId: "000666006",
    department: "Human Resources",
    designation: "HR Manager",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "7",
    name: "Liam O'Connor",
    avatar: "https://i.pravatar.cc/150?img=7",
    employeeId: "000666007",
    department: "Finance",
    designation: "Financial Analyst",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "8",
    name: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?img=8",
    employeeId: "000666008",
    department: "Design",
    designation: "Graphic Designer",
    type: "Remote",
    status: "Permanent",
  },
  {
    key: "9",
    name: "Olivia Brown",
    avatar: "https://i.pravatar.cc/150?img=9",
    employeeId: "000666009",
    department: "Customer Support",
    designation: "Support Specialist",
    type: "Office",
    status: "Contract",
  },
  {
    key: "10",
    name: "Mohammed Al-Fayed",
    avatar: "https://i.pravatar.cc/150?img=10",
    employeeId: "000666010",
    department: "Development",
    designation: "Mobile App Developer",
    type: "Remote",
    status: "Permanent",
  },
  {
    key: "11",
    name: "Anastasia Volkova",
    avatar: "https://i.pravatar.cc/150?img=11",
    employeeId: "000666011",
    department: "Sales",
    designation: "Account Executive",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "12",
    name: "Chen Wei",
    avatar: "https://i.pravatar.cc/150?img=12",
    employeeId: "000666012",
    department: "Operations",
    designation: "Operations Manager",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "13",
    name: "Isabella Rossi",
    avatar: "https://i.pravatar.cc/150?img=13",
    employeeId: "000666013",
    department: "Marketing",
    designation: "Content Strategist",
    type: "Remote",
    status: "Contract",
  },
  {
    key: "14",
    name: "Jamal Williams",
    avatar: "https://i.pravatar.cc/150?img=14",
    employeeId: "000666014",
    department: "Development",
    designation: "QA Engineer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "15",
    name: "Ava Johnson",
    avatar: "https://i.pravatar.cc/150?img=15",
    employeeId: "000666015",
    department: "Design",
    designation: "Product Designer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "16",
    name: "Sven Eriksson",
    avatar: "https://i.pravatar.cc/150?img=16",
    employeeId: "000666016",
    department: "Finance",
    designation: "Accountant",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "17",
    name: "Fatima Al-Sayed",
    avatar: "https://i.pravatar.cc/150?img=17",
    employeeId: "000666017",
    department: "Human Resources",
    designation: "Recruitment Specialist",
    type: "Remote",
    status: "Contract",
  },
  {
    key: "18",
    name: "Diego Hernandez",
    avatar: "https://i.pravatar.cc/150?img=18",
    employeeId: "000666018",
    department: "Sales",
    designation: "Business Development Representative",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "19",
    name: "Zoe Martin",
    avatar: "https://i.pravatar.cc/150?img=19",
    employeeId: "000666019",
    department: "Customer Support",
    designation: "Customer Success Manager",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "20",
    name: "Hiroshi Yamamoto",
    avatar: "https://i.pravatar.cc/150?img=20",
    employeeId: "000666020",
    department: "Development",
    designation: "DevOps Engineer",
    type: "Remote",
    status: "Permanent",
  },
  {
    key: "21",
    name: "Amelia Clarke",
    avatar: "https://i.pravatar.cc/150?img=21",
    employeeId: "000666021",
    department: "Marketing",
    designation: "SEO Specialist",
    type: "Office",
    status: "Contract",
  },
  {
    key: "22",
    name: "Kwame Osei",
    avatar: "https://i.pravatar.cc/150?img=22",
    employeeId: "000666022",
    department: "Operations",
    designation: "Logistics Coordinator",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "23",
    name: "Natalie Wong",
    avatar: "https://i.pravatar.cc/150?img=23",
    employeeId: "000666023",
    department: "Design",
    designation: "UX Researcher",
    type: "Remote",
    status: "Permanent",
  },
  {
    key: "24",
    name: "Antoine Dubois",
    avatar: "https://i.pravatar.cc/150?img=24",
    employeeId: "000666024",
    department: "Development",
    designation: "Frontend Developer",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "25",
    name: "Elena Popova",
    avatar: "https://i.pravatar.cc/150?img=25",
    employeeId: "000666025",
    department: "Finance",
    designation: "Financial Controller",
    type: "Office",
    status: "Permanent",
  },
  {
    key: "26",
    name: "Lucas Silva",
    avatar: "https://i.pravatar.cc/150?img=26",
    employeeId: "000666026",
    department: "Sales",
    designation: "Sales Operations Analyst",
    type: "Remote",
    status: "Contract",
  },
  {
    key: "27",
    name: "Aisha Patel",
    avatar: "https://i.pravatar.cc/150?img=27",
    employeeId: "000666027",
    department: "Human Resources",
    designation: "Employee Relations Specialist",
    type: "Office",
    status: "Permanent",
  },
];

// * All Departments Data * //

// * Attendance Data * //

// * Payroll Data * //

// * Jobs Data * //

// * Candidates Data * //

// * Leaves Data * //

// * Holidays Data * //
export const holidaysColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Holiday Name",
    dataIndex: "holidayName",
    key: "holidayName",
  },
];
export const holidaysData = [
  {
    key: "1",
    date: "January 01, 2026",
    day: "Tuesday",
    holidayName: "New Year",
  },
  {
    key: "2",
    date: "January 07, 2026",
    day: "Saturday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "3",
    date: "February 04, 2026",
    day: "Saturday",
    holidayName: "World Cancer Day",
  },
  {
    key: "4",
    date: "April 01, 2026",
    day: "Saturday",
    holidayName: "April Fool Day",
  },
  {
    key: "5",
    date: "May 07, 2026",
    day: "Monday",
    holidayName: "International Programmers' Day",
  },
  {
    key: "6",
    date: "May 22, 2026",
    day: "Tuesday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "7",
    date: "June 05, 2026",
    day: "Monday",
    holidayName: "International Day for Biological Diversity",
  },
  {
    key: "8",
    date: "August 07, 2026",
    day: "Monday",
    holidayName: "International Friendship Day",
  },
  {
    key: "9",
    date: "September 15, 2026",
    day: "Friday",
    holidayName: "International Day of Democracy",
  },
  {
    key: "10",
    date: "November 14, 2026",
    day: "Tuesday",
    holidayName: "World Diabetes Day",
  },
  {
    key: "11",
    date: "December 25, 2026",
    day: "Monday",
    holidayName: "Merry Christmas",
  },
];

// * Notification Data * //
export const notificationsListing = [
  {
    title: "Leave Request",
    description: "@Econev Fox has applied for leave",
    time: "Just Now",
  },
  {
    title: "Check In Issue",
    description: "@Dina shared a message regarding check in issue",
    time: "11:16 AM",
  },
  {
    title: 'Applied job for "Sales Manager" Position',
    description: "@Vasilisa has applied for job",
    time: "09:00 AM",
  },
  {
    title: "Robert Fox has share his feedback",
    description: '"It was an amazing experience with your organisation"',
    time: "Yesterday",
  },
  {
    title: "Password Update successfully",
    description: "Your password has been updated successfully",
    time: "Yesterday",
  },
];
