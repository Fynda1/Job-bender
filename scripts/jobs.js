var jsonData = [{"title":"Program manager) at Atlanta","url":"https://www.indeed.com/q-indeed-jobs.html?vjk=c1dfe09a40403dc0","company":"","first_seen_at":"2025-01-10 06:48:45 EST"},{"title":"Sr. Program Manager","url":"https://jobs.assurant.com/en/jobs/?search=project+manager&location=Atlanta","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Program Manager","url":"https://jobs.assurant.com/en/jobs/?search=project+manager&location=Atlanta","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Sr. Project Manager","url":"https://jobs.assurant.com/en/jobs/?search=project+manager&location=Atlanta","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Project Manager","url":"https://jobs.assurant.com/en/jobs/?search=project+manager&location=Atlanta","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Technical Data Project Manager","url":"https://jobs.assurant.com/en/jobs/?search=project+manager&location=Atlanta","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"},{"title":"Project Manager","url":"https://careers.northhighland.com/jobs/","company":"northhighland","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Sr. Project Manager","url":"https://careers.northhighland.com/jobs/","company":"northhighland","first_seen_at":"2025-01-10 06 06:48:45 EST"},
{"title":"Technical Data Project Manager","url":"https://careers.northhighland.com/jobs/","company":"northhighland","first_seen_at":"2025-01-10 06 06:48:45 EST"},{"title":"Project Manager jobs","url":"https://google.com","company":"Assurant","first_seen_at":"2025-01-10 06 06:48:45 EST"}];

function search() {
  var searchInput = document.getElementById('search-input').value.toLowerCase();
  var keywords = searchInput.split(' ');
  var resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  var filteredData = jsonData.filter(function(item) {
    var match = false;
    for (var i = 0; i < keywords.length; i++) {
      if (item.title.toLowerCase().includes(keywords[i]) || item.company.toLowerCase().includes(keywords[i])) {
        match = true;
        break;
      }
    }
    return match;
  });

  var sortedData = filteredData.sort(function(a, b) {
    return new Date(b.first_seen_at) - new Date(a.first_seen_at);
  });

  sortedData.forEach(function(item) {
    var resultElement = document.createElement('div');
    var link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.title;
    link.target = '_blank';
    resultElement.appendChild(link);
    resultElement.innerHTML += ' - ' + item.company + ' (First Seen: ' + item.first_seen_at + ')';
    resultsContainer.appendChild(resultElement);
  });
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    search();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keyup', search);

  document.getElementById("search-button").addEventListener("click", search);
});

