✔️ Make a single audio context when the page loads or on first user action. Keep a reference to it.

✔️ Prepare a list of notes. For each item include:

- the musical name (e.g., C, D, …),
- the keyboard key you want to trigger it with (Z, X, …),
- its exact frequency,
- a flag like “active” that starts as false.
  Later, you’ll also attach a temporary “oscillator” reference to each item while it’s sounding.

✔️ Listen for keydown events on the whole document.

4. In keydown:

   ✔️ If the event is an auto-repeat, ignore it.
   ✔️ Read the physical key code (the form that looks like “KeyZ”, not the character).
   ✔️ Find the matching note in your list by comparing that code to your stored key letter (i.e., “Key” + letter).

   ✔️If no match, do nothing.

   ✔️ If there is a match, set that note’s “active” flag to true.

   - Call a function that (re)computes what should be playing right now.

5. Also listen for keyup events on the document.

6. In keyup:

   ✔️ Read the same physical key code.
   ✔️ Find the matching note in your list.
   ✔️ If none, do nothing.
   ✔️ If found, set that note’s “active” flag to false.
   ✔️ Call the same function that (re)computes what should be playing.

7. ✔️ Write a small helper that, given a key code, returns the matching note object from your list (or returns nothing if there’s no match).

8. ✔️Create the “playNotes” function that re-syncs audio and UI every time keys change.

9. At the start of “playNotes,” loop over every note in your list:

   ✔️ Grab the DOM element for that note (e.g., something like a key with a data attribute for the note name).
   ✔️ Add or remove an “active” CSS class based on the note’s “active” flag to update visuals.
   ✔️ If this note already has an oscillator reference from a previous play, stop that oscillator and disconnect it so it doesn’t keep sounding.

10. ✔️Still in “playNotes,” build a new list containing only the notes whose “active” flag is true.

11. ✔️If no notes are active, you’re done (everything just got stopped above).

12. ✔️If there are active notes, compute a per-note volume by taking 1 divided by the number of active notes (so chords don’t get too loud).

13. ✔️For each active note, call a function that starts that note with the per-note gain you just calculated.

14. ✔️Create a “startNote” function that receives a single note and a gain value.

15. ✔️Inside “startNote,” create a gain node from your audio context and set its gain to the value passed in.

16. ✔️Create an oscillator from your audio context.

17. ✔️Set the oscillator’s frequency to the note’s stored frequency.

18. ✔️Choose a waveform type (use a simple one like sine).

19. ✔️Connect the oscillator into the gain node, then connect the gain node to the audio context’s destination (speakers).

20. ✔️Start the oscillator immediately.

21. ✔️Store the oscillator reference back onto the note object so “playNotes” can stop and clean it up the next time keys change.
