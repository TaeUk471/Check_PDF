import IdentifierContainer from "@components/container/identifierContainer";
import Header from "@components/Header/src/header";

const IdentifierPage = () => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen bg-slate-100 overflow-x-hidden">
      <Header as="div" user={{ id: "HTW123", name: "한태욱" }} isSigned="admin" hasProblem />
      <IdentifierContainer />
    </div>
  );
};

export default IdentifierPage;

IdentifierPage.displayName = "IdentifierPage";
