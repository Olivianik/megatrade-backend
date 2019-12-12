'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
	city: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	avatar: {
		type: String,
		default: ''
	},
	number: {
		type: String,
		default: ''
	},
	status: {
		type: String,
		default: '30'
	},
	country: {
		type: String,
		default: ''
	},
	membership: {
		type: String,
		default: 'Free Membership'
	},
	joinedAt: {
		type: Date,
		default: Date.now
	},
	lastName: {
		type: String,
		default: ''
	},
	password: {
		type: String
	},
	firstName: {
		type: String,
		default: ''
	},
	membershipAmount: {
		type: String,
		default: '0.00'
	},
	notifications: {
		alerts: {
			email: {
				type: Boolean,
				default: true
			},
			dashboard: {
				type: Boolean,
				default: true
			},
			phoneCalls: {
				type: Boolean,
				default: true
			},
			textMessages: {
				type: Boolean,
				default: true
			}
		},
		promotions: {
			email: {
				type: Boolean,
				default: true
			},
			dashboard: {
				type: Boolean,
				default: true
			},
			phoneCalls: {
				type: Boolean,
				default: true
			},
			textMessages: {
				type: Boolean,
				default: true
			}
		},
		partnerPromotions: {
			email: {
				type: Boolean,
				default: true
			},
			dashboard: {
				type: Boolean,
				default: true
			},
			phoneCalls: {
				type: Boolean,
				default: true
			},
			textMessages: {
				type: Boolean,
				default: true
			}
		}
	}
}); /* **************************************************************************
     * Copyright(C) Mega Trade Website, Inc - All Rights Reserved
     * Unauthorized copying of this file, via any medium is strictly prohibited
     * Proprietary and confidential
     * Written by Abdeen Mohamed < abdeen.mohamed@outlook.com>, September 2019
     ************************************************************************** */

exports.default = _mongoose2.default.model('users', UserSchema);