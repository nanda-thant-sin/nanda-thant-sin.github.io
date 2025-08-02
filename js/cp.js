const codeContainer = document.getElementById('solution');
const codeBlock = document.getElementById('code-block');
const githubRawURL = codeContainer.dataset.code;

codeBlock.textContent = 'Loading code from GitHub...';

fetch(githubRawURL)
  .then(response => {
    if (!response.ok) throw new Error('Failed to load code');
    return response.text();
  })
  .then(code => {
    codeBlock.classList.remove('loading');
    codeBlock.textContent = code;
    Prism.highlightElement(codeBlock);
  })
  .catch(err => {
    codeBlock.classList.remove('loading');
    codeBlock.textContent = '⚠️ Error loading code: ' + err.message;
  });