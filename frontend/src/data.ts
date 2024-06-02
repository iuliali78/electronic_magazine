export const tableDataOne = [
  {
    id: 1,
    name: "attendance",
    columns: [
      {
        id: 1,
        field: "fio",
        headerName: "ФИО",
        type: "string",
      },
      {
        id: 2,
        field: "test",
        headerName: "Тест",
        type: "string",
      },
    ],

    rows: [
      {
        id: 1,
        fio: "Александров Артём Евгеньевич",
        test: "123",
      },
      {
        id: 2,
        fio: "Александров Артём Евгеньевич2",
        test: "Тестируем",
      },
    ],
  },
  {
    id: 2,
    name: "generalStatistics",
    columns: [
      {
        id: 0,
        field: "general",
        headerName: "Статистика",
        type: "string",
      },
    ],

    rows: [
      {
        id: 0,
        general: "значение колонки",
      },
    ],
  },
  {
    id: 3,
    name: "grade",
    columns: [
      {
        id: 0,
        field: "grade",
        headerName: "Успеваемость",
        type: "string",
      },
    ],

    rows: [
      {
        id: 0,
        grade: "Значение успеваемости",
      },
    ],
  },
];

// const a = [
//   {
//     "columns": [
//       {
//         "id": "0",
//         "field": "numberRecord",
//         "headerName": "№",
//         "type": "string"
//       },
//       {
//         "id": "1",
//         "field": "FIO",
//         "headerName": "ФИО",
//         "type": "string"
//       },
//       {
//         "id": "2",
//         "field": "dateNumberOne",
//         "headerName": "Дата",
//         "type": "string"
//       },
//       {
//         "id": "3",
//         "field": "dateNumberTwo",
//         "headerName": "Дата",
//         "type": "string"
//       },
//       {
//         "id": "4",
//         "field": "dateNumberThree",
//         "headerName": "Дата",
//         "type": "string"
//       },
//       {
//         "id": "5",
//         "field": "dateNumberFour",
//         "headerName": "Дата",
//         "type": "string"
//       }
//     ],
//     "rows": [
//       {
//         "id": "0",
//         "numberRecord": "1",
//         "FIO": "Александров Артём Евгеньевич",
//         "dateNumberOne": "П",
//         "dateNumberTwo": "П",
//         "dateNumberThree": "П",
//         "dateNumberFour": "П"
//       }
//     ],
//     "name": "attendance",
//     "id": "1"
//   },
//   {
//     "columns": [],
//     "rows": [],
//     "name": "name 2",
//     "id": "2"
//   },
//   {
//     "columns": [],
//     "rows": [],
//     "name": "name 3",
//     "id": "3"
//   }
// ]