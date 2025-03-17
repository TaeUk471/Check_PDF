import TypeContainer from "@components/container/typeContainer";
import Header from "@components/Header/src/header";

const TypePage = () => {
  return (
    <div className="flex flex-col flex-1 w-screen h-screen bg-slate-100 overflow-x-hidden">
      <Header as="div" user={{ id: "HTW123", name: "한태욱" }} isSigned="admin" hasProblem />
      <TypeContainer />
    </div>
  );
};

export default TypePage;

TypePage.displayName = "TypePage";
