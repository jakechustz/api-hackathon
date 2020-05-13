  $.ajax({
  method: "GET",
  url: "https://www.potterapi.com/v1/characters",
  data: {
    key: hpAPIKey,
  }
});


$.ajax({
  method: "GET",
  url: "https://www.potterapi.com/v1/characters",
  data: {
    key: hpAPIKey,
    house: 'Hufflepuff',
  }
});


$.ajax({
  method: "GET",
  url: "https://www.potterapi.com/v1/characters",
  data: {
    key: hpAPIKey,
    house: 'Slytherin',
  }
});

$.ajax({
  method: "GET",
  url: "https://www.potterapi.com/v1/characters",
  data: {
    key: hpAPIKey,
    house: 'Gryffindor',
  }
});

$.ajax({
  method: "GET",
  url: "https://www.potterapi.com/v1/characters",
  data: {
    key: hpAPIKey,
    house: 'Ravenclaw',
  }
});
