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

  useEffect(()=> {handleShown()}, [group])

  return (
    <div className="App">
      <header>
      <h1>Hiragana Flashcards</h1>
      <Form setGroup={setGroup}/>
      </header>
      <FlashcardContainer flashcards={flashcards} shown={shown}/>
    </div>
  );
}

const allFlashcards = [
  {
    hiragana: "あ",
    romanji: "A",
    id: 1,
    group: "Vowels"
  },
  {
    hiragana: "い",
    romanji: "I",
    id: 2,
    group: "Vowels"
  },
  {
    hiragana: "う",
    romanji: "U",
    id: 3,
    group: "Vowels"
  },
  {
    hiragana: "え",
    romanji: "E",
    id: 4,
    group: "Vowels"
  },
  {
    hiragana: "お",
    romanji: "O",
    id: 5,
    group: "Vowels"
  },
  {
  hiragana: "か",
  romanji: "Ka",
  id: 6,
  group: "K"
}, {
  hiragana: "き",
  romanji: "Ki",
  id: 7,
  group: "K"
},
{
  hiragana: "く",
  romanji: "Ku",
  id: 8,
  group: "K"
},
{
  hiragana: "け",
  romanji: "Ke",
  id: 9,
  group: "K"
},
{
  hiragana: "こ",
  romanji: "Ko",
  id: 10,
  group: "K"
},
{
  hiragana: "さ",
  romanji: "Sa",
  id: 11,
  group: "S"
}, {
  hiragana: "し",
  romanji: "Shi",
  id: 12,
  group: "S"
},
{
  hiragana: "す",
  romanji: "Su",
  id: 13,
  group: "S"
},
{
  hiragana: "せ",
  romanji: "Se",
  id: 14,
  group: "S"
},
{
  hiragana: "そ",
  romanji: "So",
  id: 15,
  group: "S"
},
{
  hiragana: "ざ",
  romanji: "Za",
  id: 16,
  group: "S+",
},
{
  hiragana: "じ",
  romanji: "Ji",
  id: 17,
  group: "S+",
},
{
  hiragana: "ず",
  romanji: "Zu",
  id: 18,
  group: "S+",
},
{
  hiragana: "ぜ",
  romanji: "Ze",
  id: 19,
  group: "S+",
},
{
  hiragana: "ぞ",
  romanji: "Zo",
  id: 20,
  group: "S+",
},
{
  hiragana: "た",
  romanji: "Ta",
  id: 21,
  group: "T",
},
{
  hiragana: "ち",
  romanji: "Chi",
  id: 22,
  group: "T",
},
{
  hiragana: "つ",
  romanji: "Tsu",
  id: 23,
  group: "T",
},
{
  hiragana: "て",
  romanji: "Te",
  id: 24,
  group: "T",
},
{
  hiragana: "と",
  romanji: "To",
  id: 25,
  group: "T",
},
{
  hiragana: "だ",
  romanji: "Da",
  id: 26,
  group: "T+",
},
{
  hiragana: "ぢ",
  romanji: "Ji",
  id: 27,
  group: "T+",
},
{
  hiragana: "づ",
  romanji: "Zu",
  id: 28,
  group: "T+",
},
{
  hiragana: "で",
  romanji: "De",
  id: 29,
  group: "T+",
},
{
  hiragana: "ど",
  romanji: "Do",
  id: 30,
  group: "T+",
},
{
  hiragana: "が",
  romanji: "Ga",
  id: 31,
  group: "K+",
},
{
  hiragana: "ぎ",
  romanji: "Gi",
  id: 32,
  group: "K+",
},
{
  hiragana: "ぐ",
  romanji: "Gu",
  id: 33,
  group: "K+",
},
{
  hiragana: "げ",
  romanji: "Ge",
  id: 34,
  group: "K+",
},
{
  hiragana: "ご",
  romanji: "Go",
  id: 35,
  group: "K+",
},
{
  hiragana: "な",
  romanji: "Na",
  id: 36,
  group: "N",
},
{
  hiragana: "に",
  romanji: "Ni",
  id: 37,
  group: "N",
},
{
  hiragana: "ぬ",
  romanji: "Nu",
  id: 38,
  group: "N",
},
{
  hiragana: "ね",
  romanji: "Ne",
  id: 39,
  group: "N",
},
{
  hiragana: "の",
  romanji: "No",
  id: 40,
  group: "N",
},
{
  hiragana: "は",
  romanji: "Ha",
  id: 41,
  group: "H",
},
{
  hiragana: "ひ",
  romanji: "Hi",
  id: 42,
  group: "H",
},
{
  hiragana: "ふ",
  romanji: "Fu",
  id: 43,
  group: "H",
},
{
  hiragana: "へ",
  romanji: "He",
  id: 44,
  group: "H",
},
{
  hiragana: "ほ",
  romanji: "Ho",
  id: 45,
  group: "H",
},
{
  hiragana: "ぱ",
  romanji: "Pa",
  id: 46,
  group: "H+",
},
{
  hiragana: "ぴ",
  romanji: "Pi",
  id: 47,
  group: "H+",
},
{
  hiragana: "ぷ",
  romanji: "Pu",
  id: 48,
  group: "H+",
},
{
  hiragana: "ぺ",
  romanji: "Pe",
  id: 49,
  group: "H+",
},
{
  hiragana: "ぽ",
  romanji: "Po",
  id: 50,
  group: "H+",
},
{
  hiragana: "ま",
  romanji: "Ma",
  id: 51,
  group: "M",
},
{
  hiragana: "み",
  romanji: "Mi",
  id: 52,
  group: "M",
},
{
  hiragana: "む",
  romanji: "Mu",
  id: 53,
  group: "M",
},
{
  hiragana: "め",
  romanji: "Me",
  id: 54,
  group: "M",
},
{
  hiragana: "も",
  romanji: "Mo",
  id: 55,
  group: "M",
},
{
  hiragana: "や",
  romanji: "Ya",
  id: 56,
  group: "Y",
},
{
  hiragana: "ゆ",
  romanji: "Yu",
  id: 57,
  group: "Y",
},
{
  hiragana: "よ",
  romanji: "Yo",
  id: 58,
  group: "Y",
},
{
  hiragana: "ら",
  romanji: "Ra",
  id: 59,
  group: "R",
},
{
  hiragana: "り",
  romanji: "Ri",
  id: 60,
  group: "R",
},
{
  hiragana: "る",
  romanji: "Ru",
  id: 61,
  group: "R",
},
{
  hiragana: "れ",
  romanji: "Re",
  id: 62,
  group: "R",
},
{
  hiragana: "ろ",
  romanji: "Ro",
  id: 63,
  group: "R",
},
{
  hiragana: "わ",
  romanji: "Wa",
  id: 64,
  group: "W",
},
{
  hiragana: "ゐ",
  romanji: "Wi",
  id: 65,
  group: "W",
},
{
  hiragana: "ゑ",
  romanji: "We",
  id: 66,
  group: "W",
},
{
  hiragana: "を",
  romanji: "Wo",
  id: 67,
  group: "W",
}
]
export default App;
