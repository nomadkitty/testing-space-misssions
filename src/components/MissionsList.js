import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error" data-testid="missions-list-error">
          {props.error}
        </div>
      ) : (
        props.missions.map(mission => (
          <div className="mission" data-testid="mission">
            {mission.mission_name}
          </div>
        ))
      )}
    </section>
  );
};

export default MissionsList;
