let btn = document.querySelector('button');
let container = document.getElementsByClassName('umwickeln')[0];

let count = -1;

btn.addEventListener('click', () => {
  count++;

  let wrapper = document.createElement('div');
  wrapper.textContent = count;

  if(count % 10 == 0) {
    wrapper.className = 'weiss';
  } else {
    wrapper.className = 'rechteck';
  }

  container.appendChild(wrapper);
});
