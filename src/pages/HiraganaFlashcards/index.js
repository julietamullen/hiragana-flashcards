import { useState, useEffect } from "react";
import FlashcardContainer from "../../components/FlashcardContainer";
import Form from "../../components/Form"

function App() {

  const [flashcards, setFlashcards] = useState(allFlashcards);
  const [group, setGroup] = useState("All")
  const [shown, setShown] = useState([])

  const handleShown = () => {

    switch(group){
      case "vowels":
        setShown(flashcards.filter(flashcard => flashcard.group === "Vowels"))
        break;
      case "k":
        setShown(flashcards.filter(flashcard => flashcard.group === "K"))
        break;
      case "k+":
        setShown(flashcards.filter(flashcard => flashcard.group === "K+"))
        break;
      case "s":
        setShown(flashcards.filter(flashcard => flashcard.group === "S"))
        break;
      case "s+":
        setShown(flashcards.filter(flashcard => flashcard.group === "S+"))
        break;
      case "t":
        setShown(flashcards.filter(flashcard => flashcard.group === "T"))
        break;
      case "t+":
        setShown(flashcards.filter(flashcard => flashcard.group === "T+"))
        break;
      case "n":
        setShown(flashcards.filter(flashcard => flashcard.group === "N"))
        break;
      case "h":
        setShown(flashcards.filter(flashcard => flashcard.group === "H"))
        break;
      case "h+":
        setShown(flashcards.filter(flashcard => flashcard.group === "H+"))
        break;
      case "m":
        setShown(flashcards.filter(flashcard => flashcard.group === "M"))
        break;
      case "y":
        setShown(flashcards.filter(flashcard => flashcard.group === "Y"))
        break;
      case "r":
        setShown(flashcards.filter(flashcard => flashcard.group === "R"))
        break;
      case "w":
        setShown(flashcards.filter(flashcard => flashcard.group === "W"))
        break;
      default: 
        setShown(flashcards.filter(flashcard => flashcard.group === "Vowels"))
        break;
    }
  }

  const scrollTo = () => {
    window.scroll(0, 0)
  }

  useEffect(()=> {handleShown()}, [group])
  useEffect(()=> {scrollTo()}, [])

  return (
    <div className="App">
      <header>
      <h1>Hiragana Flashcards</h1>
      <Form setGroup={setGroup} flashcards={flashcards} setShown={setShown}/>
      </header>
      <FlashcardContainer flashcards={flashcards} shown={shown}/>
    </div>
  );
}

