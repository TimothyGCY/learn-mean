const mongoose = require("mongoose");

var budgetSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: "This field is required"
  },
  amount: {
    type: String,
    required: "This field is required"
  }
});

// employeeSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

module.exports = mongoose.model("Budget", budgetSchema);
