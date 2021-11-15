import "./members.css";
import useMembers from "./../../hooks/useMembers";
import { useEffect } from "react";
import CardUser from "../CardUser/CardUser";

const Members = () => {
  const { members, showMembers, showFriendsUser, showEnemiesUser } =
    useMembers();

  useEffect(() => {
    showMembers();
  }, [showMembers]);

  const onClickAllMembers = () => {
    showMembers();
  };

  const onClickAmigos = () => {
    showFriendsUser();
  };

  const onClickEnemigos = () => {
    showEnemiesUser();
  };

  return (
    <>
      <div className="members-number">
        <div>
          <button
            data-testid="navbar-login"
            type="button"
            className="btn btn-dark"
            onClick={() => {
              onClickAllMembers();
            }}
          >
            Todos
          </button>
          <button
            data-testid="navbar-login"
            type="button"
            className="btn btn-dark"
            onClick={() => {
              onClickAmigos();
            }}
          >
            Amigos
          </button>
          <button
            data-testid="navbar-login"
            type="button"
            className="btn btn-dark"
            onClick={() => {
              onClickEnemigos();
            }}
          >
            Enemigos
          </button>
        </div>
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
