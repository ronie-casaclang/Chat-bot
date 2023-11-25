
function getResponse(userInput) {
    let response = '';
    if (userInput.includes('hi') || userInput.includes('hello')) {
      response = "Hello Ronie!";
    } else if (userInput.includes('good morning')) {
      response = "Good morning! Have a great day!";
    } else if (userInput.includes('juday')) {
      response = "Of course! she's your great love right!";
    } else if (userInput.includes('I love her')) {
      response = "Ok! I know she loves you too!";
    } else if (userInput.includes('right')) {
      response = "I got it buddy! I know you well na.";
    } else if (userInput.includes('good evening')) {
      response = "Good evening too! how can I help you?";
    } else if (userInput.includes('information')) {
      response = "What specific information are you looking for?";
    } else if (userInput.includes('help')) {
      response = "How can I assist you today?";
    } else if (userInput.includes('famous people') || userInput.includes('celebrities')) {
      response = "Who would you like to know about? Please specify a famous person.";
    } else if (userInput.includes('elon musk')) {
      response = "Elon Musk is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.</p>";
    } else if (userInput.includes('steve jobs')) {
      response = "Steve Jobs was an entrepreneur and business magnate. He was the co-founder, chairman, and CEO of Apple Inc. Jobs is widely recognized as a pioneer of the personal computer revolution.</p>";
    } else if (userInput.includes('bill gates')) {
      response = "Bill Gates is a business magnate, software developer, and philanthropist. He is best known as the co-founder of Microsoft Corporation.</p>";
    } else if (userInput.includes('draculla2')) {
      response = "He is an amazing human and he coded me as sasta version</p>";
    }
    else if (userInput.includes('how are you?')) {
      response = "yeah i am fine what about you?.";
    }
    return response;
}

function receiveMessage(message) {

    //create new chat-box element
    var chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');

    //create user image element
    var userImage = document.createElement('img');
    userImage.src = 'Images/icon.png';
    userImage.alt = 'Juan AI';
    userImage.classList.add('user-image');

    //create chat-mesage element
    var chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');

    //create h2 element or username
    var h3 = document.createElement('h3');
    h3.textContent = 'Juana AI';

    //create p element or message content
    var p1 = document.createElement('p');
    p1.textContent = message;
    
    //create p element or teim and date
    var p2 = document.createElement('p');
    p2.textContent = getDateTime();
    p2.classList.add('chat-time-and-date');

    //append elements to chat-message
    chatMessage.appendChild(h3);
    chatMessage.appendChild(p1);
    chatMessage.appendChild(p2);

    //append elements to chat-box
    chatBox.appendChild(userImage);
    chatBox.appendChild(chatMessage);

    //append chat-box to messages div
    document.getElementById('chat-box').appendChild(chatBox);

    //scroll bottom
    scrollToBottom();
}

function sendMessage(){
    //get user input
    var userMessage = document.getElementById('user-input').value.trim();
    var userInput = document.getElementById('user-input').value.toLowerCase().trim();

    //create new chat-box element
    var chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');

    //create user image element
    var userImage = document.createElement('img');
    userImage.src = 'Images/ronie.jpg';
    userImage.alt = 'User image';
    userImage.classList.add('user-image');

    //create chat-mesage element
    var chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');

    //create h2 element or username
    var h3 = document.createElement('h3');
    h3.textContent = 'YOU';

    //create p element or message content
    var p1 = document.createElement('p');
    p1.textContent = userMessage;
    
    //create p element or teim and date
    var p2 = document.createElement('p');
    p2.textContent = getDateTime();
    p2.classList.add('chat-time-and-date');

    //append elements to chat-message
    chatMessage.appendChild(h3);
    chatMessage.appendChild(p1);
    chatMessage.appendChild(p2);

    //append elements to chat-box
    chatBox.appendChild(userImage);
    chatBox.appendChild(chatMessage);

    //append chat-box to messages div
    document.getElementById('chat-box').appendChild(chatBox);

    //clear input field
    document.getElementById('user-input').value = '';

    //scroll bottom
    scrollToBottom();
  
    // Respond to specific keywords
    setTimeout(function() {
        let response = getResponse(userInput);
        if (response === '') {
          response = "I'm not sure what you mean. Try something else!";
        }
        receiveMessage(response);
      }, 2000);
}

function getDateTime(){
    var now = new Date();
    //time
    var hours = now.getHours();
    var mins = now.getMinutes();
    var type = hours >= 12? 'PM' : 'AM';
    var time = (hours>=12|| hours==0? (hours%12==0? 12 : hours%12) : hours)  + ":" + ((mins<10? '0' : '') +mins) + ' ' + type;

    //date
    var year = now.getFullYear();
    var month = (now.getMonth() +1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var date = year + '/' +month+ '/' +day;

    //return
    var formattedTime = time + ' • ' + date;
    return formattedTime;
}

function scrollToBottom(){
    var chatBox = document.getElementById('chat-box');
    var lastMess = chatBox.lastElementChild;

    if (lastMess) lastMess.scrollIntoView({behavior: 'smooth', block: 'end'});
}
  
function btnClick(){
    if (document.getElementById('user-input').value.toLowerCase().trim() === ''){}
    else sendMessage();
}

