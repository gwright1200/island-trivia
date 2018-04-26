'use strict';

let questionNumber = 0;
let points = 0;

// questionNumber is manipulated by nextQuestionNumber to be equal to the current question number
const questionAnswerData = [
  {
    quote: "What Is The Oldest Church In Barbados?",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Historic_Bridgetown_and_its_Garrison-115165.jpg",
    imageClass: "pwidth",
    answerOptions: [
      { answer: "St Joseph Church", correct: false },
      { answer: "St James Parish Church", correct: true },
      { answer: "St Lucy's Parish", correct: false },
      { answer: "St Michael's Cathedral", correct: false }
    ]
  },
  {
    quote: "What Is The Most Popular Waterfall In Jamaica.",
    imgUrl: "https://images.pexels.com/photos/6832/waterfall-beauty-lets-explore-lets-get-lost.jpg?auto=compress&cs=tinysrgb&h=350ss",
    imageClass: "pwidth",
    answerOptions: [
      { answer: "YS Falls", correct: false },
      { answer: "Cane River Falls", correct: false },
      { answer: "Blue Hole ", correct: false },
      { answer: "Dunns River Falls", correct: true }
    ]
  },
  {
    quote: "What Is The Capital Of Haiti?",
    imgUrl: "https://www.haitiopen.com/wp-content/uploads/2017/04/Petionville-Haiti-Hotel-Kinam-1024x672.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Petionville", correct: false },
      { answer: "San Domingo", correct: false },
      { answer: "Cap Haitien", correct: false },
      { answer: "Port au Prince", correct: true }
    ]
  },
  {
    quote: "What Island Is Comprise Of Two Separate Countries?",
    imgUrl: "http://c8.alamy.com/comp/FB5DF8/front-street-in-philipsburg-the-capital-city-of-sint-maarten-in-the-FB5DF8.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Sint Maarten", correct: true },
      { answer: "Trinidad and Tobago", correct: false },
      { answer: "Antigua and Barbuda", correct: false },
      { answer: "Punta Cunta", correct: true }
    ]
  },
  {
    quote: "What Island Has The Most Beautiful Beaches?",
    imgUrl: "https://media.cntraveler.com/photos/59669110f9e37f55cb0bfab5/master/w_1440,c_limit/crane-beach-barbados-GettyImages-88530629.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Pink Sands Beach  Bahamas ", correct: false },
      { answer: "Bathsheba Beach, Barbados", correct: true },
      { answer: "Trunk Bay, St. John", correct: false },
      { answer: "Palm Beach, Aruba", correct: false }
    ]
  },
  {
    quote: "What's A Popular Beach Town In Haiti?",
    imgUrl: "https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/13912430_1084650581605920_7119442599267149246_n.jpg?oh=61607ac6b1ef5220246c0deab3e02154&oe=5B0BC449",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Grann Do Beach", correct: false },
      { answer: "Kokoye Beach", correct: false },
      { answer: "Jamel Beach", correct: true },
      { answer: "Gelee Beach", correct: false }
    ]
  },
  {
    quote: "The Shortest Runway On Earth?",
    imgUrl: "https://cdn.airplane-pictures.net/images/uploaded-images/2017/12/30/1006298as.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "St Kitts", correct: false },
      { answer: "Saba", correct: true },
      { answer: "Tortola", correct: false },
      { answer: "Sint Maarten", correct: false }
    ]
  },
  {
    quote: "What Island Has The Most Underwater Sculptures?",
    imgUrl: "http://www.underwatersculpture.com/wp-content/galleries/homepage/The-Last-Supper_Mexico_growth_Jason-deCaires-Taylor_Sculpture.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Grenada", correct: true },
      { answer: "Cuba", correct: false },
      { answer: "Dominica", correct: false },
      { answer: "Bahamas", correct: false }
    ]
  },
  {
    quote: "What Percent Of The Islands Are Inhabited?",
    imgUrl: "http://cdn.touropia.com/gfx/d/uninhabited-islands-around-the-world/mu_ko_ang_thong.jpg?v=1",
    imageClass: "pheight",
    answerOptions: [
      { answer: "7%", correct: false },
      { answer: "10%", correct: false },
      { answer: "5%", correct: false },
      { answer: "2%", correct: true }
    ]
  },
  {
    quote: "Which Cusine Is A Popular Favorite?",
    imgUrl: "https://assets.epicurious.com/photos/560d993df3a00aeb2f1cf4de/6:4/w_620%2Ch_413/234807.jpg",
    imageClass: "pheight",
    answerOptions: [
      { answer: "Jerk Chicken", correct: true },
      { answer: "Ox Tails", correct: false },
      { answer: "Esoveitech Fish", correct: false },
      { answer: "Curry Shrimp", correct: false }
    ]
  }
];

