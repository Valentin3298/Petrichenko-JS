"use strict";

const number0Films = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMuvieDB = {
  //DB Data Base база данных
  count: number0Films,
  muvies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных филбмов", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов", ""),
  d = prompt("На сколько оцените его?", "");

personalMuvieDB.muvies[a] = b;
personalMuvieDB.muvies[c] = d;

console.log(personalMuvieDB);
