let count = 1

const heading = document.getElementById('heading')
heading.innerText = count

document.getElementById('add').addEventListener('click', () => {
  /*console.log('add button clicked...')*/
  count = count + 1
  heading.innerText = count
})
