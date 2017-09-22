describe('SwapiService', function(){
  'use restrict';

  beforeEach(module('movieDetails'));

  var suite;

  beforeEach(inject(function (SwapiService, $httpBackend) {

    suite = {
      SwapiService : SwapiService,
      httpBackend : $httpBackend
    };

    suite.httpBackend.when('GET', 'http://swapi.co/api/films/2').respond(200);

  }));

  afterEach(function () {
    suite = null;
  });

  it ('deve retornar o filme dois', function () {
    var filme2 = theEmpireStrikesBackMock();
    suite.SwapiService.getFilms(2).then(function (response) {
      expect(response).toContain(filme2);
    });
    suite.httpBackend.flush();
  });

  function theEmpireStrikesBackMock() {
    return {
      release_date: "1980-05-17",
      director: "Irvin Kershner"
    }
  }
});
