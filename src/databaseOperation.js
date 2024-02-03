import { openDatabase } from 'expo-sqlite';

const db = openDatabase('nom_de_votre_base_de_donnees.db');

export const ajouterPersonne = (nom, prenom, age, sexe, type) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT INTO personnes (nom, prenom, age, sexe, type) VALUES (?, ?, ?, ?, ?)', [nom, prenom, age, sexe, type]);
    },
    null,
    () => console.log('Personne ajoutée avec succès')
  );
};

export const recupererPersonnes = (callback) => {
  db.transaction(
    tx => {
      tx.executeSql('SELECT * FROM personnes', [], (_, { rows }) => callback(rows._array));
    },
    null,
    () => console.error('Erreur lors de la récupération des personnes')
  );
};

// Ajoutez d'autres opérations CRUD au besoin...
