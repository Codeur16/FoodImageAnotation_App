import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Food.db');

export const initDatabase = () => {
  db.transaction(tx => {
    // Table personne
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS personne (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, prenom TEXT, age INTEGER, sexe TEXT, type TEXT)',
      [],
      () => console.log('Table "personne" créée avec succès'),
      error => console.error('Erreur lors de la création de la table "personne":', error)
    );

    // Table aliment
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS aliment (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, preference INTEGER, espace INTEGER, peut_etre_divise INTEGER)',
      [],
      () => console.log('Table "aliment" créée avec succès'),
      error => console.error('Erreur lors de la création de la table "aliment":', error)
    );

    // Table boisson
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS boisson (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, espace INTEGER)',
      [],
      () => console.log('Table "boisson" créée avec succès'),
      error => console.error('Erreur lors de la création de la table "boisson":', error)
    );

    // Table assiette
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS assiette (id INTEGER PRIMARY KEY AUTOINCREMENT, capacite INTEGER, nombre_plats INTEGER, espace_occupe INTEGER)',
      [],
      () => console.log('Table "assiette" créée avec succès'),
      error => console.error('Erreur lors de la création de la table "assiette":', error)
    );
  });
};
