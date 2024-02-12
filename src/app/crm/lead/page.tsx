import React from "react";
import styles from "./crmLead.module.css";
import SalesActivity from "@/components/Crm/SalesActivity/SalesActivity";
import EmailAndSms from "@/components/Crm/EmailAndSms/EmailAndSms";
import { DealerPlex } from "@/components/Crm/DealerPlex/DealerPlex";
import { Appointment } from "@/components/Crm/Appointments/Appointments";
import { AppointmentsAndSaleFunnel } from "@/components/Crm/AppointmentsAndSalesFunnel/AppointmentsAndSalesFunnel";
import { QuickFilters } from "@/components/Crm/QuickFilters/QuickFilters";
import { BasicLocationIcon, BasicMailIcon, BasicPhoneIcon, FireIcon } from "../../../components/Icons/Icons";

const Page = () => {
  return (
    <div className="max-w-[1740px] mx-auto px-[15px]">
      <section className={styles.crmWrapperr}>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
        >
          <span className={styles.gallery__item_num}>
            <div className="flex flex-col bg-white rounded-2xl p-[24px_16px] gap-[12px]">
              <div className="flex gap-[2px]">
                <FireIcon />
                <FireIcon />
                <FireIcon />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[12px]">
                  <h5 className="font-bold text-lg w-full text-left text-dark not-italic leading-[23.4px]">
                    Kyle Dyson
                  </h5>
                  <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                    Prospect ID: J5NTYX5P3E
                  </p>
                </div>
                <div className="flex flex-col gap-[11px]">
                  <div className="flex flex-row gap-[16px]">
                    <BasicLocationIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      12101 Creek Point Dr Frisco TX 75035
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px]">
                    <BasicPhoneIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      (469) 266-3336
                    </p>
                  </div>
                  <div className="flex flex-row gap-[16px]">
                    <BasicMailIcon />
                    <p className="text-dark-2 text-xs font-normal leading-[18px] m-0">
                      kdodson11@yahoo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--2"]}`}
        >
          <SalesActivity />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--3"]}`}
        >
          <span className={styles.gallery__item_num}>
            <AppointmentsAndSaleFunnel />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--4"]}`}
        >
          <span className={styles.gallery__item_num}>
            <DealerPlex />
          </span>
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--5"]}`}
        >
          <EmailAndSms />
        </div>
        <div
          className={`${styles.gallery__item} ${styles["gallery__item--6"]}`}
        >
          <span className={styles.gallery__item_num}>
            <QuickFilters />
          </span>
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
