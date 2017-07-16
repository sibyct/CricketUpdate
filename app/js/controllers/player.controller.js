/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('PlayerController',PlayerController);

    function PlayerController($scope, $state, $stateParams) {
        //vars
        /* jshint validthis: true */
        $scope.playerId =  $stateParams.id;
        $scope.playerStats = {
  "creditsLeft": 245,
  "provider": {
    "source": "Various",
    "url": "https://cricapi.com/",
    "pubDate": "2017-06-04T09:32:29.750Z"
  },
  "ttl": 7,
  "v": "1",
  "cache": true,
  "imageURL": "http://cricapi.com/playerpic/35320.jpg",
  "country": "India",
  "profile": "\n\nSachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.  \n\n",
  "bowlingStyle": "Right-arm offbreak, Legbreak googly",
  "battingStyle": "Right-hand bat",
  "playingRole": "Top-order batsman",
  "majorTeams": "India,Asia XI,Mumbai,Mumbai Indians,Yorkshire",
  "currentAge": "44 years 41 days",
  "born": "April 24, 1973, Bombay (now Mumbai), Maharashtra",
  "fullName": "Sachin Ramesh Tendulkar",
  "name": "Sachin Tendulkar",
  "data": {
    "batting": {
      "twenty20": {
        "50": "16",
        "100": "1",
        "St": "0",
        "Ct": "28",
        "6s": "38",
        "4s": "359",
        "SR": "121.08",
        "BF": "2310",
        "Ave": "32.90",
        "HS": "100*",
        "Runs": "2797",
        "NO": "11",
        "Inns": "96",
        "Mat": "96"
      },
      "listA": {
        "50": "114",
        "100": "60",
        "St": "0",
        "Ct": "175",
        "6s": "",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "45.54",
        "HS": "200*",
        "Runs": "21999",
        "NO": "55",
        "Inns": "538",
        "Mat": "551"
      },
      "firstClass": {
        "50": "116",
        "100": "81",
        "St": "0",
        "Ct": "186",
        "6s": "",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "57.84",
        "HS": "248*",
        "Runs": "25396",
        "NO": "51",
        "Inns": "490",
        "Mat": "310"
      },
      "T20Is": {
        "50": "0",
        "100": "0",
        "St": "0",
        "Ct": "1",
        "6s": "0",
        "4s": "2",
        "SR": "83.33",
        "BF": "12",
        "Ave": "10.00",
        "HS": "10",
        "Runs": "10",
        "NO": "0",
        "Inns": "1",
        "Mat": "1"
      },
      "ODIs": {
        "50": "96",
        "100": "49",
        "St": "0",
        "Ct": "140",
        "6s": "195",
        "4s": "2016",
        "SR": "86.23",
        "BF": "21367",
        "Ave": "44.83",
        "HS": "200*",
        "Runs": "18426",
        "NO": "41",
        "Inns": "452",
        "Mat": "463"
      },
      "tests": {
        "50": "68",
        "100": "51",
        "St": "0",
        "Ct": "115",
        "6s": "69",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "53.78",
        "HS": "248*",
        "Runs": "15921",
        "NO": "33",
        "Inns": "329",
        "Mat": "200"
      }
    },
    "bowling": {
      "twenty20": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "46.5",
        "Econ": "7.93",
        "Ave": "61.50",
        "BBM": "1/12",
        "BBI": "1/12",
        "Wkts": "2",
        "Runs": "123",
        "Balls": "93",
        "Inns": "8",
        "Mat": "96"
      },
      "listA": {
        "10": "0",
        "5w": "2",
        "4w": "4",
        "SR": "50.8",
        "Econ": "4.97",
        "Ave": "42.17",
        "BBM": "5/32",
        "BBI": "5/32",
        "Wkts": "201",
        "Runs": "8478",
        "Balls": "10230",
        "Inns": "",
        "Mat": "551"
      },
      "firstClass": {
        "10": "0",
        "5w": "0",
        "4w": "",
        "SR": "107.1",
        "Econ": "3.45",
        "Ave": "61.74",
        "BBM": "",
        "BBI": "3/10",
        "Wkts": "71",
        "Runs": "4384",
        "Balls": "7605",
        "Inns": "",
        "Mat": "310"
      },
      "T20Is": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "15.0",
        "Econ": "4.80",
        "Ave": "12.00",
        "BBM": "1/12",
        "BBI": "1/12",
        "Wkts": "1",
        "Runs": "12",
        "Balls": "15",
        "Inns": "1",
        "Mat": "1"
      },
      "ODIs": {
        "10": "0",
        "5w": "2",
        "4w": "4",
        "SR": "52.2",
        "Econ": "5.10",
        "Ave": "44.48",
        "BBM": "5/32",
        "BBI": "5/32",
        "Wkts": "154",
        "Runs": "6850",
        "Balls": "8054",
        "Inns": "270",
        "Mat": "463"
      },
      "tests": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "92.1",
        "Econ": "3.52",
        "Ave": "54.17",
        "BBM": "3/14",
        "BBI": "3/10",
        "Wkts": "46",
        "Runs": "2492",
        "Balls": "4240",
        "Inns": "145",
        "Mat": "200"
      }
    }
  }
};

    }
})();