var fizz = document.getElementById('first-section');



for(var i = 1; i <= 100; i++){
  if(i % 15 === 0){
      console.log('fizzbuzz');
      var newParagraph = document.createElement('p');
      newParagraph.innerHTML = '<span>fizzbuzz</span>'
      newParagraph.innerText = 'fizzbuzz';
      newParagraph.classList.add('fizzbuzz');
      fizz.appendChild(newParagraph);
  } else if (i % 5 === 0){
      console.log('buzz');
      var newParagraph = document.createElement('p');
      newParagraph.innerHTML = '<span>buzz</span>'
      newParagraph.innerText = 'buzz';
      newParagraph.classList.add('buzz');
      fizz.appendChild(newParagraph);
  } else if (i % 3 === 0){
      console.log('fizz');
      var newParagraph = document.createElement('p');
      newParagraph.innerHTML = '<span>fizz</span>'
      newParagraph.innerText = 'fizz';
      newParagraph.classList.add('fizz');
      fizz.appendChild(newParagraph);
  } else {
   console.log(i);
   var newParagraph = document.createElement('p');
      newParagraph.innerHTML = '<span></span>';
      newParagraph.innerText = i;
      newParagraph.classList.add('number');
      fizz.appendChild(newParagraph);
  }
}


