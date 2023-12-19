export default {
  ra: {
    action: {
      edit: "تحرير",
      save: "حفظ",
      cancel: "إلغاء",
      delete: "حذف",
      create: "اضف",
      export: "صدر",
      import: "استورد",
      sort: "جرد",
      add_filter: "ترتيب حسب",
      undo: "الغاء ",
    },
    navigation: {
      no_results: "لا توجد نتائج",
      page_out_of_boundaries: "الصفحة %{page} خارج الحدود",
      page_out_from_end: "تعذر التنقل بعد الصفحة الأخيرة",
      page_out_from_begin: "تعذر التنقل قبل الصفحة الأولى",
      page_range_info: "%{offsetBegin}-%{offsetEnd} من %{total}",
      page_rows_per_page: "الصفوف في الصفحة:",
    },
    notification: {
      updated: "محدث",
      error: "حدث خطأ",
      success: "ناجح",
      item_doesnt_exist: "The item doesn't exist.",
    },
    configurable: {
      customize: "Your Translation Here",
    },
    page: {
      dashboard: "لوحة القيادة",
      title: "عنوان",
      list: "قائمة",
      create: "إنشاء",
      edit: "صحح",
      empty: "صفحة فارغة",
      invite: "عنصر جديد",
    },

    resources: {
      users: {
        name: "المستخدمين",
        fields: {
          fullname: "الاسم الكامل",
          username: "اسم المستخدم",
          Role: "دور",
          isActivated: "ضصينتىي",
          created: "أنشئ في",
        },
      },
      personnels: {
        name: "طاقم عمل",
        fields: {
          nom: "اسم العائلي",
          prenom: "الاسم الأول",
          cin: "رقم البطاقة الوطنية",
          dateNaissance: "تاريخ الولادة",
          matricule: "رقم التسجيل",
          grade: "رتبة",
          mission: "مهمة",
          dateAffectation: "تاريخ الاحالة",
          Etablissement: "مؤسسة",
          Centre: "مركز",
        },
      },
      etablissements: {
        name: "المؤسسات",
        fields: {
          etablissements: "المؤسسات",
          ville: "الجهة",
        },
      },
      centres: {
        name: "مراكز",
        fields: {
          centre: "مركز",
          etablissements: "المؤسسات",
          ville: "الجهة",
        },
      },
      materiels: {
        name: "مواد",
        fields: {
          materiel: "مواد",
          categorie_materiel: "فئة المواد",
        },
      },
      equipements: {
        name: "معدات",
        fields: {
          equipement: "مواد",
          desc: "تفصيل",
          materiel: "مواد",
          category: "فئة",
          etablissements: "المؤسسات",
          centre: "مركز",
        },
      },
      besoins: {
        name: "الاحتياجات",
        fields: {
          besoins: "الاحتياجات",
          desc: "وصف",
          materiel: "مواد",
          gm: "فئة المواد",
          centre: "مركز",
          etat: "الحالة",
          created: "أنشئ في",
        },
      },
    },
  },
};
