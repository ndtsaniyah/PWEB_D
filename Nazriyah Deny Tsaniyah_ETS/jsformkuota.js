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
        nama: {
          required: true,
          letterswithbasicpunc: true,
          minlength: 2,
        },
        NRP: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10,
        },
        jurusan: {
          required: true,
          jurusan: true,
        },
        nohp: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 13,
        },
      },
      messages: {
        nama: {
          required: "isi kolom berikut",
          letterswithbasicpunc: "alphabet only",
          minlength: "isian tidak boleh hanya 1 karakter",
        },
        nrp: {
          required: "isi kolom berikut",
          digits: "hanya berisi nomor",
          minlength: "isian hanya 10 karakter",
          maxlength: "isian hanya 10 karakter",
        },
        jurusan: {
          required: "pilih kolom berikut",
        },
        nohp: {
          required: "isi kolom berikut",
          digits: "hanya berisi nomor",
          minlength: "isian hanya 10-13 karakter",
          maxlength: "isian hanya 10-13 karakter",
        },
      },
    });
  });
  