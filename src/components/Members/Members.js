import "./members.css";
import useMembers from "./../../hooks/useMembers";
import { useEffect } from "react";
import CardUser from "../CardUser/CardUser";

const Members = () => {
  const { members, showMembers } = useMembers();

  useEffect(() => {
    showMembers();
  }, [showMembers]);

  return (
    <>
      <div className="members-number">
        <h2 className="fs-4 fw-bold">{`Mostrando -> ${members.length} usuarios`}</h2>
      </div>
      <ul className="members-list">
        {members.map((member) => (
          <CardUser member={member} key={member.id} />
        ))}
      </ul>
    </>
  );
};

export default Members;
