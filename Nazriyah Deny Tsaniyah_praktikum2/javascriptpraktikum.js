$.validator.addMethod(
  "letterswithbasicpunc",
   function (value, element) {
    return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
  },
  "Letters or punctuation only please"
);
$(document).ready(function () {
  $("#validate").validate({
      rules: {
        fullname: {
        required: true,
        letterswithbasicpunc: true,
      },
      uname: {
        required: true,
        minlength: 6,
        maxlength: 8,
      },
      email: {
        required: true,
        email: true,
      },
      states: {
        required: true,
        state: true,
      },
      address: {
        required: true,
      },
      zipcode: {
        required: true,
        digits: true,
        minlength: 6,
        maxlength: 6,
      },
    },

    messages: {
        fullname: {
            required: "please fill the form",
            letterswithbasicpunc: "alphabet only",
          },
          uname: {
            required: "please fill the form",
            minlength: "length min 6 character",
            maxlength: "length max 8 character",
          },
          email: {
            required: "please fill the form",
            email: "please make sure you are using a valid emails",
          },
          state: {
            required: "please fill the form",
          },
          address: {
            required: "please fill the form",
          },
          zipcode: {
            required: "please fill the form",
            digits: "number only",
            minlength: "length min 6 digit",
            maxlength: "length max 6 digit",
          },
        },
      });
    });