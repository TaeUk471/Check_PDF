import HospitalCardHolder from "@components/cards/cardholder/hospitalCardHolder";
import Header from "@components/Header/src/header";

const Landing = () => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen bg-slate-100 overflow-x-hidden">
      <Header as="div" user={{ id: "HTW123", name: "한태욱" }} isSigned="admin" hasProblem />
      <HospitalCardHolder />
    </div>
  );
};

export default Landing;

Landing.displayName = "Landing";
