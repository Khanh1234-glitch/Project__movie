import IMG from "./../img/download.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { createinfoSystem } from "../slices/infoSystem";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { SysTemCinema } from "../interface/getSystemCinema";
const TableListMovie = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.createinfoSystem
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(createinfoSystem());
  }, []);
  const { TabPane } = Tabs;
  type TabPosition = "left" | "right" | "top" | "bottom";
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  return (
    <>
    {/* {data?.map((item: SysTemCinema[],index: number)=>{
      return(
        <div className="container">
        <Tabs tabPosition={tabPosition}>
          <TabPane tab={<img  className="rounded-full" width={"50px"}/>} key={index} >
          </TabPane>
        </Tabs>
      </div>
      )
    })} */}

    </>
  );
};

export default TableListMovie;
