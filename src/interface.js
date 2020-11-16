$(document).ready(function () {
  allpeepslist(showPeepsAsHtml);

  $("#login-form").submit(function (event) {
    alert("hello loginform");
    event.preventDefault();
    fetch("https://chitter-backend-api-v2.herokuapp.com/sessions")
      .then((response) => response.json())
      .then((data) => console.log(data));
    return false;
  });

  $("#signup-form").submit(function (event) {
    alert("hello");
    event.preventDefault();
    fetch("https://chitter-backend-api-v2.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
    return false;
  });

  function allpeepslist() {
    alert("peeps");
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", function (
      data
    ) {
      let peepListHTML = showPeepsAsHtml(data);
      $("#all-peeps-list").html(peepListHTML);
    });
  }
});
