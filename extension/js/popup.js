const SEARCH_WORD = 'Japan'

$.ajax({
  url: 'https://ejje.weblio.jp/content/' + SEARCH_WORD,
  type: 'GET'
}).done(response => {
  const html = $(response.results[0]).text()
  const result = $(html).find('.content-explanation').text()
  $('#result').text(result)
})
