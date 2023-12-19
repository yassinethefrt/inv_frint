export default {
  ra: {
    action: {
      edit: "Éditer",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      create: "Créer",
      export: "Exporter",
      import: "Importer",
      sort: "sort",
      add_filter: "filtrer par",
      undo: "annuler",
    },
    notification: {
      updated: "edité",
      error: "Une erreur s'est produite",
      success: "Succès",
      item_doesnt_exist: "The item doesn't exist.",
    },
    configurable: {
      customize: "Your Translation Here",
    },

    navigation: {
      no_results: "Aucun résultat trouvé",
      page_out_of_boundaries: "Page %{page} hors limites",
      page_out_from_end: "Impossible de naviguer après la dernière page",
      page_out_from_begin: "Impossible de naviguer avant la première page",
      page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
      page_rows_per_page: "Lignes par page :",
    },
    page: {
      dashboard: "Tableau de bord",
      list: "List des pages",
      create: "Créer",
      edit: "Edition",
      empty: "page vide",
      invite: "créer un élément",
    },

    resources: {
      users: {
        name: "Utilisateurs",
        fields: {
          fullname: "Nom complet",
          username: "Nom d'utilisateur",
          Role: "Rôle",
          isActivated: "Activé",
          created: "Créé le",
        },
      },
      personnels: {
        name: "Personnels",
        fields: {
          nom: "Nom de famille",
          prenom: "Prénom",
          cin: "Numéro de carte d'identité",
          dateNaissance: "Date de naissance",
          matricule: "Matricule",
          grade: "Grade",
          mission: "Mission",
          dateAffectation: "Date d'affectation",
          Etablissement: "Etablissement",
          Centre: "Centre",
        },
      },
      etablissements: {
        name: "Établissements",
        fields: {
          etablissements: "Les établissements",
          ville: "Region",
        },
      },
      centres: {
        name: "Centres",
        fields: {
          centre: "Centre",
          etablissements: "Les établissements",
          ville: "Region",
        },
      },
      materiels: {
        name: "Matériels",
        fields: {
          materiel: "Matériel",
          categorie_materiel: "Catégorie du matériel",
        },
      },
      equipements: {
        name: "Équipements",
        fields: {
          equipement: "Équipement",
          desc: "Description",
          materiel: "Matériel",
          category: "Catégorie",
          etablissements: "Les établissements",
          centre: "Centre",
        },
      },
      besoins: {
        name: "besoins",
        fields: {
          besoins: "besoins",
          desc: "Description",
          materiel: "Matériel",
          gm: "Genre du materiel",
          centre: "Centre",
          etat: "etat",
          created: "date de creation",
        },
      },
    },
  },
};
