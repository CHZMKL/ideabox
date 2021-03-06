//cached selectors
var $titleInput = $('#idea-title-input');
var $bodyInput = $('#idea-body-input');
var $searchinput = $('.search-input');

onLoad();

// event listener for save button to trigger getInput functions
$('.container').on('click', '.save-button', function(){
  generateNewIdea();
  clearInputFields();
});
// event listener for delete button to delete idea from the DOM and localStorage
$('.results-container').on('click', '.delete', function() {
  ideaToBeRemoved = $(this).parent().parent();
  var id = parseInt(ideaToBeRemoved.attr('id'));
  ideaToBeRemoved.remove();
  var allIdeas = getIdeasFromLocalStorage();
  allIdeas = allIdeas.filter(function(m){
    return m.id !== id;
  })
  localStorage.setItem('ideas', JSON.stringify(allIdeas));
});

// event listener for upvote!

$('.results-container').on('click', '.up-vote', function() {
  ideaToBeUpVoted = $(this).parent().parent();
  var quality = parseInt(ideaToBeRemoved.(quality))

})

//grab the title input
function getTitleInput() {
  var ideaTitle= $titleInput.val();
  return ideaTitle;
}
//grab the body input
function getBodyInput(){
  var ideaBody = $bodyInput.val();
  return ideaBody;
}

//an idea object has a unique ID, title, body, and a quality.
function Idea(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality || "swill";
  this.id = id || Date.now();
};
// when the page loads, please set the local storage to an empty array with the key of 'ideas' and then render them on the DOM, pretty please
function onLoad() {
  setLocalStorage();
  renderLocalStorageAsIdeas();
}
// get local storage and set it to [] if there is no local storage
function setLocalStorage () {
if (localStorage.getItem('ideas') === null) {
    localStorage.setItem ('ideas', JSON.stringify([]));
   }
};

//get ideas from localStorage
function getIdeasFromLocalStorage() {
  var ideas = localStorage.getItem('ideas');
  return JSON.parse(ideas);
}
// render the goddamn ideas in localStorage
function renderLocalStorageAsIdeas () {
  var ideas = getIdeasFromLocalStorage();
  ideas.forEach (function(idea){
  renderIdeas(idea.title, idea.body, idea.quality, idea.id);
  })

};
//function to generate a new idea and push it into ideas array
function generateNewIdea() {
var newIdea = new Idea (getTitleInput(), getBodyInput())
  ideas = getIdeasFromLocalStorage();
  ideas.push(newIdea);
  var stringifiedIdeas = JSON.stringify(ideas);
  localStorage.setItem('ideas', stringifiedIdeas);
  renderIdeas(newIdea.title, newIdea.body, newIdea.quality, newIdea.id);
};

//function to render ideas on the damn page
function renderIdeas(title, body, quality, id) {
  // var titleInput = $('#idea-title-input').val();
  // var bodyInput = $('#idea-body-input').val();
  $('.results-container').append(`<section id= ` + id +  ` class="idea-output"><h1>` + title + `<button type="image" class="delete"></button></h1> <p class="idea-body-output">`+ body + `</p> <p class="buttons"> <button type="image" class="up-vote"></button> <button type="image" class="down-vote"></button> <span class="idea-quality">quality</span>:<span class="idea-quality-rank">`+ quality +`</span></section>`);
};

//clear the input fields
function clearInputFields() {
  $titleInput.val('');
  $bodyInput.val('');
};

//search function .... ?
$(document).ready(function(){
    $('.search-input').keyup(function(){
    var filter = $(this).val(), count = 0;
    $('.idea-output').each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
    });
});





// // function to remove Idea from DOM
// function removeIdeaFromDOM() {
//   var ideaOutput =$(this).closest('.idea-output');
// };



// function removeParent() {
//   var ideaArticle = $(this).closest('.idea-card');
//   var idWeWantToDeleteFromStorage = parseInt(ideaArticle.attr("id"));
//   deleteIdeaFromStorage(idWeWantToDeleteFromStorage);
//   ideaArticle.remove();
// };



// // function to remove idea
// function removeIdeaFromLocalStorage() {
//   var ideaToBeRemoved = $(this).closest('.idea-output');
//   var idToBeRemoved = parseInt(ideaToBeRemoved.attr('id'));
//   var allIdeas = getIdeasFromLocalStorage();
//   allIdeas = allIdeas.filter(function(m){
//     return m.id !== this.id
//   })
//     localStorage.setItem('ideas', JSON.stringify(allIdeas));
//     renderLocalStorageAsIdeas();
//   };


  //   id = parseInt(this.id);
  //   this.ideas = this.ideas.filter(function(m){
  //     return m.id !== this.id;
  //     this.store;
  //   })
  // };

