import "./members.css";
import useMembers from "./../../hooks/useMembers";
import { useEffect } from "react";
import CardUser from "../CardUser/CardUser";

const Members = () => {
  const { members, showMembers } = useMembers();

  useEffect(() => {
    debugger;
    showMembers();
  }, [showMembers]);

  return (
    <>
      <ul className="members-list">
        {members.map((member) => (
          <CardUser member={member} key={member.id} />
        ))}
      </ul>
    </>
  );
};

export default Members;
