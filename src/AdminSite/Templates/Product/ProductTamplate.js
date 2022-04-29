import { IMG, SELECT, STRING } from "../../Components/Modal/InputTypes";

export const ProductTamplate = {
  text: "Mahsulotlar",
  path: "/admin/product",
  isOpenModal: false,
  modal: {
    width: 800,
  },
  form: [
    {
      grid: {
        columns: "repeat(9, 1fr)",
        rows: ".2fr .2fr",
      },
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "Name",
          gridColumn: "1 / 4",
        },
        {
          name: "narxi",
          type: STRING,
          placeholder: "Narxi",
          gridColumn: "4 / 7",
        },
        {
          name: "Kateqoriya",
          type: SELECT,
          placeholder: "Kateqoriya",
          gridColumn: "7 / 10",
        },
        {
          name: "chegirma",
          type: STRING,
          placeholder: "Chegirma",
          gridColumn: "1 / 4",
          gridRow: "2 / 2",
        },

        {
          name: "malumoti",
          type: STRING,
          placeholder: "Qo'shimcha malumot",
          gridColumn: "4 / 7",
          gridRow: "2 / 2",
        },
        {
          name: "rasm",
          type: IMG,
          placeholder: "Rasm",
          gridColumn: "7 / 10",
          gridRow: "2 / 2",
        },
        {
          name: "izoh",
          type: STRING,
          placeholder: "Izoh",
          gridColumn: "1 / 10",
          gridRow: "3 / 3",
        },
      ],
    },
  ],
  columns: [
    {
      text: "№",
      width: "10px",
    },
    {
      text: "Name",
      width: "120px",
    },
    {
      text: "Narxi",
      width: "80px",
    },
    {
      text: "Kateqoriya",
      width: "120px",
    },
    {
      text: "Chegirma",
      width: "120px",
    },
    {
      text: "Izoh",
      width: "120px",
    },
    {
      text: "Qo'shimcha malumotlar",
      width: "200px",
    },
    {
      text: "Rasm",
    },
    {
      text: "Action",
      width: '100px'
    },
  ],
};
