"use strict";
class PeepList {
  showPeepsAsHtml(peeps) {
    let list = peeps
      .map(
        (peep) =>
          `<li><div id='${peep.id}'><p>${peep.body}</p><br><i>${peep.user.handle}</i></div></li>`
      )
      .join("");
    return "<ul>" + list + "</ul>";
  }
}
