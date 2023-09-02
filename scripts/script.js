
// We use an Object here to keep track of all our messages in one easy to access place.  You can use a different method if you like.
let bag = ["pocket lint", "whole cat"];
let table = ["key", "banana"];


const messages = {
  // game starts
  A: `You are trapped in a room! Would you like to escape?`,
  // player says no to question A.
  A1: `You're going to be locked in here forever! Good luck, dummy.`,
  // player says yes to question A.
  B: `Would you like to try opening the door(1), check your bag(2), or look around the room(3)?`,
  // player tries door without key
  B1: `You try the door handle but it's locked. You will need a key to open it.`,
  // player tries door with key
  B2: `You try the door handle but it's locked. There is a key in your bag. Would you like to use it?`,
  // player checks bag without key
  B3: `You check your bag. Inside, there is ${bag}. No key available. Try again.`,
  // player checks bag with key
  B4: `You check your bag. Inside, there are ${bag}. One key is available.`,
  // player checks table on question B.
  C: `There is a table with two items on it: a key and a banana. Which item would you like to take: the key(1) or the banana(2)`,
  // player grabs key from table on question C.
  C1: `You grabbed the key. Great! The key has been added to your bag.`,
  // player grabs banana from table on question C.
  C2: `You grabbed the banana. Must be hungry. The banana has been added to your bag.`,
  // player grabs banana continued
  D: `There is a table with one item on it: a key. Would you like to grab the key?`,
  // player uses key on door, escapes.
  F: `You use the key on the door. Congratulations! You have escaped the room.`,
  // prompt for unknown answers
  G: "I don't think I understand that request. Try again.",

}

// 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
// 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
// 'alert' shows a message.


function beginGame() {
  const response = confirm(messages.A);
  if (response) {
    nextQuestion();
  } else {
    alert(messages.A1);
  }
}

function nextQuestion() {
  const response = prompt(messages.B);
  if (response === '3') {
    const tableQuestion = prompt(messages.C);
    if (tableQuestion === '2') {
      alert(messages.C2);
      const grabKey = confirm(messages.D);
      if (grabKey) {
        alert(messages.C1);
        prompt(messages.B);
      } else {
        alert(messages.A1);
      }
    } else if (tableQuestion === '1') {
      alert(messages.C1);
      bag.push(table[1]);
      prompt(messages.B);
      alert(messages.B2) 
    alert(messages.F)
      // This is a brute force way to end the game if you guys want to use it, to show we can get to the end for the presentation 
    }
  } else if (response === '2') {
    alert(messages.B3);
    prompt(messages.B);
  } else if (response === '1') {
    alert(messages.B1);
    prompt(messages.B);
  }
        //if (response === '1'){
        // alert(messages.F)
        //}
//       } else {
//         alert(messages.A1);
//       }
//     } else if (tableQuestion === '1') {
//       alert(messages.C1);
//       prompt(messages.B);
//   } else if (response === '2') {
//     alert(messages.B3);
//     prompt(messages.B);
//   } else if (response === '1') {
//     alert(messages.B1);
    }

// beginGame();




//       if (response === '1' && ) {
//         bag.push('key')
//         table.pop('key')
//         alert(messages.F4);
//       } else if (response === '2') {
//         bag.push('banana')
//         table.pop('banana')
//         alert(messages.F4);
//       } else {
//         response
//       }
//   } else if (response !== 1 || 2 || 3) {
//       alert(messages.C1);
//   }
// }



// don't forget to initiate your game!!
// EXAMPLES OF CODE
