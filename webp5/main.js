//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

let storyText="It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day."

let insertX=["Willy the Goblin",
             "Big Daddy",
             "Father Christmas"];

let insertY=["the soup kitchen",
             "Disneyland",
             "the White House"];

let insertZ=["spontaneously combusted",
             "melted into a puddle on the sidewalk",
             "turned into a slug and crawled away"];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory;
  newStory=storyText;
  let xItem=randomValueFromArray(insertX);
  let yItem=randomValueFromArray(insertY);
  let zItem=randomValueFromArray(insertZ);
  

  let newStorySet=newStory;
  newStorySet=newStorySet.replace(":insertX:",xItem);
  newStorySet=newStorySet.replace(':insertY:',yItem);
  newStorySet=newStorySet.replace(':insertZ:',zItem);
  newStorySet=newStorySet.replace(":insertX:",xItem);
  console.log(newStorySet);

  if(customName.value !== '') {
    const name = customName.value;
    newStorySet=newStorySet.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.4)+"stone";
    const temperature =  Math.round(34.4)+"centigrade";

  }

  story.textContent = newStorySet;
  story.style.visibility = 'visible';
}