var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	imagePath: {type: String, required: true},
	title: {type: String, required: true},
	sendToMe: {type: Boolean, required: true},
	sendMeOther: {type: Boolean, required: true},
	sendOther: {type: Boolean, required: true},
	otherPhone: Number,
	otherEmail: String
});

module.exports = mongoose.model('QR', schema);