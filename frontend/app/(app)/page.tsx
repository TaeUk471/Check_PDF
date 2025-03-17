import DashboardCardHolder from "@components/cards/cardholder/dashboardCardHolder";
import FailCardHolder from "@components/cards/cardholder/failCardHolder";
import Header from "@components/Header/src/header";

const Landing = () => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen bg-slate-100 overflow-x-hidden">
      <Header as="div" user={{ id: "HTW123", name: "한태욱" }} isSigned="admin" hasProblem />
      <DashboardCardHolder />
      <FailCardHolder />
    </div>
  );
};

export default Landing;

Landing.displayName = "Landing";
