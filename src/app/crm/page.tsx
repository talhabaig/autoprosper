import React from "react";
import styles from "./crm.module.css";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import { DealerPlex } from "@/components/Crm/DealerPlex/DealerPlex";
import { Appointment } from "@/components/Crm/Appointments/Appointments";
import { AppointmentsAndSaleFunnel } from "@/components/Crm/AppointmentsAndSalesFunnel/AppointmentsAndSalesFunnel";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";


const Page = () => {
  return (
    <div className="max-w-[1740px] mx-auto px-[15px]">
      <section className={styles.crmWrapperr}>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
        >
          <span className={styles.gallery__item_num}><Appointment/></span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--2"]}`}
        >
          <SalesActivity />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--3"]}`}
        >
          <span className={styles.gallery__item_num}><AppointmentsAndSaleFunnel/></span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--4"]}`}
        >
          <span className={styles.gallery__item_num}><DealerPlex/></span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--5"]}`}
        >
          <EmailAndSms />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--6"]}`}
        >
          <span className={styles.gallery__item_num}><QuickFilters/></span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--7"]}`}
        >
          <span className={styles.gallery__item_num}>
            search bar with lists 7
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--8"]}`}
        >
          <span className={styles.gallery__item_num}>task list 8</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--9"]}`}
        >
          <span className={styles.gallery__item_num}>Chat bar at bottom 9</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--10"]}`}
        >
          <span className={styles.gallery__item_num}>task list 10</span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--11"]}`}
        >
          <span className={styles.gallery__item_num}>taskList 11</span>
        </div>
      </section>
    </div>
  );
};

export default Page;
