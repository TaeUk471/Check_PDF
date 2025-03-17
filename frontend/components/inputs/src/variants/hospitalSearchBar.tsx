//Hospital SearchBar

import Input from "../input";

const HospitalSearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      type={"text"}
      color={"normal"}
      size={"lg"}
      radius={"lg"}
      isOutlined={false}
      isActivated={false}
      disabled={false}
      value={value}
      onChange={onChange}
      placeholder={"Enter Hospital Name..."}
      startContent={<i className="fa fa-magnifying-glass" />}
      className={"w-full"}
      endContent={<i className="fa fa-hospital" />}
    />
  );
};

export default HospitalSearchBar;
