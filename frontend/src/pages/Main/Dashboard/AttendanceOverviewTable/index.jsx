import { HMButton } from "@/components";
import { useNavigate } from "react-router-dom";
import { HMTable } from "@/components";
import { data, columns } from "@/constants";
import styles from "../Dashboard.module.css";

export const AttendanceOverviewTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-xs">
        <h3>Attendance Overview</h3>
        <HMButton
          onClick={() => navigate("/attendance")}
          size={"small"}
          variant={"default"}
        >
          View All
        </HMButton>
      </div>
      <HMTable
        className={styles.AttendanceOverviewTable}
        tableDataSource={data.slice(-7).reverse()}
        tableColumn={columns}
      />
    </>
  );
};