// only see intro question-page at first
$(document).ready(function() {
  $('#question-page').hide();
  $('.feedback').hide();
  $('#final-page').hide();
});

// leads to the question page
function startQuiz() {
  $('#begin-btn').click(function(event) {
    event.preventDefault();
    renderQuestionPage();
    renderQuoteAndAnswers();
    styleSelectedOption();
    $('#first-page').remove();
    $('.header').addClass('hide');
  });
}

// adds class "selected-option" to answer-div
function styleSelectedOption() {
  $('input:radio').change(function() {
    var selected = $(this);
    selected.closest('.answer-options').find('div.selected-option').removeClass('selected-option');
    selected.closest('.answer-div').addClass('selected-option');
  });
}

function renderQuestionPage() {
  renderQuoteAndAnswers();
  $('#question-page').show();
  $('.feedback').hide()
}

// changes the text of quotes, answer options, the question count and the point count
function renderQuoteAndAnswers() {
  $('#question-page').ready(function() {
    $('input[name="answer-option"]').prop('checked', false);
    $('div[class="quote vcenter"]').html(questionAnswerData[questionNumber].quote);
    $('span.nimg').html("<img class='" + questionAnswerData[questionNumber].imageClass + "' src='" + questionAnswerData[questionNumber].imgUrl + "' />");
    $('span[class="answer1"]').html(questionAnswerData[questionNumber].answerOptions[0].answer);
    $('span[class="answer2"]').html(questionAnswerData[questionNumber].answerOptions[1].answer);
    $('span[class="answer3"]').html(questionAnswerData[questionNumber].answerOptions[2].answer);
    $('span[class="answer4"]').html(questionAnswerData[questionNumber].answerOptions[3].answer);
    $('span[class="question-number"]').text(questionNumber + 1);
    $('span[class="user-points"]').text(points);
  });
}

// determines if the answer is correct.
function submitAnswer() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 0);
    let correctAnswer = questionAnswerData[questionNumber].answerOptions.map((el) => el.correct).indexOf(true);
    let userAnswer = $('input[name=answer-option]:checked').val();

    $('.answer-options').find('div.selected-option').removeClass('selected-option');
    if (correctAnswer == userAnswer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
      $('span[class="correct-answer"]').text(questionAnswerData[questionNumber].answerOptions[correctAnswer].answer)
    }
  });
}

// if correct, adds a point and shows the correct feedback div
function handleCorrectAnswer() {
  addAPoint();
  $('.feedback-page-correct').show();
  $('#question-page').hide();
}

function handleIncorrectAnswer() {
  $('.feedback-page-incorrect').show();
  $('#question-page').hide();
}

// increments the question number
function nextQuestionNumber() {
  questionNumber++;
}

// increments points
function addAPoint() {
  points++;
}

// takes the user to the next question or the final page
function goToNextQuestion() {
  $('.feedback').on('click', '#next-question-btn', function(event) {
    event.preventDefault();
    if (questionNumber + 1 < questionAnswerData.length) {
      nextQuestionNumber();
      renderQuestionPage();
    } else {
      renderFinalPage();
    }
  });
}

// restart the quiz (reload)
function restartQuiz() {
  $('main').on('click', '#restart-btn', function(event) {
    location.reload();
  });
}

// shows the final page
function renderFinalPage() {
  $('#final-page').ready(function() {
    $('span[class="final-score"]').text(points);
    $('#final-page').show()
    $('.feedback').hide();
    $('#question-page').hide();
  });
}

// handles all of the actions required to take the quiz
function handleQuiz() {
  startQuiz();
  submitAnswer();
  goToNextQuestion();
  restartQuiz();
}

$(handleQuiz);
