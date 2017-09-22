angular.module('movieDetails', [])
  .factory('SwapiService', ['$resource',
    function ($resource) {
      var resource = $resource('http://swapi.co/api/', {}, {
        'getPessoas': {
          method: 'GET',
          url: 'http://swapi.co/api/people/'
        },
        'getFilms': {
          method: 'GET',
          url: 'http://swapi.co/api/films/:idFilme'
        },
        'getSpecies': {
          method: 'GET',
          url: 'http://swapi.co/api/species/:id'
        },
        'getPlanets': {
          method: 'GET',
          url: 'http://swapi.co/api/planets/:id'
        },
        'getStarships': {
          method: 'GET',
          url: 'http://swapi.co/api/starships/:id'
        },
        'getVehicles': {
          method: 'GET',
          url: 'http://swapi.co/api/vehicles/:id'
        }
      }),
      service = {
        getPessoas: function (pessoa) {
          return resource.getPessoas(pessoa);
        },
        getFilms: function (filme) {
          return resource.getFilms({idFilme: filme});
        },
        getSpecies: function (species) {
          return resource.getSpecies(species);
        },
        getPlanets: function (planets) {
          return resource.getPlanets(planets);
        }
      };
      return service;
    }
  ]);
