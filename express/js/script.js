var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 4000);
}

function myFunction() {
  var x = document.getElementById('navDemo');
  if (x.className.indexOf('w3-show') === -1) {
    x.className += ' w3-show';
  } else {
    x.className = x.className.replace(' w3-show', '');
  }
}

var modal = document.getElementById('ticketModal');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.querySelectorAll('.ticket-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    button.textContent = 'Selected';
    button.style.background = '#4caf50';
  });
});

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you! Your message has been sent.');
});

window.addEventListener('scroll', function () {
  document.querySelectorAll('.w3-third').forEach(function (card, index) {
    if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
      card.style.transition = 'all 0.5s ease ' + index * 0.2 + 's';
    }
  });
});
