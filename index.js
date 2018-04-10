'use strict';
//-------------Question and Answer Data--------------
let questionNumber = 0;
let points = 0;
//questionNumber is manipulated by nextQuestionNumber to be equal to the current question number
const questionAnswerData = [

    {quote: "What Is The Oldest Church In Barbados?",
    answerOptions: [
      {
        answer :"St Joseph Church",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Historic_Bridgetown_and_its_Garrison-115165.jpg",
        //style: "float: l%; margin-right: 1%; margin-bottom: 0.5em;",
        correct: false,
        class: "answerimg"

      },
      {
        answer: "St James Parish Church",
        imgUrl:"http://www.barbados.org/landscap/anglican_St_james_church.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

      },
      {
        answer: "St Lucy's Parish",
        imgUrl:"http://barbados.org/landscap/st-lucy-parish-church-barbados.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {
        answer: "St Michael's Cathedral",
        imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Historic_Bridgetown_and_its_Garrison-115165.jpg/220px-Historic_Bridgetown_and_its_Garrison-115165.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false
      }
    ]
  },

    {quote: "What Waterfall Is The Most Popular Tourist Attraction In Jamaica.",
      answerOptions: [
      {
        answer: "YS Falls",
       imgUrl:"https://images.pexels.com/photos/6832/waterfall-beauty-lets-explore-lets-get-lost.jpg?auto=compress&cs=tinysrgb&h=350ss",
       //style:float: l%; margin-right: 1%; margin-bottom: 0.5em;"
       correct: false,
       class:"answerimg"


      },
      {

        answer: "Cane River Falls",
        imgUrl: "https://media-cdn.tripadvisor.com/media/photo-f/06/1b/92/c2/cane-river-falls.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {

        answer: "Blue Hole ",
        imgUrl:"https://things-to-do-in-jamaica.com/wp-content/uploads/2016/02/blue-hole-1.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {

        answer: "Dunns River Falls",
        imgUrl:"https://images.pexels.com/photos/6832/waterfall-beauty-lets-explore-lets-get-lost.jpg?auto=compress&cs=tinysrgb&h=350s",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true
      }
    ]
  },

    {quote: "What Is The Capital Of Haiti?",
      answerOptions: [
      {
      answer: "Petionville",
      imgUrl:"https://www.haitiopen.com/wp-content/uploads/2017/04/Petionville-Haiti-Hotel-Kinam-1024x672.jpg",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: false,
       class:"answerimg"


     },
     {

        answer: "San Domingo",
        imgUrl:"http://www.cataloniacaribbean.com/wp-content/uploads/2016/02/CataloniaSantoDomingo_Hotel1.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

    },
    {

        answer: "Cap Haitien",
        imgUrl:"https://www.daytonastate.edu/studyabroad/images/caphaitien.png",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
         correct: false

      },
      {
         answer: "Port au Prince",
        imgUrl:"https://wikitravel.org/upload/shared//thumb/0/01/Haiti%2C_etc_051.JPG/350px-Haiti%2C_etc_051.JPG",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

         }
       ]
      },


    {quote: " What Island Is Comprise Of Two Seperate Countries?",
      answerOptions: [
      {
        answer: "Sint Maarten",
      imgUrl:"http://c8.alamy.com/comp/FB5DF8/front-street-in-philipsburg-the-capital-city-of-sint-maarten-in-the-FB5DF8.jpg",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct:true,
       class:"answerimg"


      },
      {

        answer: "Trinidad and Tobago",
        imgUrl:"https://cdn.worldnomads.net/Media/Default/Explore/caribbean/trinidad-and-tobago-crime-port-of-spain.jpg",
          //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {

        answer: "Antigua and Barbuda",
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOIZshn7Swo9NbNsLRmb29CEZccucZawy5vlY2ThFaP7K-WqPtw",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false
      },
      {

        answer: "Punta Cunta",
        imgUrl:"https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/17895/SITours/santo-domingo-day-trip-from-punta-cana-in-punta-cana-327265.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

        }
      ]
    },


    {quote: "What Island Is Known For The Most Beautiful Beaches?",
      answerOptions: [
      {
    answer: "Pink Sands Beach  Bahamas ",
     imgUrl :"https://media.cntraveler.com/photos/59669110f9e37f55cb0bfab5/master/w_1440,c_limit/crane-beach-barbados-GettyImages-88530629.jpg",
     //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
     correct: false,
     class:"answerimg"

      },
      {

      answer: "Bathsheba Beach, Barbados",
      imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/03/8c/3b/5e/bathsheba-beach.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true
      },
      {

        answer: "Trunk Bay, St. John",
        imgUrl:"https://img.huffingtonpost.com/asset/56fc2df91e00008700705cd2.jpeg?cache=wso4gibvxt&ops=crop_0_156_1256_654,scalefit_720_noupscale",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false
      },
      {
        answer: "Palm Beach, Aruba",
        imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/05/palm-eagle-beach.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false,

          }
         ]
      },

    {quote: "What Beach Town In Haiti  ______  Is Home To Art And Film Festivals?",
      answerOptions: [
      {
        answer: "Grann Do Beach",
        imgUrl :"https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/13912430_1084650581605920_7119442599267149246_n.jpg?oh=61607ac6b1ef5220246c0deab3e02154&oe=5B0BC449",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: false,
      class: "answerimg"


      },
      {

      answer: "Kokoye Beach",
      imgUrl :"http://www.voyageplus.net/ha1147.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {

      answer: "Jamel Beach",
      imgUrl :"https://s-media-cache-ak0.pinimg.com/originals/1e/93/e8/1e93e8e47a5500bbc89432f1ab856f37.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

      },
      {

      answer: "Gelee Beach",
      imgUrl :"http://www.manmanpemba.com/wp-content/uploads/2013/08/560955_414961098561747_1796954226_n.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        }
       ]
     },

    {quote: "The Shortest Runway On Earth,?",
      answerOptions: [
      {

      answer: "St Kitts",
      imgUrl:"https://cdn.airplane-pictures.net/images/uploaded-images/2017/12/30/1006298as.jpg",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: false,
      class: "answerimg",




     },
     {

        answer: "Saba",
        imgUrl:"http://www.news965.com/rw/Pub/p8/News965/2017/07/13/Images/maxresdefault-28-696x392.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

      },
      {


        answer: "Tortola",
        imgUrl:("https://cdn.airplane-pictures.net/images/uploaded-images/2017/12/30/1006298as.jpg"),
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      },
      {

        answer: "Sint Maarten",
        imgUrl:"http://www.news965.com/rw/Pub/p8/News965/2017/07/13/Images/maxresdefault-28-696x392.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

         }
      ]
    },

    {quote: "What Island Has The Most Underwater Sculptures?",
      answerOptions: [
      {
        answer: "Grenada",
      imgUrl:"http://www.underwatersculpture.com/wp-content/galleries/homepage/The-Last-Supper_Mexico_growth_Jason-deCaires-Taylor_Sculpture.jpg",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: true,
      class: "answerimg"


        },
        {

        answer: "Cuba",
        imgUrl:"https://www.jmpeltier.com/travelogues/wp-content/uploads/Grenada-20151219-05891-1.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {

        answer: "Dominica",
        imgUrl:"http://www.underwatersculpture.com/wp-content/galleries/homepage/Silent-Evolution_Mexico_clean_Jason-deCaires-Taylor_Sculpture.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {


        answer: "Bahamas",
        imgUrl:"http://www.toxel.com/wp-content/uploads/2017/01/underwsculptures02.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

           }
        ]
      },

    {quote: "What Is  % Of The Islands That Inhabited?",
      answerOptions: [
      {
        answer: "7%",
      imgUrl:"http://cdn.touropia.com/gfx/d/uninhabited-islands-around-the-world/mu_ko_ang_thong.jpg?v=1",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: false,
      class: "answerimg"


        },
        {

        answer: "10%",
        imgUrl:"http://cdn.touropia.com/gfx/d/best-dive-spots-in-the-world/cocos_island.jpg?v=3168649a023e56286cc484bf6a8d6916",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {

        answer: "5%",
        imgUrl:"https://image.shutterstock.com/z/stock-photo-beautiful-uninhabited-island-in-thailand-281441888.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {

        answer: "2%",
        imgUrl:"http://viraltalks.com/wp-content/uploads/2017/06/1493807409_5.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: true

         }
        ]
      },

    {quote: "Which Caribbean Cusine Is Considered The People Choice ? ",
      answerOptions: [
      {
        answer: "Jerk Chicken",
      imgUrl:"https://assets.epicurious.com/photos/560d993df3a00aeb2f1cf4de/6:4/w_620%2Ch_413/234807.jpg",
      //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
      correct: true,
      class: "answerimg"



        },
        {

        answer: "Ox Tails",
        imgUrl:"http://caribbeanpot.com/wp-content/uploads/2014/08/curry-oxtails-15.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {


        answer: "Esoveitech Fish",
        imgUrl:"https://www.cottagedelight.co.uk/media/recipes/recipes/caribbean-baked-fish.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

        },
        {


        answer: "Curry Shrimp",
        imgUrl:"http://caribbeanpot.com/wp-content/uploads/2011/12/curry-shrimp-11.jpg",
        //style="float: l%; margin-right: 1%; margin-bottom: 0.5em;"
        correct: false

      }

      ]
    }
    ];


//-------------Question Page--------------
//only see intro question-page at first
$( document ).ready(function() {
    $( '#question-page' ).hide();
    $( '.feedback' ).hide();
    $( '#final-page' ).hide();
});
function startQuiz() {
  $('#begin-btn').click(function(event) {
//Begin button leads to the question page
    event.preventDefault();
    renderQuestionPage();
    renderQuoteAndAnswers();
    styleSelectedOption();
    $('#first-page').remove();
    $('.header').addClass('hide');
  });
}
function styleSelectedOption() {
//add class "selected-option" to answer-div
    $('input:radio').change(function(){
        var selected = $(this);
        selected.closest('.answer-options').find('div.selected-option').removeClass('selected-option');
        selected.closest('.answer-div').addClass('selected-option');
    });
}
function renderQuestionPage() {
    renderQuoteAndAnswers();
    $( '#question-page' ).show();
    $('.feedback').hide()
}
function renderQuoteAndAnswers() {
//changes the text of quotes, answer options, the question count and the point count
  $( '#question-page' ).ready(function() {
    let _ratio = questionAnswerData[questionNumber].answerOptions[0].ratio;
    $('input[name="answer-option"]').prop('checked', false);
    $('div[class="quote vcenter"]').html(questionAnswerData[questionNumber].quote);
    $('span[class="answer1"]').html(questionAnswerData[questionNumber].answerOptions[0].answer);
    if(_ratio)
      $('span.nimg').addClass('priorityHeight');

    $('span.nimg').html("<img src='" + questionAnswerData[questionNumber].answerOptions[0].imgUrl + "' />");
    $('span[class="answer2"]').html(questionAnswerData[questionNumber].answerOptions[1].answer);
    $('span[class="answer3"]').html(questionAnswerData[questionNumber].answerOptions[2].answer);
    $('span[class="answer4"]').html(questionAnswerData[questionNumber].answerOptions[3].answer);
    $('span[class="answer4"]').html(questionAnswerData[questionNumber].answerOptions[3].answer);
    $('span[class="question-number"]').text(questionNumber+1);
    $('span[class="user-points"]').text(points);
  });
  }

function submitAnswer() {
//when an answer is submitted, determines if the answer is correct.
    $('form').on('submit', function(event) {
     event.preventDefault();
     $('html,body').animate({scrollTop:0},0);
     let correctAnswer= questionAnswerData[questionNumber].answerOptions.map((el) => el.correct).indexOf(true);
     let userAnswer= $('input[name=answer-option]:checked').val();

     $('.answer-options').find('div.selected-option').removeClass('selected-option');
     if (correctAnswer == userAnswer) {
       handleCorrectAnswer();
     } else {
       handleIncorrectAnswer();
       $('span[class="correct-answer"]').text(questionAnswerData[questionNumber].answerOptions[correctAnswer].answer)
     }
    });
}
function handleCorrectAnswer() {
     //if correct, add a point and show the correct feedback div
     addAPoint();
     $( '.feedback-page-correct' ).show();
     $('#question-page').hide();
}
function handleIncorrectAnswer() {
     $( '.feedback-page-incorrect' ).show();
     $('#question-page').hide();
}
//-------------Next Question---------------------
function nextQuestionNumber() {
//increments the question number
  questionNumber ++;
}
function addAPoint() {
//increments points
  points ++;
}
function goToNextQuestion() {
//the next button will take the user to the next question or the final page
  $('.feedback').on('click', '#next-question-btn', function(event) {
    event.preventDefault();
  if (questionNumber+1 < questionAnswerData.length) {
      nextQuestionNumber();
      renderQuestionPage();
  }
  else {
      renderFinalPage();
  }
  });
}
//-------------Final Page--------------//
function restartQuiz() {
//restart the quiz (reload)
  $('main').on('click', '#restart-btn', function (event) {
    location.reload();
  });
}
function renderFinalPage() {
//shows the final page
  $( '#final-page' ).ready(function() {
  $('span[class="final-score"]').text(points);
  $('#final-page').show()
  $( '.feedback' ).hide();
  $('#question-page').hide();
  });
}
function handleQuiz() {
//handles all of the actions required to take the quiz
  startQuiz();
  submitAnswer();
  goToNextQuestion();
  restartQuiz();
}
$(handleQuiz);