const allFlashcards = [
  {
    hiragana: "???",
    romanji: "A",
    id: 1,
    group: "Vowels"
  },
  {
    hiragana: "???",
    romanji: "I",
    id: 2,
    group: "Vowels"
  },
  {
    hiragana: "???",
    romanji: "U",
    id: 3,
    group: "Vowels"
  },
  {
    hiragana: "???",
    romanji: "E",
    id: 4,
    group: "Vowels"
  },
  {
    hiragana: "???",
    romanji: "O",
    id: 5,
    group: "Vowels"
  },
  {
  hiragana: "???",
  romanji: "Ka",
  id: 6,
  group: "K"
}, {
  hiragana: "???",
  romanji: "Ki",
  id: 7,
  group: "K"
},
{
  hiragana: "???",
  romanji: "Ku",
  id: 8,
  group: "K"
},
{
  hiragana: "???",
  romanji: "Ke",
  id: 9,
  group: "K"
},
{
  hiragana: "???",
  romanji: "Ko",
  id: 10,
  group: "K"
},
{
  hiragana: "???",
  romanji: "Sa",
  id: 11,
  group: "S"
}, {
  hiragana: "???",
  romanji: "Shi",
  id: 12,
  group: "S"
},
{
  hiragana: "???",
  romanji: "Su",
  id: 13,
  group: "S"
},
{
  hiragana: "???",
  romanji: "Se",
  id: 14,
  group: "S"
},
{
  hiragana: "???",
  romanji: "So",
  id: 15,
  group: "S"
},
{
  hiragana: "???",
  romanji: "Za",
  id: 16,
  group: "S+",
},
{
  hiragana: "???",
  romanji: "Ji",
  id: 17,
  group: "S+",
},
{
  hiragana: "???",
  romanji: "Zu",
  id: 18,
  group: "S+",
},
{
  hiragana: "???",
  romanji: "Ze",
  id: 19,
  group: "S+",
},
{
  hiragana: "???",
  romanji: "Zo",
  id: 20,
  group: "S+",
},
{
  hiragana: "???",
  romanji: "Ta",
  id: 21,
  group: "T",
},
{
  hiragana: "???",
  romanji: "Chi",
  id: 22,
  group: "T",
},
{
  hiragana: "???",
  romanji: "Tsu",
  id: 23,
  group: "T",
},
{
  hiragana: "???",
  romanji: "Te",
  id: 24,
  group: "T",
},
{
  hiragana: "???",
  romanji: "To",
  id: 25,
  group: "T",
},
{
  hiragana: "???",
  romanji: "Da",
  id: 26,
  group: "T+",
},
{
  hiragana: "???",
  romanji: "Ji",
  id: 27,
  group: "T+",
},
{
  hiragana: "???",
  romanji: "Zu",
  id: 28,
  group: "T+",
},
{
  hiragana: "???",
  romanji: "De",
  id: 29,
  group: "T+",
},
{
  hiragana: "???",
  romanji: "Do",
  id: 30,
  group: "T+",
},
{
  hiragana: "???",
  romanji: "Ga",
  id: 31,
  group: "K+",
},
{
  hiragana: "???",
  romanji: "Gi",
  id: 32,
  group: "K+",
},
{
  hiragana: "???",
  romanji: "Gu",
  id: 33,
  group: "K+",
},
{
  hiragana: "???",
  romanji: "Ge",
  id: 34,
  group: "K+",
},
{
  hiragana: "???",
  romanji: "Go",
  id: 35,
  group: "K+",
},
{
  hiragana: "???",
  romanji: "Na",
  id: 36,
  group: "N",
},
{
  hiragana: "???",
  romanji: "Ni",
  id: 37,
  group: "N",
},
{
  hiragana: "???",
  romanji: "Nu",
  id: 38,
  group: "N",
},
{
  hiragana: "???",
  romanji: "Ne",
  id: 39,
  group: "N",
},
{
  hiragana: "???",
  romanji: "No",
  id: 40,
  group: "N",
},
{
  hiragana: "???",
  romanji: "Ha",
  id: 41,
  group: "H",
},
{
  hiragana: "???",
  romanji: "Hi",
  id: 42,
  group: "H",
},
{
  hiragana: "???",
  romanji: "Fu",
  id: 43,
  group: "H",
},
{
  hiragana: "???",
  romanji: "He",
  id: 44,
  group: "H",
},
{
  hiragana: "???",
  romanji: "Ho",
  id: 45,
  group: "H",
},
{
  hiragana: "???",
  romanji: "Pa",
  id: 46,
  group: "H+",
},
{
  hiragana: "???",
  romanji: "Pi",
  id: 47,
  group: "H+",
},
{
  hiragana: "???",
  romanji: "Pu",
  id: 48,
  group: "H+",
},
{
  hiragana: "???",
  romanji: "Pe",
  id: 49,
  group: "H+",
},
{
  hiragana: "???",
  romanji: "Po",
  id: 50,
  group: "H+",
},
{
  hiragana: "???",
  romanji: "Ma",
  id: 51,
  group: "M",
},
{
  hiragana: "???",
  romanji: "Mi",
  id: 52,
  group: "M",
},
{
  hiragana: "???",
  romanji: "Mu",
  id: 53,
  group: "M",
},
{
  hiragana: "???",
  romanji: "Me",
  id: 54,
  group: "M",
},
{
  hiragana: "???",
  romanji: "Mo",
  id: 55,
  group: "M",
},
{
  hiragana: "???",
  romanji: "Ya",
  id: 56,
  group: "Y",
},
{
  hiragana: "???",
  romanji: "Yu",
  id: 57,
  group: "Y",
},
{
  hiragana: "???",
  romanji: "Yo",
  id: 58,
  group: "Y",
},
{
  hiragana: "???",
  romanji: "Ra",
  id: 59,
  group: "R",
},
{
  hiragana: "???",
  romanji: "Ri",
  id: 60,
  group: "R",
},
{
  hiragana: "???",
  romanji: "Ru",
  id: 61,
  group: "R",
},
{
  hiragana: "???",
  romanji: "Re",
  id: 62,
  group: "R",
},
{
  hiragana: "???",
  romanji: "Ro",
  id: 63,
  group: "R",
},
{
  hiragana: "???",
  romanji: "Wa",
  id: 64,
  group: "W",
},
{
  hiragana: "???",
  romanji: "Wi",
  id: 65,
  group: "W",
},
{
  hiragana: "???",
  romanji: "We",
  id: 66,
  group: "W",
},
{
  hiragana: "???",
  romanji: "Wo",
  id: 67,
  group: "W",
}
]
export default App;
