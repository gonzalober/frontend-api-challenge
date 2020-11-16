describe("PeepList", function () {
  beforeEach(function () {
    peep = new PeepList();
  });

  it("show the peeps as html", function () {
    let peepTest = [
      {
        id: "0",
        body: "test peep",
        user: {
          id: 1,
          handle: "user",
        },
      },
    ];
    console.log(peepTest);
    expect(peep.showPeepsAsHtml(peepTest)).toEqual(
      "<ul><li><div id='0'><p>test peep</p><br><i>user</i></div></li></ul>"
    );
  });
});
