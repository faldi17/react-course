import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props){
  // Pengecekan apakah props.meetups adalah sebuah array
  if (!Array.isArray(props.meetups)) {
    // Jika tidak, kembalikan null atau tampilkan pesan kesalahan
    return null; // atau tampilkan pesan kesalahan: <p>Meetups data is not valid.</p>
  }

  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
