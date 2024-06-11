import React from "react";
import Image from "next/image"; 

function SideBarEntry({ icon, name }) {
  return (
    <div className="flex flex-row gap-5 items-center">
      <Image src={icon} width={25} height={25} alt={name} />
      <h2 className="text-lg font-bold text-gray-600">{name}</h2>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="flex flex-col gap-10 px-10 pt-14 w-[250px] border-r border-gray-200 h-screen">
      <SideBarEntry icon="/dashboard.png" name="Dashboard" />
      <SideBarEntry icon="/skillTest.png" name="Skill Test" />
      <SideBarEntry icon="/internship.png" name="Internship" />
    </div>
  );
}

export default Sidebar;
