const audioContext = new AudioContext();

const piano = document.querySelector(".piano");

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

document.addEventListener("keydown", (e) => {
  const eventKey = e.keyCode;
  const keyboard = e.code;
  const detail = foundNote(keyboard);

  if (
    (eventKey >= 65 && eventKey <= 90) ||
    (eventKey >= 97 && eventKey <= 122)
  ) {
    if (e.repeat) return;
    console.log(detail);
  }

  //console.log(foundNote);
});

function foundNote(keys) {
  return NOTE_DETAILS.find((note) => `Key${note.key}` === keys);
}
