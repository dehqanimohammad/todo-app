import ReportGraph from "@/components/ReportGraph";
import InputComponent from "../../components/InputComponent";
import React from "react";
import InProgressTasks from "@/components/InProgressTasks";
import CompletedTasksList from "@/components/CompletedTasksList";

const page = () => {
  return (
    <main className="mx-3">
      <div className="flex flex-col-reverse md:flex-row">
        <InputComponent />
        <ReportGraph />
      </div>
      <InProgressTasks />
      <CompletedTasksList />
    </main>
  );
};

export default page;
