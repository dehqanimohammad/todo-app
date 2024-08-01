"use client";

import ReportGraph from "@/components/ReportGraph";
import InputComponent from "../../components/InputComponent";
import React, { useEffect, useState } from "react";
import InProgressTasks from "@/components/InProgressTasks";
import CompletedTasksList from "@/components/CompletedTasksList";

const page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <main className="mx-3">
        <div className="flex flex-col-reverse lg:flex-row">
          <InputComponent />
          <ReportGraph />
        </div>
        <InProgressTasks />
        <CompletedTasksList />
      </main>
    );
  }
};

export default page;
