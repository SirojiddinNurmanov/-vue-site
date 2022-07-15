"use strict";
exports.id = 8611;
exports.ids = [8611];
exports.modules = {

/***/ 3609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const InputGroup = ({
  label,
  handleChange,
  handleBlur,
  values,
  errors,
  placeholder,
  id,
  type,
  name
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
      htmlFor: id,
      children: [label, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "required",
        children: "*"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
      id: id,
      type: type ? type : "text",
      name: name,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values,
      placeholder: placeholder,
      className: "mb-0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      id: "val-username1-error",
      className: "invalid-feedback animated fadeInUp mb-3",
      style: {
        display: "block"
      },
      children: errors && errors
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

/***/ }),

/***/ 7885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dm": () => (/* binding */ loginSchema),
/* harmony export */   "$h": () => (/* binding */ checkoutSchema),
/* harmony export */   "ll": () => (/* binding */ couponSchema)
/* harmony export */ });
/* unused harmony export registerSchema */
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const username = yup__WEBPACK_IMPORTED_MODULE_0__.string().min(3, "Your username must consist of at least 3 characters ").max(50, "Your username must consist of less than 50 characters ").required("Please enter a username"),
      password = yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, "Your password must be at least 6 characters long").max(50, "Your password must be less than characters long").required("Please provide a password"),
      password3 = yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, "Your password must be at least 6 characters long").max(50, "Your password must be less than characters long").required("Please provide a password"),
      email = yup__WEBPACK_IMPORTED_MODULE_0__.string().email().required("Please provide your email"),
      tandc = yup__WEBPACK_IMPORTED_MODULE_0__.boolean().oneOf([true], "You must accept the terms and conditions"),
      country = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your country name"),
      fName = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your first name"),
      // lName = Yup.string().required("Please provide your last name"),
cName = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your company name"),
      address = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your address"),
      city = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your city"),
      state = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your state"),
      zip = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your zip"),
      phone = yup__WEBPACK_IMPORTED_MODULE_0__.number().required("Please provide your phone"),
      defferentAddress = yup__WEBPACK_IMPORTED_MODULE_0__.boolean(),
      country2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your country name")
}),
      fName2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your frist name")
}),
      // lName2 = Yup.string().when("defferentAddress", {
//   is: true,
//   then: Yup.string().required("Please provide your last name"),
// }),
cName2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your company name")
}),
      address2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your address")
}),
      city2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your city")
}),
      state2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your seate name")
}),
      zip2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your zip code")
}),
      phone2 = yup__WEBPACK_IMPORTED_MODULE_0__.number().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.number().required("Please provide your number")
}),
      email2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().email().when("defferentAddress", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().email().required("Please provide your email")
}),
      createAccount = yup__WEBPACK_IMPORTED_MODULE_0__.boolean(),
      password2 = yup__WEBPACK_IMPORTED_MODULE_0__.string().when("createAccount", {
  is: true,
  then: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(5, "Your password must be at least 5 characters long").max(50, "Your password must be at least 5 characters long").required("Please provide a password")
}),
      coupon = yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Please provide your coupon code");
const loginSchema = {
  schema: yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    email,
    password,
    tandc
  }),
  initialValue: {
    email: "",
    password: "",
    tandc: false
  }
};
const registerSchema = {
  schema: yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    username,
    password,
    email
  }),
  initialValue: {
    username: "",
    password: "",
    email: ""
  }
};
const checkoutSchema = {
  schema: yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    country,
    fName,
    // lName,
    address,
    state,
    country,
    cName,
    email,
    city,
    zip,
    phone,
    country2,
    fName2,
    // lName2,
    address2,
    state2,
    country2,
    cName2,
    city2,
    zip2,
    phone2,
    email2,
    defferentAddress,
    createAccount,
    password2
  }),
  initialValue: {
    country: "",
    fName: "",
    lName: "",
    address: "",
    state: "",
    country: "",
    cName: "",
    city: "",
    zip: "",
    phone: "",
    country2: "",
    fName2: "",
    lName2: "",
    address2: "",
    state2: "",
    country2: "",
    cName2: "",
    city2: "",
    zip2: "",
    phone2: "",
    email: "",
    email2: "",
    defferentAddress: false,
    createAccount: false
  }
};
const couponSchema = {
  schema: yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    coupon
  }),
  initialValue: {
    coupon: ""
  }
};

/***/ })

};
;