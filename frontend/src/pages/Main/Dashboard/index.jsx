import { useTitle } from "@/App";
import clsx from "clsx";
import { DashboardCard } from "@/components";
import { Icons } from "@/constants";
import { AttendanceOverviewTable } from "./AttendanceOverviewTable";
import { MySchedule } from "./MySchedule";
import { AttendanceOverview } from "./AttendanceOverview";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Dashboard");
  return (
    <>
      {/* Top Section */}
      <div className={clsx(styles.d, "d-grid gap-xl")}>
        {/* Left Side */}
        <div className="d-flex flex-column gap-xl">
          <div className="d-grid grid-columns gap-xl">
            <div>
              <DashboardCard
                Icon={Icons.AllEmployees}
                Title={"Total Employee"}
                date={"01/01/2001"}
              >
                666
              </DashboardCard>
            </div>
            <div>
              <DashboardCard
                Icon={Icons.Jobs}
                Title={"Total Applicant"}
                date={"01/01/2001"}
              >
                666
              </DashboardCard>
            </div>
            <div>
              <DashboardCard
                Icon={Icons.Attendance}
                Title={"Today Attendance"}
                date={"01/01/2001"}
              >
                666
              </DashboardCard>
            </div>
            <div>
              <DashboardCard
                Icon={Icons.TotalList}
                Title={"Total Projects"}
                date={"01/01/2001"}
              >
                666
              </DashboardCard>
            </div>
          </div>
          <div className="card">
            <AttendanceOverview />
          </div>
        </div>
        {/* Right Side */}
        <div className="card">
          <MySchedule />
        </div>
      </div>
      {/* Bottom Table Section */}
      <div className={clsx(styles.DashboardBottomTable, "card")}>
        <AttendanceOverviewTable />
      </div>
    </>
  );
};