// //get ideas from localStorage
// function getIdeasFromLocalStorage() {
//   var ideas = local.storage.getItem('ideas');
//   return JSON.parse(ideas);
// }

// // render the goddamn ideas
//   function renderLocalStorageAsFuckingIdeas () {
//     debugger;
//     var ideas = getOrSetLocalStorage();
//     ideas.forEach (function(idea){
//       render(idea.title, idea.body, idea.quality, idea.id);
//     })
//     // return ideaBox.ideas;
//   };

//
// function generateNewIdea() {
//         var title = $titleInput.val();
//         var body = $bodyInput.val();
//         var newIdea = new Idea(title, body);
//         ideaBox.ideas.push(newIdea);
//         var stringifiedIdeas = JSON.stringify(this.ideas);
//         localStorage.setItem('ideas', stringifiedIdeas);
//         render(newIdea);
// };
//
// function getOrSetLocalStorage () {
// ideaBox.ideas = localStorage.getItem('ideas');
//
// if (ideaBox.ideas === null) {
//   localStorage.setItem ('ideas', JSON.stringify([]));
//     }
// else {
//   ideaBox.ideas = JSON.parse(ideaBox.ideas);
//     }
// return ideaBox.ideas;
// };

// function makeLocalStorageIdeas () {
//   var ideas = getOrSetLocalStorage();
//   ideas.forEach (function(idea){
//     renderIdeas(idea.title, idea.body, idea.quality, idea.id);
//   })
// };




// var ideaBox = {
//   ideas : [],
//   // add :
//   remove : function removeIdea(id) {
//     id = parseInt(id);
//     this.ideas = this.ideas.filter(function(m){
//       return m.id !== this.id;
//       this.store;
//     })
//     },
//
//
//
//   store : function generateNewIdea() {
//           var title = $titleInput.val();
//           var body = $bodyInput.val();
//           var newIdea = new Idea(title, body);
//           ideaBox.ideas.push(newIdea);
//           var stringifiedIdeas = JSON.stringify(this.ideas);
//           localStorage.setItem('ideas', stringifiedIdeas);
//           render(newIdea);
//           clearInputFields();
//           // storeIdeas();
//         }
//   // retrieve :
//   // find :
//
// };

// function generateNewIdea() {
//   var title = $titleInput.val();
//   var body = $bodyInput.val();
//   var newIdea = new Idea(title, body);
//   storeNewIdea(newIdea);
//
// }
//
//
// function storeNewIdea (newIdea) {
//   this.ideas.push(newIdea);
//   var stringifiedIdeas = JSON.stringify(this.ideas);
//   localStorage.setItem('ideas', stringifiedIdeas);
// }


// function storeNewIdea() {
//   this.ideas.push(newIdea)
//   var stringifiedIdeas = JSON.stringify(this.ideas);
//   localStorage.setItem('ideas', stringifiedIdeas)
// };


// // get local storage and set it to [] if there is no local storage
// function setLocalStorage () {
// if (localStorage.getItem('ideas') === null) {
//      localStorage.setItem ('ideas', JSON.stringify([]));
//    }
// };
//
// //get ideas from localStorage
// function getIdeasFromLocalStorage() {
//   var ideas = local.storage.getItem('ideas');
//   return JSON.parse(ideas);
// }
//
// // render the goddamn ideas
//   function renderLocalStorageAsFuckingIdeas () {
//     debugger;
//     var ideas = getOrSetLocalStorage();
//     ideas.forEach (function(idea){
//       render(idea.title, idea.body, idea.quality, idea.id);
//     })
//     // return ideaBox.ideas;
//   };



// need to re-write grabStorageAndRender with a forEach command where forEach goes through the ideas array and turns each localStorage item into an idea and then renders it on the page
// function grabStorageAndRender() {
//   ideaBox.ideas = JSON.parse(localStorage.ideas) || [];
//
//
//   var idea = new Idea(object.title, object.body, object.quality, object.id)
//
//   forEach(new Idea(ideaBox.ideas) {
//
//
//   }
//
//   ideaBox.ideas[i] = idea;
//
//   for(var i = 0; i < ideaBox.ideas.length; i++) {
//     var object = ideaBox.ideas[i];
//     render(idea)
//   }
// }
