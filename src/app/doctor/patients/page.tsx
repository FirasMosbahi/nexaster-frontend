import PatientCard from "@nexaster/components/patient-card";
import Sidebar from "@nexaster/components/sidebar";

export default function Index(): React.ReactElement {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="ml-12 w-screen flex flex-col justify-center text-black">
        <h4 className="text-3xl text-center pt-8 pb-8">Oldest patients</h4>
        <div className="flex flex-row">
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        <h4 className="text-3xl text-center pt-8 pb-8">Newest patients</h4>
        <div className="flex flex-row">
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        <h4 className="text-3xl text-center pt-8 pb-8">Most dangerous cases</h4>
        <div className="flex flex-row">
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        <h4 className="text-3xl text-center pt-8 pb-8">Full patients</h4>
        <div className="flex flex-row">
          <PatientCard />
          <PatientCard />
          <PatientCard />
        </div>
        <div className="mb-12"></div>
      </div>
    </div>
  );
}
